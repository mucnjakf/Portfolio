import { useEffect, useRef, type RefObject } from "react";

type Rgb = [number, number, number];

type DotFieldConfig = {
  spacing: number;
  dotSize: number;
  dotSizeActive: number;
  alpha: number;
  alphaActive: number;
  radius: number;
  push: number;
  glow: number;
  wave: number;
  parallax: number;
  mute: number;
  tint: number;
};

const Variants: Record<"hero" | "page", DotFieldConfig> = {
  hero: {
    spacing: 24,
    dotSize: 1.1,
    dotSizeActive: 3.2,
    alpha: 0.26,
    alphaActive: 0.95,
    radius: 190,
    push: 16,
    glow: 0.03,
    wave: 0.5,
    parallax: 0,
    mute: 0.18,
    tint: 0.2,
  },
  page: {
    spacing: 28,
    dotSize: 0.9,
    dotSizeActive: 1.7,
    alpha: 0.15,
    alphaActive: 0.45,
    radius: 150,
    push: 5,
    glow: 0.02,
    wave: 0.25,
    parallax: 0.3,
    mute: 1,
    tint: 0.2,
  },
};

const Palette: Record<"light" | "dark", { dot: Rgb; accent: Rgb }> = {
  light: { dot: [113, 113, 122], accent: [0, 122, 255] },
  dark: { dot: [161, 161, 170], accent: [6, 138, 255] },
};

const MuteFeather = 90;

function smoothstep(edge0: number, edge1: number, x: number) {
  const t = Math.min(Math.max((x - edge0) / (edge1 - edge0), 0), 1);
  return t * t * (3 - 2 * t);
}

/*
 * Interactive dot grid rendered on a canvas. Dots near the pointer swell,
 * shift towards the accent colour and get pushed away. Elements marked with
 * `data-bg-mute` inside the canvas' parent damp the effect behind them.
 */
function DotField({
  variant,
  className = "",
  occluderRef,
}: {
  variant: "hero" | "page";
  className?: string;
  // Skip drawing while this element fully covers the viewport
  occluderRef?: RefObject<HTMLElement | null>;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const config = Variants[variant];
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = 0;
    let height = 0;
    let frame = 0;
    let visible = true;

    // Pointer target and eased position, in viewport coordinates
    const pointer = { x: -9999, y: -9999, active: false };
    const eased = { x: -9999, y: -9999, strength: 0 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const muteRects = () => {
      if (config.mute >= 1 || !canvas.parentElement) return [];
      return Array.from(
        canvas.parentElement.querySelectorAll<HTMLElement>("[data-bg-mute]"),
      ).map((el) => el.getBoundingClientRect());
    };

    const muteAt = (x: number, y: number, rects: DOMRect[]) => {
      let factor = 1;
      for (const r of rects) {
        const dx = Math.max(r.left - x, 0, x - r.right);
        const dy = Math.max(r.top - y, 0, y - r.bottom);
        const distance = Math.hypot(dx, dy);
        factor = Math.min(
          factor,
          config.mute +
            (1 - config.mute) * smoothstep(0, MuteFeather, distance),
        );
      }
      return factor;
    };

    const draw = (time: number) => {
      const occluder = occluderRef?.current?.getBoundingClientRect();
      if (occluder && occluder.top <= 0 && occluder.bottom >= height) return;

      const rect = canvas.getBoundingClientRect();
      const isDark = document.documentElement.classList.contains("dark");
      const { dot, accent } = Palette[isDark ? "dark" : "light"];

      const ease = reducedMotion ? 1 : 0.12;
      if (pointer.active) {
        if (eased.strength === 0) {
          eased.x = pointer.x;
          eased.y = pointer.y;
        }
        eased.x += (pointer.x - eased.x) * ease;
        eased.y += (pointer.y - eased.y) * ease;
      }
      eased.strength += ((pointer.active ? 1 : 0) - eased.strength) * 0.06;
      if (eased.strength < 0.001) eased.strength = 0;

      // Pointer in canvas-local coordinates
      const px = eased.x - rect.left;
      const py = eased.y - rect.top;
      const rects = muteRects().map(
        (r) =>
          new DOMRect(r.left - rect.left, r.top - rect.top, r.width, r.height),
      );

      ctx.clearRect(0, 0, width, height);

      if (eased.strength > 0 && config.glow > 0) {
        const glowRadius = config.radius * 2.2;
        const glowAlpha =
          config.glow *
          eased.strength *
          (isDark ? 1.4 : 1) *
          muteAt(px, py, rects);
        const gradient = ctx.createRadialGradient(
          px,
          py,
          0,
          px,
          py,
          glowRadius,
        );
        gradient.addColorStop(0, `rgba(${accent.join(",")},${glowAlpha})`);
        gradient.addColorStop(1, `rgba(${accent.join(",")},0)`);
        ctx.fillStyle = gradient;
        ctx.fillRect(
          px - glowRadius,
          py - glowRadius,
          glowRadius * 2,
          glowRadius * 2,
        );
      }

      const { spacing } = config;
      const offsetY = -((window.scrollY * config.parallax) % spacing);
      const sigma2 = 2 * config.radius * config.radius;
      const t = reducedMotion ? 0 : time * 0.001;

      for (let y = offsetY + spacing / 2; y < height + spacing; y += spacing) {
        for (let x = spacing / 2; x < width + spacing; x += spacing) {
          const dx = x - px;
          const dy = y - py;
          const influence =
            Math.exp(-(dx * dx + dy * dy) / sigma2) * eased.strength;

          const wave =
            config.wave *
            Math.pow(0.5 + 0.5 * Math.sin(x * 0.011 + y * 0.007 - t * 0.9), 3);

          const mute = rects.length ? muteAt(x, y, rects) : 1;
          const level = Math.min(influence + wave * 0.35, 1) * mute;

          const distance = Math.hypot(dx, dy) || 1;
          const push = config.push * influence * mute;
          const drawX = x + (dx / distance) * push;
          const drawY = y + (dy / distance) * push;

          const size =
            config.dotSize + (config.dotSizeActive - config.dotSize) * level;
          const alpha =
            (config.alpha + (config.alphaActive - config.alpha) * level) *
            (0.55 + 0.45 * mute);
          const mix = Math.min(influence, 1) * config.tint * mute;

          ctx.fillStyle = `rgba(${dot[0] + (accent[0] - dot[0]) * mix},${
            dot[1] + (accent[1] - dot[1]) * mix
          },${dot[2] + (accent[2] - dot[2]) * mix},${alpha})`;
          ctx.beginPath();
          ctx.arc(drawX, drawY, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    const loop = (time: number) => {
      if (visible) draw(time);
      frame = requestAnimationFrame(loop);
    };

    const onPointerMove = (e: PointerEvent) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.active = true;
      if (reducedMotion) draw(0);
    };

    const onPointerLeave = () => {
      pointer.active = false;
      if (reducedMotion) {
        eased.strength = 0;
        draw(0);
      }
    };

    const onScroll = () => draw(0);

    const onTouchEnd = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") onPointerLeave();
    };

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    observer.observe(canvas);

    const resizeObserver = new ResizeObserver(() => {
      resize();
      draw(performance.now());
    });
    resizeObserver.observe(canvas);

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerup", onTouchEnd);
    document.documentElement.addEventListener("pointerleave", onPointerLeave);

    resize();
    if (reducedMotion) {
      window.addEventListener("scroll", onScroll, { passive: true });
      draw(0);
    } else {
      frame = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onTouchEnd);
      window.removeEventListener("scroll", onScroll);
      document.documentElement.removeEventListener(
        "pointerleave",
        onPointerLeave,
      );
    };
  }, [variant, occluderRef]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none ${className}`}
    />
  );
}

export default DotField;

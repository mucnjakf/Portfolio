import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState, type KeyboardEvent } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import IconButtonSecondary from "../button/IconButtonSecondary.tsx";
import type { ProjectGallerySlide } from "../../types/projectGallerySlide.ts";

type Slide = ProjectGallerySlide & { light: string; dark: string };

// Direction-aware slide; with reduced motion Motion drops the x offset and keeps the fade
const SlideVariants = {
  enter: (direction: number) => ({ x: `${direction * 100}%`, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: `${direction * -100}%`, opacity: 0 }),
};

const SwipeDistance = 60;
const SwipeVelocity = 400;

function ProjectGallery({ name, slides }: { name: string; slides: Slide[] }) {
  const [[index, direction], setPage] = useState([0, 0]);
  const count = slides.length;
  const slide = slides[index];

  const paginate = (step: number) =>
    setPage(([current]) => [(current + step + count) % count, step]);

  const goTo = (target: number) =>
    setPage(([current]) => [target, target > current ? 1 : -1]);

  // Preload the neighbours in the current theme so switching feels instant
  useEffect(() => {
    if (count < 2) return;
    const isDark = document.documentElement.classList.contains("dark");
    for (const neighbour of [
      slides[(index + 1) % count],
      slides[(index - 1 + count) % count],
    ]) {
      new Image().src = isDark ? neighbour.dark : neighbour.light;
    }
  }, [index, count, slides]);

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") paginate(-1);
    if (e.key === "ArrowRight") paginate(1);
  };

  const images = (current: Slide, alt: string) => (
    <>
      <img
        src={current.light}
        alt={alt}
        width={2400}
        height={1600}
        loading="lazy"
        draggable={false}
        className="block h-auto w-full dark:hidden"
      />
      <img
        src={current.dark}
        alt={alt}
        width={2400}
        height={1600}
        loading="lazy"
        draggable={false}
        className="hidden h-auto w-full dark:block"
      />
    </>
  );

  if (count === 1) {
    return (
      <div className="overflow-hidden rounded-2xl bg-zinc-100 shadow-lg ring-1 ring-black/5 dark:bg-zinc-900 dark:ring-white/10">
        {images(slide, `${name} showcase`)}
      </div>
    );
  }

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={`${name} screenshots`}
      onKeyDown={handleKeyDown}
    >
      <div className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-zinc-100 shadow-lg ring-1 ring-black/5 dark:bg-zinc-900 dark:ring-white/10">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={slide.id}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${count}: ${slide.title}`}
            custom={direction}
            variants={SlideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (
                info.offset.x < -SwipeDistance ||
                info.velocity.x < -SwipeVelocity
              )
                paginate(1);
              else if (
                info.offset.x > SwipeDistance ||
                info.velocity.x > SwipeVelocity
              )
                paginate(-1);
            }}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
          >
            {images(slide, `${name}: ${slide.title}`)}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-4 flex items-center gap-4">
        <div className="min-w-0 flex-1" aria-live="polite">
          <p className="text-sm font-semibold text-zinc-950 dark:text-zinc-100">
            {slide.title}
          </p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            <span className="tabular-nums">
              {index + 1} / {count}
            </span>{" "}
            · {slide.caption}
          </p>
        </div>

        <IconButtonSecondary
          icon={LuChevronLeft}
          label="Previous screenshot"
          onClick={() => paginate(-1)}
          className="shrink-0 p-2"
        />

        <IconButtonSecondary
          icon={LuChevronRight}
          label="Next screenshot"
          onClick={() => paginate(1)}
          className="shrink-0 p-2"
        />
      </div>

      <div className="mt-2 flex justify-center">
        {slides.map((s, i) => (
          <button
            key={s.id}
            type="button"
            aria-label={`Show ${s.title}`}
            aria-current={i === index ? "true" : undefined}
            onClick={() => goTo(i)}
            className="cursor-pointer rounded-full p-1.5 focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-blue-700 dark:focus-visible:outline-blue-600"
          >
            <span
              className={`block h-1.5 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-6 bg-blue-700 dark:bg-blue-600"
                  : "w-1.5 bg-zinc-300 hover:bg-zinc-400 dark:bg-zinc-700 dark:hover:bg-zinc-600"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProjectGallery;

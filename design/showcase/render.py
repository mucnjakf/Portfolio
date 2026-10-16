"""Render project showcase images (light + dark) into src/assets/projects,
and the link preview image (og.html, dark only) into public/og-image.png.

Usage: python design/showcase/render.py [project ... | og]
Requires Microsoft Edge (or Chrome via BROWSER env var) and Pillow.
"""

import os
import subprocess
import sys
import tempfile
import time
from pathlib import Path

from PIL import Image

HERE = Path(__file__).resolve().parent
OUT = HERE.parent.parent / "src" / "assets" / "projects"
PROJECTS = ["orderpoint", "codex", "herculean"]
# Projects with several slides: page <project>-<slide>.html -> <project>/<slide>-<theme>.webp
SLIDES = {"orderpoint": ["overview", "customer", "bar", "service", "admin", "management"]}
THEMES = ["light", "dark"]
WIDTH, HEIGHT, SCALE = 1200, 800, 2
OG = HERE.parent.parent / "public" / "og-image.png"
OG_WIDTH, OG_HEIGHT = 1200, 630

BROWSER = os.environ.get(
    "BROWSER", r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
)


def wait_for(path: Path, timeout: float = 30) -> None:
    # The Edge launcher can exit before the headless process writes the file
    deadline = time.time() + timeout
    last = -1
    while time.time() < deadline:
        size = path.stat().st_size if path.exists() else -1
        if size > 0 and size == last:
            return
        last = size
        time.sleep(0.5)
    raise TimeoutError(f"Screenshot not written: {path}")


def render(page: str, target: Path, theme: str, profile: str, width: int = WIDTH, height: int = HEIGHT, scale: int = SCALE) -> None:
    url = (HERE / f"{page}.html").as_uri() + f"?theme={theme}"
    with tempfile.TemporaryDirectory() as tmp:
        shot = Path(tmp) / "shot.png"
        subprocess.run(
            [
                BROWSER,
                "--headless=new",
                "--disable-gpu",
                "--hide-scrollbars",
                f"--user-data-dir={profile}",
                f"--force-device-scale-factor={scale}",
                f"--window-size={width},{height}",
                "--virtual-time-budget=6000",
                f"--screenshot={shot}",
                url,
            ],
            check=True,
            capture_output=True,
        )
        wait_for(shot)
        image = Image.open(shot).convert("RGB").crop((0, 0, width * scale, height * scale))
        target.parent.mkdir(parents=True, exist_ok=True)
        if target.suffix == ".png":
            image.save(target, "PNG", optimize=True)
        else:
            image.save(target, "WEBP", quality=90, method=6)
        print(f"{target.relative_to(OUT.parent.parent.parent)}  {target.stat().st_size // 1024} KB")


def main() -> None:
    projects = sys.argv[1:] or PROJECTS
    with tempfile.TemporaryDirectory() as profile:
        for project in projects:
            if project == "og":
                # Link previews are fetched once at 1x; social cards don't follow the viewer's theme
                render("og", OG, "dark", profile, OG_WIDTH, OG_HEIGHT, 1)
                continue
            slides = SLIDES.get(project)
            for theme in THEMES:
                if slides:
                    for slide in slides:
                        render(f"{project}-{slide}", OUT / project / f"{slide}-{theme}.webp", theme, profile)
                else:
                    render(project, OUT / project / f"showcase-{theme}.webp", theme, profile)


if __name__ == "__main__":
    main()

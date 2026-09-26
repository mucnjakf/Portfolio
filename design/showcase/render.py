"""Render project showcase images (light + dark) into src/assets/projects.

Usage: python design/showcase/render.py [project ...]
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
THEMES = ["light", "dark"]
WIDTH, HEIGHT, SCALE = 1200, 800, 2

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


def render(project: str, theme: str, profile: str) -> None:
    url = (HERE / f"{project}.html").as_uri() + f"?theme={theme}"
    with tempfile.TemporaryDirectory() as tmp:
        shot = Path(tmp) / "shot.png"
        subprocess.run(
            [
                BROWSER,
                "--headless=new",
                "--disable-gpu",
                "--hide-scrollbars",
                f"--user-data-dir={profile}",
                f"--force-device-scale-factor={SCALE}",
                f"--window-size={WIDTH},{HEIGHT}",
                "--virtual-time-budget=6000",
                f"--screenshot={shot}",
                url,
            ],
            check=True,
            capture_output=True,
        )
        wait_for(shot)
        image = Image.open(shot).convert("RGB").crop((0, 0, WIDTH * SCALE, HEIGHT * SCALE))
        target = OUT / project / f"showcase-{theme}.webp"
        target.parent.mkdir(parents=True, exist_ok=True)
        image.save(target, "WEBP", quality=90, method=6)
        print(f"{target.relative_to(OUT.parent.parent.parent)}  {target.stat().st_size // 1024} KB")


def main() -> None:
    projects = sys.argv[1:] or PROJECTS
    with tempfile.TemporaryDirectory() as profile:
        for project in projects:
            for theme in THEMES:
                render(project, theme, profile)


if __name__ == "__main__":
    main()

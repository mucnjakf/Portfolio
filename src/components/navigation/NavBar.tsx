import IconButtonSecondary from "../button/IconButtonSecondary.tsx";
import NavLink from "./NavLink.tsx";
import ButtonPrimary from "../button/ButtonPrimary.tsx";
import {
  LuDownload,
  LuMoon,
  LuSun,
  LuMenu,
  LuX,
  LuLayoutTemplate,
  LuCode,
  LuBriefcase,
  LuLibrary,
} from "react-icons/lu";
import { useEffect, useState } from "react";
import NavBrand from "./NavBrand.tsx";
import ScrollReveal from "../animation/ScrollReveal.tsx";

function NavBar() {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;

    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "profile",
        "projects",
        "skills",
        "experience",
        "education",
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          if (section.getBoundingClientRect().top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownload = () => {
    const pdfUrl = `/Portfolio/Filip_Mucnjak_Resume.pdf`;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Filip_Mucnjak_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed top-0 right-0 left-0 z-50 flex justify-center border-b border-b-zinc-200 bg-zinc-50/10 backdrop-blur-md dark:border-b-zinc-800 dark:bg-zinc-950/10">
      <ScrollReveal className="flex w-full justify-center">
        <div className="flex w-full max-w-[1300px] flex-col px-4 py-2 min-[650px]:px-10">
          <div className="flex w-full items-center justify-between">
            <div className="flex content-center items-center">
              <NavBrand className="me-8" />

              <div className="hidden md:flex">
                <NavLink
                  label="Projects"
                  href="projects"
                  icon={LuLayoutTemplate}
                  isActive={activeSection === "projects"}
                />
                <NavLink
                  label="Skills"
                  href="skills"
                  icon={LuCode}
                  isActive={activeSection === "skills"}
                />
                <NavLink
                  label="Experience"
                  href="experience"
                  icon={LuBriefcase}
                  isActive={activeSection === "experience"}
                />
                <NavLink
                  label="Education"
                  href="education"
                  icon={LuLibrary}
                  isActive={activeSection === "education"}
                />
              </div>
            </div>

            <div className="flex gap-2">
              <ButtonPrimary
                text="Resume"
                icon={LuDownload}
                className="px-2.5 py-2 text-xs"
                onClick={handleDownload}
              />

              <IconButtonSecondary
                icon={isDarkMode ? LuSun : LuMoon}
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="px-2"
              />

              <div className="md:hidden">
                <IconButtonSecondary
                  icon={isMenuOpen ? LuX : LuMenu}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="px-2 py-2"
                />
              </div>
            </div>
          </div>

          <div
            className={`grid transition-all duration-300 ease-in-out md:hidden ${
              isMenuOpen
                ? "mt-2 grid-rows-[1fr] opacity-100"
                : "mt-0 grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="flex flex-col border-t border-zinc-200 pt-2 pb-2 dark:border-zinc-800">
                <div onClick={() => setIsMenuOpen(false)}>
                  <NavLink
                    label="Projects"
                    href="projects"
                    isActive={activeSection === "projects"}
                    isMobile={true}
                    icon={LuLayoutTemplate}
                  />
                </div>
                <div onClick={() => setIsMenuOpen(false)}>
                  <NavLink
                    label="Skills"
                    href="skills"
                    isActive={activeSection === "skills"}
                    isMobile={true}
                    icon={LuCode}
                  />
                </div>
                <div onClick={() => setIsMenuOpen(false)}>
                  <NavLink
                    label="Experience"
                    href="experience"
                    isActive={activeSection === "experience"}
                    isMobile={true}
                    icon={LuBriefcase}
                  />
                </div>
                <div onClick={() => setIsMenuOpen(false)}>
                  <NavLink
                    label="Education"
                    href="education"
                    isActive={activeSection === "education"}
                    isMobile={true}
                    icon={LuLibrary}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}

export default NavBar;

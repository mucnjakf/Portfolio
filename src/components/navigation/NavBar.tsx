import IconButtonSecondary from "../button/IconButtonSecondary.tsx";
import NavLink from "./NavLink.tsx";
import ButtonPrimary from "../button/ButtonPrimary.tsx";
import {
  LuDownload,
  LuMoon,
  LuSun,
  LuMenu,
  LuX,
  LuBuilding2,
  LuLayoutTemplate,
  LuCode,
  LuBriefcase,
  LuLibrary,
} from "react-icons/lu";
import { useEffect, useState } from "react";
import NavBrand from "./NavBrand.tsx";
import ScrollReveal from "../animation/ScrollReveal.tsx";

const NavItems = [
  { label: "Studio", href: "studio", icon: LuBuilding2 },
  { label: "Projects", href: "projects", icon: LuLayoutTemplate },
  { label: "Skills", href: "skills", icon: LuCode },
  { label: "Contracts", href: "contracts", icon: LuBriefcase },
  { label: "Education", href: "education", icon: LuLibrary },
];

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
      const sections = ["profile", ...NavItems.map((item) => item.href)];

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
    const pdfUrl = `${import.meta.env.BASE_URL}Filip_Mucnjak_Resume.pdf`;
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
                {NavItems.map((item) => (
                  <NavLink
                    key={item.href}
                    label={item.label}
                    href={item.href}
                    icon={item.icon}
                    isActive={activeSection === item.href}
                  />
                ))}
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
                {NavItems.map((item) => (
                  <div key={item.href} onClick={() => setIsMenuOpen(false)}>
                    <NavLink
                      label={item.label}
                      href={item.href}
                      icon={item.icon}
                      isActive={activeSection === item.href}
                      isMobile={true}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}

export default NavBar;

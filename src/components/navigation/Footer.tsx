import IconLinkFlat from "../button/IconLinkFlat";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { LuPhone } from "react-icons/lu";
import NavBrand from "./NavBrand.tsx";

function Footer() {
  return (
    <footer className="w-full bg-zinc-100 dark:bg-zinc-900">
      <div className="mx-auto flex w-full max-w-[1300px] items-center justify-between px-4 py-5 min-[650px]:px-10">
        <div className="flex items-center text-sm font-medium text-zinc-400 dark:text-zinc-600">
          <NavBrand />
          &copy; {new Date().getFullYear()}.
        </div>

        <div className="flex gap-3">
          <IconLinkFlat icon={LuPhone} href="tel:+385 98 9068 467" />

          <IconLinkFlat icon={SiGmail} href="mailto:crofilix@gmail.com" />

          <IconLinkFlat
            icon={FaLinkedinIn}
            href="https://www.linkedin.com/in/mucnjakf"
          />

          <IconLinkFlat icon={FaGithub} href="https://github.com/mucnjakf" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;

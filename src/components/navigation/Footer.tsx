import IconLinkFlat from "../button/IconLinkFlat.tsx";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { LuPhone, LuMail, LuUserRound } from "react-icons/lu";
import { DataService } from "../../services/dataService.tsx";

function Footer() {
  const { socialLinks } = DataService.getProfile();

  return (
    <footer className="w-full bg-zinc-50 dark:bg-zinc-950">
      <div className="mx-auto flex w-full max-w-[1300px] items-center justify-between px-4 py-5 min-[650px]:px-10">
        <div className="flex items-center text-sm font-medium text-zinc-400 dark:text-zinc-600">
          &copy; {new Date().getFullYear()}.
        </div>

        <div className="flex gap-3">
          <IconLinkFlat
            icon={LuPhone}
            label="Phone"
            href={`tel:${socialLinks.phone}`}
          />

          <IconLinkFlat
            icon={LuMail}
            label="Email"
            href={`mailto:${socialLinks.email}`}
          />

          <IconLinkFlat
            icon={LuUserRound}
            label="Minimalist"
            href={socialLinks.minimalist}
          />

          <IconLinkFlat
            icon={FaLinkedinIn}
            label="LinkedIn"
            href={socialLinks.linkedin}
          />

          <IconLinkFlat
            icon={FaGithub}
            label="GitHub"
            href={socialLinks.github}
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;

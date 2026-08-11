import { LuChevronDown } from "react-icons/lu";

function ProfileScrollButton() {
  return (
    <a
      href="#projects"
      className="absolute bottom-8 left-1/2 flex -translate-x-1/2 cursor-pointer flex-col items-center text-zinc-500 transition-colors hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
    >
      <span className="animate-bounce text-[10px] font-bold tracking-widest uppercase">
        Scroll
      </span>

      <LuChevronDown size={18} className="animate-bounce" />
    </a>
  );
}

export default ProfileScrollButton;

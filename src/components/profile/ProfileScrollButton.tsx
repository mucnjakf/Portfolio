import { LuChevronDown } from "react-icons/lu";

function ProfileScrollButton() {
  return (
    <a
      href="#studio"
      aria-label="Scroll to the studio section"
      className="absolute bottom-8 left-1/2 flex -translate-x-1/2 cursor-pointer flex-col items-center rounded-md text-zinc-500 transition-colors hover:text-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 dark:text-zinc-400 dark:hover:text-zinc-200 dark:focus-visible:outline-blue-600"
    >
      <span className="text-[10px] font-bold tracking-widest uppercase motion-safe:animate-bounce">
        Scroll
      </span>

      <LuChevronDown
        size={18}
        className="motion-safe:animate-bounce"
        aria-hidden="true"
      />
    </a>
  );
}

export default ProfileScrollButton;

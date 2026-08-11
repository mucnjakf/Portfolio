import type { ElementType } from "react";

function NavLink({
  label,
  href,
  isActive = false,
  isMobile = false,
  icon: Icon,
}: {
  label: string;
  href: string;
  isActive?: boolean;
  isMobile?: boolean;
  icon?: ElementType;
}) {
  return (
    <a
      href={`#${href}`}
      className={`flex items-center text-sm font-semibold transition-colors hover:text-zinc-950 dark:hover:text-zinc-50 ${
        isActive
          ? "text-zinc-950 dark:text-zinc-50"
          : "text-zinc-600 dark:text-zinc-400"
      } ${isMobile ? "block w-full py-3" : "me-8"}`}
    >
      {Icon && <Icon size={14} className="me-1.5" />} {label}
    </a>
  );
}

export default NavLink;

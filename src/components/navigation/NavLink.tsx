import type { ElementType, MouseEventHandler } from "react";

function NavLink({
  label,
  href,
  isActive = false,
  isMobile = false,
  icon: Icon,
  onClick,
}: {
  label: string;
  href: string;
  isActive?: boolean;
  isMobile?: boolean;
  icon?: ElementType;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}) {
  return (
    <a
      href={`#${href}`}
      onClick={onClick}
      aria-current={isActive ? "location" : undefined}
      className={`flex items-center rounded-md text-sm font-semibold transition-colors hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 dark:hover:text-zinc-50 dark:focus-visible:outline-blue-600 ${
        isActive
          ? "text-zinc-950 dark:text-zinc-50"
          : "text-zinc-600 dark:text-zinc-400"
      } ${isMobile ? "block w-full py-3" : "me-8"}`}
    >
      {Icon && <Icon size={14} className="me-1.5" aria-hidden="true" />} {label}
    </a>
  );
}

export default NavLink;

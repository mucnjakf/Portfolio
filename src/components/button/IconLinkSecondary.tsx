import type { ElementType } from "react";

function IconLinkSecondary({
  icon: Icon,
  label,
  href,
  className = "",
}: {
  icon: ElementType;
  label: string;
  href: string;
  className?: string;
}) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      aria-label={label}
      title={label}
      className={`flex cursor-pointer items-center justify-center rounded-xl border border-zinc-300 bg-zinc-100 text-zinc-950 transition-colors hover:bg-zinc-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:focus-visible:outline-blue-600 ${className}`}
    >
      <Icon size={18} aria-hidden="true" />
    </a>
  );
}

export default IconLinkSecondary;

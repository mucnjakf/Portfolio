import type { ElementType } from "react";

function IconLinkFlat({
  icon: Icon,
  label,
  href,
}: {
  icon: ElementType;
  label: string;
  href: string;
}) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      aria-label={label}
      className="cursor-pointer rounded-md bg-transparent text-zinc-400 transition-colors hover:text-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 dark:text-zinc-600 dark:hover:text-zinc-300 dark:focus-visible:outline-blue-600"
    >
      <Icon size={16} aria-hidden="true" />
    </a>
  );
}

export default IconLinkFlat;

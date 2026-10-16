import type { ElementType } from "react";

function ButtonLinkSecondary({
  text,
  href,
  icon: Icon,
}: {
  text: string;
  href: string;
  icon: ElementType;
}) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="me-3 flex w-fit cursor-pointer items-center rounded-xl border border-zinc-300 bg-zinc-100 px-4 py-2 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:focus-visible:outline-blue-600"
    >
      <Icon size={14} className="me-2" aria-hidden="true" /> {text}
    </a>
  );
}

export default ButtonLinkSecondary;

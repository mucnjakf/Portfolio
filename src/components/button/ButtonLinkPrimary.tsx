import type { ElementType } from "react";

function ButtonLinkPrimary({
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
      className="me-3 flex w-fit cursor-pointer items-center rounded-xl border border-blue-700 bg-blue-600 px-4 py-2 text-sm font-semibold text-zinc-100 transition-colors hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 dark:focus-visible:outline-blue-600"
    >
      <Icon size={14} className="me-2" aria-hidden="true" /> {text}
    </a>
  );
}

export default ButtonLinkPrimary;

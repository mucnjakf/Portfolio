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
  return (
    <a
      href={href}
      target="_blank"
      className="me-3 flex w-fit cursor-pointer items-center rounded-xl border border-blue-700 bg-blue-600 px-4 py-2 text-sm font-semibold text-zinc-100 transition-colors hover:bg-blue-800"
    >
      <Icon size={14} className="me-2" /> {text}
    </a>
  );
}

export default ButtonLinkPrimary;

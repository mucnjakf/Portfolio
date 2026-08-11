import type { ElementType } from "react";

function IconLinkFlat({
  icon: Icon,
  href,
}: {
  icon: ElementType;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      className="cursor-pointer bg-transparent text-zinc-400 transition-colors hover:text-zinc-700 dark:text-zinc-600 dark:hover:text-zinc-300"
    >
      <Icon size={16} />
    </a>
  );
}

export default IconLinkFlat;

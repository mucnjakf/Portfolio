import type { MouseEventHandler } from "react";
import type { ElementType } from "react";

function IconButtonSecondary({
  icon: Icon,
  onClick,
  className = "",
}: {
  icon: ElementType;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}) {
  return (
    <button
      type="button"
      className={`cursor-pointer rounded-xl border border-zinc-300 bg-zinc-100 text-zinc-950 transition-colors hover:bg-zinc-200 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 ${className}`}
      onClick={onClick}
    >
      <Icon size={16} />
    </button>
  );
}

export default IconButtonSecondary;

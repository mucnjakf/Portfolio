import type { ElementType, MouseEventHandler } from "react";

function IconButtonSecondary({
  icon: Icon,
  label,
  onClick,
  ariaExpanded,
  ariaControls,
  className = "",
}: {
  icon: ElementType;
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  ariaExpanded?: boolean;
  ariaControls?: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
      className={`cursor-pointer rounded-xl border border-zinc-300 bg-zinc-100 text-zinc-950 transition-colors hover:bg-zinc-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:focus-visible:outline-blue-600 ${className}`}
      onClick={onClick}
    >
      <Icon size={16} aria-hidden="true" />
    </button>
  );
}

export default IconButtonSecondary;

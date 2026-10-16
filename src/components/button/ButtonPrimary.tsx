import type { ElementType, MouseEventHandler } from "react";

function ButtonPrimary({
  text,
  icon: Icon,
  onClick,
  href,
  download,
  className = "",
}: {
  text: string;
  icon: ElementType;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  // Renders a link instead of a button, e.g. for file downloads
  href?: string;
  download?: string;
  className?: string;
}) {
  const classes = `flex cursor-pointer items-center rounded-xl bg-blue-700 font-semibold text-zinc-100 transition-colors hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 dark:focus-visible:outline-blue-600 ${className}`;

  if (href) {
    return (
      <a href={href} download={download} className={classes}>
        <Icon size={14} className="me-2" aria-hidden="true" /> {text}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      <Icon size={14} className="me-2" aria-hidden="true" /> {text}
    </button>
  );
}

export default ButtonPrimary;

import type { ElementType } from "react";

function ButtonPrimary({
  text,
  icon: Icon,
  className = "",
}: {
  text: string;
  icon: ElementType;
  className?: string;
}) {
  return (
    <button
      type="button"
      className={`flex cursor-pointer items-center rounded-xl bg-blue-700 font-semibold text-zinc-100 transition-colors hover:bg-blue-800 ${className}`}
    >
      <Icon size={14} className="me-2" /> {text}
    </button>
  );
}

export default ButtonPrimary;

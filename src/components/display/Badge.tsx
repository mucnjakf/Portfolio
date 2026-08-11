import React from "react";

function Badge({
  text,
  bgColor,
  textColor,
  icon,
}: {
  text: string;
  bgColor: string;
  textColor: string;
  icon?: React.ReactNode;
}) {
  return (
    <div
      className={`flex w-fit items-center gap-2 rounded-xl px-3 py-1 text-xs font-medium ${bgColor} ${textColor}`}
    >
      {icon && (
        <div className="flex shrink-0 items-center justify-center">{icon}</div>
      )}
      {text}
    </div>
  );
}

export default Badge;

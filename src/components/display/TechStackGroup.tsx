import type { TechStackBadgeProps } from "../../propTypes/techStackBadgeProps.ts";

function TechStackGroup({
  title,
  badges,
  className = "",
}: {
  title: string;
  badges: TechStackBadgeProps[];
  className?: string;
}) {
  return (
    <div className={`my-2 flex flex-col gap-2 ${className}`}>
      <div className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase dark:text-zinc-400">
        {title}
      </div>

      <div className="flex flex-wrap gap-2">
        {badges.map((badge) => (
          <div
            key={badge.name}
            className={`w-fit rounded-xl border px-3 py-1 text-xs font-medium ${
              badge.highlight
                ? "border-blue-700/30 bg-blue-300/30 text-blue-700 dark:border-blue-700/30 dark:bg-blue-800/30 dark:text-blue-600"
                : "border-zinc-700/30 bg-zinc-300/30 text-zinc-700 dark:border-zinc-500/30 dark:bg-zinc-800 dark:text-zinc-400"
            }`}
          >
            {badge.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechStackGroup;

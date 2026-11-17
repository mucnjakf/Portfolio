import type { ElementType } from "react";
import { FaGithub } from "react-icons/fa";
import TechStackGroup from "../display/TechStackGroup.tsx";
import ButtonLinkSecondary from "../button/ButtonLinkSecondary.tsx";
import type { TechStackBadgeProps } from "../../propTypes/techStackBadgeProps.ts";

function OtherProjectCard({
  name,
  brow,
  year,
  icon: Icon,
  description,
  techStackBadges,
}: {
  name: string;
  brow: string;
  year: number;
  icon: ElementType;
  description: string;
  techStackBadges: TechStackBadgeProps[];
}) {
  return (
    <article className="flex h-full flex-col gap-4 rounded-xl border border-zinc-300 p-5 dark:border-zinc-600">
      <div className="flex items-center justify-between gap-4">
        <div className="w-fit rounded-xl border border-blue-700/30 bg-blue-300/10 p-2 dark:border-blue-700/30 dark:bg-blue-800/10">
          <Icon
            size={18}
            className="text-blue-700 dark:text-blue-600"
            aria-hidden="true"
          />
        </div>

        <span className="text-sm font-medium text-zinc-500 tabular-nums dark:text-zinc-400">
          {year}
        </span>
      </div>

      <div className="flex flex-col gap-1">
        <div className="text-xs font-bold tracking-widest text-blue-700 uppercase dark:text-blue-600">
          {brow}
        </div>

        <h4 className="text-lg font-bold text-zinc-950 dark:text-zinc-50">
          {name}
        </h4>
      </div>

      <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        {description}
      </p>

      <div className="mt-auto flex flex-col gap-4">
        <TechStackGroup title="Tech stack" badges={techStackBadges} />

        <ButtonLinkSecondary
          text="GitHub"
          label={`${name} on GitHub`}
          href={`https://github.com/mucnjakf/${name}`}
          icon={FaGithub}
        />
      </div>
    </article>
  );
}

export default OtherProjectCard;

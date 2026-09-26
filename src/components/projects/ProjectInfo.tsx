import Subtitle from "../typography/Subtitle.tsx";
import Badge from "../display/Badge.tsx";
import Paragraph from "../typography/Paragraph.tsx";
import TechStackGroup from "../display/TechStackGroup.tsx";
import ButtonLinkSecondary from "../button/ButtonLinkSecondary.tsx";
import { FaGithub } from "react-icons/fa";
import { LuClock, LuCircleCheck } from "react-icons/lu";
import type { ProjectInfoProps } from "../../propTypes/projectInfoProps.ts";

import OrderPointLight from "../../assets/projects/orderpoint/showcase-light.webp";
import OrderPointDark from "../../assets/projects/orderpoint/showcase-dark.webp";
import CodexLight from "../../assets/projects/codex/showcase-light.webp";
import CodexDark from "../../assets/projects/codex/showcase-dark.webp";
import HerculeanLight from "../../assets/projects/herculean/showcase-light.webp";
import HerculeanDark from "../../assets/projects/herculean/showcase-dark.webp";

const ProjectMap = {
  OrderPoint: { light: OrderPointLight, dark: OrderPointDark },
  Codex: { light: CodexLight, dark: CodexDark },
  Herculean: { light: HerculeanLight, dark: HerculeanDark },
};

function ProjectInfo({
  subtitle,
  brow,
  status,
  paragraph,
  techStackBadges,
  image,
  reverse,
}: ProjectInfoProps) {
  const isCompleted = status === "completed";

  const showcase = ProjectMap[image as keyof typeof ProjectMap];

  return (
    <div className="grid grid-cols-1 items-center gap-8 min-[768px]:grid-cols-12 min-[768px]:gap-10">
      <div
        className={`order-1 flex flex-col justify-center gap-4 min-[768px]:col-span-5 min-[768px]:gap-2 ${reverse ? "min-[768px]:order-2" : "min-[768px]:order-1"}`}
      >
        <Subtitle text={subtitle} brow={brow} />

        <div className="self-start">
          <Badge
            text={isCompleted ? "Completed" : "In development"}
            bgColor={
              isCompleted
                ? "bg-green-300/50 dark:bg-green-800/30"
                : "bg-orange-300/50 dark:bg-orange-700/20"
            }
            textColor={isCompleted ? "text-green-600" : "text-orange-400"}
            icon={isCompleted ? <LuCircleCheck /> : <LuClock />}
          />
        </div>

        <Paragraph text={paragraph} />

        <TechStackGroup title="Tech stack" badges={techStackBadges} />

        <div className="mt-2 self-start">
          <ButtonLinkSecondary
            text="GitHub"
            href={`https://github.com/mucnjakf/${subtitle}`}
            icon={FaGithub}
          />
        </div>
      </div>

      <div
        className={`order-2 flex flex-col justify-center min-[768px]:col-span-7 ${reverse ? "min-[768px]:order-1" : "min-[768px]:order-2"}`}
      >
        <div className="overflow-hidden rounded-2xl bg-zinc-100 shadow-lg ring-1 ring-black/5 dark:bg-zinc-900 dark:ring-white/10">
          <img
            src={showcase.light}
            alt={`${subtitle} showcase`}
            width={2400}
            height={1600}
            loading="lazy"
            className="block h-auto w-full dark:hidden"
          />
          <img
            src={showcase.dark}
            alt={`${subtitle} showcase`}
            width={2400}
            height={1600}
            loading="lazy"
            className="hidden h-auto w-full dark:block"
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectInfo;

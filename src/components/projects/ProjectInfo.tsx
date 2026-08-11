import Subtitle from "../typography/Subtitle.tsx";
import Badge from "../display/Badge.tsx";
import Paragraph from "../typography/Paragraph.tsx";
import TechStackGroup from "../display/TechStackGroup.tsx";
import ButtonLinkSecondary from "../button/ButtonLinkSecondary.tsx";
import { FaGithub } from "react-icons/fa";
import { LuClock, LuCircleCheck } from "react-icons/lu";
import type { ProjectInfoProps } from "../../propTypes/projectInfoProps.ts";

import OrderPointAdminWeb from "../../assets/projects/orderpoint-admin-web.png";
import PoseidonMap from "../../assets/projects/poseidon-map.png";
import BillTrackerDashboard from "../../assets/projects/billtracker-dashboard.png";

const ProjectMap = {
  "OrderPoint Admin Web": OrderPointAdminWeb,
  "Poseidon Map": PoseidonMap,
  "BillTracker Dashboard": BillTrackerDashboard,
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

  const projectImageSrc = ProjectMap[image as keyof typeof ProjectMap];

  return (
    <div className="grid grid-cols-1 gap-8 min-[650px]:grid-cols-2 min-[650px]:gap-6">
      <div
        className={`order-1 flex flex-col justify-center gap-4 min-[650px]:gap-2 ${reverse ? "min-[650px]:order-2" : "min-[650px]:order-1"}`}
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
        className={`proj-visuals order-2 flex flex-col justify-center ${reverse ? "min-[650px]:order-1" : "min-[650px]:order-2"}`}
      >
        <div className="pscreen rounded-2xl bg-zinc-100 ring-1 ring-black/5 dark:bg-zinc-800 dark:ring-white/10">
          <div className="pscreen-bar bg-zinc-100 dark:bg-zinc-800">
            <div className="pscreen-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="pscreen-url rounded-2xl bg-zinc-50 text-zinc-700 dark:bg-zinc-700 dark:text-zinc-200">
              {`${subtitle.toLowerCase()}.app`}
            </div>
          </div>
          <div className="pscreen-body tall">
            <img src={projectImageSrc} alt={`${subtitle} visual`} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectInfo;

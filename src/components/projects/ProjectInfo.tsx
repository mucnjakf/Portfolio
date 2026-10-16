import Subtitle from "../typography/Subtitle.tsx";
import Badge from "../display/Badge.tsx";
import Paragraph from "../typography/Paragraph.tsx";
import TechStackGroup from "../display/TechStackGroup.tsx";
import ButtonLinkSecondary from "../button/ButtonLinkSecondary.tsx";
import { FaGithub } from "react-icons/fa";
import { LuClock, LuCircleCheck } from "react-icons/lu";
import type { ProjectInfoProps } from "../../propTypes/projectInfoProps.ts";
import ProjectGallery from "./ProjectGallery.tsx";

import OrderPointOverviewLight from "../../assets/projects/orderpoint/overview-light.webp";
import OrderPointOverviewDark from "../../assets/projects/orderpoint/overview-dark.webp";
import OrderPointCustomerLight from "../../assets/projects/orderpoint/customer-light.webp";
import OrderPointCustomerDark from "../../assets/projects/orderpoint/customer-dark.webp";
import OrderPointBarLight from "../../assets/projects/orderpoint/bar-light.webp";
import OrderPointBarDark from "../../assets/projects/orderpoint/bar-dark.webp";
import OrderPointServiceLight from "../../assets/projects/orderpoint/service-light.webp";
import OrderPointServiceDark from "../../assets/projects/orderpoint/service-dark.webp";
import OrderPointAdminLight from "../../assets/projects/orderpoint/admin-light.webp";
import OrderPointAdminDark from "../../assets/projects/orderpoint/admin-dark.webp";
import OrderPointManagementLight from "../../assets/projects/orderpoint/management-light.webp";
import OrderPointManagementDark from "../../assets/projects/orderpoint/management-dark.webp";
import CodexLight from "../../assets/projects/codex/showcase-light.webp";
import CodexDark from "../../assets/projects/codex/showcase-dark.webp";
import HerculeanLight from "../../assets/projects/herculean/showcase-light.webp";
import HerculeanDark from "../../assets/projects/herculean/showcase-dark.webp";

// Showcase images per project, keyed by gallery slide id ("showcase" for single-image projects)
const ProjectMap: Record<
  string,
  Record<string, { light: string; dark: string }>
> = {
  OrderPoint: {
    overview: { light: OrderPointOverviewLight, dark: OrderPointOverviewDark },
    customer: { light: OrderPointCustomerLight, dark: OrderPointCustomerDark },
    bar: { light: OrderPointBarLight, dark: OrderPointBarDark },
    service: { light: OrderPointServiceLight, dark: OrderPointServiceDark },
    admin: { light: OrderPointAdminLight, dark: OrderPointAdminDark },
    management: {
      light: OrderPointManagementLight,
      dark: OrderPointManagementDark,
    },
  },
  Codex: { showcase: { light: CodexLight, dark: CodexDark } },
  Herculean: { showcase: { light: HerculeanLight, dark: HerculeanDark } },
};

function ProjectInfo({
  subtitle,
  brow,
  status,
  paragraph,
  techStackBadges,
  image,
  gallery,
  reverse,
}: ProjectInfoProps) {
  const isCompleted = status === "completed";

  const showcases = ProjectMap[image] ?? {};
  const slides = (
    gallery ?? [{ id: "showcase", title: subtitle, caption: "" }]
  ).flatMap((slide) =>
    showcases[slide.id] ? [{ ...slide, ...showcases[slide.id] }] : [],
  );

  return (
    <div className="grid grid-cols-1 items-center gap-8 min-[768px]:grid-cols-12 min-[768px]:gap-10">
      <div
        className={`order-1 flex flex-col justify-center gap-4 min-[768px]:col-span-5 min-[768px]:gap-2 ${reverse ? "min-[768px]:order-2" : "min-[768px]:order-1"}`}
      >
        <Subtitle text={subtitle} brow={brow} as="h3" />

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

      {slides.length > 0 && (
        <div
          className={`order-2 flex flex-col justify-center min-[768px]:col-span-7 ${reverse ? "min-[768px]:order-1" : "min-[768px]:order-2"}`}
        >
          <ProjectGallery name={subtitle} slides={slides} />
        </div>
      )}
    </div>
  );
}

export default ProjectInfo;

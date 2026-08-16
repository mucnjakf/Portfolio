import Subtitle from "../typography/Subtitle.tsx";
import Badge from "../display/Badge.tsx";
import Paragraph from "../typography/Paragraph.tsx";
import TechStackGroup from "../display/TechStackGroup.tsx";
import ButtonLinkSecondary from "../button/ButtonLinkSecondary.tsx";
import { FaGithub } from "react-icons/fa";
import {
  LuClock,
  LuCircleCheck,
  LuChevronLeft,
  LuChevronRight,
} from "react-icons/lu";
import type { ProjectInfoProps } from "../../propTypes/projectInfoProps.ts";

import OPAdminWeb from "../../assets/projects/orderpoint/admin-web.png";
import OPBartenderWeb from "../../assets/projects/orderpoint/bartender-web.png";
import OPCustomerWeb from "../../assets/projects/orderpoint/customer-web.png";

import PDashboard from "../../assets/projects/poseidon/dashboard.png";
import PEvents from "../../assets/projects/poseidon/events.png";
import PMap from "../../assets/projects/poseidon/map.png";

import BTDashboard from "../../assets/projects/billtracker/dashboard.png";
import BTCustomers from "../../assets/projects/billtracker/customers.png";
import BPCustomerDetails from "../../assets/projects/billtracker/customer-details.png";
import { useEffect, useRef, useState } from "react";

const ProjectMap = {
  OrderPoint: [OPAdminWeb, OPBartenderWeb, OPCustomerWeb],
  Poseidon: [PDashboard, PEvents, PMap],
  BillTracker: [BTDashboard, BTCustomers, BPCustomerDetails],
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

  const projectImagesAssetArray = ProjectMap[image as keyof typeof ProjectMap];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % projectImagesAssetArray.length,
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + projectImagesAssetArray.length) %
        projectImagesAssetArray.length,
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 5000);
    return () => clearInterval(intervalId);
  }, [currentImageIndex, nextImage]);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextImage();
    }
    if (touchStartX.current - touchEndX.current < -50) {
      prevImage();
    }
  };

  const currentImageUrl = projectImagesAssetArray[currentImageIndex];

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
        <div className="pscreen overflow-hidden rounded-2xl bg-zinc-100 ring-1 ring-black/5 dark:bg-zinc-800 dark:ring-white/10">
          {" "}
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
          <div
            className="pscreen-body tall group relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={currentImageUrl}
              alt={`${subtitle} visual`}
              className="h-full w-full object-cover"
            />

            <button
              onClick={prevImage}
              className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-white/70 p-1.5 text-zinc-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100 hover:bg-white"
            >
              <LuChevronLeft size={20} />
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-white/70 p-1.5 text-zinc-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100 hover:bg-white"
            >
              <LuChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectInfo;

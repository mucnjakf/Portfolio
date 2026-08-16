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

  const projectImagesAssets = ProjectMap[image as keyof typeof ProjectMap];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % projectImagesAssets.length,
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + projectImagesAssets.length) %
        projectImagesAssets.length,
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

  return (
    <div className="grid grid-cols-1 items-center gap-8 min-[768px]:grid-cols-12 min-[768px]:gap-10">
      {/* 
        TEXT COLUMN: Takes up 5 out of 12 columns (roughly 40% width) 
      */}
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

      {/* 
        BROWSER COLUMN: Takes up 7 out of 12 columns (roughly 60% width), making it much larger 
      */}
      <div
        className={`proj-visuals order-2 flex flex-col justify-center min-[768px]:col-span-7 ${reverse ? "min-[768px]:order-1" : "min-[768px]:order-2"}`}
      >
        <div className="pscreen overflow-hidden rounded-2xl bg-zinc-100 ring-1 ring-black/5 dark:bg-zinc-800 dark:ring-white/10 shadow-lg">
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
              src={projectImagesAssets[0]}
              alt="layout anchor"
              className="pointer-events-none block h-auto w-full opacity-0"
            />

            <div
              className="absolute top-0 left-0 flex h-full w-full items-start transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
            >
              {projectImagesAssets.map((imgSrc, index) => (
                <img
                  key={index}
                  src={imgSrc}
                  alt={`${subtitle} visual ${index + 1}`}
                  className="block h-auto w-full flex-shrink-0"
                />
              ))}
            </div>

            <button
              onClick={prevImage}
              className="absolute top-1/2 left-2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2 text-zinc-900 opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100 hover:bg-white"
            >
              <LuChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2 text-zinc-900 opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100 hover:bg-white"
            >
              <LuChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectInfo;

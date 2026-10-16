import type { TechStackBadgeProps } from "./techStackBadgeProps.ts";
import type { ProjectGallerySlide } from "../types/projectGallerySlide.ts";

export type ProjectInfoProps = {
  subtitle: string;
  brow: string;
  status: "completed" | "in-development";
  paragraph: string;
  techStackBadges: TechStackBadgeProps[];
  image: string;
  gallery?: ProjectGallerySlide[];
  reverse: boolean;
};

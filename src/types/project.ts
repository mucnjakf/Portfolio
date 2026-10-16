import type { ProjectTechStack } from "./projectTechStack.ts";
import type { ProjectGallerySlide } from "./projectGallerySlide.ts";

export type Project = {
  name: string;
  brow: string;
  status: "completed" | "in-development";
  description: string;
  techStack: ProjectTechStack[];
  gallery?: ProjectGallerySlide[];
};

import type { ExperienceProjectTechStack } from "./experienceProjectTechStack.ts";

export type ExperienceProject = {
  name: string;
  dateRange: string;
  description: string;
  techStack: ExperienceProjectTechStack[];
};

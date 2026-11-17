import type { ProjectTechStack } from "./projectTechStack.ts";

export type OtherProject = {
  name: string;
  brow: string;
  year: number;
  icon: string;
  description: string;
  techStack: ProjectTechStack[];
};

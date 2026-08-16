import type { ProjectTechStack } from "./projectTechStack.ts";

export type Project = {
  name: string;
  brow: string;
  status: "completed" | "in-progress";
  description: string;
  techStack: ProjectTechStack[];
};

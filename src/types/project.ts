import type { ProjectTechStack } from "./projectTechStack.ts";

export type Project = {
  name: string;
  brow: string;
  status: "completed" | "in-development";
  description: string;
  techStack: ProjectTechStack[];
};

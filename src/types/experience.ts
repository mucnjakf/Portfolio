import type { ExperienceProject } from "./experienceProject.ts";

export type Experience = {
  role: string;
  company: string;
  location: string;
  projects: ExperienceProject[];
};

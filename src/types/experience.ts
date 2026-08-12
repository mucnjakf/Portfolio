import type { ExperienceProject } from "./experienceProject.ts";

export type Experience = {
  company: string;
  location: string;
  projects: ExperienceProject[];
};

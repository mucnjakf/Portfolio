import profile from "../data/profile.json";
import studio from "../data/studio.json";
import projects from "../data/projects.json";
import otherProjects from "../data/otherProjects.json";
import skills from "../data/skills.json";
import experience from "../data/experience.json";
import education from "../data/education.json";
import certificates from "../data/certificates.json";
import type { Profile } from "../types/profile.ts";
import type { Studio } from "../types/studio.ts";
import type { Project } from "../types/project.ts";
import type { OtherProject } from "../types/otherProject.ts";
import type { Skill } from "../types/skill.ts";
import type { Experience } from "../types/experience.ts";
import type { Education } from "../types/education.ts";
import type { Certificate } from "../types/certificate.ts";

export const DataService = {
  getProfile: () => {
    return profile as Profile;
  },

  getStudio: () => {
    return studio as Studio;
  },

  getProjects: () => {
    return projects as Project[];
  },

  getOtherProjects: () => {
    return otherProjects as OtherProject[];
  },

  getSkills: () => {
    return skills as Skill[];
  },

  getExperience: () => {
    return experience as Experience[];
  },

  getEducation: () => {
    return education as Education[];
  },

  getCertificates: () => {
    return certificates as Certificate[];
  },
};

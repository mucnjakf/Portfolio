import type { StudioService } from "./studioService.ts";
import type { StudioProcessStep } from "./studioProcessStep.ts";

export type Studio = {
  name: string;
  tagline: string;
  role: string;
  description: string;
  note: string;
  url: string;
  contactUrl: string;
  services: StudioService[];
  process: StudioProcessStep[];
};

import type { ProfileSocialLinks } from "./profileSocialLinks.ts";
import type { ProfileHighlight } from "./profileHighlight.ts";

export type Profile = {
  fullName: string;
  role: string;
  description: string;
  socialLinks: ProfileSocialLinks;
  highlights: ProfileHighlight[];
};

import type { TechStackBadgeProps } from "./techStackBadgeProps.ts";

export type ProjectInfoProps = {
  subtitle: string;
  brow: string;
  status: "completed" | "in-development";
  paragraph: string;
  techStackBadges: TechStackBadgeProps[];
  image: string;
  reverse: boolean;
};

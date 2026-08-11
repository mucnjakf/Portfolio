import type { SkillSection } from "./skillSection.ts";

export type Skill = {
  category: string;
  icon: string;
  sections: SkillSection[];
};

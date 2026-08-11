import Subtitle from "../typography/Subtitle.tsx";
import Divider from "../display/Divider.tsx";
import { DataService } from "../../services/dataService.tsx";
import {
  LuMonitor,
  LuServer,
  LuLayers,
  LuCloud,
  LuGitFork,
  LuWrench,
} from "react-icons/lu";
import TechStackGroup from "../display/TechStackGroup.tsx";
import type { TechStackBadgeProps } from "../../propTypes/techStackBadgeProps.ts";
import { type ElementType, Fragment } from "react";
import ScrollReveal from "../animation/ScrollReveal.tsx";

const IconMap: Record<string, ElementType> = {
  LuMonitor: LuMonitor,
  LuServer: LuServer,
  LuLayers: LuLayers,
  LuCloud: LuCloud,
  LuGitFork: LuGitFork,
  LuWrench: LuWrench,
};

function SkillsSection() {
  const skills = DataService.getSkills();

  return (
    <div className="w-full border-b border-b-zinc-200 dark:border-b-zinc-800">
      <div className="mx-auto max-w-[1300px] px-4 py-10 min-[650px]:p-10">
        <div className="flex flex-col gap-2">
          <Subtitle
            text="Skills"
            id="skills"
            description="Technologies, tools, and practices across the full stack."
          />

          <Divider className="mb-10" />
        </div>

        <div className="grid grid-cols-1 gap-x-12 gap-y-8 min-[650px]:grid-cols-2 min-[650px]:gap-y-10">
          {skills.map((skill, index) => {
            const Icon = IconMap[skill.icon] || LuMonitor;

            return (
              <Fragment key={index}>
                <ScrollReveal>
                  <div>
                    <div className="mb-4 flex items-center gap-2">
                      <div className="w-fit rounded-xl border border-blue-700/30 bg-blue-300/10 p-2 dark:border-blue-700/30 dark:bg-blue-800/10">
                        <Icon size={18} className="text-blue-700" />
                      </div>

                      <div className="font-semibold text-zinc-800 dark:text-zinc-300">
                        {skill.category}
                      </div>
                    </div>

                    {skill.sections.map((section, idx) => (
                      <TechStackGroup
                        key={idx}
                        title={section.title}
                        badges={section.skills as TechStackBadgeProps[]}
                        className={
                          idx < skill.sections.length - 1 ? "mb-4" : ""
                        }
                      />
                    ))}
                  </div>
                </ScrollReveal>

                {index < skills.length - 1 && (
                  <Divider
                    className={`col-span-1 min-[650px]:col-span-2 ${
                      index % 2 === 0 ? "min-[650px]:hidden" : ""
                    }`}
                  />
                )}
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;

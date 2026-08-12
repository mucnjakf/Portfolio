import { DataService } from "../../services/dataService.tsx";
import Subtitle from "../typography/Subtitle.tsx";
import Divider from "../display/Divider.tsx";
import TechStackGroup from "../display/TechStackGroup.tsx";
import ScrollReveal from "../animation/ScrollReveal.tsx";

import FactoryXLogo from "../../assets/companies/factory-x.jpg"
import KingICTLogo from "../../assets/companies/king-ict.jpg"
import InfinumLogo from "../../assets/companies/infinum.jpg"
import EnterwellLogo from "../../assets/companies/enterwell.jpg"

const CompanyMap = {
  "Factory X": FactoryXLogo,
  "King ICT": KingICTLogo,
  "Infinum": InfinumLogo,
  "Enterwell": EnterwellLogo
};

function ExperienceSection() {
  const experience = DataService.getExperience();

  return (
    <div className="w-full border-b border-b-zinc-200 bg-zinc-100 dark:border-b-zinc-800 dark:bg-zinc-900">
      <div className="mx-auto max-w-[1300px] px-4 py-10 min-[650px]:p-10">
        <div className="flex flex-col gap-2">
          <Subtitle
            text="Experience"
            id="experience"
            description="A chronological record of collaborations."
          />

          <Divider className="mb-10" />
        </div>

        <div className="relative ml-6 flex flex-col gap-y-10 border-l border-zinc-400 dark:border-zinc-600">
          <div className="absolute top-0 -left-1.5 h-3 w-3 rounded-full bg-zinc-400 dark:bg-zinc-600" />

          {experience.map((xp, index) => {
            const companyLogo =
              CompanyMap[xp.company as keyof typeof CompanyMap];

            return (
              <ScrollReveal key={index}>
                <div className="relative pl-10">
                  <div className="absolute top-0 -left-6 flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-blue-700/30 bg-zinc-100">
                    {companyLogo ? (
                      <img
                        src={companyLogo}
                        alt={`${xp.company} logo`}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      "X"
                    )}
                  </div>

                  <div>
                    <h3 className="mb-1 font-bold text-zinc-950 dark:text-zinc-100">
                      {xp.company}
                    </h3>
                    <h5 className="mb-1 text-sm text-zinc-600 dark:text-zinc-400">
                      {xp.location}
                    </h5>
                  </div>

                  <Divider className="my-3" />

                  {xp.projects.map((project, i) => (
                    <div
                      className="grid grid-cols-1 gap-x-3 gap-y-4 md:grid-cols-3 md:gap-y-3"
                      key={i}
                    >
                      <div className="md:col-span-2">
                        <h3 className="mb-1 text-sm text-zinc-950 dark:text-zinc-100">
                          {project.name}
                        </h3>
                        <h5 className="mb-1 text-xs tracking-wide text-zinc-500 uppercase">
                          {project.dateRange}
                        </h5>
                        <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                          {project.description}
                        </p>
                      </div>

                      {project.techStack.length > 0 && (
                        <div>
                          <TechStackGroup
                            title="Tech stack"
                            badges={project.techStack}
                          />
                        </div>
                      )}

                      {i < xp.projects.length - 1 && (
                        <div className="col-span-1 mt-1 mb-4 md:col-span-3">
                          <Divider />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            );
          })}

          <div className="absolute bottom-0 -left-1.5 h-3 w-3 rounded-full bg-zinc-400 dark:bg-zinc-600" />
        </div>
      </div>
    </div>
  );
}

export default ExperienceSection;

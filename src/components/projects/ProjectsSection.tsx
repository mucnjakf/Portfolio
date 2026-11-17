import Subtitle from "../typography/Subtitle.tsx";
import Divider from "../display/Divider.tsx";
import ProjectInfo from "./ProjectInfo.tsx";
import OtherProjectCard from "./OtherProjectCard.tsx";
import ButtonLinkPrimary from "../button/ButtonLinkPrimary.tsx";
import { FaGithub } from "react-icons/fa";
import {
  LuBedDouble,
  LuCode,
  LuDumbbell,
  LuListChecks,
  LuReceipt,
  LuShip,
  LuSquareKanban,
} from "react-icons/lu";
import type { ElementType } from "react";
import { DataService } from "../../services/dataService.tsx";
import ScrollReveal from "../animation/ScrollReveal.tsx";

const IconMap: Record<string, ElementType> = {
  LuBedDouble: LuBedDouble,
  LuListChecks: LuListChecks,
  LuDumbbell: LuDumbbell,
  LuReceipt: LuReceipt,
  LuShip: LuShip,
  LuSquareKanban: LuSquareKanban,
};

function ProjectsSection() {
  const projects = DataService.getProjects();
  const otherProjects = DataService.getOtherProjects();

  return (
    <section className="w-full border-b border-b-zinc-200 dark:border-b-zinc-800">
      <div className="mx-auto max-w-[1300px] px-4 py-10 min-[650px]:p-10">
        <div className="flex flex-col gap-2">
          <Subtitle
            text="Projects"
            id="projects"
            description="A selection of personal and independent builds."
          />

          <Divider className="mb-10" />
        </div>

        <div className="flex flex-col gap-10">
          {projects.map((project, index) => (
            <div className="flex flex-col gap-10" key={project.name}>
              <ScrollReveal>
                <ProjectInfo
                  subtitle={project.name}
                  brow={project.brow}
                  status={project.status}
                  paragraph={project.description}
                  techStackBadges={project.techStack}
                  image={project.name}
                  gallery={project.gallery}
                  reverse={index % 2 === 1}
                />
              </ScrollReveal>

              <Divider />
            </div>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-10 mb-6">
            <Subtitle
              text="Other projects"
              description="Smaller builds and earlier work, from API deep-dives to full-stack apps."
              as="h3"
            />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-4 min-[650px]:grid-cols-2 min-[1026px]:grid-cols-3">
          {otherProjects.map((project, index) => (
            <ScrollReveal key={project.name} delay={index * 0.1}>
              <OtherProjectCard
                name={project.name}
                brow={project.brow}
                year={project.year}
                icon={IconMap[project.icon] || LuCode}
                description={project.description}
                techStackBadges={project.techStack}
              />
            </ScrollReveal>
          ))}
        </div>

        <Divider className="mt-10" />

        <ScrollReveal>
          <div className="mt-16 mb-6 flex flex-col items-center gap-5 text-center">
            <Subtitle
              text="More on GitHub"
              description="Explore all repositories, contributions, and open-source work directly on my GitHub profile."
              as="h3"
            />

            <ButtonLinkPrimary
              text="Visit GitHub"
              icon={FaGithub}
              href="https://github.com/mucnjakf"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default ProjectsSection;

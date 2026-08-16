import Subtitle from "../typography/Subtitle.tsx";
import Divider from "../display/Divider.tsx";
import ProjectInfo from "./ProjectInfo.tsx";
import ButtonLinkPrimary from "../button/ButtonLinkPrimary.tsx";
import { FaGithub } from "react-icons/fa";
import { DataService } from "../../services/dataService.tsx";
import ScrollReveal from "../animation/ScrollReveal.tsx";

function ProjectsSection() {
  const projects = DataService.getProjects();

  return (
    <div className="w-full border-y border-y-zinc-200 bg-zinc-100 dark:border-y-zinc-800 dark:bg-zinc-900">
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
            <div className="flex flex-col gap-10" key={index}>
              <ScrollReveal>
                <ProjectInfo
                  subtitle={project.name}
                  brow={project.brow}
                  status={project.status}
                  paragraph={project.description}
                  techStackBadges={project.techStack}
                  image={project.name}
                  reverse={index % 2 === 1}
                />
              </ScrollReveal>

              <Divider />
            </div>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-16 mb-6 flex flex-col items-center gap-5 text-center">
            <Subtitle
              text="More on GitHub"
              description="Explore all repositories, contributions, and open-source work directly on my GitHub profile."
            />

            <ButtonLinkPrimary
              text="Visit GitHub"
              icon={FaGithub}
              href="https://github.com/mucnjakf"
            />
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}

export default ProjectsSection;

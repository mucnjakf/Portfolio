import NavBar from "./components/navigation/NavBar.tsx";
import ProfileSection from "./components/profile/ProfileSection.tsx";
import StudioSection from "./components/studio/StudioSection.tsx";
import ProjectsSection from "./components/projects/ProjectsSection.tsx";
import SkillsSection from "./components/skills/SkillsSection.tsx";
import ExperienceSection from "./components/experience/ExperienceSection.tsx";
import EducationSection from "./components/education/EducationSection.tsx";
import Footer from "./components/navigation/Footer.tsx";
import DotField from "./components/animation/DotField.tsx";
import { useRef } from "react";

function App() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <main>
      <DotField
        variant="page"
        occluderRef={heroRef}
        className="fixed inset-0 -z-10 h-full w-full"
      />

      <div
        ref={heroRef}
        className="relative flex min-h-screen flex-col bg-zinc-50 dark:bg-zinc-950"
      >
        <DotField variant="hero" className="absolute inset-0 h-full w-full" />

        <NavBar />

        <section
          className="relative flex flex-1 items-center px-4 pt-17 min-[650px]:px-10 min-[650px]:pt-0"
          id="profile"
        >
          <ProfileSection />
        </section>
      </div>

      <section>
        <StudioSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
      </section>

      <Footer />
    </main>
  );
}

export default App;

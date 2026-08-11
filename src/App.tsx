import NavBar from "./components/navigation/NavBar.tsx";
import ProfileSection from "./components/profile/ProfileSection.tsx";
import ProjectsSection from "./components/projects/ProjectsSection.tsx";
import SkillsSection from "./components/skills/SkillsSection.tsx";
import ExperienceSection from "./components/experience/ExperienceSection.tsx";
import EducationSection from "./components/education/EducationSection.tsx";
import Footer from "./components/navigation/Footer.tsx";

function App() {
  return (
    <main>
      <div className="flex min-h-screen flex-col">
        <NavBar />

        <section
          className="relative flex flex-1 items-center px-4 pt-17 min-[650px]:px-10 min-[650px]:pt-0"
          id="profile"
        >
          <ProfileSection />
        </section>
      </div>

      <section>
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

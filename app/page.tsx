import EducationPage from "@/components/Education/page";
import Header from "@/components/Header/page";
import HomePage from "@/components/Home/page";
import SkillPage from "@/components/Skill/page";
import "./globals.css";
import ProjectPage from "@/components/Project/page";

export default function Home() {
  return (
    <div>
      <Header />
      <HomePage />
      <EducationPage />
      <SkillPage />
      <ProjectPage />
    </div>
  );
}

import EducationPage from "@/components/Education/page";
import Header from "@/components/Header/page";
import HomePage from "@/components/Home/page";
import SkillPage from "@/components/Skill/page";

export default function Home() {
  return (
    <div>
      <Header />
      <HomePage />
      <EducationPage />
      <SkillPage />
    </div>
  );
}


import { Header } from '@/components/Header';
import { SidebarNav } from '@/components/SidebarNav';
import { HomeSection } from '@/components/portfolio/HomeSection';
import { AboutSection } from '@/components/portfolio/AboutSection';
import { SkillsSection } from '@/components/portfolio/SkillsSection';
import { ProjectsSection } from '@/components/portfolio/ProjectsSection';
import { ExperienceSection } from '@/components/portfolio/ExperienceSection';
import { CodingProfilesSection } from '@/components/portfolio/CodingProfilesSection';
import { ContactSection } from '@/components/portfolio/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <SidebarNav />
      
      {/* Main content with left margin on desktop to account for sidebar */}
      <div className="lg:ml-72">
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <CodingProfilesSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;

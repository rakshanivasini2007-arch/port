import React, { useState } from 'react';
import { LoadingScreen } from './components/loading/LoadingScreen';
import { CustomCursor } from './components/cursor/CustomCursor';
import { Navbar } from './components/navigation/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { AboutSection } from './components/about/AboutSection';
import { SkillsSection } from './components/skills/SkillsSection';
import { DsaJourneySection } from './components/dsa/DsaJourneySection';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { ExperienceSection } from './components/experience/ExperienceSection';
import { EducationSection } from './components/education/EducationSection';
import { CertificationsSection } from './components/certifications/CertificationsSection';
import { BuildingEdgeSection } from './components/edge/BuildingEdgeSection';
import { ResumeCtaSection } from './components/resume/ResumeCtaSection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/footer/Footer';

export function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-dark-900 text-gray-100 relative font-sans selection:bg-neon-pink selection:text-white custom-cursor-active">
      {/* Loading Screen Preloader */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Desktop Custom Glowing Cursor */}
      <CustomCursor />

      {/* Main Glass Navigation */}
      <Navbar />

      {/* Main Portfolio Sections Flow */}
      <main className="relative z-10 space-y-12">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <DsaJourneySection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <CertificationsSection />
        <BuildingEdgeSection />
        <ResumeCtaSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

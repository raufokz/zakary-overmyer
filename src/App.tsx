import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { ContactSection } from '@/components/sections/ContactSection';

/**
 * Portfolio Application for Zakary James Overmyer
 * Senior Software Engineer – Front-End Web Development
 * 
 * Architecture: Modular component-based structure inspired by Angular patterns
 * - Standalone components with single responsibility
 * - Services for data management and business logic
 * - Custom hooks for reusable stateful logic
 * - UI components library for consistency
 */
export function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 antialiased">
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
      >
        Skip to main content
      </a>
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main id="main-content" role="main">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

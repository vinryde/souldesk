import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import ROISection from './components/ROISection';
import BlueprintSection from './components/BlueprintSection';
import ContactSection from './components/ContactSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ROISection />
      <BlueprintSection />
      <ContactSection />


      
      {/* Add other sections below like <ProblemSection /> etc. */}
    </main>
  );
}

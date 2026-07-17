import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import CoverageSection from './sections/CoverageSection';
import AdvisorsSection from './sections/AdvisorsSection';
import ProcessSection from './sections/ProcessSection';
import ContactSection from './sections/ContactSection';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="app-wrapper" id="hero">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <CoverageSection />
      <AdvisorsSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;

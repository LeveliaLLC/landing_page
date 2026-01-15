import { motion, useScroll, useSpring } from 'framer-motion';

import NoiseOverlay from '../components/ui/NoiseOverlay.jsx';
import TechMarquee from '../components/ui/TechMarquee.jsx';

import Navbar from '../components/layout/Navbar.jsx';
import Footer from '../components/layout/Footer.jsx';

import HeroSection from '../components/sections/HeroSection.jsx';
import AboutUsSection from '../components/about_us.jsx';
import ServicesSection from '../components/services.jsx';
import PortfolioSection from '../components/sections/PortfolioSection.jsx';
import ContactSection from '../components/form.jsx';

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-yellow-500/30 selection:text-yellow-200 font-sans overflow-x-hidden">
      <NoiseOverlay />

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 to-blue-600 origin-left z-[60]"
        style={{ scaleX }}
      />

      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[20%] w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-[10000ms]" />
        <div className="absolute bottom-[-20%] right-[10%] w-[600px] h-[600px] bg-yellow-900/10 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <Navbar />

      <main className="relative z-10">
        <HeroSection />
        <TechMarquee />
        <AboutUsSection />
        <ServicesSection />
        <PortfolioSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ToolsSection from './components/ToolsSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ExperienceSection from './components/ExperienceSection'
import WorkSection from './components/WorkSection'
import CertificationsSection from './components/CertificationsSection'
import ContactSection from './components/ContactSection'

export default function App() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <ToolsSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <WorkSection />
        <CertificationsSection />
        <ContactSection />
      </main>
    </>
  )
}

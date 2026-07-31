import { LoadingScreen } from './components/LoadingScreen';
import { CustomCursorAndEffects } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { ArchitectureVisualizer } from './components/ArchitectureVisualizer';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Contact, Footer } from './components/Contact';
import { AIChatWidget } from './components/AIChatWidget';

export function App() {
  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased selection:bg-accent/30 selection:text-accent-strong overflow-x-hidden md:cursor-none">
      <LoadingScreen />
      <CustomCursorAndEffects />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <ArchitectureVisualizer />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <AIChatWidget />
    </div>
  );
}

export default App;

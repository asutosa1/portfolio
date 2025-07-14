import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Sports from './components/Sports';
import Contact from './components/Contact';
import Footer from './components/Footer';
import QuantumBackground from './components/QuantumBackground';
import FlameEffect from './components/FlameEffect';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-black relative overflow-hidden">
        <QuantumBackground />
        <FlameEffect />
        <div className="relative z-10">
          <Header />
          <main>
            <Hero />
            <Experience />
            <Skills />
            <Education />
            <Projects />
            <Certificates />
            <Sports />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
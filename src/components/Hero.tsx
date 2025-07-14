import React from 'react';
import { ArrowDown, Github, Linkedin, Database } from 'lucide-react';
import profileImg from '../assets/profile.jpeg';

const Hero: React.FC = () => {
  const scrollToNextSection = () => {
    const element = document.querySelector('#experience');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-400 to-aqua-500 flex items-center justify-center shadow-2xl shadow-cyan-500/50 border-2 border-cyan-400/50">
              <img
                src={profileImg}
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-aqua-300 to-cyan-500 bg-clip-text text-transparent">
              Ashutosh
            </h1>
            <p className="text-xl md:text-2xl text-cyan-300 mb-6">
              Full-Stack Developer & DevOps Enthusiast
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Computer Science Engineering student passionate about building innovative web applications
              and exploring the latest technologies in development and DevOps.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>📍</span>
              <span>Patna, Bihar</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <span>📧</span>
              <span>itashu13601@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <span>📱</span>
              <span>7492937902</span>
            </div>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/asutosa1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 bg-gray-900 border border-cyan-500/50 text-cyan-400 rounded-full hover:scale-105 hover:bg-gray-800 transition-all duration-200 shadow-lg shadow-cyan-500/20"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/ashutoshkumar13601"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-aqua-500 text-black rounded-full hover:scale-105 transition-transform duration-200 shadow-lg shadow-cyan-500/30"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://kaggle.com/asutosa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-aqua-500 to-cyan-400 text-black rounded-full hover:scale-105 transition-transform duration-200 shadow-lg shadow-aqua-500/30"
            >
              <Database size={20} />
              <span>Kaggle</span>
            </a>
          </div>

          <button
            onClick={scrollToNextSection}
            className="animate-bounce p-3 rounded-full bg-cyan-500/20 backdrop-blur-sm hover:bg-cyan-500/30 transition-colors duration-200 border border-cyan-400/50"
          >
            <ArrowDown size={24} className="text-cyan-400" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
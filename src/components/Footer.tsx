import React from 'react';
import { Heart, Code, Github, Linkedin, Database } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-cyan-500/30 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-aqua-300 bg-clip-text text-transparent">
                Ashutosh
              </h3>
              <p className="text-gray-400 mb-4">
                Full-Stack Developer & DevOps Enthusiast passionate about creating innovative solutions and exploring cutting-edge technologies.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/asutosa1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/ashutoshkumar13601"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://kaggle.com/asutosa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-aqua-400 transition-colors duration-200"
                >
                  <Database size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-cyan-300">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => {
                        const element = document.querySelector(`#${item.toLowerCase()}`);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-cyan-300">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>📍 Patna, Bihar – 804453</p>
                <p>📧 itashu13601@gmail.com</p>
                <p>📱 +91 7492937902</p>
                <p>🌍 Hindi, English</p>
              </div>
            </div>
          </div>

          <div className="border-t border-cyan-500/30 mt-8 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-gray-400 text-sm">
                © {currentYear} Ashutosh. All rights reserved.
              </p>
              <div className="flex items-center space-x-2 text-gray-400 text-sm mt-4 md:mt-0">
                <span>Made with</span>
                <Heart size={16} className="text-red-400" />
                <span>and</span>
                <Code size={16} className="text-cyan-400" />
                <span>by Ashutosh</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
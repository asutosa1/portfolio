import React from 'react';
import { ExternalLink, Github, Globe, MessageCircle, Camera, Mail, Brain } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "SkillBridge India",
      description: "A comprehensive platform designed to connect learners with mentors, facilitating skill development and knowledge sharing across various domains.",
      icon: <Globe className="w-6 h-6" />,
      technologies: ["HTML", "CSS", "JavaScript", "Python"],
      features: ["Mentor-Student Matching", "Interactive Learning", "Progress Tracking", "Community Features"],
      color: "from-cyan-500 to-aqua-400"
    },
    {
      title: "Webcam Photo Capture App",
      description: "A real-time webcam application that captures photos using JavaScript's MediaDevices API with features for instant preview and download.",
      icon: <Camera className="w-6 h-6" />,
      technologies: ["JavaScript", "HTML", "CSS", "MediaDevices API"],
      features: ["Real-time Preview", "Instant Capture", "Download Functionality", "Cross-browser Support"],
      color: "from-aqua-400 to-cyan-500"
    },
    {
      title: "Email Automation System",
      description: "A JavaScript-based email sending application that integrates with APIs to automate email communications with customizable templates.",
      icon: <Mail className="w-6 h-6" />,
      technologies: ["JavaScript", "API Integration", "HTML", "CSS"],
      features: ["Template System", "API Integration", "Automated Sending", "Error Handling"],
      color: "from-cyan-400 to-aqua-500"
    },
    {
      title: "WhatsApp Message Automation",
      description: "An automated messaging system that integrates with WhatsApp's API to send messages programmatically using JavaScript.",
      icon: <MessageCircle className="w-6 h-6" />,
      technologies: ["JavaScript", "WhatsApp API", "HTML", "CSS"],
      features: ["Automated Messaging", "API Integration", "Message Templates", "Delivery Tracking"],
      color: "from-aqua-500 to-cyan-400"
    },
    {
      title: "Streamlit AI/ML Application",
      description: "An interactive machine learning web application built with Streamlit, featuring data visualization and model deployment capabilities.",
      icon: <Brain className="w-6 h-6" />,
      technologies: ["Streamlit", "Python", "Machine Learning", "Data Visualization"],
      features: ["Interactive UI", "Model Deployment", "Data Visualization", "Real-time Predictions"],
      color: "from-cyan-500 to-aqua-300"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-aqua-300 bg-clip-text text-transparent">
              Projects
            </h2>
            <p className="text-xl text-gray-400">
              Innovative solutions and applications I've built
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/20 hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className={`p-4 rounded-full bg-gradient-to-r ${project.color} text-black group-hover:scale-110 transition-transform duration-300`}>
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-semibold ml-4 text-white">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-gradient-to-r from-cyan-500/20 to-aqua-400/20 text-cyan-300 rounded-full border border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-gray-800 border border-cyan-500/50 text-cyan-400 rounded-lg hover:scale-105 hover:bg-gray-700 transition-all duration-200">
                    <Github size={16} />
                    <span>Code</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-600 to-aqua-500 text-black rounded-lg hover:scale-105 transition-transform duration-200">
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
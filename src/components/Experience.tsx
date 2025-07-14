import React from 'react';
import { Code, Server, Brain, Wrench } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Web Development",
      description: "Built multiple web projects using HTML, CSS, JavaScript, and Python with focus on responsive design and user experience.",
      technologies: ["HTML", "CSS", "JavaScript", "Python"]
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "DevOps & Infrastructure",
      description: "Hands-on experience with containerization, CI/CD pipelines, and orchestration tools for efficient deployment workflows.",
      technologies: ["Docker", "Jenkins", "Kubernetes"]
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI/ML Applications",
      description: "Developed interactive AI/ML web applications using modern frameworks with focus on user-friendly interfaces.",
      technologies: ["Streamlit", "Gradio", "Joblib"]
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Backend Development",
      description: "Created robust backend systems and APIs using Node.js and Python with emphasis on scalability and performance.",
      technologies: ["Node.js", "Python", "APIs"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-aqua-300 bg-clip-text text-transparent">
              Experience
            </h2>
            <p className="text-xl text-gray-400">
              My journey in software development and technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/20 hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-aqua-400 text-black group-hover:scale-110 transition-transform duration-300">
                    {exp.icon}
                  </div>
                  <h3 className="text-xl font-semibold ml-4 text-white">
                    {exp.title}
                  </h3>
                </div>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-gradient-to-r from-cyan-500/20 to-aqua-400/20 text-cyan-300 rounded-full border border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
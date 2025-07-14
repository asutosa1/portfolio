import React from 'react';
import { Code, Globe, Server, Wrench, Brain, Database } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "Python", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "HTML/CSS", level: 90 },
        { name: "Node.js", level: 75 }
      ]
    },
    {
      title: "Frontend Development",
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "Responsive Design", level: 85 }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: "Python", level: 85 },
        { name: "Node.js", level: 75 },
        { name: "API Development", level: 80 },
        { name: "Database Design", level: 70 }
      ]
    },
    {
      title: "DevOps Tools",
      icon: <Wrench className="w-6 h-6" />,
      skills: [
        { name: "Docker", level: 75 },
        { name: "Jenkins", level: 70 },
        { name: "Kubernetes", level: 65 },
        { name: "CI/CD", level: 75 }
      ]
    },
    {
      title: "AI/ML & UI Tools",
      icon: <Brain className="w-6 h-6" />,
      skills: [
        { name: "Streamlit", level: 85 },
        { name: "Gradio", level: 80 },
        { name: "Joblib", level: 75 },
        { name: "Machine Learning", level: 70 }
      ]
    },
    {
      title: "Other Skills",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "DSA", level: 80 },
        { name: "Problem Solving", level: 85 },
        { name: "Team Collaboration", level: 90 },
        { name: "Project Management", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-aqua-300 bg-clip-text text-transparent">
              Skills
            </h2>
            <p className="text-xl text-gray-400">
              Technical expertise and proficiency levels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-aqua-400 text-black">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold ml-3 text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-cyan-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-cyan-500 to-aqua-400 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
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

export default Skills;
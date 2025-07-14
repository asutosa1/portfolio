import React from 'react';
import { GraduationCap, BookOpen, Award } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "B.Tech in Computer Science and Engineering",
      institution: "Currently Pursuing",
      description: "Focusing on software engineering, algorithms, data structures, and modern web technologies.",
      status: "In Progress",
      color: "from-cyan-500 to-aqua-400"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Higher Secondary Education (12th Grade)",
      institution: "49%",
      description: "Completed higher secondary education with focus on science and mathematics.",
      status: "Completed",
      color: "from-aqua-400 to-cyan-500"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Secondary Education (10th Grade)",
      institution: "47%",
      description: "Completed secondary education with strong foundation in core subjects.",
      status: "Completed",
      color: "from-cyan-400 to-aqua-500"
    }
  ];

  return (
    <section id="education" className="py-20 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-aqua-300 bg-clip-text text-transparent">
              Education
            </h2>
            <p className="text-xl text-gray-400">
              My academic journey and learning path
            </p>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className={`p-4 rounded-full bg-gradient-to-r ${edu.color} text-black group-hover:scale-110 transition-transform duration-300`}>
                    {edu.icon}
                  </div>
                  
                  <div className="ml-6 flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-white">
                        {edu.title}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        edu.status === 'In Progress' 
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' 
                          : 'bg-aqua-500/20 text-aqua-300 border border-aqua-500/30'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                    
                    <p className="text-lg text-cyan-300 mb-3">
                      {edu.institution}
                    </p>
                    
                    <p className="text-gray-400 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-aqua-400/20 rounded-full border border-cyan-500/30">
              <span className="text-cyan-300 font-medium">
                🌍 Languages: Hindi, English
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
import React from 'react';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';

const Certificates: React.FC = () => {
  const certificates = [
    {
      title: "Coursera Certified",
      issuer: "Coursera",
      description: "Completed multiple courses on Coursera platform covering various aspects of computer science and web development.",
      icon: <Award className="w-6 h-6" />,
      skills: ["Web Development", "Programming", "Computer Science", "Software Engineering"],
      status: "Verified",
      color: "from-cyan-500 to-aqua-400"
    },
    {
      title: "SWAYAM Certified",
      issuer: "SWAYAM (Government of India)",
      description: "Successfully completed courses on SWAYAM platform, India's national educational platform for higher education.",
      icon: <CheckCircle className="w-6 h-6" />,
      skills: ["Academic Excellence", "Online Learning", "Self-paced Learning", "Knowledge Assessment"],
      status: "Verified",
      color: "from-aqua-400 to-cyan-500"
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-aqua-300 bg-clip-text text-transparent">
              Certificates
            </h2>
            <p className="text-xl text-gray-400">
              Professional certifications and achievements
            </p>
          </div>

          <div className="space-y-8">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className={`p-4 rounded-full bg-gradient-to-r ${cert.color} text-black group-hover:scale-110 transition-transform duration-300`}>
                    {cert.icon}
                  </div>
                  
                  <div className="ml-6 flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-white">
                        {cert.title}
                      </h3>
                      <span className="px-3 py-1 bg-aqua-500/20 text-aqua-300 border border-aqua-500/30 rounded-full text-sm font-medium">
                        {cert.status}
                      </span>
                    </div>
                    
                    <p className="text-lg text-cyan-300 mb-3">
                      {cert.issuer}
                    </p>
                    
                    <p className="text-gray-400 leading-relaxed mb-4">
                      {cert.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 text-xs bg-gradient-to-r from-cyan-500/20 to-aqua-400/20 text-cyan-300 rounded-full border border-cyan-500/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-600 to-aqua-500 text-black rounded-lg hover:scale-105 transition-transform duration-200">
                      <ExternalLink size={16} />
                      <span>View Certificate</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full border border-amber-500/30">
              <Calendar className="w-5 h-5 text-amber-400" />
              <span className="text-amber-300 font-medium">
                Continuous Learning Journey
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
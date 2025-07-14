import React from 'react';
import { Trophy, Users, Target, Award } from 'lucide-react';

const Sports: React.FC = () => {
  const achievements = [
    {
      title: "West Zone Inter-University Kabaddi Tournament",
      description: "Participated in the prestigious West Zone Inter-University Kabaddi Tournament representing my university.",
      icon: <Trophy className="w-6 h-6" />,
      participation: "2 Times",
      level: "Inter-University",
      color: "from-amber-500 to-orange-500"
    }
  ];

  const sportsSkills = [
    {
      skill: "Team Leadership",
      description: "Leading and coordinating team strategies during matches"
    },
    {
      skill: "Physical Fitness",
      description: "Maintaining peak physical condition for competitive play"
    },
    {
      skill: "Strategic Thinking",
      description: "Developing game plans and tactical approaches"
    },
    {
      skill: "Mental Resilience",
      description: "Staying focused under pressure and bouncing back from setbacks"
    }
  ];

  return (
    <section id="sports" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-aqua-300 bg-clip-text text-transparent">
              Sports & Athletics
            </h2>
            <p className="text-xl text-gray-400">
              Competitive sports achievements and athletic pursuits
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Sports Achievements */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-white flex items-center">
                <Award className="w-6 h-6 mr-3 text-amber-400" />
                Achievements
              </h3>
              
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300"
                >
                  <div className="flex items-start">
                    <div className={`p-4 rounded-full bg-gradient-to-r ${achievement.color} text-black group-hover:scale-110 transition-transform duration-300`}>
                      {achievement.icon}
                    </div>
                    
                    <div className="ml-6 flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold text-white">
                          Kabaddi Player
                        </h4>
                        <span className="px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full text-sm font-medium">
                          {achievement.participation}
                        </span>
                      </div>
                      
                      <p className="text-lg text-cyan-300 mb-3">
                        {achievement.level}
                      </p>
                      
                      <p className="text-gray-400 leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sports Skills */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-white flex items-center">
                <Target className="w-6 h-6 mr-3 text-cyan-400" />
                Skills Developed
              </h3>
              
              <div className="space-y-6">
                {sportsSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
                  >
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {skill.skill}
                    </h4>
                    <p className="text-gray-400">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sports Impact */}
          <div className="mt-16 text-center">
            <div className="p-8 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-aqua-400/10 border border-cyan-500/30 backdrop-blur-sm">
              <Users className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Sports & Professional Development
              </h3>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Participating in competitive sports has shaped my character, teaching me valuable lessons about 
                teamwork, perseverance, and leadership that I apply in my professional software development career. 
                The discipline and strategic thinking required in Kabaddi translates directly to problem-solving in coding and project management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sports;
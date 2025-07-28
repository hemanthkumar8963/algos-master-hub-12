
import { ExternalLink, Code, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const CodingProfilesSection = () => {
  const codingProfiles = [
    {
      platform: "Smart Interviews",
      description: "Comprehensive coding interview preparation platform with structured learning paths and practice problems.",
      profileImage: "https://media.licdn.com/dms/image/v2/D560BAQGhGl9gZ5NfjA/company-logo_200_200/company-logo_200_200/0/1692156655367?e=2147483647&v=beta&t=FTd01Jk64RhzHAE99gFBAXqLvKvdcwSaxWsncunqhZo",
      profileLink: "https://smartinterviews.in/profile/hemanthkumar40",
      gradient: "from-blue-500 to-indigo-500",
      hoverGradient: "from-blue-600 to-indigo-600"
    },
    {
      platform: "LeetCode",
      description: "Popular coding platform for practicing algorithmic problems and preparing for technical interviews.",
      profileImage: "https://img.icons8.com/?size=100&id=wDGo581Ea5Nf&format=png&color=000000",
      profileLink: "https://leetcode.com/u/SOMANA_HEMANTH_KUMAR/",
      gradient: "from-orange-500 to-yellow-500",
      hoverGradient: "from-orange-600 to-yellow-600"
    },
    {
      platform: "HackerRank",
      description: "Technical skills assessment platform with coding challenges and competitive programming contests.",
      profileImage: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/hackerrank.svg",
      profileLink: "https://www.hackerrank.com/profile/22311a05fy1",
      gradient: "from-green-500 to-emerald-500",
      hoverGradient: "from-green-600 to-emerald-600"
    }
  ];

  return (
    <section id="coding-profiles" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Coding Profiles
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {codingProfiles.map((profile, index) => (
              <div 
                key={index} 
                className="group bg-card rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-border hover:border-blue-300 hover:bg-gradient-to-br hover:from-blue-950 hover:via-background hover:to-purple-950 transform hover:scale-[1.08] hover:-translate-y-2 cursor-pointer"
              >
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${profile.gradient} group-hover:bg-gradient-to-r group-hover:${profile.hoverGradient} flex items-center justify-center p-2 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-xl`}>
                      <img 
                        src={profile.profileImage} 
                        alt={`${profile.platform} logo`}
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-card-foreground group-hover:text-blue-300 transition-colors duration-300 group-hover:scale-105 transform">{profile.platform}</h3>
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground group-hover:text-blue-400 transition-colors duration-300">
                        <Trophy className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                        <span>Coding Platform</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground group-hover:text-card-foreground mb-6 leading-relaxed transition-colors duration-300">{profile.description}</p>
                  
                  <Button 
                    asChild 
                    className={`w-full bg-gradient-to-r ${profile.gradient} group-hover:bg-gradient-to-r group-hover:${profile.hoverGradient} hover:opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-xl`}
                  >
                    <a href={profile.profileLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2">
                      <Code className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                      <span>View Profile</span>
                      <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="group bg-gradient-to-r from-blue-950 to-purple-950 rounded-xl p-8 hover:from-blue-900 hover:to-purple-900 transition-all duration-500 hover:shadow-lg cursor-pointer">
              <h3 className="text-2xl font-semibold text-foreground group-hover:text-blue-300 mb-4 transition-colors duration-300">Problem Solving & Competitive Programming</h3>
              <p className="text-muted-foreground group-hover:text-foreground max-w-2xl mx-auto transition-colors duration-300">
                I actively practice coding problems and participate in competitive programming to enhance my algorithmic thinking and problem-solving skills. 
                These platforms help me stay sharp and improve my coding efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

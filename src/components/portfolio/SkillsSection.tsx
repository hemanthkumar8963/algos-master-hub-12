
import { Code, Shield, Brain, Globe, Database, Server, Wrench, Layers } from 'lucide-react';

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-8 w-8" />,
      skills: ["Python", "C", "Java", "JavaScript", "TypeScript"],
      color: "from-blue-500 to-cyan-500",
      hoverColor: "from-blue-600 to-cyan-600"
    },
    {
      title: "Web Development", 
      icon: <Globe className="h-8 w-8" />,
      skills: ["HTML", "CSS", "Bootstrap", "React", "Node.js", "Express.js", "Interactive Web Design"],
      color: "from-green-500 to-emerald-500",
      hoverColor: "from-green-600 to-emerald-600",
      level: "Medium"
    },
    {
      title: "Database",
      icon: <Database className="h-8 w-8" />,
      skills: ["MySQL", "MongoDB", "SQL"],
      color: "from-purple-500 to-violet-500",
      hoverColor: "from-purple-600 to-violet-600",
      level: "Beginner"
    },
    {
      title: "Core Skills",
      icon: <Layers className="h-8 w-8" />,
      skills: ["Data Structures & Algorithms", "Object-Oriented Programming", "UI/UX Design", "Problem Solving"],
      color: "from-indigo-500 to-purple-500",
      hoverColor: "from-indigo-600 to-purple-600"
    },
    {
      title: "Machine Learning",
      icon: <Brain className="h-8 w-8" />,
      skills: ["Python", "TensorFlow", "Scikit-learn", "Data Analysis", "Pandas", "NumPy"],
      color: "from-orange-500 to-red-500",
      hoverColor: "from-orange-600 to-red-600"
    },
    {
      title: "Cybersecurity",
      icon: <Shield className="h-8 w-8" />,
      skills: ["Threat Detection", "Incident Response", "Risk Management", "Security Analysis", "Vulnerability Assessment"],
      color: "from-red-500 to-pink-500",
      hoverColor: "from-red-600 to-pink-600"
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="h-8 w-8" />,
      skills: ["Git", "GitHub", "VS Code", "MERN Stack", "RESTful APIs"],
      color: "from-teal-500 to-cyan-500",
      hoverColor: "from-teal-600 to-cyan-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 relative overflow-hidden">
      {/* Floating skill particles */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-lg animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-lg animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-fade-in transform hover:scale-105 transition-transform duration-500">
            Skills & Technologies
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className="group bg-card rounded-xl p-6 shadow-lg hover:shadow-2xl hover:scale-[1.08] transition-all duration-500 hover:border-cyan-400 border border-border hover:bg-gradient-to-br hover:from-blue-950 hover:via-slate-900 hover:to-purple-950 cursor-pointer transform hover:-translate-y-4 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${category.color} group-hover:bg-gradient-to-r group-hover:${category.hoverColor} flex items-center justify-center text-white mb-4 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-current/50`}>
                  {category.icon}
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-card-foreground group-hover:text-cyan-300 transition-colors duration-300 group-hover:scale-105 transform">{category.title}</h3>
                  {category.level && (
                    <span className="px-2 py-1 bg-gradient-to-r from-blue-900 to-purple-900 text-blue-100 rounded-full text-xs font-medium group-hover:bg-gradient-to-r group-hover:from-cyan-800 group-hover:to-blue-800 group-hover:text-cyan-50 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 animate-fade-in">
                      {category.level}
                    </span>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-medium group-hover:bg-gradient-to-r group-hover:from-cyan-800 group-hover:to-purple-800 group-hover:text-cyan-100 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-current/50 transition-all duration-300 cursor-default transform hover:rotate-2 animate-fade-in"
                      style={{ animationDelay: `${(index * 150) + (skillIndex * 50)}ms` }}
                    >
                      {skill}
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

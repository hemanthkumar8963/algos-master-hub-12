
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
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl hover:scale-[1.08] transition-all duration-500 hover:border-blue-300 border border-gray-100 hover:bg-gradient-to-br hover:from-blue-50 hover:via-white hover:to-purple-50 cursor-pointer"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${category.color} group-hover:bg-gradient-to-r group-hover:${category.hoverColor} flex items-center justify-center text-white mb-4 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 group-hover:shadow-xl`}>
                  {category.icon}
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-700 transition-colors duration-300 group-hover:scale-105 transform">{category.title}</h3>
                  {category.level && (
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium group-hover:bg-blue-200 group-hover:text-blue-900 group-hover:scale-110 transition-all duration-300">
                      {category.level}
                    </span>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium group-hover:bg-gradient-to-r group-hover:from-blue-200 group-hover:to-purple-200 group-hover:text-blue-900 group-hover:scale-110 group-hover:shadow-md transition-all duration-300 cursor-default transform hover:rotate-1"
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

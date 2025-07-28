
import { Code2, Heart } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background via-slate-950 to-blue-950 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse transform hover:scale-105 transition-transform duration-500">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center space-x-2 group cursor-pointer">
                <span className="text-2xl animate-bounce group-hover:scale-125 transition-transform duration-300">👋</span>
                <h3 className="text-2xl font-semibold text-foreground group-hover:text-blue-400 transition-colors duration-300 transform group-hover:scale-105">Hello! I'm Hemanth Kumar Somana</h3>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed transform hover:scale-105 transition-all duration-300 hover:text-foreground cursor-default">
                A passionate developer with hands-on experience in diverse domains including 
                <span className="font-semibold text-cyan-400 hover:text-cyan-300 transition-colors duration-300"> Cybersecurity</span>, 
                <span className="font-semibold text-purple-400 hover:text-purple-300 transition-colors duration-300"> Machine Learning</span>, and the 
                <span className="font-semibold text-green-400 hover:text-green-300 transition-colors duration-300"> MERN stack</span>. 
                I enjoy exploring new technologies and turning ideas into impactful solutions.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed transform hover:scale-105 transition-all duration-300 hover:text-foreground cursor-default">
                Currently, I'm actively learning <span className="font-semibold text-orange-400 hover:text-orange-300 transition-colors duration-300">Data Structures and Algorithms (DSA)</span> to 
                strengthen my problem-solving abilities. I love working on challenging coding problems and 
                contributing to projects that push my technical boundaries.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed transform hover:scale-105 transition-all duration-300 hover:text-foreground cursor-default">
                Hackathons and real-world projects excite me—they're the perfect playground for 
                <span className="font-semibold text-pink-400 hover:text-pink-300 transition-colors duration-300"> innovation</span> and 
                <span className="font-semibold text-indigo-400 hover:text-indigo-300 transition-colors duration-300"> rapid learning</span>.
              </p>
              
              <div className="flex items-center space-x-2 text-muted-foreground group hover:text-foreground transition-colors duration-300 cursor-pointer">
                <Heart className="h-5 w-5 text-red-500 group-hover:text-red-400 group-hover:scale-125 group-hover:animate-pulse transition-all duration-300" />
                <span className="group-hover:scale-105 transform transition-all duration-300">Passionate about creating meaningful solutions</span>
              </div>
            </div>
            
            <div className="relative animate-scale-in delay-500">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-900 via-purple-900 to-cyan-900 rounded-full flex items-center justify-center transform hover:scale-110 hover:rotate-12 transition-all duration-700 shadow-2xl hover:shadow-blue-500/50 group cursor-pointer">
                <Code2 className="h-32 w-32 text-blue-400 group-hover:text-cyan-300 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-pulse" />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center transform hover:scale-125 hover:rotate-45 transition-all duration-500 shadow-lg hover:shadow-orange-500/50 animate-bounce cursor-pointer">
                <span className="text-2xl hover:scale-125 transition-transform duration-300">🚀</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center transform hover:scale-125 hover:rotate-45 transition-all duration-500 shadow-lg hover:shadow-green-500/50 animate-bounce delay-500 cursor-pointer">
                <span className="text-xl hover:scale-125 transition-transform duration-300">💡</span>
              </div>
              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur-sm animate-pulse delay-1000"></div>
              <div className="absolute top-1/4 -right-6 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-sm animate-pulse delay-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

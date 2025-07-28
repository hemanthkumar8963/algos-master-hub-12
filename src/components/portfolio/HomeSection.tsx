
import { ChevronDown, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const HomeSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 flex items-center pt-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 transform hover:scale-105 transition-transform duration-500">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
                SOMANA HEMANTH KUMAR
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-300 mb-8 animate-bounce delay-300">
              Full Stack Developer | ML Explorer
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed transform hover:scale-105 transition-all duration-300">
              Passionate about creating innovative solutions through code, securing digital landscapes, 
              and exploring the frontiers of machine learning technology.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-scale-in delay-700">
            <Button 
              asChild 
              variant="linkedin"
              size="lg"
              className="transform hover:scale-110 hover:rotate-3 hover:shadow-2xl transition-all duration-300 hover:shadow-blue-500/50"
            >
              <a href="https://www.linkedin.com/in/hemanth-kumar-somana-2029b5212/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                <Linkedin className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                <span>LinkedIn</span>
              </a>
            </Button>
            
            <Button 
              asChild 
              variant="github"
              size="lg"
              className="transform hover:scale-110 hover:rotate-3 hover:shadow-2xl transition-all duration-300 hover:shadow-purple-500/50"
            >
              <a href="https://github.com/Hemanth-Kumar-Somana" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                <Github className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                <span>GitHub</span>
              </a>
            </Button>
            
            <Button 
              asChild 
              variant="email"
              size="lg"
              className="transform hover:scale-110 hover:rotate-3 hover:shadow-2xl transition-all duration-300 hover:shadow-green-500/50"
            >
              <a href="mailto:hemanthkumarsomana@gmail.com" className="flex items-center space-x-2">
                <Mail className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                <span>Email</span>
              </a>
            </Button>
            
            <Button 
              asChild 
              variant="resume"
              size="lg"
              className="transform hover:scale-110 hover:rotate-3 hover:shadow-2xl transition-all duration-300 hover:shadow-orange-500/50"
            >
              <a href="https://drive.google.com/drive/folders/1UNQzAjpEFmiSDNKKjK1dDo6AJVDOk7ce?usp=drive_link" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                <FileText className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                <span>Resume</span>
              </a>
            </Button>
          </div>
          
          <div className="animate-bounce delay-1000">
            <button 
              onClick={() => scrollToSection('about')}
              className="group p-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 transform hover:scale-125 hover:rotate-12"
            >
              <ChevronDown className="h-6 w-6 text-white group-hover:animate-pulse" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};


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
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-950 via-background to-purple-950 flex items-center pt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                SOMANA HEMANTH KUMAR
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Full Stack Developer | ML Explorer
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Passionate about creating innovative solutions through code, securing digital landscapes, 
              and exploring the frontiers of machine learning technology.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button 
              asChild 
              variant="linkedin"
              size="lg"
            >
              <a href="https://www.linkedin.com/in/hemanth-kumar-somana-2029b5212/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </a>
            </Button>
            
            <Button 
              asChild 
              variant="github"
              size="lg"
            >
              <a href="https://github.com/Hemanth-Kumar-Somana" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </a>
            </Button>
            
            <Button 
              asChild 
              variant="email"
              size="lg"
            >
              <a href="mailto:hemanthkumarsomana@gmail.com" className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>Email</span>
              </a>
            </Button>
            
            <Button 
              asChild 
              variant="resume"
              size="lg"
            >
              <a href="https://drive.google.com/drive/folders/1UNQzAjpEFmiSDNKKjK1dDo6AJVDOk7ce?usp=drive_link" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                <FileText className="h-5 w-5" />
                <span>Resume</span>
              </a>
            </Button>
          </div>
          
          <div className="animate-bounce">
            <button 
              onClick={() => scrollToSection('about')}
              className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <ChevronDown className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

import { Button } from '@/components/ui/button';
import { Mail, Github, ExternalLink, ChevronDown } from 'lucide-react';
import { Code2 } from 'lucide-react';

export const HomeSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className={`absolute w-1 h-1 bg-white/20 rounded-full animate-pulse`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`
          }}
        />
      ))}

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              SOMANA HEMANTH KUMAR
            </h1>
            <h2 className="text-xl md:text-2xl text-slate-300 font-medium">
              Full Stack Developer | ML Explorer
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Passionate about creating efficient solutions through code and exploring the realms of 
              cybersecurity, machine learning, and the MERN stack.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              className="bg-linkedin hover:bg-linkedin/90 text-linkedin-foreground border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              onClick={() => window.open('https://www.linkedin.com/in/hemanth-kumar-somana-a91982257/', '_blank')}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
            
            <Button
              className="bg-github hover:bg-github/90 text-github-foreground border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              onClick={() => window.open('https://github.com/hemanthsomana', '_blank')}
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
            
            <Button
              className="bg-email hover:bg-email/90 text-email-foreground border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              onClick={() => window.open('mailto:hemanthkumarsomana@gmail.com', '_blank')}
            >
              <Mail className="mr-2 h-4 w-4" />
              Email
            </Button>
            
            <Button
              className="bg-resume hover:bg-resume/90 text-resume-foreground border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              onClick={() => window.open('https://docs.google.com/document/d/1TmtJPe-y2wE1MdNrNIFBXKHhv-SzBBJhzLgDvRvhDdI/edit?usp=sharing', '_blank')}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Resume
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <button
              onClick={() => scrollToSection('about')}
              className="flex flex-col items-center space-y-2 text-slate-400 hover:text-white transition-colors duration-300 group"
            >
              <span className="text-sm">Scroll Down</span>
              <ChevronDown className="h-6 w-6 animate-bounce group-hover:text-blue-400 transition-colors duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

import { Home, User, Code, Briefcase, Calendar, Terminal, Mail } from 'lucide-react';
import { useState } from 'react';

export const SidebarNav = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const navItems = [
    { label: 'Home', id: 'home', icon: Home },
    { label: 'About', id: 'about', icon: User },
    { label: 'Skills', id: 'skills', icon: Code },
    { label: 'Projects', id: 'projects', icon: Briefcase },
    { label: 'Experience', id: 'experience', icon: Calendar },
    { label: 'Coding Profiles', id: 'coding-profiles', icon: Terminal },
    { label: 'Contact', id: 'contact', icon: Mail },
  ];

  return (
    <div className="hidden lg:flex fixed left-4 top-4 bottom-4 w-64 bg-slate-900/95 backdrop-blur-sm rounded-lg border border-slate-700 z-50">
      <nav className="flex flex-col w-full p-4">
        {/* Logo/Brand */}
        <div className="flex items-center space-x-3 mb-8 pb-4 border-b border-slate-700">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <Code className="h-6 w-6 text-white" />
          </div>
          <span className="text-white font-semibold text-lg">Portfolio</span>
        </div>

        {/* Navigation Items */}
        <div className="flex flex-col space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center space-x-4 px-4 py-3 rounded-lg transition-all duration-200 group ${
                  isActive 
                    ? 'bg-slate-800 text-white' 
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <Icon className={`h-5 w-5 transition-colors duration-200 ${
                  isActive ? 'text-blue-400' : 'text-slate-400 group-hover:text-blue-400'
                }`} />
                <span className="font-medium">{item.label}</span>
                {isActive && (
                  <div className="ml-auto w-1 h-6 bg-blue-400 rounded-full"></div>
                )}
              </button>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="mt-auto pt-4 border-t border-slate-700">
          <div className="text-xs text-slate-500 text-center">
            © 2024 Hemanth Kumar
          </div>
        </div>
      </nav>
    </div>
  );
};

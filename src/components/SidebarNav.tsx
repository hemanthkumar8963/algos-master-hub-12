
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
    <div className="hidden md:block fixed top-4 left-0 right-0 z-50">
      <div className="grid grid-cols-12 px-4">
        <div className="col-span-12 md:col-start-3 md:col-end-11">
          <nav className="bg-slate-900/95 backdrop-blur-sm rounded-lg border border-slate-700 p-4">
            <div className="flex items-center justify-between">
              {/* Logo Icon */}
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="h-5 w-5 text-white" />
              </div>

              {/* Navigation Items - Centered */}
              <div className="flex items-center space-x-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 group ${
                        isActive 
                          ? 'bg-slate-800 text-white' 
                          : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                      }`}
                    >
                      <Icon className={`h-4 w-4 transition-colors duration-200 ${
                        isActive ? 'text-blue-400' : 'text-slate-400 group-hover:text-blue-400'
                      }`} />
                      <span className="font-medium text-sm">{item.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Empty div for balance */}
              <div className="w-8"></div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

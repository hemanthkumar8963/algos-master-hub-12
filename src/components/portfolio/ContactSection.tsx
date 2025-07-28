
import { Mail, Github, ExternalLink, Send, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ContactSection = () => {
  const contactInfo = [
    {
      label: "Email",
      value: "hemanthkumarsomana@gmail.com",
      href: "mailto:hemanthkumarsomana@gmail.com",
      icon: <Mail className="h-5 w-5" />,
      color: "from-red-500 to-pink-500",
      hoverColor: "from-red-600 to-pink-600"
    },
    {
      label: "WhatsApp",
      value: "Chat on WhatsApp",
      href: "https://wa.me/919398756712",
      icon: <MessageSquare className="h-5 w-5" />,
      color: "from-green-500 to-green-600",
      hoverColor: "from-green-600 to-green-700"
    },
    {
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/hemanth-kumar-somana-2029b5212/",
      icon: <ExternalLink className="h-5 w-5" />,
      color: "from-blue-500 to-cyan-500",
      hoverColor: "from-blue-600 to-cyan-600"
    },
    {
      label: "GitHub",
      value: "View my repositories",
      href: "https://github.com/Hemanth-Kumar-Somana",
      icon: <Github className="h-5 w-5" />,
      color: "from-gray-700 to-gray-900",
      hoverColor: "from-gray-800 to-black"
    },
    {
      label: "Resume",
      value: "Download Resume",
      href: "https://drive.google.com/drive/folders/1UNQzAjpEFmiSDNKKjK1dDo6AJVDOk7ce?usp=drive_link",
      icon: <ExternalLink className="h-5 w-5" />,
      color: "from-green-500 to-emerald-500",
      hoverColor: "from-green-600 to-emerald-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          
          <div className="text-center mb-12">
            <p className="text-xl text-muted-foreground mb-6">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology!
            </p>
            <p className="text-lg text-muted-foreground">
              Feel free to reach out through any of the channels below.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-border hover:border-blue-300 transform hover:-translate-y-4 hover:scale-[1.08] hover:bg-gradient-to-br hover:from-blue-950 hover:via-background hover:to-purple-950 cursor-pointer"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${contact.color} group-hover:bg-gradient-to-r group-hover:${contact.hoverColor} flex items-center justify-center text-white group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 group-hover:shadow-xl`}>
                    {contact.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground group-hover:text-blue-300 transition-colors duration-300 group-hover:scale-105 transform">
                      {contact.label}
                    </h3>
                    <p className="text-muted-foreground group-hover:text-card-foreground transition-colors duration-300">
                      {contact.value}
                    </p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300" />
                </div>
              </a>
            ))}
          </div>
          
          <div className="text-center">
            <div className="group bg-gradient-to-r from-blue-950 to-purple-950 rounded-xl p-8 border-2 border-blue-900 hover:border-blue-700 hover:from-blue-900 hover:to-purple-900 transition-all duration-500 hover:shadow-lg cursor-pointer">
              <h3 className="text-2xl font-semibold text-foreground group-hover:text-blue-300 mb-4 transition-colors duration-300">Ready to collaborate?</h3>
              <p className="text-muted-foreground group-hover:text-foreground mb-6 max-w-2xl mx-auto transition-colors duration-300">
                Whether you have a project in mind, want to discuss opportunities, or just want to connect, 
                I'd love to hear from you. Let's build something amazing together!
              </p>
              <Button 
                asChild 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-110 hover:shadow-xl transition-all duration-300"
              >
                <a href="mailto:hemanthkumarsomana@gmail.com" className="flex items-center space-x-2">
                  <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  <span>Send me an email</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

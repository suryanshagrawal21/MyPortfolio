import { Github, Linkedin, Mail, Heart, Code2 } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#0A0A0F]">
      <div className="max-w-6xl mx-auto px-5 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #6C63FF, #00D4AA)' }}>
              <Code2 size={15} className="text-white" />
            </div>
            <span className="font-display font-bold text-white">suryansh<span className="gradient-text">.</span></span>
          </div>

          {/* Made with */}
          <p className="text-[#55556A] text-xs font-mono flex items-center gap-1">
            Made with <Heart size={12} className="text-[#6C63FF] fill-[#6C63FF]" /> using React + Vite + Tailwind
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
              className="text-[#55556A] hover:text-white transition-all hover:-translate-y-1 duration-200">
              <Github size={18} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
              className="text-[#55556A] hover:text-[#6C63FF] transition-all hover:-translate-y-1 duration-200">
              <Linkedin size={18} />
            </a>
            <a href={`mailto:${personalInfo.email}`}
              className="text-[#55556A] hover:text-[#00D4AA] transition-all hover:-translate-y-1 duration-200">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 mt-6 pt-6 text-center">
          <p className="text-[#55556A] text-xs font-mono">
            © {year} {personalInfo.name} · B.Tech CSE · SRM IST Delhi NCR
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { Menu, X, Code2 } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

const navLinks = [
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Experience', to: 'experience' },
  { label: 'Profiles', to: 'profiles' },
  { label: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'navbar-glass' : ''}`}
    >
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="home" smooth duration={500} className="cursor-pointer">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #6C63FF, #00D4AA)' }}>
              <Code2 size={16} className="text-white" />
            </div>
            <span className="font-display font-bold text-white text-base">
              suryansh<span className="gradient-text">.</span>
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={500}
              offset={-64}
              spy
              onSetActive={() => setActiveSection(link.to)}
              className={`px-4 py-2 rounded-lg text-sm font-medium cursor-pointer transition-all duration-200 ${
                activeSection === link.to
                  ? 'text-white bg-[#6C63FF]/12'
                  : 'text-[#8888A8] hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-2 px-5"
          >
            Resume ↗
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-[#8888A8] hover:text-white hover:bg-white/5 transition-all"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden navbar-glass border-t border-white/5"
          >
            <div className="max-w-6xl mx-auto px-5 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth
                  duration={500}
                  offset={-64}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-xl text-[#8888A8] hover:text-white hover:bg-white/5 text-sm font-medium cursor-pointer transition-all"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-2 justify-center text-sm"
                onClick={() => setMobileOpen(false)}
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

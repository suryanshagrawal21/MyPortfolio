import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 z-0">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#6C63FF 1px, transparent 1px), linear-gradient(90deg, #6C63FF 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Floating orbs */}
        <div className="orb-float absolute top-[15%] left-[10%] w-80 h-80 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(108,99,255,0.18) 0%, transparent 70%)' }} />
        <div className="orb-float-reverse absolute bottom-[20%] right-[8%] w-96 h-96 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(0,212,170,0.14) 0%, transparent 70%)' }} />
        <div className="orb-float absolute top-[60%] left-[60%] w-56 h-56 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(108,99,255,0.10) 0%, transparent 70%)' }} />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 flex flex-col lg:flex-row items-center justify-between gap-16 pt-24 pb-16">

        {/* Left: Text */}
        <div className="flex flex-col items-start max-w-2xl w-full lg:w-3/5">

          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="status-available mb-8"
          >
            <span className="status-dot" />
            {personalInfo.availability}
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="font-mono text-[#8888A8] text-sm tracking-wider mb-3"
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="font-display text-5xl md:text-7xl lg:text-[90px] font-extrabold text-white leading-none mb-4 tracking-tight"
          >
            {personalInfo.name}
            <span className="gradient-text">.</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="h-16 md:h-20 flex items-center mb-6"
          >
            <h2 className="text-2xl md:text-4xl font-bold font-display">
              <span className="text-[#8888A8]">I'm a </span>
              <TypeAnimation
                sequence={personalInfo.roles}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="gradient-text"
              />
            </h2>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="text-[#8888A8] text-base md:text-lg leading-relaxed max-w-xl mb-10"
          >
            {personalInfo.bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <Download size={17} />
              Download Resume
            </a>
            <Link to="contact" smooth duration={600} offset={-80}>
              <button className="btn-outline">
                <Mail size={17} />
                Contact Me
              </button>
            </Link>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex items-center gap-5"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#8888A8] hover:text-white transition-all duration-200 hover:-translate-y-1 text-sm font-medium"
            >
              <Github size={20} />
              GitHub
            </a>
            <span className="w-px h-4 bg-white/10" />
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#8888A8] hover:text-[#6C63FF] transition-all duration-200 hover:-translate-y-1 text-sm font-medium"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <span className="w-px h-4 bg-white/10" />
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 text-[#8888A8] hover:text-[#00D4AA] transition-all duration-200 hover:-translate-y-1 text-sm font-medium"
            >
              <Mail size={20} />
              Email
            </a>
          </motion.div>
        </div>

        {/* Right: Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="w-full lg:w-2/5 flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Spinning ring */}
            <div className="slow-spin absolute -inset-4 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, #6C63FF, #00D4AA, transparent, #6C63FF)',
                opacity: 0.3,
              }}
            />
            {/* Avatar container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-1"
              style={{ background: 'linear-gradient(135deg, #6C63FF, #00D4AA)' }}>
              <div className="w-full h-full rounded-full overflow-hidden bg-[#1A1A28]">
                <img
                  src="/assets/images/suryansh main.jpeg"
                  alt="Suryansh Agrawal"
                  className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700"
                  onError={(e) => {
                    // Fallback to initials avatar
                    const el = e.currentTarget;
                    el.style.display = 'none';
                    const parent = el.parentElement;
                    if (parent) {
                      parent.innerHTML = `<div class="w-full h-full flex items-center justify-center text-6xl font-bold text-white font-display" style="background: linear-gradient(135deg,#6C63FF,#00D4AA)">SA</div>`;
                    }
                  }}
                />
              </div>
            </div>

            {/* Floating tech badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-2 -right-4 glass-card px-3 py-2 text-xs font-mono font-medium text-[#6C63FF]"
              style={{ borderRadius: '10px' }}
            >
              ⚡ MERN Stack
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -bottom-2 -left-4 glass-card px-3 py-2 text-xs font-mono font-medium text-[#00D4AA]"
              style={{ borderRadius: '10px' }}
            >
              🤖 AI / ML
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#8080A0]"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../../data/portfolioData';
import { SectionWrapper, SectionHeading, itemVariants } from '../ui/SectionWrapper';

type Filter = 'All' | 'MERN' | 'AI/ML' | 'Full Stack' | 'Backend';
const filters: Filter[] = ['All', 'MERN', 'AI/ML', 'Full Stack', 'Backend'];

const Projects = () => {
  const [active, setActive] = useState<Filter>('All');

  const filtered = active === 'All'
    ? projects
    : projects.filter((p) => p.category === active);

  return (
    <SectionWrapper id="projects">
      <SectionHeading
        eyebrow="// Projects"
        title="What I've Built"
        subtitle="Handpicked projects showcasing full-stack, AI/ML, and software engineering skills."
        centered
      />

      {/* Filter Bar */}
      <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-12">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`filter-pill ${active === f ? 'active' : ''}`}
          >
            {f}
          </button>
        ))}
      </motion.div>

      {/* Cards Grid — rendered without AnimatePresence to avoid scroll-trigger issue */}
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filtered.map((project) => (
          <div
            key={project.id}
            className="glass-card p-6 flex flex-col h-full group relative overflow-hidden"
          >
            {/* Hover glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
              style={{ background: `radial-gradient(ellipse at top left, ${project.accentColor}15 0%, transparent 65%)` }}
            />

            {/* Card Header */}
            <div className="flex items-start justify-between mb-4 relative z-10">
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: `${project.accentColor}18`, border: `1.5px solid ${project.accentColor}35` }}
                >
                  {project.emoji}
                </div>
                <span
                  className="text-[11px] font-mono font-semibold uppercase tracking-widest"
                  style={{ color: project.accentColor }}
                >
                  {project.category}
                </span>
              </div>
            </div>

            {/* Title + Description */}
            <div className="relative z-10 flex-grow mb-4">
              <h3 className="font-display font-bold text-white text-[16px] leading-snug mb-1">
                {project.title}
              </h3>
              <p className="text-[12px] font-medium mb-3" style={{ color: project.accentColor }}>
                {project.subtitle}
              </p>
              <p className="text-[13px] text-[#8888A8] leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Key Highlights */}
            <div className="relative z-10 mb-4">
              <ul className="space-y-1.5">
                {project.highlights.slice(0, 3).map((h) => (
                  <li key={h} className="flex items-start gap-2 text-[12px] text-[#8888A8]">
                    <span className="flex-shrink-0 mt-0.5" style={{ color: project.accentColor }}>▸</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="relative z-10 flex flex-wrap gap-1.5 pt-3 border-t border-white/5 mb-4">
              {project.tags.slice(0, 5).map((tag) => (
                <span key={tag} className="tag-badge">{tag}</span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="relative z-10 flex gap-3 mt-auto">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-[13px] font-semibold text-white border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/25 transition-all duration-200"
              >
                <Github size={14} />
                GitHub Repo
              </a>
              {project.liveLink ? (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-[13px] font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
                  style={{
                    background: `linear-gradient(135deg, ${project.accentColor}CC, ${project.accentColor}88)`,
                    border: `1px solid ${project.accentColor}50`,
                  }}
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
              ) : (
                <button
                  disabled
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-[13px] font-semibold text-[#55556A] border border-white/5 bg-white/[0.02] cursor-not-allowed"
                >
                  <ExternalLink size={14} />
                  Coming Soon
                </button>
              )}
            </div>
          </div>
        ))}
      </motion.div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-[#55556A]">
          <p className="text-4xl mb-3">🔍</p>
          <p className="font-mono text-sm">No projects in this category yet.</p>
        </div>
      )}
    </SectionWrapper>
  );
};

export default Projects;

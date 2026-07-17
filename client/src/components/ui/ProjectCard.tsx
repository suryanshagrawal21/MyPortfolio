import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import type { Project } from '../../data/portfolioData';
import { itemVariants } from './SectionWrapper';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      variants={itemVariants}
      className="glass-card p-6 flex flex-col h-full group relative overflow-hidden"
    >
      {/* Accent glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{
          background: `radial-gradient(ellipse at top left, ${project.accentColor}12 0%, transparent 60%)`,
        }}
      />

      {/* Header */}
      <div className="flex items-start justify-between mb-4 relative z-10">
        <div className="flex items-center gap-3">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
            style={{ background: `${project.accentColor}18`, border: `1.5px solid ${project.accentColor}30` }}
          >
            {project.emoji}
          </div>
          <div>
            <span
              className="text-[11px] font-mono font-medium uppercase tracking-widest"
              style={{ color: project.accentColor }}
            >
              {project.category}
            </span>
          </div>
        </div>
        <div className="flex gap-2">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-lg text-[#8888A8] hover:text-white bg-white/5 hover:bg-white/10 transition-all duration-200"
            title="View Source"
          >
            <Github size={15} />
          </a>
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-lg text-[#8888A8] hover:text-white bg-white/5 hover:bg-white/10 transition-all duration-200"
              title="Live Demo"
            >
              <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>

      {/* Title & Description */}
      <div className="relative z-10 mb-4 flex-grow">
        <h3 className="text-[17px] font-bold text-white mb-1 font-display leading-tight">
          {project.title}
        </h3>
        <p className="text-[13px] text-[#6C63FF] font-medium mb-3">{project.subtitle}</p>
        <p className="text-[14px] text-[#8888A8] leading-relaxed line-clamp-3">{project.description}</p>
      </div>

      {/* Highlights */}
      <div className="relative z-10 mb-4">
        <ul className="space-y-1">
          {project.highlights.slice(0, 3).map((h) => (
            <li key={h} className="flex items-start gap-2 text-[13px] text-[#8888A8]">
              <span style={{ color: project.accentColor }} className="mt-0.5 flex-shrink-0">▸</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tags */}
      <div className="relative z-10 flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-white/5">
        {project.tags.slice(0, 5).map((tag) => (
          <span key={tag} className="tag-badge">{tag}</span>
        ))}
      </div>
    </motion.div>
  );
}

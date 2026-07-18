import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../data/portfolioData';
import { SectionWrapper, SectionHeading } from '../ui/SectionWrapper';
import { ProjectCard } from '../ui/ProjectCard';

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
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`filter-pill ${active === f ? 'active' : ''}`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filtered.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
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

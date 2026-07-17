import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/portfolioData';
import { ArrowLeft, Github, ExternalLink, CheckCircle } from 'lucide-react';

const ProjectCaseStudy = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center p-8 text-center pt-32">
        <div className="w-20 h-20 mb-8 rounded-2xl glass-card flex items-center justify-center">
          <span className="text-4xl">🔍</span>
        </div>
        <h1 className="text-4xl text-white font-bold mb-4 font-display">Project Not Found</h1>
        <p className="text-[#8888A8] mb-8 max-w-md">This project doesn't exist or has been moved.</p>
        <Link
          to="/"
          className="btn-primary"
        >
          <ArrowLeft size={18} />
          Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <article className="pt-28 pb-24 min-h-screen" style={{ background: '#0A0A0F' }}>
      <div className="max-w-4xl mx-auto px-5">

        {/* Back */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#8888A8] hover:text-white font-mono text-sm mb-10 transition-colors border border-white/8 hover:border-white/20 px-4 py-2 rounded-full bg-white/3"
        >
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full font-mono text-xs mb-5"
            style={{
              background: `${project.accentColor}15`,
              border: `1px solid ${project.accentColor}30`,
              color: project.accentColor,
            }}
          >
            {project.category}
          </div>
          <div className="flex items-center gap-4 mb-3">
            <span className="text-5xl">{project.emoji}</span>
            <h1 className="text-3xl md:text-5xl font-bold text-white font-display leading-tight">
              {project.title}
            </h1>
          </div>
          <p className="text-[#6C63FF] text-lg font-medium mb-4">{project.subtitle}</p>
          <p className="text-[#8888A8] text-base leading-relaxed max-w-3xl mb-8">{project.description}</p>

          <div className="flex flex-wrap gap-3 mb-10">
            <a href={project.githubLink} target="_blank" rel="noreferrer" className="btn-outline text-sm py-2.5 px-5">
              <Github size={16} /> View Source
            </a>
            {project.liveLink && (
              <a href={project.liveLink} target="_blank" rel="noreferrer" className="btn-primary text-sm py-2.5 px-5">
                <ExternalLink size={16} /> Live Demo
              </a>
            )}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="tag-badge text-xs px-3 py-1">{tag}</span>
            ))}
          </div>
        </header>

        {/* Highlights */}
        <div className="glass-card p-7 mb-8">
          <h2 className="text-xl font-bold text-white font-display mb-5 flex items-center gap-2">
            <span style={{ color: project.accentColor }}>01.</span> Key Features
          </h2>
          <ul className="space-y-3">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-[#8888A8] text-[15px] leading-relaxed">
                <CheckCircle size={18} className="flex-shrink-0 mt-0.5" style={{ color: project.accentColor }} />
                {h}
              </li>
            ))}
          </ul>
        </div>

        {/* Long Description */}
        <div className="glass-card p-7 mb-12">
          <h2 className="text-xl font-bold text-white font-display mb-5 flex items-center gap-2">
            <span style={{ color: project.accentColor }}>02.</span> Technical Overview
          </h2>
          <p className="text-[#8888A8] text-[15px] leading-relaxed">{project.longDescription}</p>
        </div>

        {/* Footer CTA */}
        <div className="text-center border-t border-white/5 pt-12">
          <p className="text-[#8888A8] text-sm mb-4">Want to see more projects?</p>
          <Link to="/" className="btn-primary inline-flex">
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProjectCaseStudy;

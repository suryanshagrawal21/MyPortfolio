import { motion } from 'framer-motion';
import { experiences } from '../../data/portfolioData';
import { SectionWrapper, SectionHeading, itemVariants } from '../ui/SectionWrapper';
import { MapPin, Calendar, Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <SectionWrapper id="experience" className="bg-[#0D0D15]">
      <SectionHeading eyebrow="// Experience" title="My Journey" centered />

      <div className="max-w-3xl mx-auto relative">
        {/* Vertical timeline line */}
        <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-[#6C63FF] via-[#6C63FF]/30 to-transparent" />

        <div className="space-y-10 pl-16">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              variants={itemVariants}
              transition={{ delay: i * 0.12 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="timeline-dot absolute -left-[52px] top-0">
                <Briefcase size={16} className="text-[#6C63FF]" />
              </div>

              <div className="glass-card p-6">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-white font-bold font-display text-lg leading-tight">
                      {exp.role}
                    </h3>
                    <p className="text-[#6C63FF] font-medium text-sm mt-0.5">{exp.company}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1.5">
                    <span className="flex items-center gap-1.5 text-[11px] font-mono text-[#8888A8]">
                      <Calendar size={12} />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5 text-[11px] font-mono text-[#8888A8]">
                      <MapPin size={12} />
                      {exp.location}
                    </span>
                    <span
                      className="text-[10px] px-2 py-0.5 rounded-full font-mono"
                      style={{
                        background: 'rgba(0,212,170,0.1)',
                        border: '1px solid rgba(0,212,170,0.25)',
                        color: '#00D4AA',
                      }}
                    >
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-2 mb-4">
                  {exp.description.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-[13px] text-[#8888A8] leading-relaxed">
                      <span className="text-[#6C63FF] mt-1 flex-shrink-0">▸</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills used */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                  {exp.skills.map((s) => (
                    <span key={s} className="tag-badge">{s}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;

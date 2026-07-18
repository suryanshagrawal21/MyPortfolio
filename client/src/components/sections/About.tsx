import { motion } from 'framer-motion';
import { personalInfo, skillGroups } from '../../data/portfolioData';
import { SectionWrapper, SectionHeading } from '../ui/SectionWrapper';
import { itemVariants } from '../../constants/animations';
import { Code2, Cpu, Database, Layers } from 'lucide-react';

const statItems = [
  { label: 'Projects Built', value: '6+', icon: '🚀' },
  { label: 'CGPA', value: '8.99', icon: '🎓' },
  { label: 'Tech Stack', value: 'MERN', icon: '⚙️' },
  { label: 'Status', value: 'Open', icon: '✅' },
];

const focusAreas = [
  { icon: <Layers size={20} />, label: 'Full Stack MERN', color: '#6C63FF' },
  { icon: <Cpu size={20} />, label: 'AI / ML Pipelines', color: '#00D4AA' },
  { icon: <Database size={20} />, label: 'System Design', color: '#8B85FF' },
  { icon: <Code2 size={20} />, label: 'Clean Code & DSA', color: '#F59E0B' },
];

const About = () => {
  return (
    <SectionWrapper id="about">
      <SectionHeading eyebrow="// About Me" title="Who I Am" centered />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left: Bio & Stats */}
        <motion.div variants={itemVariants} className="space-y-8">
          <div className="space-y-4">
            <p className="text-[#8888A8] text-base leading-relaxed">
              {personalInfo.bio}
            </p>
            <p className="text-[#8888A8] text-base leading-relaxed">
              I believe great software is built at the intersection of <span className="text-[#6C63FF] font-medium">engineering rigour</span>, creative problem-solving, and a deep curiosity for how systems work at scale. Currently studying at <span className="text-white font-medium">SRM IST Delhi-NCR</span> and actively building projects that solve real-world problems.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {statItems.map((stat) => (
              <div key={stat.label} className="glass-card p-4 flex items-center gap-3">
                <span className="text-2xl">{stat.icon}</span>
                <div>
                  <div className="text-xl font-bold font-display gradient-text">{stat.value}</div>
                  <div className="text-xs text-[#8888A8] font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Focus Areas */}
          <div className="space-y-3">
            <p className="text-sm font-mono text-[#6C63FF] uppercase tracking-widest">Focus Areas</p>
            <div className="grid grid-cols-2 gap-3">
              {focusAreas.map((area) => (
                <div
                  key={area.label}
                  className="flex items-center gap-3 p-3 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all"
                >
                  <span style={{ color: area.color }}>{area.icon}</span>
                  <span className="text-sm text-[#C0C0E0] font-medium">{area.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: Tech Stack Visual */}
        <motion.div variants={itemVariants} className="space-y-6">
          <p className="text-sm font-mono text-[#6C63FF] uppercase tracking-widest mb-5">Core Technologies</p>
          {skillGroups.slice(0, 4).map((group) => (
            <div key={group.category} className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-medium text-[#C0C0E0]">
                <span>{group.icon}</span>
                <span>{group.category}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-[12px] font-medium text-[#C0C0E0] rounded-md border border-white/8 bg-white/[0.03] hover:border-[#6C63FF]/40 hover:text-white transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default About;

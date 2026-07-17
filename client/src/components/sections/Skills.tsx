import { motion } from 'framer-motion';
import { skillGroups } from '../../data/portfolioData';
import { SectionWrapper, SectionHeading, itemVariants } from '../ui/SectionWrapper';

const Skills = () => {
  return (
    <SectionWrapper id="skills" className="bg-[#0D0D15]">
      <SectionHeading
        eyebrow="// Technical Skills"
        title="My Toolkit"
        subtitle="Technologies I work with daily to build full-stack applications and intelligent systems."
        centered
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.category}
            variants={itemVariants}
            transition={{ delay: i * 0.06 }}
            className="glass-card p-6 group"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-[#6C63FF]/10 border border-[#6C63FF]/20 flex items-center justify-center text-xl">
                {group.icon}
              </div>
              <h3 className="font-display font-semibold text-white text-[15px]">{group.category}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, j) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 + j * 0.04, duration: 0.3 }}
                  className="skill-badge"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;

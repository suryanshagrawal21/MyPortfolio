import { motion } from 'framer-motion';
import { education } from '../../data/portfolioData';
import { SectionWrapper, SectionHeading, itemVariants } from '../ui/SectionWrapper';
import { GraduationCap, Star } from 'lucide-react';

const Education = () => {
  const edu = education[0];

  return (
    <SectionWrapper id="education" className="bg-[#0D0D15]">
      <SectionHeading eyebrow="// Education" title="Academic Background" centered />

      <div className="max-w-3xl mx-auto">
        <motion.div variants={itemVariants} className="glass-card p-8 relative overflow-hidden">

          {/* Background accent */}
          <div className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none opacity-10"
            style={{ background: 'radial-gradient(circle, #6C63FF 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />

          <div className="flex flex-col sm:flex-row items-start gap-6 relative z-10">
            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(108,99,255,0.12)', border: '1.5px solid rgba(108,99,255,0.3)' }}>
              <GraduationCap size={30} className="text-[#6C63FF]" />
            </div>

            <div className="flex-grow">
              {/* Degree */}
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="text-white font-bold font-display text-xl">{edu.degree}</h3>
                <span className="text-xs px-2.5 py-1 rounded-full font-mono"
                  style={{ background: 'rgba(0,212,170,0.1)', border: '1px solid rgba(0,212,170,0.25)', color: '#00D4AA' }}>
                  {edu.duration}
                </span>
              </div>

              <p className="text-[#6C63FF] font-semibold text-base mb-1">{edu.field}</p>
              <p className="text-[#8888A8] text-sm mb-1">{edu.institution}</p>
              <p className="text-[#55556A] text-sm mb-5 font-mono">{edu.campus}</p>

              {/* CGPA */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl"
                  style={{ background: 'rgba(108,99,255,0.1)', border: '1px solid rgba(108,99,255,0.2)' }}>
                  <Star size={16} className="text-[#6C63FF]" />
                  <span className="font-bold text-lg gradient-text font-display">{edu.grade}</span>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-2">
                {edu.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 text-[13px] text-[#8888A8]">
                    <span className="text-[#00D4AA]">▸</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Education;

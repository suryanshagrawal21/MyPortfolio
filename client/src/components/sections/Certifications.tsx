import { motion } from 'framer-motion';
import { certifications } from '../../data/portfolioData';
import { SectionWrapper, SectionHeading } from '../ui/SectionWrapper';
import { itemVariants } from '../../constants/animations';
import { ExternalLink, Award } from 'lucide-react';

const Certifications = () => {
  return (
    <SectionWrapper id="certifications">
      <SectionHeading eyebrow="// Certifications" title="Credentials" centered />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.title}
            variants={itemVariants}
            transition={{ delay: i * 0.08 }}
            className="glass-card p-5 flex flex-col gap-4 group"
          >
            {/* Badge Icon */}
            <div className="flex items-center justify-between">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: `${cert.badgeColor}15`,
                  border: `1.5px solid ${cert.badgeColor}30`,
                }}
              >
                <Award size={22} style={{ color: cert.badgeColor }} />
              </div>
              <span className="text-xs font-mono text-[#55556A]">{cert.year}</span>
            </div>

            {/* Content */}
            <div className="flex-grow">
              <h4 className="text-white font-semibold font-display text-[14px] leading-snug mb-1">
                {cert.title}
              </h4>
              <p className="text-[12px] text-[#8888A8]">{cert.issuer}</p>
            </div>

            {/* Verify Link */}
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[12px] font-medium transition-all"
              style={{ color: cert.badgeColor }}
            >
              <ExternalLink size={12} />
              View Certificate
            </a>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Certifications;

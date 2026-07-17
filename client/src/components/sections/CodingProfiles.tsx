import { motion } from 'framer-motion';
import { codingProfiles, personalInfo } from '../../data/portfolioData';
import { SectionWrapper, SectionHeading, itemVariants } from '../ui/SectionWrapper';
import { ExternalLink } from 'lucide-react';

const CodingProfiles = () => {
  const ghUser = 'suryanshagrawal21';

  return (
    <SectionWrapper id="profiles">
      <SectionHeading
        eyebrow="// Coding Profiles"
        title="Find Me Online"
        subtitle="Active on competitive programming and open-source platforms."
        centered
      />

      {/* GitHub Stats */}
      <motion.div variants={itemVariants} className="mb-12">
        <p className="text-center text-sm font-mono text-[#6C63FF] uppercase tracking-widest mb-6">GitHub Statistics</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:-translate-y-1 transition-transform duration-200 block"
          >
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${ghUser}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=1A1A28&title_color=6C63FF&icon_color=00D4AA&text_color=C0C0E0&count_private=true`}
              alt="GitHub Stats"
              className="rounded-xl max-w-full h-auto"
              style={{ maxHeight: '200px' }}
            />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:-translate-y-1 transition-transform duration-200 block"
          >
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${ghUser}&theme=tokyonight&hide_border=true&background=1A1A28&ring=6C63FF&fire=00D4AA&currStreakLabel=6C63FF`}
              alt="GitHub Streak"
              className="rounded-xl max-w-full h-auto"
              style={{ maxHeight: '200px' }}
            />
          </a>
        </div>
      </motion.div>

      {/* Profile Links */}
      <motion.div variants={itemVariants}>
        <p className="text-center text-sm font-mono text-[#6C63FF] uppercase tracking-widest mb-6">Platforms</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {codingProfiles.map((profile) => (
            <motion.a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -4 }}
              whileTap={{ scale: 0.97 }}
              className="glass-card p-5 flex flex-col items-center gap-3 text-center no-underline group"
            >
              <span className="text-3xl">{profile.icon}</span>
              <div>
                <p className="font-semibold font-display text-white text-[14px] group-hover:text-[#6C63FF] transition-colors">
                  {profile.name}
                </p>
                <p className="text-[11px] font-mono mt-0.5" style={{ color: profile.color }}>
                  {profile.stat}
                </p>
              </div>
              <ExternalLink size={13} className="text-[#55556A] group-hover:text-[#6C63FF] transition-colors" />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default CodingProfiles;

import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/portfolioData';
import { SectionWrapper, SectionHeading, itemVariants } from '../ui/SectionWrapper';
import { Mail, Linkedin, Github, Send, CheckCircle } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const body = `Hi Suryansh,%0A%0AName: ${form.name}%0AEmail: ${form.email}%0A%0AMessage:%0A${form.message}`;
    window.open(
      `mailto:${personalInfo.email}?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${body}`,
      '_blank'
    );
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactLinks = [
    { icon: <Mail size={18} />, label: personalInfo.email, href: `mailto:${personalInfo.email}`, color: '#6C63FF' },
    { icon: <Linkedin size={18} />, label: 'LinkedIn', href: personalInfo.linkedin, color: '#00A0DC' },
    { icon: <Github size={18} />, label: 'GitHub', href: personalInfo.github, color: '#8888A8' },
  ];

  return (
    <SectionWrapper id="contact" className="bg-[#0D0D15]">
      <SectionHeading
        eyebrow="// Contact"
        title="Get In Touch"
        subtitle="Open to internship opportunities, full-time roles, and interesting collaborations."
        centered
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">

        {/* Left: Info */}
        <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
          <div className="glass-card p-6 space-y-5">
            <h3 className="font-display font-bold text-white text-lg">Let's Connect</h3>
            <p className="text-[#8888A8] text-sm leading-relaxed">
              Whether you have a project in mind, an internship opportunity, or just want to talk tech — I'd love to hear from you. I typically respond within 24 hours.
            </p>

            <div className="space-y-3 pt-2">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl border border-white/5 hover:border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all group"
                >
                  <span style={{ color: link.color }} className="group-hover:scale-110 transition-transform">
                    {link.icon}
                  </span>
                  <span className="text-[13px] text-[#C0C0E0] font-medium">{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Availability badge */}
          <div className="glass-card p-5 flex items-center gap-3">
            <span className="status-dot flex-shrink-0" />
            <div>
              <p className="text-white font-medium text-sm">Available Now</p>
              <p className="text-[#8888A8] text-xs">Actively seeking Internship / Full-Time</p>
            </div>
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div variants={itemVariants} className="lg:col-span-3">
          <div className="glass-card p-7">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-64 gap-4 text-center"
              >
                <CheckCircle size={48} className="text-[#00D4AA]" />
                <div>
                  <p className="text-white font-bold font-display text-lg">Email client opened!</p>
                  <p className="text-[#8888A8] text-sm mt-1">Check your email client to complete sending.</p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono text-[#8888A8] mb-2 uppercase tracking-wider">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-[#8888A8] mb-2 uppercase tracking-wider">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="input-field"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#8888A8] mb-2 uppercase tracking-wider">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Internship Opportunity / Collaboration"
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#8888A8] mb-2 uppercase tracking-wider">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project, role, or just say hi..."
                    className="input-field resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center">
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;

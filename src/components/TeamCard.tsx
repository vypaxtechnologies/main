import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github, User } from 'lucide-react';
import type { TeamMember } from '@/data/team';

export default function TeamCard({ member, index = 0 }: { member: TeamMember; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group overflow-hidden rounded-card border border-[var(--border)] bg-[var(--card)] shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
    >
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-navy-50 to-brand-blue/10 dark:from-navy-900 dark:to-navy-800">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <User className="h-20 w-20 text-[var(--text-muted)] opacity-30" />
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 flex justify-center gap-2 bg-gradient-to-t from-navy-900/80 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {member.social.linkedin && (
            <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} on LinkedIn`} className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/30">
              <Linkedin className="h-4 w-4" />
            </a>
          )}
          {member.social.twitter && (
            <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} on Twitter`} className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/30">
              <Twitter className="h-4 w-4" />
            </a>
          )}
          {member.social.github && (
            <a href={member.social.github} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} on GitHub`} className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/30">
              <Github className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-base font-semibold text-navy-900 dark:text-white">{member.name}</h3>
        <p className="text-sm font-medium text-brand-blue dark:text-brand-cyan">{member.role}</p>
        <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{member.bio}</p>
      </div>
    </motion.div>
  );
}

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, Sparkles } from 'lucide-react';
import { companyConfig } from '@/data/company';

interface Message {
  role: 'bot' | 'user';
  text: string;
  html?: string;
}

const quickActions = [
  'Website Development',
  'Digital Marketing',
  'SEO',
  'Custom Software',
  'Solutions',
  'Our Process',
  'Get a Quote',
  'Talk to Our Team',
];

// Local mock response engine — designed to be replaced by an LLM API
function getBotResponse(input: string): string {
  const q = input.toLowerCase();
  if (q.includes('hello') || q.includes('hi') || q.includes('hey') || q.includes('नमस्ते') || q.includes('नमस्कार'))
    return 'Hello! I can help you explore Vypax services, timelines, training and development, solutions, or the next step for your project.';
  if (q.includes('training') || q.includes('learning') || q.includes('course') || q.includes('development program'))
    return 'Our Training & Development programs focus on practical technology foundations, digital skills, career readiness, mentorship, and guided project learning.';
  if (q.includes('website') || q.includes('web'))
    return 'We build fast, responsive websites and web experiences with React, Node.js, Tailwind CSS, and SEO-ready foundations. We can support business websites, landing pages, portals, and e-commerce journeys.';
  if (q.includes('software') || q.includes('application') || q.includes('app') || q.includes('custom'))
    return 'Our custom software work includes dashboards, internal tools, workflow automation, API integrations, and web applications designed around your actual operations.';
  if (q.includes('marketing') || q.includes('social media') || q.includes('ads'))
    return 'Our digital marketing support covers campaign planning, content direction, paid acquisition, lead generation, analytics, and reporting focused on clear business goals.';
  if (q.includes('seo') || q.includes('search') || q.includes('ranking') || q.includes('google business') || q.includes('local'))
    return 'We work on technical SEO, content and on-page improvements, local search, Google Business Profile optimization, and measurement through search analytics.';
  if (q.includes('solution') || q.includes('industry') || q.includes('startup') || q.includes('healthcare') || q.includes('real estate'))
    return 'Our solutions are adapted for startups, healthcare, professional services, education, real estate, B2B, and SaaS teams. Visit the Solutions page or tell us about your business context.';
  if (q.includes('technology') || q.includes('tech stack') || q.includes('stack') || q.includes('react') || q.includes('node'))
    return 'We choose technology around the problem: React and TypeScript for interfaces, Node.js for APIs, MongoDB or other suitable databases, Tailwind CSS for UI, and analytics for learning.';
  if (q.includes('timeline') || q.includes('duration') || q.includes('how long'))
    return 'A focused business website often takes a few weeks, while custom software and growth engagements vary with discovery, integrations, and review cycles. We confirm a timeline after understanding the scope.';
  if (q.includes('project') || q.includes('portfolio') || q.includes('work'))
    return 'You can explore the Projects page for the kinds of digital systems and experiences we are prepared to build. For a relevant recommendation, share your goals with the team.';
  if (q.includes('career') || q.includes('job') || q.includes('hiring') || q.includes('join'))
    return 'Open roles and application details are available on the Careers page. You can also contact the team with your background and the kind of work you want to contribute to.';
  if (q.includes('contact') || q.includes('email') || q.includes('reach'))
    return `You can reach us at <a href="mailto:${companyConfig.email}" class="text-brand-blue dark:text-brand-cyan underline hover:opacity-80">${companyConfig.email}</a> or visit our contact page. We're based in ${companyConfig.location}.`;
  if (q.includes('location') || q.includes('where'))
    return `We're based in ${companyConfig.location}, and we work with clients across India and remotely.`;
  if (q.includes('process') || q.includes('how do you work') || q.includes('start'))
    return 'We usually begin with discovery, clarify the goal, shape the strategy, design the experience, build and test carefully, then support improvement after launch.';
  if (q.includes('support') || q.includes('maintenance'))
    return 'Yes, we provide ongoing maintenance and support plans for security updates, content changes, performance monitoring, and feature enhancements.';
  if (q.includes('team') || q.includes('talk'))
    return `You can reach our team at <a href="mailto:${companyConfig.email}" class="text-brand-blue dark:text-brand-cyan underline hover:opacity-80">${companyConfig.email}</a>. We'd be happy to schedule a free consultation.`;
  if (q.includes('data') || q.includes('analytics') || q.includes('sales') || q.includes('dashboard'))
    return 'Our data and analytics work helps teams understand performance, customer behavior, sales patterns, and operational bottlenecks through dashboards and practical recommendations.';
  if (q.includes('thank') || q.includes('thanks'))
    return 'You are welcome. I am here whenever you need help choosing a service or preparing your project brief.';
  return 'I can help with services, custom software, solutions, SEO, training and development, timelines, process, careers, projects, and contact details. What would you like to explore?';
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: 'Hi! I\'m the Vypax Assistant. How can we help you today?' },
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  const send = (text: string) => {
    if (!text.trim()) return;
    setMessages((m) => [...m, { role: 'user', text }]);
    setInput('');
    setTimeout(() => {
      const botText = getBotResponse(text);
      const hasHtml = botText.includes('<a ');
      setMessages((m) => [...m, { role: 'bot', text: botText, html: hasHtml ? botText : undefined }]);
    }, 500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="flex w-[calc(100vw-3rem)] max-w-sm flex-col overflow-hidden rounded-card border border-[var(--border)] bg-[var(--card)] shadow-card"
            style={{ maxHeight: '70vh' }}
          >
            <div className="flex items-center justify-between bg-navy-gradient px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Vypax Assistant</p>
                  <p className="text-xs text-slate-300">How can we help you?</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close chat" className="text-white/80 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div ref={scrollRef} className="chat-scroll flex-1 space-y-3 overflow-y-auto p-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.html ? (
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                        msg.role === 'user'
                          ? 'bg-brand-gradient text-white'
                          : 'bg-[var(--bg-subtle)] text-navy-900 dark:text-white'
                      }`}
                      dangerouslySetInnerHTML={{ __html: msg.html }}
                    />
                  ) : (
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                        msg.role === 'user'
                          ? 'bg-brand-gradient text-white'
                          : 'bg-[var(--bg-subtle)] text-navy-900 dark:text-white'
                      }`}
                    >
                      {msg.text}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="border-t border-[var(--border)] p-3">
              <div className="mb-2 flex flex-wrap gap-1.5">
                {quickActions.map((action) => (
                  <button
                    key={action}
                    onClick={() => send(action)}
                    className="rounded-full border border-[var(--border)] bg-[var(--bg-subtle)] px-3 py-1 text-xs font-medium text-navy-700 transition-colors hover:border-brand-blue hover:text-brand-blue dark:text-slate-300 dark:hover:text-brand-cyan"
                  >
                    {action}
                  </button>
                ))}
              </div>
              <form
                onSubmit={(e) => { e.preventDefault(); send(input); }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 rounded-full border border-[var(--border)] bg-[var(--bg)] px-4 py-2 text-sm text-[var(--text)] outline-none focus:border-brand-blue"
                />
                <button type="submit" aria-label="Send message" className="icon-tile h-9 w-9 shrink-0 rounded-full">
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="group relative">
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close chat' : 'Open Vypax Assistant chat'}
          className="icon-tile h-14 w-14 rounded-full shadow-soft transition-transform hover:scale-110"
        >
          {open ? <X className="h-6 w-6" /> : <Sparkles className="h-6 w-6" />}
        </button>
        <span className="pointer-events-none absolute bottom-full right-0 mb-3 whitespace-nowrap rounded-lg border border-[var(--border)] bg-[var(--card)] px-3 py-2 text-xs font-medium text-navy-900 opacity-0 shadow-card transition-all duration-200 group-hover:-translate-y-1 group-hover:opacity-100 dark:text-white">
          Vypax Assistant
        </span>
      </div>
    </div>
  );
}

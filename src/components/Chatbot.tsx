import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, Sparkles } from 'lucide-react';
import { companyConfig } from '@/data/company';

interface Message {
  role: 'bot' | 'user';
  text: string;
}

const quickActions = [
  'Website Development',
  'Digital Marketing',
  'SEO',
  'Get a Quote',
  'Talk to Our Team',
];

// Local mock response engine — designed to be replaced by an LLM API
function getBotResponse(input: string): string {
  const q = input.toLowerCase();
  if (q.includes('price') || q.includes('cost') || q.includes('quote') || q.includes('how much'))
    return 'Pricing depends on your project requirements. I\'d recommend requesting a free consultation so our team can provide a tailored quote. You can use the contact form or start a WhatsApp conversation.';
  if (q.includes('website') || q.includes('web'))
    return `We build fast, modern, scalable websites using technologies like React, Next.js, and Tailwind CSS. We can help with everything from a simple business site to a full e-commerce platform. Would you like to request a consultation?`;
  if (q.includes('marketing'))
    return 'Our digital marketing services include social media campaigns, Google Ads, content marketing, and lead generation — all data-driven and focused on measurable growth.';
  if (q.includes('seo'))
    return 'We provide technical SEO audits, on-page optimization, keyword research, local SEO, and Google Business Profile optimization to improve your search visibility and organic traffic.';
  if (q.includes('contact') || q.includes('email') || q.includes('reach'))
    return `You can reach us at ${companyConfig.email} or visit our contact page. We're based in ${companyConfig.location}.`;
  if (q.includes('location') || q.includes('where'))
    return `We're based in ${companyConfig.location}, and we work with clients across India and remotely.`;
  if (q.includes('process') || q.includes('how do you work'))
    return 'Our process follows five steps: Discover, Plan, Build, Launch, and Grow. We start with a free consultation to understand your needs.';
  if (q.includes('support') || q.includes('maintenance'))
    return 'Yes, we provide ongoing maintenance and support plans for security updates, content changes, performance monitoring, and feature enhancements.';
  if (q.includes('team') || q.includes('talk'))
    return `You can reach our team at ${companyConfig.email}. We'd be happy to schedule a free consultation.`;
  if (q.includes('hr') || q.includes('recruit') || q.includes('hiring'))
    return 'We offer HR & recruitment services including candidate sourcing, screening, interview coordination, and onboarding support.';
  return 'I can help with information about our services, process, pricing, and contact details. What would you like to know?';
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
      setMessages((m) => [...m, { role: 'bot', text: getBotResponse(text) }]);
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

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                      msg.role === 'user'
                        ? 'bg-brand-gradient text-white'
                        : 'bg-[var(--bg-subtle)] text-navy-900 dark:text-white'
                    }`}
                  >
                    {msg.text}
                  </div>
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
                <button type="submit" aria-label="Send message" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-white">
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close chat' : 'Open Vypax Assistant chat'}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-gradient text-white shadow-glow transition-transform hover:scale-110"
      >
        {open ? <X className="h-6 w-6" /> : <Sparkles className="h-6 w-6" />}
      </button>
    </div>
  );
}

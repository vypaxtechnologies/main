import { useState, type FormEvent } from 'react';
import { AlertCircle, ArrowRight, BarChart3, BriefcaseBusiness, CheckCircle2, Code2, GraduationCap, LoaderCircle, Megaphone, Send, Users, Zap } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import { apiUrl } from '@/config/api';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionHeading from '@/components/SectionHeading';
import { companyConfig } from '@/data/company';

const programs = [
  {
    title: 'Technology Foundations',
    description: 'Build practical confidence with modern web development, software workflows, tools, and digital project fundamentals.',
    icon: GraduationCap,
    points: ['Web and software fundamentals', 'Modern tools and workflows', 'Practical guided assignments'],
  },
  {
    title: 'Business & Digital Skills',
    description: 'Develop the communication, marketing, operations, and problem-solving skills needed in a digital company.',
    icon: Users,
    points: ['Business communication', 'Digital marketing essentials', 'Team and client collaboration'],
  },
  {
    title: 'Career Readiness',
    description: 'Turn learning into workplace confidence through mentorship, project exposure, and structured feedback.',
    icon: Zap,
    points: ['Portfolio direction', 'Professional work habits', 'Mentorship and feedback'],
  },
];

const learningTracks = [
  {
    title: 'Development',
    icon: Code2,
    courses: [
      { name: 'Python Development', points: ['Python syntax and problem solving', 'Functions, modules, OOP, and error handling', 'APIs, files, databases, and practical projects'], note: 'Best for learners building a strong programming foundation.' },
      { name: 'Frontend Development', points: ['HTML, CSS, responsive layouts, and accessibility', 'JavaScript, React, components, and state', 'Git, browser tools, and deployment basics'], note: 'Learners finish with responsive interface projects.' },
      { name: 'Backend Development', points: ['Node.js, Express, and API design', 'Authentication, validation, and database integration', 'Testing, security basics, and deployment workflows'], note: 'Focuses on reliable server-side application foundations.' },
      { name: 'Full-Stack Web Development', points: ['Frontend and backend architecture', 'Database, API, authentication, and deployment', 'Building and presenting a complete web application'], note: 'A project-led path for learners who want end-to-end confidence.' },
    ],
  },
  {
    title: 'Data & AI',
    icon: BarChart3,
    courses: [
      { name: 'Data Analytics', points: ['Data cleaning and exploration', 'Reports, dashboards, and business questions', 'Finding patterns and communicating insights'], note: 'Designed for turning everyday business data into decisions.' },
      { name: 'Data Science', points: ['Python for data work and statistics', 'Feature preparation, experiments, and evaluation', 'Communicating findings through practical case studies'], note: 'Balances analytical thinking with hands-on projects.' },
      { name: 'Data Engineering', points: ['Data collection and pipeline concepts', 'ETL workflows, storage, and data quality', 'Working with structured datasets and scalable processes'], note: 'Introduces the systems behind dependable analytics.' },
      { name: 'Machine Learning', points: ['Supervised and unsupervised learning', 'Model preparation, training, and evaluation', 'Avoiding common modelling and data leakage mistakes'], note: 'Learners build models while focusing on responsible evaluation.' },
      { name: 'Artificial Intelligence', points: ['AI concepts, use cases, and limitations', 'Prompting, automation, and intelligent workflows', 'Responsible, privacy-aware use of AI tools'], note: 'A practical introduction for modern workplace applications.' },
      { name: 'Power BI / Business Intelligence', points: ['Data modelling and Power Query basics', 'Interactive dashboards and useful measures', 'Presenting business performance clearly'], note: 'Ideal for learners who want practical reporting skills.' },
    ],
  },
  {
    title: 'Digital',
    icon: Megaphone,
    courses: [
      { name: 'Digital Marketing', points: ['Audience, positioning, and campaign planning', 'Content, social channels, and paid media basics', 'Measurement, lead journeys, and reporting'], note: 'Connects creative execution with measurable business goals.' },
      { name: 'SEO', points: ['Keyword research and search intent', 'Technical, on-page, and content SEO', 'Search Console, audits, and performance tracking'], note: 'Learners practice improving discoverability without shortcut promises.' },
      { name: 'Google Business Profile Optimization', points: ['Profile setup, categories, and business information', 'Local content, reviews, photos, and posts', 'Local visibility tracking and customer actions'], note: 'Focused on helping local businesses build a trustworthy presence.' },
    ],
  },
  {
    title: 'Business',
    icon: BriefcaseBusiness,
    courses: [
      { name: 'Client Relationship Management', points: ['Professional communication and discovery questions', 'Requirement notes, follow-ups, and relationship health', 'Handling feedback and setting clear expectations'], note: 'Builds the habits needed for respectful client partnerships.' },
      { name: 'Project Management', points: ['Scope, milestones, priorities, and ownership', 'Agile workflows, documentation, and team coordination', 'Risk tracking, status updates, and project closure'], note: 'Learners practice keeping delivery visible and organised.' },
    ],
  },
];

const perks = [
  { title: 'Working Experience on Real-World Projects', description: 'Apply your learning to practical briefs, workflows, and deliverables that reflect how teams work.' },
  { title: 'Regular Assessments', description: 'Track progress through structured reviews, exercises, and feedback at each stage.' },
  { title: 'Handwritten Notes', description: 'Receive clear, revision-friendly notes to support practice beyond every session.' },
  { title: 'Training & Internship Certificate', description: 'Receive a certificate documenting your completed training or internship experience.' },
  { title: 'Social Media Optimisation', description: 'Learn practical ways to improve social profiles, content presentation, and digital reach.' },
  { title: 'Placement Assistance', description: 'Get guidance with portfolio preparation, interview readiness, and relevant opportunities.' },
];

export default function TrainingDevelopmentPage() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useSEO({
    title: 'Training & Development | Vypax Technologies',
    description: 'Practical technology, digital, and career development programs designed to build workplace-ready skills with Vypax Technologies.',
  });

  const handleTrainingSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitStatus('idle');
    setErrorMessage('');
    setIsSubmitting(true);
    const form = event.currentTarget;
    const payload = new FormData(form);

    const data = {
      fullName: String(payload.get('fullName') || '').trim(),
      email: String(payload.get('email') || '').trim(),
      phone: String(payload.get('phone') || '').trim(),
      background: String(payload.get('background') || '').trim(),
      course: String(payload.get('course') || '').trim(),
      message: String(payload.get('message') || '').trim(),
    };

    try {
      // Optional background client-side FormSubmit call
      payload.append('_subject', 'New Training & Development enquiry');
      payload.append('_captcha', 'false');
      payload.append('_template', 'table');
      fetch(`https://formsubmit.co/ajax/${companyConfig.email}`, {
        method: 'POST',
        body: payload,
      }).catch(() => {});

      const response = await fetch(apiUrl('/api/training'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(result?.message || 'Training enquiry submission failed');
      }

      setSubmitStatus('success');
      form.reset();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "We couldn't send your enquiry. Please try again or email us directly.";
      setErrorMessage(msg);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="pt-32 pb-12 md:pt-40">
        <div className="container-x">
          <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Training & Development' }]} />
          <SectionHeading
            eyebrow="Training & Development"
            title="Build skills that move with the industry"
            subtitle="Practical learning experiences for students, early professionals, and teams ready to work more confidently with technology and digital systems."
            center={false}
          />
        </div>
      </section>

      <section className="section-pad bg-[var(--bg-subtle)]">
        <div className="container-x">
          <div className="grid gap-6 lg:grid-cols-3">
            {programs.map((program) => {
              const Icon = program.icon;
              return (
                <article key={program.title} className="rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-7 shadow-soft">
                  <div className="icon-tile h-12 w-12">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-6 text-xl font-bold text-navy-900 dark:text-white">{program.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{program.description}</p>
                  <ul className="mt-6 space-y-3">
                    {program.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm text-[var(--text-muted)]">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue dark:text-brand-cyan" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <SectionHeading
            eyebrow="Your Growth Includes"
            title="More than a course certificate"
            subtitle="We support the practice, confidence, and workplace readiness that make learning useful beyond the classroom."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {perks.map((perk, index) => (
              <article key={perk.title} className="rounded-[24px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-soft">
                <span className="icon-tile h-9 w-9 rounded-full text-sm font-bold">{String(index + 1).padStart(2, '0')}</span>
                <h2 className="mt-5 text-lg font-bold text-navy-900 dark:text-white">{perk.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{perk.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--bg-subtle)]">
        <div className="container-x">
          <SectionHeading
            eyebrow="Certificate"
            title="A certificate that documents your journey"
            subtitle="Complete your training or internship and receive a professionally designed certificate from Vypax Technologies."
          />

          <div className="mt-10 overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-3 shadow-card sm:p-5">
              <img
                src="/Vypax-Internship-demo.png"
                alt="Vypax Technologies Internship Certificate"
                loading="lazy"
                decoding="async"
                className="h-auto w-full rounded-2xl object-contain"
              />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <SectionHeading
            eyebrow="Learning Tracks"
            title="Choose a practical path forward"
            subtitle="Focused training tracks designed around the technical, digital, and business skills teams use every day."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {learningTracks.map((track) => {
              const Icon = track.icon;
              return (
                <article key={track.title} className="rounded-[26px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-soft sm:p-7">
                  <div className="flex items-center gap-4 border-b border-[var(--border)] pb-5">
                    <div className="icon-tile h-11 w-11">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="text-xl font-bold text-navy-900 dark:text-white">{track.title}</h2>
                  </div>
                  <div className="mt-5 grid gap-4">
                    {track.courses.map((course) => (
                      <div key={course.name} className="rounded-2xl border border-[var(--border)] bg-[var(--bg-subtle)] p-4">
                        <h3 className="font-semibold text-navy-900 dark:text-white">{course.name}</h3>
                        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-brand-blue dark:text-brand-cyan">What you&apos;ll learn</p>
                        <ul className="mt-2 space-y-2">
                          {course.points.map((point) => (
                            <li key={point} className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue dark:text-brand-cyan" />
                              {point}
                            </li>
                          ))}
                        </ul>
                        <p className="mt-3 border-t border-[var(--border)] pt-3 text-xs leading-relaxed text-[var(--text-muted)]"><span className="font-semibold text-navy-800 dark:text-slate-200">Notes:</span> {course.note}</p>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--bg-subtle)]">
        <div className="container-x">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Start Learning"
                title="Tell us what you want to build next"
                subtitle="Share your interests and our team will help you choose the right track, format, and next step."
                center={false}
              />
              <div className="mt-8 rounded-[24px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-soft">
                <p className="text-sm font-semibold text-navy-900 dark:text-white">What happens next?</p>
                <ul className="mt-4 space-y-3 text-sm text-[var(--text-muted)]">
                  <li className="flex gap-3"><CheckCircle2 className="h-4 w-4 shrink-0 text-brand-blue dark:text-brand-cyan" />We review your learning goals.</li>
                  <li className="flex gap-3"><CheckCircle2 className="h-4 w-4 shrink-0 text-brand-blue dark:text-brand-cyan" />We recommend a suitable track.</li>
                  <li className="flex gap-3"><CheckCircle2 className="h-4 w-4 shrink-0 text-brand-blue dark:text-brand-cyan" />We contact you with the next steps.</li>
                </ul>
              </div>
            </div>

            <form onSubmit={handleTrainingSubmit} className="rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-card sm:p-8" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-semibold text-navy-900 dark:text-white">Full Name *<input name="fullName" type="text" required className="input-field mt-2" placeholder="Your full name" autoComplete="name" /></label>
                <label className="text-sm font-semibold text-navy-900 dark:text-white">Email Address *<input name="email" type="email" required className="input-field mt-2" placeholder="you@example.com" autoComplete="email" /></label>
                <label className="text-sm font-semibold text-navy-900 dark:text-white">Phone Number *<input name="phone" type="tel" required className="input-field mt-2" placeholder="+91 00000 00000" autoComplete="tel" /></label>
                <label className="text-sm font-semibold text-navy-900 dark:text-white">Current Background<input name="background" type="text" className="input-field mt-2" placeholder="Student, graduate, professional..." autoComplete="off" /></label>
                <label className="text-sm font-semibold text-navy-900 dark:text-white">Choose a Course *<select name="course" required className="input-field mt-2" autoComplete="off"><option value="">Select a course</option>{learningTracks.flatMap((track) => track.courses).map((course) => <option key={course.name} value={course.name}>{course.name}</option>)}</select></label>
              </div>
              <label className="mt-5 block text-sm font-semibold text-navy-900 dark:text-white">Learning Goals *<textarea name="message" required rows={5} className="input-field mt-2 resize-none" placeholder="Tell us what you want to learn or build..." autoComplete="off" /></label>

              {submitStatus === 'success' && <div className="mt-5 flex items-center gap-3 rounded-xl border border-brand-blue bg-brand-blue/10 p-4 text-sm text-brand-blue dark:border-brand-cyan dark:text-brand-cyan"><CheckCircle2 className="h-5 w-5 shrink-0" />Thank you! We&apos;ll contact you with the next steps.</div>}
              {submitStatus === 'error' && <div className="mt-5 flex items-center gap-3 rounded-xl border border-brand-blue bg-brand-blue/10 p-4 text-sm text-brand-blue dark:border-brand-cyan dark:text-brand-cyan"><AlertCircle className="h-5 w-5 shrink-0" />{errorMessage || "We couldn't send your enquiry. Please try again or email us directly."}</div>}

              <button type="submit" disabled={isSubmitting} className="btn-primary mt-6 w-full sm:w-auto disabled:cursor-not-allowed disabled:opacity-70">
                {isSubmitting ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                {isSubmitting ? 'Sending...' : 'Send Training Enquiry'}
                {!isSubmitting && <ArrowRight className="h-4 w-4" />}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

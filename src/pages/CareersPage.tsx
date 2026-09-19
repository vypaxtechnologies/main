import { useState } from 'react';
import { useSEO } from '@/hooks/useSEO';
import { ArrowRight, Briefcase, CheckCircle2, LoaderCircle, AlertCircle, X } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import Breadcrumbs from '@/components/Breadcrumbs';
import { careers } from '@/data/faq';

export default function CareersPage() {
	useSEO({ title: 'Careers | Vypax Technologies', description: 'Build your future with Vypax Technologies. We are building a team that loves technology, creativity and meaningful business impact.' });
	const [selectedRole, setSelectedRole] = useState<string | null>(null);
	const [hasExperience, setHasExperience] = useState('');
	const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const openApplication = (roleTitle: string) => {
		setSelectedRole(roleTitle);
		setHasExperience('');
		setSubmitStatus('idle');
		setErrorMessage('');
		window.setTimeout(() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0);
	};

	const closeApplication = () => {
		setSelectedRole(null);
		setSubmitStatus('idle');
		setErrorMessage('');
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setSubmitStatus('idle');
		setErrorMessage('');
		setIsSubmitting(true);
		const form = event.currentTarget;
		const databasePayload = new FormData(form);
		const resume = databasePayload.get('_attachment');
		databasePayload.append('role', selectedRole ?? 'General application');
		databasePayload.append('resumeName', resume instanceof File ? resume.name : '');

		try {
			const response = await fetch('/api/careers', {
				method: 'POST',
				body: databasePayload,
			});
			const result = await response.json().catch(() => null);
			if (!response.ok) {
				throw new Error(result?.message || 'Application submission failed');
			}
			setSubmitStatus('success');
			form.reset();
			setHasExperience('');
		} catch (err: unknown) {
			const msg = err instanceof Error ? err.message : 'Unable to submit application right now.';
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
					<Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Careers' }]} />
					<SectionHeading eyebrow="Join Us" title="Build Your Future With Us" subtitle="We're building a team that loves technology, creativity and meaningful business impact." center={false} />
				</div>
			</section>

			<section className="section-pad bg-[var(--bg-subtle)]">
				<div className="container-x max-w-3xl space-y-4">
					{careers.map((role) => (
						<div key={role.id} className="flex flex-col justify-between gap-4 rounded-card border border-[var(--border)] bg-[var(--card)] p-6 shadow-card sm:flex-row sm:items-center">
							<div className="flex items-start gap-4">
								<div className="icon-tile h-11 w-11 shrink-0">
									<Briefcase className="h-5 w-5" />
								</div>
								<div>
									<h3 className="font-semibold text-navy-900 dark:text-white">{role.title}</h3>
									<p className="mt-1 text-sm text-[var(--text-muted)]">{role.type} · {role.location}</p>
									<p className="mt-2 text-sm text-[var(--text-muted)]">{role.description}</p>
								</div>
							</div>
							<button type="button" onClick={() => openApplication(role.title)} className="btn-primary shrink-0">
								Apply Now <ArrowRight className="h-4 w-4" />
							</button>
						</div>
					))}

					{selectedRole && (
						<div id="application-form" className="scroll-mt-24 rounded-card border border-[var(--border)] bg-[var(--card)] p-6 shadow-card md:p-8">
							<div className="mb-6 flex items-start justify-between gap-4">
								<div>
									<p className="eyebrow">Application Form</p>
									<h2 className="mt-2 text-2xl font-bold text-navy-900 dark:text-white">Apply for {selectedRole}</h2>
									<p className="mt-2 text-sm text-[var(--text-muted)]">Share your details and we&apos;ll be in touch if your profile matches the role.</p>
								</div>
								<button type="button" onClick={closeApplication} aria-label="Close application form" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-muted)] transition-colors hover:text-brand-blue">
									<X className="h-4 w-4" />
								</button>
							</div>

							<form onSubmit={handleSubmit} className="space-y-5">
								<div className="grid gap-5 sm:grid-cols-2">
<Field label="Full Name" name="fullName" type="text" required autoComplete="name" />
								<Field label="Email Address" name="email" type="email" required autoComplete="email" />
								<Field label="Phone Number" name="phone" type="tel" required autoComplete="tel" />
								<Field label="Current Location" name="location" type="text" required autoComplete="address-level1" />
								<Field label="LinkedIn Profile" name="linkedin" type="url" required autoComplete="url" />
								<Field label="Portfolio / GitHub" name="portfolio" type="url" required autoComplete="url" />
								</div>

								<div>
									<label htmlFor="experience" className="mb-1.5 block text-sm font-medium text-navy-900 dark:text-white">Experience *</label>
									<select id="experience" name="experience" value={hasExperience} onChange={(event) => setHasExperience(event.target.value)} className="input-field" required autoComplete="off">
										<option value="">Select an option</option>
										<option value="yes">Yes</option>
										<option value="no">No</option>
									</select>
								</div>

								{hasExperience === 'yes' && (
									<div className="grid gap-5 sm:grid-cols-2">
										<Field label="Total Experience (years)" name="experienceYears" type="number" min="0" step="0.5" required autoComplete="off" />
										<Field label="Company Name" name="companyName" type="text" required autoComplete="organization" />
										<div className="sm:col-span-2">
											<Field label="Role / Profile at That Company" name="companyRole" type="text" required autoComplete="off" />
										</div>
									</div>
								)}

								<div>
									<label htmlFor="resume" className="mb-1.5 block text-sm font-medium text-navy-900 dark:text-white">Resume / CV Upload *</label>
									<input id="resume" name="_attachment" type="file" accept=".pdf,.doc,.docx" className="input-field file:mr-4 file:rounded-full file:border-0 file:bg-brand-blue/10 file:px-4 file:py-2 file:text-sm file:font-medium file:text-brand-blue" required />
									<p className="mt-1 text-xs text-[var(--text-muted)]">PDF, DOC, or DOCX files only.</p>
								</div>

								<label className="flex items-start gap-3 text-sm text-[var(--text-muted)]">
									<input type="checkbox" name="informationAccurate" className="mt-0.5 h-4 w-4 accent-brand-blue" required />
									<span>I confirm that the information provided is accurate.</span>
								</label>
								<label className="flex items-start gap-3 text-sm text-[var(--text-muted)]">
									<input type="checkbox" name="recruitmentConsent" className="mt-0.5 h-4 w-4 accent-brand-blue" required />
									<span>I agree to Vypax Technologies using my information for recruitment purposes.</span>
								</label>

								{submitStatus === 'success' && (
									<div className="flex items-center gap-2 rounded-xl border border-brand-blue bg-brand-blue/10 p-4 text-sm text-brand-blue dark:border-brand-cyan dark:bg-brand-cyan/10 dark:text-brand-cyan">
										<CheckCircle2 className="h-5 w-5 shrink-0" />
										Thank you! Your application has been sent successfully.
									</div>
								)}
								{submitStatus === 'error' && (
									<div className="flex items-center gap-2 rounded-xl border border-brand-blue bg-brand-blue/10 p-4 text-sm text-brand-blue dark:border-brand-cyan dark:bg-brand-cyan/10 dark:text-brand-cyan">
										<AlertCircle className="h-5 w-5 shrink-0" />
										{errorMessage || "We couldn't send your application. Please try again or email us directly."}
									</div>
								)}

								<button type="submit" disabled={isSubmitting} className="btn-primary w-full sm:w-auto disabled:cursor-not-allowed disabled:opacity-70">
									{isSubmitting ? <LoaderCircle className="h-4 w-4 animate-spin" /> : null}
									{isSubmitting ? 'Submitting Application...' : 'Submit Application'}
									{!isSubmitting && <ArrowRight className="h-4 w-4" />}
								</button>
							</form>
						</div>
					)}
				</div>
			</section>
		</>
	);
}

function Field({ label, name, type, required = false, min, step, autoComplete }: { label: string; name: string; type: string; required?: boolean; min?: string; step?: string; autoComplete?: string }) {
		return (
			<div>
				<label htmlFor={name} className="mb-1.5 block text-sm font-medium text-navy-900 dark:text-white">{label}{required ? ' *' : ''}</label>
				<input id={name} name={name} type={type} min={min} step={step} className="input-field" required={required} autoComplete={autoComplete} />
			</div>
		);
	}

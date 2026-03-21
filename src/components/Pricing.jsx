import {
	ArrowRight,
	BadgeCheck,
	BadgeIndianRupee,
	CheckCircle2,
	Clock4,
	ShieldCheck,
	Sparkles
} from 'lucide-react';
import SectionHeading from './SectionHeading';
import { BRAND, PRICING_OPTIONS, PROFILE } from '../data/siteContent';

const revealDelayClasses = [
	'[transition-delay:0ms]',
	'[transition-delay:80ms]',
	'[transition-delay:160ms]',
	'[transition-delay:240ms]'
];

function Pricing() {
	return (
		<section id="pricing" className="section-spacing section-container relative scroll-mt-24">
			<div className="pointer-events-none absolute inset-x-6 top-6 -z-10 h-44 rounded-full bg-gradient-to-r from-brand-300/45 via-cyan-300/30 to-accent-300/45 blur-3xl" />

			<SectionHeading
				eyebrow="Pricing"
				title="Professional Websites. Clear One-Time Pricing."
				description={`Pick the package that fits your business. Every ${BRAND.name} website is mobile responsive, fast, and ready to generate enquiries.`}
				centered
			/>

			<div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
				{PRICING_OPTIONS.map((plan, index) => {
					const revealDelayClass = revealDelayClasses[index % revealDelayClasses.length];
					return (
					<article
						key={plan.id}
						data-reveal="up"
						className={`group relative overflow-hidden rounded-3xl border p-5 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card sm:p-7 ${revealDelayClass} ${
							plan.featured
								? 'border-brand-300 bg-gradient-to-br from-white via-brand-50 to-accent-50'
								: 'border-slate-200 bg-white'
						}`}
					>
						<div className={`absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r ${plan.accent}`} />

						<div className="flex items-start justify-between gap-3">
							<div>
								<p className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-600">
									{plan.label}
								</p>
								<h3 className="mt-3 text-2xl font-extrabold text-slate-900">{plan.title}</h3>
							</div>

							{plan.featured && (
								<p className="inline-flex items-center gap-1 rounded-full border border-brand-300 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-brand-700 shadow-sm">
									<Sparkles size={12} />
									Most Popular
								</p>
							)}
						</div>

						<div className="mt-5 flex items-end gap-1.5 sm:gap-2">
							<BadgeIndianRupee size={20} className="mb-1 text-brand-600" />
							<p className="text-3xl font-black tracking-tight text-brand-700 sm:text-4xl">{plan.price.replace(/₹/g, '')}</p>
							<span className="mb-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">one-time</span>
						</div>

						<p className="mt-2 text-sm text-slate-600">{plan.note}</p>

						<div className="mt-4 flex flex-wrap gap-2">
							<p className="inline-flex items-center gap-1 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
								<Clock4 size={13} />
								{plan.timeline}
							</p>
							<p className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
								<ShieldCheck size={13} />
								{plan.badge}
							</p>
						</div>

						<ul className="mt-6 space-y-2.5">
							{plan.highlights.map((item) => (
								<li key={item} className="flex items-start gap-2.5 rounded-lg border border-slate-100 bg-white/85 px-3 py-2 text-sm text-slate-700">
									<CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-500" />
									<span className="font-medium">{item}</span>
								</li>
							))}
						</ul>

						<a
							href="#contact"
							className={`mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 ${
								plan.featured
									? 'bg-slate-900 text-white hover:bg-brand-700'
									: 'border border-slate-300 bg-white text-slate-800 hover:border-brand-300 hover:text-brand-700'
							}`}
						>
							Choose This Option
							<ArrowRight size={14} />
						</a>
					</article>
				);
				})}
			</div>

			<div
				data-reveal="up"
				className="mt-8 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-800 p-5 text-slate-200 shadow-soft sm:p-6"
			>
				<p className="text-center text-xs font-bold uppercase tracking-[0.14em] text-slate-300">
					Every project includes
				</p>
				<div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
					{[
						'No hidden charges',
						'Mobile responsive website',
						'Fast loading performance',
						'Business-focused structure'
					].map((item) => (
						<div key={item} className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/70 px-3 py-2.5 text-sm font-medium text-white">
							<BadgeCheck size={16} className="shrink-0 text-emerald-400" />
							{item}
						</div>
					))}
				</div>
			</div>

			<div data-reveal="up" className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-soft sm:p-6">
				<p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">Need a custom package?</p>
				<p className="mt-2 text-base text-slate-700">Share your requirements and get a tailored quote for your project.</p>
				<a href={`mailto:${PROFILE.email}`} className="btn-ghost mt-4 inline-flex items-center gap-2">
					Get Custom Quote
					<ArrowRight size={14} />
				</a>
			</div>
		</section>
	);
}

export default Pricing;

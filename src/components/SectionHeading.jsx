function SectionHeading({ title, eyebrow, description, centered = false }) {
  return (
    <div className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} data-reveal="up">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base text-slate-600 sm:text-lg">{description}</p> : null}
    </div>
  );
}

export default SectionHeading;

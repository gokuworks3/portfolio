import { memo } from 'react';

function SectionHeading({ title, eyebrow, description, centered = false }) {
  return (
    <div className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} data-reveal="up">
      <p className="mb-3 inline-flex min-h-8 items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.15em] text-brand-700 sm:text-xs">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">{description}</p> : null}
    </div>
  );
}

export default memo(SectionHeading);

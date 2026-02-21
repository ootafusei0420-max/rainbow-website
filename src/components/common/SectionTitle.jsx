export function SectionTitle({ title, subtitle, align = 'center' }) {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <span className="inline-block rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-caption uppercase tracking-widest text-brand-skyDark mb-3">
        {subtitle}
      </span>
      <h2 className="type-h1">{title}</h2>
    </div>
  );
}

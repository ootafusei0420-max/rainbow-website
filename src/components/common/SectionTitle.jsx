export function SectionTitle({ title, subtitle, align = 'center' }) {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <span className="inline-block py-1 px-3 rounded-full bg-sky-50 text-sky-600 text-xs font-bold tracking-widest uppercase mb-3 border border-sky-100">
        {subtitle}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight">{title}</h2>
    </div>
  );
}

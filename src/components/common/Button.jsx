export function Button({ children, variant = 'primary', className = '', onClick, icon: Icon, type = 'button' }) {
  const baseStyle =
    'group relative inline-flex items-center justify-center rounded-full px-8 py-3.5 font-bold transition-all duration-300 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sky/40';

  const variants = {
    primary: 'bg-text-primary text-white hover:bg-slate-800 shadow-card hover:shadow-lift hover:-translate-y-0.5',
    secondary: 'bg-surface-card text-text-primary hover:bg-surface-muted border border-slate-200 shadow-sm hover:shadow-card',
    accent: 'bg-gradient-to-r from-brand-sky to-brand-skyDark text-white shadow-lift hover:-translate-y-0.5',
  };

  return (
    <button type={type} className={`${baseStyle} ${variants[variant]} ${className}`} onClick={onClick}>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {Icon && <Icon size={18} className="transition-transform group-hover:translate-x-1" />}
      </span>
    </button>
  );
}

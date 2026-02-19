export function Button({ children, variant = 'primary', className = '', onClick, icon: Icon, type = 'button' }) {
  const baseStyle =
    'group relative inline-flex items-center justify-center px-8 py-3.5 rounded-full font-bold transition-all duration-300 overflow-hidden';

  const variants = {
    primary: 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg hover:shadow-xl hover:-translate-y-1',
    secondary: 'bg-white text-slate-900 hover:bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md',
    accent: 'bg-gradient-to-r from-sky-500 to-sky-600 text-white shadow-lg shadow-sky-200 hover:shadow-sky-300 hover:-translate-y-1',
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

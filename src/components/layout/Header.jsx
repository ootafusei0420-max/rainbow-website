import { ArrowRight, Menu, X } from 'lucide-react';
import { Button } from '../common/Button';
import { MOBILE_NAV_ITEMS, NAV_ITEMS } from '../../data/siteData';

export function Header({ isMenuOpen, onMenuToggle, onScrollToSection, onOpenTrialModal }) {
  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300">
      <div className="absolute inset-0 bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm" />
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white font-bold text-xl">み</div>
          <div>
            <div className="font-bold text-lg text-slate-800 leading-none">みらい学習塾</div>
            <div className="text-[10px] text-slate-500 tracking-wider">FUTURE LEARNING LAB</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => onScrollToSection(item.id)}
              className="text-sm font-bold text-slate-500 hover:text-sky-600 transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-600 transition-all group-hover:w-full" />
            </button>
          ))}
          <Button variant="accent" onClick={onOpenTrialModal} icon={ArrowRight} className="px-6 py-2.5">
            無料体験
          </Button>
        </nav>

        <button className="md:hidden p-2 text-slate-800 bg-white rounded-lg shadow-sm" onClick={onMenuToggle}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`md:hidden absolute top-20 w-full bg-white/95 backdrop-blur-xl border-b border-slate-100 transition-all duration-300 origin-top ${
          isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
        }`}
      >
        <div className="p-4 flex flex-col gap-2">
          {MOBILE_NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => onScrollToSection(item.id)}
              className="text-left px-4 py-3 font-bold text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

import { ChevronRight, Sparkles, Star } from 'lucide-react';
import { Button } from '../common/Button';
import { Reveal } from '../common/Reveal';

export function HeroSection({ onScrollToSection }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 z-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-sky-100 shadow-sm text-sky-700 text-sm font-bold mb-4">
              <Sparkles size={16} className="text-yellow-400 fill-yellow-400" />
              <span>まずは「3回」の無料体験から</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.15] tracking-tight">
              相性を確かめて、<br />
              <span className="marker-underline">安心</span>して始める。
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              入塾を急かすことはありません。お子様の性格に合う先生か、無理なく通えるか。じっくり見極めていただくための、
              <span className="font-bold text-slate-800">「失敗しない」</span>学習塾です。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button variant="accent" onClick={() => onScrollToSection('contact')} icon={ChevronRight} className="min-w-[200px]">
                体験授業を申し込む
              </Button>
              <Button variant="secondary" onClick={() => onScrollToSection('features')}>
                詳しく見る
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5 relative h-[400px] md:h-[500px] hidden md:block">
          <div className="absolute inset-0">
            <div className="absolute top-10 right-0 w-64 h-80 rounded-3xl overflow-hidden shadow-2xl rotate-3 animate-float border-4 border-white">
              <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover" alt="Study" />
            </div>
            <div className="absolute top-40 left-10 w-48 h-60 rounded-3xl overflow-hidden shadow-xl -rotate-6 animate-float animation-delay-2000 border-4 border-white">
              <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover" alt="Classroom" />
            </div>
            <div className="absolute bottom-20 right-20 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-xl animate-float animation-delay-4000 max-w-[180px]">
              <div className="flex gap-1 mb-2">{[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />)}</div>
              <p className="text-xs font-bold text-slate-800">「自分のペースで進められるので楽しい！」</p>
              <p className="text-[10px] text-slate-500 mt-1">- 小学5年生 保護者様</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

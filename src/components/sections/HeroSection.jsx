import { ChevronRight, Sparkles, Star } from 'lucide-react';
import { Button } from '../common/Button';
import { Reveal } from '../common/Reveal';

export function HeroSection({ onScrollToSection, onOpenTrialModal }) {
  return (
    <section className="relative px-4 pt-32 pb-20 z-10 md:pt-44 md:pb-28">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-sky-100 shadow-sm text-brand-skyDark text-sm font-bold mb-4">
              <Sparkles size={16} className="text-brand-yellow fill-brand-yellow" />
              <span>まずは「3回」の無料体験から</span>
            </div>
            <h1 className="type-display">
              相性を確かめて、<br />
              <span className="marker-underline">安心</span>して始める。
            </h1>
            <p className="type-body content-readable mx-auto lg:mx-0">
              入塾を急かすことはありません。お子様の性格に合う先生か、無理なく通えるか。じっくり見極めていただくための、
              <span className="font-bold text-text-primary">「失敗しない」</span>学習塾です。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button variant="accent" onClick={onOpenTrialModal} icon={ChevronRight} className="min-w-[200px]">
                体験授業を申し込む
              </Button>
              <Button variant="secondary" onClick={() => onScrollToSection('features')}>
                詳しく見る
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5 relative h-[380px] md:h-[480px] hidden md:block">
          <div className="absolute inset-0">
            <div className="absolute top-10 right-0 w-64 h-80 rounded-card overflow-hidden shadow-card rotate-2 animate-float border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=700&q=80"
                className="w-full h-full object-cover"
                alt="学習に集中する生徒"
              />
              <div className="absolute inset-0 bg-brand-sky/10" />
            </div>
            <div className="absolute bottom-20 right-16 bg-white/95 backdrop-blur p-4 rounded-soft shadow-card max-w-[185px] border border-white/70">
              <div className="flex gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={14} className="text-brand-yellow fill-brand-yellow" />
                ))}
              </div>
              <p className="text-xs font-bold text-text-primary">「自分のペースで進められるので楽しい！」</p>
              <p className="text-[10px] text-text-muted mt-1">- 小学5年生 保護者様</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

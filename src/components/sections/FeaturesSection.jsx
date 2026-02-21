import { Calendar, CheckCircle, Clock, ExternalLink, HeartHandshake } from 'lucide-react';
import { Reveal } from '../common/Reveal';
import { SectionTitle } from '../common/SectionTitle';

export function FeaturesSection() {
  return (
    <section id="features" className="relative z-10 py-section md:py-sectionLg">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle title="選ばれる、確かな理由" subtitle="Why Choose Us" />

        <div className="grid grid-cols-1 md:grid-cols-6 auto-rows-[minmax(180px,auto)] gap-5">
          <Reveal className="md:col-span-4 md:row-span-2">
            <article className="group h-full bg-surface-card rounded-card p-8 md:p-12 shadow-card border border-slate-100 hover:shadow-lift transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-sky-50 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-105 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-sky-100 rounded-soft flex items-center justify-center text-brand-sky mb-6 group-hover:-translate-y-1 transition-transform">
                  <CheckCircle size={32} />
                </div>
                <h3 className="type-h1 mb-4">
                  体験授業は<span className="text-brand-sky">「3回」</span>。<br />見極めてからスタート。
                </h3>
                <p className="type-body content-readable">
                  「1回だけでは分からない」という声にお応えしました。先生との相性、教室の雰囲気、通塾の負担感。
                  これらをしっかり確認し、納得してから入塾していただきます。
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal delay={120} className="md:col-span-2 md:row-span-2">
            <article className="h-full text-white rounded-card p-8 md:p-9 shadow-lift flex flex-col relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800" />
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/10 backdrop-blur rounded-soft flex items-center justify-center text-brand-yellow mb-6">
                  <ExternalLink size={28} />
                </div>
                <h3 className="type-h2 text-white mb-4">学びの選択肢</h3>
                <div className="text-slate-300 leading-relaxed mb-8">
                  <p className="mb-4">5科目に加え、好奇心を刺激するプログラムも用意。</p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-yellow rounded-full" />実験・工作教室</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-yellow rounded-full" />AIプログラミング</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-yellow rounded-full" />ピアノ</li>
                  </ul>
                </div>
                <div className="mt-auto pt-8 border-t border-white/10">
                  <p className="text-caption text-slate-400">※開講状況は時期により異なります</p>
                </div>
              </div>
            </article>
          </Reveal>

          <Reveal delay={220} className="md:col-span-3">
            <article className="group h-full bg-gradient-to-r from-pink-50 to-white rounded-card p-7 shadow-card border border-pink-100 hover:shadow-lift transition-all duration-300 flex items-start gap-4">
              <div className="w-12 h-12 bg-pink-100 rounded-soft flex items-center justify-center text-brand-pink shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="type-h2 mb-2">柔軟な調整</h3>
                <p className="type-body">テスト前の回数増加やリモート対応など、ご家庭の状況に合わせて柔軟に対応します。</p>
              </div>
            </article>
          </Reveal>

          <Reveal delay={320} className="md:col-span-3">
            <article className="h-full bg-white rounded-card p-7 shadow-card border border-slate-100 flex items-start gap-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-soft flex items-center justify-center text-emerald-600 shrink-0">
                <HeartHandshake size={24} />
              </div>
              <div>
                <h3 className="type-h2 mb-2">保護者との連携</h3>
                <p className="type-body">学習報告・面談を通じて、学習の課題と成長を共有しながら伴走します。</p>
              </div>
            </article>
          </Reveal>

          <Reveal delay={420} className="md:col-span-6">
            <article className="bg-white/80 backdrop-blur-md border border-white/70 rounded-card p-5 md:p-6 shadow-card">
              <div className="flex items-center gap-2 text-xs font-bold text-text-muted mb-2">
                <Calendar size={14} /> スケジュール例
              </div>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 text-xs text-slate-600">平日：通常授業</div>
                <div className="rounded-xl border border-sky-200 bg-sky-50 p-3 text-xs text-brand-skyDark font-bold">テスト前：集中講座</div>
                <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 text-xs text-slate-600">必要に応じてオンライン補講</div>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

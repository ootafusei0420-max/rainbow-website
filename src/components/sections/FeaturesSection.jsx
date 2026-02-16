import { Calendar, CheckCircle, Clock, ExternalLink } from 'lucide-react';
import { Reveal } from '../common/Reveal';
import { SectionTitle } from '../common/SectionTitle';

export function FeaturesSection() {
  return (
    <section id="features" className="relative z-10 py-section md:py-sectionLg">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle title="選ばれる、確かな理由" subtitle="Why Choose Us" />
        <div className="grid md:grid-cols-3 gap-6">
          <Reveal className="md:col-span-2">
            <div className="group h-full bg-surface-card rounded-card p-8 md:p-12 shadow-card border border-slate-100 hover:shadow-lift transition-all duration-300 relative overflow-hidden">
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
            </div>
          </Reveal>

          <Reveal delay={200} className="md:row-span-2">
            <div className="h-full text-white rounded-card p-8 md:p-10 shadow-lift flex flex-col relative overflow-hidden group">
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
            </div>
          </Reveal>

          <Reveal delay={400} className="md:col-span-2">
            <div className="group h-full bg-gradient-to-r from-pink-50 to-white rounded-card p-8 md:p-10 shadow-card border border-pink-100 hover:shadow-lift transition-all duration-300 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-soft flex items-center justify-center text-brand-pink">
                    <Clock size={24} />
                  </div>
                  <h3 className="type-h2">柔軟な調整</h3>
                </div>
                <p className="type-body content-readable">
                  テスト前の「回数増加」や、事情に合わせた「リモート対応」など、ご家庭の状況に合わせて柔軟に対応します。部活動との両立も応援します。
                </p>
              </div>
              <div className="bg-white p-4 rounded-soft shadow-card rotate-1 group-hover:rotate-0 transition-transform duration-300 border border-slate-100">
                <div className="flex items-center gap-2 text-xs font-bold text-text-muted mb-2">
                  <Calendar size={14} /> スケジュール例
                </div>
                <div className="space-y-2 w-48">
                  <div className="h-2 bg-slate-100 rounded" />
                  <div className="h-8 bg-sky-100 rounded px-2 flex items-center text-xs text-brand-skyDark font-bold border-l-4 border-brand-sky">テスト前集中講座</div>
                  <div className="h-2 bg-slate-100 rounded" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import { Calendar, CheckCircle, Clock, ExternalLink } from 'lucide-react';
import { Reveal } from '../common/Reveal';
import { SectionTitle } from '../common/SectionTitle';

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle title="選ばれる、確かな理由" subtitle="Why Choose Us" />
        <div className="grid md:grid-cols-3 gap-6">
          <Reveal className="md:col-span-2">
            <div className="group h-full bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-sky-50 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center text-sky-600 mb-6 group-hover:-translate-y-2 transition-transform">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">体験授業は<span className="text-sky-600">「3回」</span>。<br />見極めてからスタート。</h3>
                <p className="text-slate-600 text-lg leading-relaxed max-w-lg">
                  「1回だけでは分からない」という声にお応えしました。先生との相性、教室の雰囲気、通塾の負担感。
                  これらをしっかり確認し、納得してから入塾していただきます。
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200} className="md:row-span-2">
            <div className="h-full bg-slate-900 text-white rounded-[2rem] p-8 md:p-10 shadow-xl flex flex-col relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800" />
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center text-yellow-400 mb-6">
                  <ExternalLink size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">学びの選択肢</h3>
                <div className="text-slate-300 leading-relaxed mb-8">
                  <p className="mb-4">5科目に加え、好奇心を刺激するプログラムも用意。</p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />実験・工作教室</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />AIプログラミング</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />ピアノ</li>
                  </ul>
                </div>
                <div className="mt-auto pt-8 border-t border-white/10">
                  <p className="text-xs text-slate-400">※開講状況は時期により異なります</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={400} className="md:col-span-2">
            <div className="group h-full bg-gradient-to-r from-pink-50 to-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-pink-100 hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center text-pink-600">
                    <Clock size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">柔軟な調整</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  テスト前の「回数増加」や、事情に合わせた「リモート対応」など、ご家庭の状況に合わせて柔軟に対応します。部活動との両立も応援します。
                </p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm rotate-2 group-hover:rotate-0 transition-transform duration-300 border border-slate-100">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mb-2">
                  <Calendar size={14} /> スケジュール例
                </div>
                <div className="space-y-2 w-48">
                  <div className="h-2 bg-slate-100 rounded" />
                  <div className="h-8 bg-sky-100 rounded px-2 flex items-center text-xs text-sky-700 font-bold border-l-4 border-sky-500">テスト前集中講座</div>
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

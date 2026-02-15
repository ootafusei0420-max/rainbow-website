import { CheckCircle, Sparkles } from 'lucide-react';
import { PRICING_BY_TAB, PRICING_TABS } from '../../data/siteData';
import { Button } from '../common/Button';
import { Reveal } from '../common/Reveal';
import { SectionTitle } from '../common/SectionTitle';

export function PricingSection({ activeTab, setActiveTab }) {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute top-1/2 left-0 w-full h-1/2 bg-sky-50/50 -skew-y-3 z-0" />
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <SectionTitle title="明確な料金プラン" subtitle="Pricing" />

        <Reveal>
          <div className="glass-panel rounded-2xl p-6 mb-10 text-center max-w-md mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-500 to-pink-500" />
            <span className="text-slate-500 text-sm font-bold block mb-1">入会金</span>
            <div className="text-3xl font-extrabold text-slate-800 tracking-tight">
              20,000<span className="text-base font-normal text-slate-500 ml-1">円（税込）</span>
            </div>
            <div className="mt-3 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-bold">
              <Sparkles size={12} /> 紹介なら0円キャンペーン中
            </div>
          </div>
        </Reveal>

        <div className="flex justify-center mb-8">
          <div className="bg-white/80 backdrop-blur p-1.5 rounded-full shadow-sm border border-slate-200 inline-flex">
            {PRICING_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeTab === tab.id ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PRICING_BY_TAB[activeTab].map((price, index) => {
            const times = index + 1;
            const popular = times === 2;
            return (
              <Reveal key={times} delay={times * 100} className="h-full">
                <div
                  className={`h-full bg-white rounded-2xl p-6 border transition-all duration-300 flex flex-col items-center text-center ${
                    popular ? 'border-sky-500 shadow-xl scale-105 relative z-10' : 'border-slate-100 shadow-sm hover:shadow-lg'
                  }`}
                >
                  {popular && <div className="absolute -top-4 bg-sky-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">一番人気</div>}
                  <div className="text-slate-500 font-bold mb-4">週{times}回コース</div>
                  <div className="text-3xl font-extrabold text-slate-800 mb-2">{price.toLocaleString()}<span className="text-sm font-normal text-slate-400">円</span></div>
                  <p className="text-xs text-slate-400 mb-6">月額・税込</p>
                  <ul className="text-sm text-slate-600 space-y-3 mb-8 w-full text-left pl-4">
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-sky-500" /> 振替対応可</li>
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-sky-500" /> 学習報告あり</li>
                  </ul>
                  <Button variant={popular ? 'primary' : 'secondary'} className="w-full mt-auto py-2 text-sm">相談する</Button>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

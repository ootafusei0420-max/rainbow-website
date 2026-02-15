import { Calendar, CheckCircle, Mail, Star } from 'lucide-react';
import { FLOW_STEPS } from '../../data/siteData';
import { Reveal } from '../common/Reveal';
import { SectionTitle } from '../common/SectionTitle';

const ICON_MAP = { Mail, Star, CheckCircle, Calendar };

export function FlowSection() {
  return (
    <section id="flow" className="py-24 bg-white relative z-10">
      <div className="max-w-4xl mx-auto px-4">
        <SectionTitle title="スタートまでの流れ" subtitle="Flow" />
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
          {FLOW_STEPS.map((step, idx) => {
            const Icon = ICON_MAP[step.icon];
            return (
              <Reveal key={step.title} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-200 group-hover:bg-sky-500 group-hover:text-white transition-colors shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <Icon size={18} />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                  <span className="font-bold text-sky-600 text-xs tracking-wider uppercase">Step 0{idx + 1}</span>
                  <h3 className="font-bold text-slate-800 text-lg mt-2 mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm">{step.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { Calendar, CheckCircle, Mail, Star } from 'lucide-react';
import { useMemo, useState } from 'react';
import { FLOW_STEPS } from '../../data/siteData';
import { Reveal } from '../common/Reveal';
import { SectionTitle } from '../common/SectionTitle';

const ICON_MAP = { Mail, Star, CheckCircle, Calendar };

export function FlowSection() {
  const [activeStep, setActiveStep] = useState(0);
  const progress = useMemo(() => ((activeStep + 1) / FLOW_STEPS.length) * 100, [activeStep]);

  return (
    <section id="flow" className="py-24 bg-white relative z-10">
      <div className="max-w-4xl mx-auto px-4">
        <SectionTitle title="スタートまでの流れ" subtitle="Flow" />

        <div className="mb-6">
          <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-sky-500 to-pink-500 transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>
          <p className="text-xs text-slate-500 mt-2">現在: Step {activeStep + 1} / {FLOW_STEPS.length}</p>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
          {FLOW_STEPS.map((step, idx) => {
            const Icon = ICON_MAP[step.icon];
            const isActive = idx === activeStep;
            return (
              <Reveal key={step.title} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <button
                  onClick={() => setActiveStep(idx)}
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-white transition-colors shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 ${isActive ? 'bg-sky-500 text-white' : 'bg-slate-200 text-slate-700 group-hover:bg-sky-500 group-hover:text-white'}`}
                  aria-label={`Step ${idx + 1} ${step.title} を選択`}
                >
                  <Icon size={18} />
                </button>
                <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border transition-all ${isActive ? 'bg-sky-50 border-sky-200 shadow-md' : 'bg-slate-50 border-slate-100 shadow-sm hover:shadow-md'}`}>
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

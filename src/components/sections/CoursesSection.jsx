import { HelpCircle } from 'lucide-react';
import { SectionTitle } from '../common/SectionTitle';

export function CoursesSection() {
  return (
    <section id="courses" className="pb-24 px-4 relative z-10">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-slate-100 shadow-sm p-8 md:p-12">
        <SectionTitle title="目的別に選べるコース" subtitle="Courses" align="left" />
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          {['基礎学力定着コース', '受験対策コース', '探究・習いごとコース'].map((course) => (
            <div key={course} className="bg-slate-50 border border-slate-100 rounded-2xl p-5 font-bold text-slate-700">
              {course}
            </div>
          ))}
        </div>
        <p className="mt-6 text-slate-500 text-sm flex items-center gap-2">
          <HelpCircle size={16} />
          学年・目標・通塾頻度に合わせて最適なコースをご提案します。
        </p>
      </div>
    </section>
  );
}

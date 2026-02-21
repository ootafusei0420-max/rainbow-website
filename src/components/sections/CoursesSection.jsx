import { HelpCircle } from 'lucide-react';
import { useMemo, useState } from 'react';
import { SectionTitle } from '../common/SectionTitle';

const COURSE_LIST = [
  { name: '基礎学力定着コース', tags: ['基礎', '小学生'], level: '基礎固め' },
  { name: '受験対策コース', tags: ['受験', '中学生', '高校生'], level: '入試対策' },
  { name: '探究・習いごとコース', tags: ['探究', '実践'], level: '好奇心拡張' },
  { name: '英語先取りコース', tags: ['英語', '中学生'], level: '先取り学習' },
  { name: '定期テスト集中コース', tags: ['テスト', '中学生', '高校生'], level: '短期集中' },
];

const FILTERS = ['すべて', '基礎', '受験', '探究', '英語', 'テスト'];

export function CoursesSection() {
  const [activeFilter, setActiveFilter] = useState('すべて');

  const filteredCourses = useMemo(() => {
    if (activeFilter === 'すべて') {
      return COURSE_LIST;
    }
    return COURSE_LIST.filter((course) => course.tags.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section id="courses" className="pb-24 px-4 relative z-10">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-slate-100 shadow-sm p-8 md:p-12">
        <SectionTitle title="目的別に選べるコース" subtitle="Courses" align="left" />

        <div className="flex flex-wrap gap-2 mb-5">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold border transition ${
                activeFilter === filter ? 'bg-slate-900 text-white border-slate-900' : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <p className="text-xs text-slate-500 mb-4">表示中: {filteredCourses.length}コース</p>

        <div className="grid md:grid-cols-3 gap-4 text-sm">
          {filteredCourses.map((course, index) => (
            <div key={course.name} className="bg-slate-50 border border-slate-100 rounded-2xl p-5 font-bold text-slate-700">
              <div>{course.name}</div>
              <div className="text-xs text-sky-600 mt-2 font-semibold">{course.level}</div>
              {index === 0 && <span className="inline-block mt-2 text-[10px] px-2 py-1 rounded-full bg-pink-100 text-pink-700">おすすめ</span>}
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

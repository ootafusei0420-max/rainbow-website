import { Clock3, MapPin } from 'lucide-react';
import { SectionTitle } from '../common/SectionTitle';

export function AccessSection() {
  return (
    <section id="access" className="py-24 px-4 bg-white/70 relative z-10">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title="アクセス" subtitle="Access" />
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 md:p-8">
            <div className="flex items-start gap-3 text-slate-700 mb-4">
              <MapPin className="text-sky-500 mt-0.5" size={20} />
              <div>
                <p className="font-bold text-slate-800">みらい学習塾 本校</p>
                <p className="text-sm text-slate-600">東京都〇〇区〇〇 1-2-3</p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-slate-700">
              <Clock3 className="text-pink-500 mt-0.5" size={20} />
              <div>
                <p className="font-bold text-slate-800">受付時間</p>
                <p className="text-sm text-slate-600">平日 14:00〜21:00 / 土曜 10:00〜18:00</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm bg-slate-200 min-h-[260px] flex items-center justify-center text-slate-500 text-sm">
            地図（Google Maps 埋め込み予定エリア）
          </div>
        </div>
      </div>
    </section>
  );
}

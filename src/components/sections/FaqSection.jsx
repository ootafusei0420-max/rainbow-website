import { ChevronDown } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Reveal } from '../common/Reveal';
import { SectionTitle } from '../common/SectionTitle';

const FAQ_ITEMS = [
  { q: '体験授業は本当に無料ですか？', a: 'はい、3回まで無料です。教材費などの追加請求もありません。' },
  { q: '入塾を急かされることはありますか？', a: '無理な勧誘は行いません。ご家庭の判断を最優先しています。' },
  { q: '部活や習い事と両立できますか？', a: '時間割の調整や振替対応で、継続しやすい通塾設計を行います。' },
  { q: 'オンライン対応は可能ですか？', a: '状況に応じてリモート対応も可能です。詳細は面談時に案内します。' },
  { q: '兄弟で通うと割引はありますか？', a: '兄弟通塾の特典をご用意しています。お問い合わせ時にご確認ください。' },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    if (!query.trim()) {
      return FAQ_ITEMS;
    }
    return FAQ_ITEMS.filter((item) => item.q.includes(query) || item.a.includes(query));
  }, [query]);

  return (
    <section id="faq" className="py-24 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="よくあるご質問" subtitle="FAQ" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="キーワードで検索（例：体験、オンライン）"
          className="w-full mb-5 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-300"
        />

        <div className="space-y-3">
          {filtered.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <Reveal key={item.q}>
                <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    className="w-full px-5 py-4 flex items-center justify-between text-left font-bold text-slate-700"
                  >
                    <span>{item.q}</span>
                    <ChevronDown size={18} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && <p className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">{item.a}</p>}
                </div>
              </Reveal>
            );
          })}
          {!filtered.length && <p className="text-sm text-slate-500">該当する質問が見つかりませんでした。</p>}
        </div>
      </div>
    </section>
  );
}

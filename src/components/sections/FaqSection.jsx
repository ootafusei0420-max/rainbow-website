import { ChevronDown } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Reveal } from '../common/Reveal';
import { SectionTitle } from '../common/SectionTitle';

const FAQ_CATEGORIES = [
  {
    category: '体験・入塾について',
    items: [
      { q: '体験授業は本当に無料ですか？', a: 'はい、3回まで無料です。教材費などの追加請求もありません。' },
      { q: '体験後の流れを教えてください。', a: '体験後に面談を行い、方針にご納得いただけた場合のみ入塾手続きへ進みます。' },
      { q: '入塾を急かされることはありますか？', a: '無理な勧誘は行いません。ご家庭の判断を最優先しています。' },
    ],
  },
  {
    category: '授業・学習サポート',
    items: [
      { q: '振替は可能ですか？', a: 'はい、前日までにご連絡いただければ振替対応が可能です。' },
      {
        q: 'どの教科に対応していますか？',
        a: '小学生・中学生は5教科に対応可能です。高校生で難関校志望の方は、在籍講師の状況により対応科目が変動するため、まずはお問い合わせください。',
      },
      {
        q: 'オンライン授業は対応していますか？',
        a: '常時対応可能です。生徒側でZoomまたはGoogle Meetを利用できる環境をご準備いただければ受講できます。',
      },
    ],
  },
  {
    category: '費用・割引について',
    items: [
      { q: '入会金や月謝以外に必要な費用はありますか？', a: '基本は入会金と月謝のみです。教材が必要な場合は事前にご案内し、同意なく追加費用は発生しません。' },
      { q: '兄弟割引はありますか？', a: 'はい。兄弟でご入会の場合、入会金2万円が無料になります。' },
      {
        q: '友達紹介の特典はありますか？',
        a: 'はい。紹介でご入会された場合、紹介された側は入会金2万円が無料、紹介した側は授業料から5,000円割引となります。',
      },
    ],
  },
  {
    category: '保護者サポート',
    items: [
      {
        q: '保護者面談はありますか？',
        a: 'はい。最低でも年3回は保護者面談を実施しています。定期試験結果や受験相談のため、月1〜2回の面談をご希望されるご家庭にも実際に対応しています。',
      },
    ],
  },
];

export function FaqSection() {
  const [openKey, setOpenKey] = useState('0-0');
  const [query, setQuery] = useState('');

  const filteredCategories = useMemo(() => {
    if (!query.trim()) {
      return FAQ_CATEGORIES;
    }

    return FAQ_CATEGORIES.map((group) => ({
      ...group,
      items: group.items.filter((item) => item.q.includes(query) || item.a.includes(query)),
    })).filter((group) => group.items.length > 0);
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

        <div className="space-y-6">
          {filteredCategories.map((group, groupIndex) => (
            <div key={group.category}>
              <h3 className="text-sm font-bold text-slate-700 mb-3 px-1">{group.category}</h3>
              <div className="space-y-3">
                {group.items.map((item, itemIndex) => {
                  const key = `${groupIndex}-${itemIndex}`;
                  const isOpen = openKey === key;
                  return (
                    <Reveal key={item.q}>
                      <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
                        <button
                          onClick={() => setOpenKey(isOpen ? '' : key)}
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
              </div>
            </div>
          ))}
          {!filteredCategories.length && <p className="text-sm text-slate-500">該当する質問が見つかりませんでした。</p>}
        </div>
      </div>
    </section>
  );
}

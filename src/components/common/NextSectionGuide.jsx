import { ArrowDownRight } from 'lucide-react';

export function NextSectionGuide({ currentSection, onMove }) {
  const order = ['features', 'courses', 'pricing', 'flow', 'faq', 'contact'];
  const labels = {
    features: '特徴',
    courses: 'コース',
    pricing: '料金',
    flow: '流れ',
    faq: 'FAQ',
    contact: 'お問い合わせ',
  };

  const index = order.indexOf(currentSection);
  const nextId = index >= 0 && index < order.length - 1 ? order[index + 1] : 'contact';

  return (
    <button
      onClick={() => onMove(nextId)}
      className="md:hidden fixed bottom-24 left-4 right-4 z-40 h-11 rounded-xl bg-slate-900 text-white text-sm font-bold shadow-lg inline-flex items-center justify-center gap-1"
      aria-label={`次のセクション ${labels[nextId]} に移動`}
    >
      次に見る: {labels[nextId]} <ArrowDownRight size={15} />
    </button>
  );
}

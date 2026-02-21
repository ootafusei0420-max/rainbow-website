import { MessageCircleMore, Phone } from 'lucide-react';
import { formatPhoneNumber, getTelHref } from '../../utils/contact';

export function MobileStickyCta({ phone, onReserve }) {
  const phoneLabel = formatPhoneNumber(phone);

  return (
    <div className="md:hidden fixed bottom-4 left-4 right-4 z-50">
      <div className="bg-white/95 backdrop-blur rounded-2xl p-3 shadow-xl border border-slate-200">
        <div className="flex items-center justify-between gap-3 mb-2">
          <div>
            <p className="text-[11px] text-slate-500">迷ったらまずは</p>
            <p className="font-bold text-slate-800 text-sm">無料体験の相談（1分）</p>
          </div>
          <a href={getTelHref(phone)} aria-label={`${phoneLabel}に電話する`} className="text-xs font-bold text-slate-600 underline underline-offset-2 inline-flex items-center gap-1">
            <Phone size={13} /> {phoneLabel}
          </a>
        </div>

        <button
          onClick={onReserve}
          className="w-full h-11 bg-sky-500 rounded-xl flex items-center justify-center font-bold text-sm text-white shadow-lg shadow-sky-500/30"
        >
          <MessageCircleMore size={16} className="mr-1" /> LINE・電話の相談先を開く
        </button>
      </div>
    </div>
  );
}

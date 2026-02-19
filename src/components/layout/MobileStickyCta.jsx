import { Phone } from 'lucide-react';

export function MobileStickyCta({ phone, onReserve }) {
  return (
    <div className="md:hidden fixed bottom-4 left-4 right-4 z-50">
      <div className="bg-slate-900/90 backdrop-blur text-white rounded-full p-2 shadow-2xl flex items-center justify-between pl-6 pr-2 border border-white/10">
        <div className="flex flex-col">
          <span className="text-[10px] text-slate-400">まずは気軽に</span>
          <span className="font-bold text-sm">無料体験・相談</span>
        </div>
        <div className="flex gap-2">
          <a href={`tel:${phone}`} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-green-400">
            <Phone size={18} />
          </a>
          <button
            onClick={onReserve}
            className="h-10 px-5 bg-sky-500 rounded-full flex items-center justify-center font-bold text-sm shadow-lg shadow-sky-500/30"
          >
            予約
          </button>
        </div>
      </div>
    </div>
  );
}

import { ExternalLink, Phone, X } from 'lucide-react';
import { Button } from './Button';

const isMobileDevice = () => {
  if (typeof navigator === 'undefined') {
    return false;
  }

  return /iPhone|iPad|iPod|Android|Mobile/i.test(navigator.userAgent);
};

export function TrialContactModal({ isOpen, onClose, phone, lineUrl }) {
  if (!isOpen) {
    return null;
  }

  const canCallFromDevice = isMobileDevice();

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center px-4" role="dialog" aria-modal="true" aria-labelledby="trial-contact-title">
      <button className="absolute inset-0 bg-slate-900/55 backdrop-blur-sm" onClick={onClose} aria-label="モーダルを閉じる" />

      <div className="relative w-full max-w-md rounded-card bg-white p-6 md:p-8 shadow-2xl border border-slate-100">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-slate-400 hover:text-slate-600 transition-colors"
          aria-label="閉じる"
        >
          <X size={20} />
        </button>

        <p className="text-sm font-bold text-brand-skyDark mb-2">無料体験のお申し込み</p>
        <h3 id="trial-contact-title" className="type-h2 mb-3">ご希望の連絡方法を選んでください</h3>
        <p className="type-body mb-6">LINE なら24時間いつでも受付。お電話はスマートフォンからそのまま発信できます。</p>

        <div className="space-y-3">
          <a
            href={lineUrl}
            target="_blank"
            rel="noreferrer"
            className="group w-full inline-flex items-center justify-between rounded-soft border border-emerald-100 bg-emerald-50 px-4 py-3 font-bold text-emerald-700 hover:bg-emerald-100 transition-colors"
          >
            <span className="inline-flex items-center gap-2">
              <ExternalLink size={18} />
              LINEで申し込む
            </span>
            <span className="text-xs text-emerald-600">公式ページへ</span>
          </a>

          {canCallFromDevice ? (
            <a
              href={`tel:${phone}`}
              className="w-full inline-flex items-center justify-between rounded-soft border border-sky-100 bg-sky-50 px-4 py-3 font-bold text-brand-skyDark hover:bg-sky-100 transition-colors"
            >
              <span className="inline-flex items-center gap-2">
                <Phone size={18} />
                電話をかける
              </span>
              <span className="text-sm">{phone}</span>
            </a>
          ) : (
            <div className="w-full inline-flex items-center justify-between rounded-soft border border-slate-200 bg-slate-50 px-4 py-3 font-bold text-slate-600 cursor-not-allowed">
              <span className="inline-flex items-center gap-2">
                <Phone size={18} />
                お電話で申し込む
              </span>
              <span className="text-sm">{phone}</span>
            </div>
          )}
        </div>

        {!canCallFromDevice && <p className="text-xs text-slate-500 mt-4">※PCでは発信できないため、電話番号のみ表示しています。</p>}

        <Button variant="secondary" className="w-full mt-5" onClick={onClose}>
          閉じる
        </Button>
      </div>
    </div>
  );
}

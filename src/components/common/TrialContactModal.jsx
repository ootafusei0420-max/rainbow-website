import { useEffect, useMemo, useRef, useState } from 'react';
import { Check, Copy, ExternalLink, Phone, X } from 'lucide-react';
import { Button } from './Button';
import { formatPhoneNumber, getTelHref, isMobileDevice, isWithinCallHours } from '../../utils/contact';

const FOCUSABLE_SELECTOR = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function TrialContactModal({ isOpen, onClose, phone, lineUrl, lineId, businessHours }) {
  const [statusMessage, setStatusMessage] = useState('');
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const previousFocusedRef = useRef(null);

  const canCallFromDevice = isMobileDevice();
  const formattedPhone = formatPhoneNumber(phone);
  const isCallAvailable = useMemo(
    () => isWithinCallHours(businessHours.callStartHour, businessHours.callEndHour),
    [businessHours.callEndHour, businessHours.callStartHour],
  );
  const preferredMethod = useMemo(() => {
    if (typeof window === 'undefined' || !isOpen) {
      return 'line';
    }

    return localStorage.getItem('preferredContactMethod') || 'line';
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    previousFocusedRef.current = document.activeElement;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key !== 'Tab' || !dialogRef.current) {
        return;
      }

      const focusables = dialogRef.current.querySelectorAll(FOCUSABLE_SELECTOR);
      if (!focusables.length) {
        return;
      }

      const firstElement = focusables[0];
      const lastElement = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      previousFocusedRef.current?.focus?.();
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!statusMessage) {
      return undefined;
    }

    const timer = setTimeout(() => setStatusMessage(''), 1800);
    return () => clearTimeout(timer);
  }, [statusMessage]);

  if (!isOpen) {
    return null;
  }

  const phoneButton = (
    <>
      {canCallFromDevice && isCallAvailable ? (
        <a
          href={getTelHref(phone)}
          onClick={() => {
            localStorage.setItem('preferredContactMethod', 'phone');
            onClose();
          }}
          className="w-full inline-flex items-center justify-between rounded-soft border border-sky-100 bg-sky-50 px-4 py-3 font-bold text-brand-skyDark hover:bg-sky-100 transition-colors"
        >
          <span className="inline-flex items-center gap-2">
            <Phone size={18} />
            電話をかける
          </span>
          <span className="text-sm">{formattedPhone}</span>
        </a>
      ) : (
        <div className="w-full inline-flex items-center justify-between rounded-soft border border-slate-200 bg-slate-50 px-4 py-3 font-bold text-slate-600">
          <span className="inline-flex items-center gap-2">
            <Phone size={18} />
            お電話で申し込む
          </span>
          <span className="text-sm">{formattedPhone}</span>
        </div>
      )}
    </>
  );

  const lineButton = (
    <a
      href={lineUrl}
      target="_blank"
      rel="noreferrer"
      onClick={() => {
        localStorage.setItem('preferredContactMethod', 'line');
        onClose();
      }}
      className="group w-full inline-flex items-center justify-between rounded-soft border border-emerald-100 bg-emerald-50 px-4 py-3 font-bold text-emerald-700 hover:bg-emerald-100 transition-colors"
    >
      <span className="inline-flex items-center gap-2">
        <ExternalLink size={18} />
        LINEで申し込む
      </span>
      <span className="text-xs text-emerald-600">公式ページへ</span>
    </a>
  );

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center px-4" role="dialog" aria-modal="true" aria-labelledby="trial-contact-title">
      <button className="absolute inset-0 bg-slate-900/55 backdrop-blur-sm" onClick={onClose} aria-label="モーダルを閉じる" />

      <div ref={dialogRef} className="relative w-full max-w-md rounded-card bg-white p-6 md:p-8 shadow-2xl border border-slate-100">
        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="absolute right-4 top-4 text-slate-400 hover:text-slate-600 transition-colors"
          aria-label="閉じる"
        >
          <X size={20} />
        </button>

        <p className="text-sm font-bold text-brand-skyDark mb-2">無料体験のお申し込み</p>
        <h3 id="trial-contact-title" className="type-h2 mb-3">ご希望の連絡方法を選んでください</h3>
        <p className="type-body mb-2">LINE なら24時間受付。お電話はスマートフォンから発信できます。</p>
        <p className="text-xs text-slate-500 mb-6">お電話受付時間: {businessHours.label}</p>
        <div className="mb-4 flex items-center justify-between rounded-soft bg-slate-50 px-3 py-2 text-xs text-slate-600">
          <span>LINE ID: {lineId}</span>
          <button
            onClick={async () => {
              if (navigator.clipboard) {
                await navigator.clipboard.writeText(lineId);
                setStatusMessage('LINE IDをコピーしました');
              }
            }}
            className="inline-flex items-center gap-1 font-bold text-brand-skyDark hover:text-brand-sky"
          >
            {statusMessage ? <Check size={14} /> : <Copy size={14} />} コピー
          </button>
        </div>

        <div className="space-y-3">
          {preferredMethod === 'phone' ? (
            <>
              {phoneButton}
              {lineButton}
            </>
          ) : (
            <>
              {lineButton}
              {phoneButton}
            </>
          )}
        </div>

        {!canCallFromDevice && (
          <div className="mt-4 flex items-center justify-between gap-3">
            <p className="text-xs text-slate-500">※PCでは発信できないため、電話番号のみ表示しています。</p>
            <button
              onClick={async () => {
                if (navigator.clipboard) {
                  await navigator.clipboard.writeText(formattedPhone);
                  setStatusMessage('電話番号をコピーしました');
                }
              }}
              className="inline-flex items-center gap-1 text-xs font-bold text-brand-skyDark hover:text-brand-sky"
            >
              {statusMessage ? <Check size={14} /> : <Copy size={14} />} コピー
            </button>
          </div>
        )}

        {canCallFromDevice && !isCallAvailable && (
          <p className="text-xs text-amber-600 mt-4">※現在はお電話受付時間外です。LINEからお申し込みください。</p>
        )}

        {statusMessage && <p className="text-xs text-emerald-600 mt-3" aria-live="polite">{statusMessage}</p>}

        <Button variant="secondary" className="w-full mt-5" onClick={onClose}>
          閉じる
        </Button>
      </div>
    </div>
  );
}

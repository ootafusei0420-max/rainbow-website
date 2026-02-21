import { useEffect, useState } from 'react';

export function IntroSplash({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startedAt = Date.now();
    const total = 1800;

    const timer = setInterval(() => {
      const elapsed = Date.now() - startedAt;
      const next = Math.min(100, Math.round((elapsed / total) * 100));
      setProgress(next);
      if (elapsed >= total) {
        clearInterval(timer);
        onComplete();
      }
    }, 60);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[120] bg-slate-950 flex items-center justify-center overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1600&q=80"
        alt="本棚と学習空間"
        className="absolute inset-0 w-full h-full object-cover opacity-45 animate-splash-zoom"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/45 to-slate-950/85" />

      <div className="relative z-10 text-center text-white px-6">
        <p className="text-xs tracking-[0.35em] uppercase text-sky-200 mb-3">Future Learning Lab</p>
        <h1 className="text-3xl md:text-5xl font-extrabold mb-2">みらい学習塾</h1>
        <p className="text-sm text-slate-200 mb-6">あなたに合う学び方を、丁寧に見つける。</p>

        <div className="w-56 mx-auto h-1 rounded-full bg-white/20 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-sky-300 to-pink-300 transition-all duration-100" style={{ width: `${progress}%` }} />
        </div>
        <p className="text-xs text-slate-200 mt-2">Loading... {progress}%</p>
      </div>
    </div>
  );
}

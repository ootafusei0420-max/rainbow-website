const DOTS = [
  { top: '14%', left: '8%', size: '8px', delay: '0s' },
  { top: '22%', left: '78%', size: '10px', delay: '1s' },
  { top: '35%', left: '58%', size: '7px', delay: '2.2s' },
  { top: '48%', left: '20%', size: '9px', delay: '1.4s' },
  { top: '62%', left: '86%', size: '8px', delay: '2.8s' },
  { top: '76%', left: '32%', size: '10px', delay: '1.8s' },
  { top: '84%', left: '65%', size: '7px', delay: '0.8s' },
];

export function AnimatedBackground({ disabled = false }) {
  if (disabled) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-[0.18] animate-blob" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-[0.16] animate-blob animation-delay-2000" />
      <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-[0.14] animate-blob animation-delay-4000" />

      {DOTS.map((dot, index) => (
        <span
          key={dot.top + dot.left + index}
          className="absolute rounded-full bg-white/70 shadow-[0_0_12px_rgba(255,255,255,0.6)] animate-twinkle"
          style={{ top: dot.top, left: dot.left, width: dot.size, height: dot.size, animationDelay: dot.delay }}
        />
      ))}
    </div>
  );
}

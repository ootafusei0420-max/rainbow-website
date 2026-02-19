export function AnimatedBackground({ disabled = false }) {
  if (disabled) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-[0.18] animate-blob" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-[0.16] animate-blob animation-delay-2000" />
      <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-[0.14] animate-blob animation-delay-4000" />
    </div>
  );
}

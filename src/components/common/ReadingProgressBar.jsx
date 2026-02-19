import { useEffect, useState } from 'react';

export function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const next = totalHeight > 0 ? Math.min((window.scrollY / totalHeight) * 100, 100) : 0;
      setProgress(next);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[70] h-1 bg-transparent pointer-events-none">
      <div className="h-full bg-gradient-to-r from-brand-sky via-brand-pink to-brand-yellow transition-[width] duration-150" style={{ width: `${progress}%` }} />
    </div>
  );
}

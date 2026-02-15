export function Footer() {
  return (
    <footer className="bg-slate-50 text-slate-400 py-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h5 className="text-slate-800 font-bold text-lg mb-1">みらい学習塾</h5>
          <p className="text-xs">東京都〇〇区〇〇 1-2-3</p>
        </div>
        <div className="flex gap-6 text-sm">
          <span className="hover:text-sky-600 cursor-pointer">プライバシーポリシー</span>
          <span className="hover:text-sky-600 cursor-pointer">運営会社</span>
        </div>
        <p className="text-xs">&copy; {new Date().getFullYear()} Mirai Juku.</p>
      </div>
    </footer>
  );
}

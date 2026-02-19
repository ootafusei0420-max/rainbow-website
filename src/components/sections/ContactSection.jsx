import { ArrowRight, Mail, Phone } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../common/Button';
import { formatPhoneNumber } from '../../utils/contact';

export function ContactSection({ contactInfo, onOpenTrialModal }) {
  const formattedPhone = formatPhoneNumber(contactInfo.phone);
  const [form, setForm] = useState({ name: '', contact: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors = {};
    if (form.name.trim().length < 2) {
      nextErrors.name = 'お名前を2文字以上で入力してください';
    }
    if (!form.contact.trim()) {
      nextErrors.contact = 'ご連絡先を入力してください';
    }
    if (form.message.trim().length < 6) {
      nextErrors.message = 'ご相談内容を6文字以上で入力してください';
    }
    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (!Object.keys(nextErrors).length) {
      setSubmitted(true);
      setForm({ name: '', contact: '', message: '' });
      setTimeout(() => setSubmitted(false), 2200);
    }
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-4xl mx-auto relative">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-pink-500 transform -rotate-2 rounded-[3rem] opacity-20 blur-2xl" />
        <div className="bg-slate-900 text-white rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20" />

          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            <div>
              <h2 className="text-3xl font-bold mb-6">まずは、<br />お話を聞かせてください。</h2>
              <p className="text-slate-300 mb-8 leading-relaxed">
                「勉強の仕方がわからない」「自分に合う先生が見つからない」...<br />
                そんな悩みがあれば、まずは3回の無料体験で、私たちの塾が合うかどうか試してみてください。
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                  <Phone className="text-sky-400" />
                  <div>
                    <div className="text-xs text-slate-400">お電話でのご相談</div>
                    <div className="font-bold text-xl">{formattedPhone}</div>
                  </div>
                </div>
                <a href={contactInfo.lineUrl} target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm hover:bg-white/15 transition-colors">
                  <Mail className="text-pink-400" />
                  <div>
                    <div className="text-xs text-slate-400">LINEでのご相談</div>
                    <div className="font-bold text-sm">{contactInfo.line}</div>
                  </div>
                </a>
              </div>
              <Button variant="secondary" className="mt-5" onClick={onOpenTrialModal}>
                体験授業を申し込む
              </Button>
            </div>

            <form className="bg-white text-slate-800 rounded-2xl p-6 shadow-lg space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase mb-1 block">お名前</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 focus:ring-2 focus:ring-sky-500 outline-none transition-all"
                  placeholder="山田 花子"
                />
                {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase mb-1 block">ご連絡先</label>
                <input
                  type="text"
                  value={form.contact}
                  onChange={(e) => setForm((prev) => ({ ...prev, contact: e.target.value }))}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 focus:ring-2 focus:ring-sky-500 outline-none transition-all"
                  placeholder="090-0000-0000"
                />
                {errors.contact && <p className="text-xs text-red-500 mt-1">{errors.contact}</p>}
              </div>
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase mb-1 block">ご相談内容</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 h-24 focus:ring-2 focus:ring-sky-500 outline-none transition-all resize-none"
                  placeholder="体験授業を希望します。"
                />
                <div className="flex items-center justify-between mt-1">
                  {errors.message ? <p className="text-xs text-red-500">{errors.message}</p> : <span className="text-xs text-slate-400">6文字以上入力</span>}
                  <span className="text-xs text-slate-400">{form.message.length}文字</span>
                </div>
              </div>
              <Button variant="accent" className="w-full mt-2" icon={ArrowRight} type="submit">送信する</Button>
              {submitted && <p className="text-xs text-emerald-600 font-bold">送信準備ができました。担当者より折り返しご連絡いたします。</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

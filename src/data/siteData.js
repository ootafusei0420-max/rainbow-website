export const CONTACT_INFO = {
  phone: '0120111222',
  email: 'info@example-juku.com',
  line: '@example_line',
  lineUrl: 'https://lin.ee/example',
  businessHours: {
    label: '平日 10:00〜20:00',
    callStartHour: 10,
    callEndHour: 20,
  },
};

export const NAV_ITEMS = [
  { label: '特徴', id: 'features' },
  { label: 'コース', id: 'courses' },
  { label: '料金', id: 'pricing' },
  { label: '流れ', id: 'flow' },
];

export const MOBILE_NAV_ITEMS = [...NAV_ITEMS, { label: 'アクセス', id: 'contact' }];

export const FLOW_STEPS = [
  { title: 'お問い合わせ', desc: 'フォーム・電話で現状をヒアリング', icon: 'Mail' },
  { title: '初回体験', desc: 'お子様の性格や学力をチェック', icon: 'Star' },
  { title: '2〜3回目体験', desc: '先生との相性をじっくり確認', icon: 'CheckCircle' },
  { title: '面談・入塾', desc: '方針に納得いただけた場合のみ手続き', icon: 'Calendar' },
];

export const PRICING_TABS = [
  { id: 'elementary', label: '小学生' },
  { id: 'junior', label: '中学生' },
  { id: 'high', label: '高校生' },
];

export const PRICING_BY_TAB = {
  elementary: [14000, 26000, 38000],
  junior: [16000, 30000, 44000],
  high: [18000, 34000, 50000],
};

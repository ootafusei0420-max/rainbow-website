# Design Review Checklist

## 1. 一貫性 (Consistency)
- [ ] 配色は `brand / surface / text` トークンのみで構成されている。
- [ ] カードの角丸・影は `rounded-card`, `rounded-soft`, `shadow-card`, `shadow-lift` を優先している。
- [ ] CTAボタンのバリアント（primary / secondary / accent）の使い分けがページ全体で一貫している。

## 2. 可読性 (Readability)
- [ ] 見出しは `.type-display`, `.type-h1`, `.type-h2` のいずれかを使用している。
- [ ] 本文は `.type-body` を利用し、1行の可読幅は `.content-readable` 相当（約65ch以内）になっている。
- [ ] 太字の強調は重要文言に限定し、連続した過剰強調がない。

## 3. 視線誘導 (Visual Hierarchy)
- [ ] 主要CTAはファーストビューで視認可能で、周囲に十分な余白がある。
- [ ] セクションタイトルと本文の距離が均一で、情報ブロックの優先順が明確。
- [ ] アクセント色（sky/pink/yellow）の同時多用がなく、1ブロック1主役色を守っている。

## 4. アクセシビリティ (Accessibility)
- [ ] 文字色と背景色のコントラストが WCAG AA 相当を満たしている。
- [ ] キーボードフォーカス時にボタンや主要操作要素の状態が明確に見える。
- [ ] 画像には文脈に即した `alt` 属性が設定されている。

## 5. モーション (Motion)
- [ ] ホバーや浮遊アニメーションの移動量は軽微で、情報理解を阻害しない。
- [ ] `prefers-reduced-motion: reduce` で主要アニメーションが停止・簡略化される。
- [ ] 「目立たせるための過度な動き」ではなく、余白・コントラストによる強調が優先される。

## Exit Criteria
- [ ] 上記項目で重大な未達がないことをPR説明文に明記する。
- [ ] Hero / Features / Pricing / Contact の4セクションを対象にセルフレビューを実施する。

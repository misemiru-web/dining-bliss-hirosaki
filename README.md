# dining Bliss Sample LP

青森県弘前市のタパスバー・レストラン「dining Bliss」向け、ミセミルWeb営業提案用サンプルLPです。

> このリポジトリは営業提案用サンプルの制作・レビュー用です。  
> 実店舗の正式Webサイトではありません。

## Project Status

- Status: Redesign / implementation in progress
- Current design specification: `docs/requirements/dining-bliss-lp-requirements-v1.3.1.md`
- Desktop reference: `docs/design-reference/desktop.png`
- Mobile reference: `docs/design-reference/mobile.png`
- Main CTA: 予約ページを見る
- Search indexing: `noindex, nofollow`

## Source of Truth

実装時の優先順位は以下です。

1. `docs/requirements/dining-bliss-lp-requirements-v1.3.1.md`
2. Desktop / Mobile の完成イメージ
3. 既存実装

### 役割分担

- 要件定義書：文章、店舗情報、CTA、セクション構成、技術要件の正本
- 完成イメージ：配色、余白、写真サイズ、レイアウトの参考
- 既存コード：再利用できる技術部分のみ利用可

完成イメージ内に画像生成AIが追加した料理名・コピー・ボタン等は、要件定義書に存在しない場合は実装しません。

## Information Policy

店舗情報は「確認済み / 仮説 / 未確認」を区別して扱います。

- 店舗公式Instagramおよび直接確認済み情報を優先
- Google Maps / 第三者掲載ページは補助情報
- 人気商品、価格、営業時間、予約方法等を推測で追加しない
- 正式制作時に再確認が必要な情報は、営業サンプル上で断定しすぎない

## Image Policy

今回の営業用サンプルでは、店舗から使用許可を得た公式Instagram掲載写真を使用します。

使用しないもの：

- Google Maps掲載写真
- 第三者SNS投稿
- 権利不明画像
- DMスクリーンショット
- 不要な元画像一式

実装用画像は `public/images/` にWeb用サイズで整理します。

### Planned assets

```text
public/images/
  hero-demi-omelette.jpg
  food-cutlet.jpg
  food-pasta.jpg
  food-meat.jpg
  food-tapas.jpg
  interior-counter.jpg
  interior-table.jpg
  exterior-night.jpg
```

必要な画像だけを採用し、使用しない画像は無理に追加しません。

## Design Direction

**FOOD FIRST, WARM AFTER DARK**

料理を主役にし、実店舗のダークな空間と暖色照明を補完するModern Casual Diningのデザイン。

### Color tokens

- Warm Ivory: `#F5F0E8`
- Charcoal: `#211F1C`
- Deep Burgundy: `#7A2E2A`
- Dark Text: `#24211E`
- Light Text: `#F5F0E8`
- Muted Text: `#7D756D`
- Warm Gold: `#D2B78A`
- Light Border: `#D8CFC3`

## Page Structure

1. Header
2. Hero
3. About / Quick Introduction
4. Food / Featured Dishes
5. Lunch & Dinner
6. Atmosphere
7. Shop Information / Access
8. Reservation CTA
9. Footer

## Tech Stack

- Next.js
- React
- TypeScript
- App Router
- Static Export
- GitHub Pages for sales sample only

正式商用サイトの標準ホストとしてGitHub Pagesは使用しません。

## Development

```bash
npm install
npm run dev
```

Local development:

```text
http://localhost:3000
```

## Quality Checks

必須確認幅：

- 375px
- 390px
- 768px
- 1024px
- 1440px

確認項目：

- 横スクロールなし
- H1・本文の不自然な改行なし
- Heroの主要被写体が切れない
- CTAが折り返さない
- 画像トリミングが自然
- Instagram / Map / 予約リンクの実動作
- `noindex, nofollow`
- 404 / asset欠落なし
- lint成功
- build成功
- GitHub Pages実URLで最終確認

## Git Workflow

`main` はレビュー済み・公開可能な安定版です。

制作・修正は作業ブランチ上で行います。

今回の再設計ブランチ例：

```text
redesign/v1.3.1
```

フロー：

```text
working branch
  -> local review
  -> lint / build
  -> push
  -> Pull Request
  -> review
  -> main
  -> GitHub Pages
```

mainへ直接制作変更を入れません。

## Deployment

営業サンプルはGitHub Pagesへ静的デプロイします。

Project Pagesの場合は以下を必ず確認します。

- `output: "export"`
- `basePath`
- asset path
- GitHub Actions成功
- 公開URLの画像/CSS 404

## Notes

- 「営業提案用サンプル」であることをページ内に表示します。
- 正式契約後は店舗確認済み情報・正式素材へ差し替えます。
- 予約URL、住所、営業時間等の第三者情報は正式制作時に再確認します。

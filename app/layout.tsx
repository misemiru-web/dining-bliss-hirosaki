import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "dining Bliss | 弘前のタパスバー・レストラン",
  description:
    "dining Blissの営業提案用サンプルサイト。料理、店内の雰囲気、営業時間、ご予約案内を1ページで紹介します。",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}

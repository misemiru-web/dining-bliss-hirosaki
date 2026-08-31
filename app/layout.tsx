import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "dining Bliss｜弘前駅近くのイタリアン",
  description:
    "弘前駅近くで、こだわりの料理を気軽に楽しめるイタリアン dining Blissの営業提案用サンプルLPです。",
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

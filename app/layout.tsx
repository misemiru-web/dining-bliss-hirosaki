import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "dining Bliss",
  description: "青森県弘前市のタパスバー・レストラン dining Bliss",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SecureHub - セキュリティ文化醸成プラットフォーム",
  description: "インシデント報告＆セキュリティ文化醸成プラットフォーム",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}

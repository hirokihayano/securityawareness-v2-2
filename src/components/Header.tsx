"use client";

import { usePathname } from "next/navigation";

const pageTitles: Record<string, string> = {
  "/": "ダッシュボード",
  "/incidents": "インシデント報告",
  "/threats": "脅威情報フィード",
  "/qa": "匿名Q&A",
  "/executive": "経営層ダッシュボード",
};

export default function Header() {
  const pathname = usePathname();
  const title = pageTitles[pathname] || "SecureHub";

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-20">
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      <div className="flex items-center gap-4">
        <button className="relative p-2 text-gray-500 hover:text-gray-700 transition-colors">
          <span className="text-xl">🔔</span>
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <span className="text-sm text-gray-500">2026年3月10日</span>
      </div>
    </header>
  );
}

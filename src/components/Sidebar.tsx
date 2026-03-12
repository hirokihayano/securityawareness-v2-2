"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "ダッシュボード", icon: "📊" },
  { href: "/incidents", label: "インシデント報告", icon: "🚨" },
  { href: "/threats", label: "脅威情報フィード", icon: "🛡️" },
  { href: "/qa", label: "匿名Q&A", icon: "💬" },
  { href: "/executive", label: "経営層ダッシュボード", icon: "📈" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-[#1e3a5f] text-white min-h-screen flex flex-col fixed left-0 top-0 z-30">
      <div className="p-5 border-b border-white/10">
        <h1 className="text-lg font-bold tracking-tight">🔐 SecureHub</h1>
        <p className="text-xs text-blue-200 mt-1">セキュリティ文化醸成プラットフォーム</p>
      </div>
      <nav className="flex-1 py-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-5 py-3 text-sm transition-colors ${
                isActive
                  ? "bg-white/15 text-white border-r-3 border-blue-300"
                  : "text-blue-100 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-sm font-bold">
            山
          </div>
          <div>
            <p className="text-sm font-medium">山田 太郎</p>
            <p className="text-xs text-blue-200">営業部</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

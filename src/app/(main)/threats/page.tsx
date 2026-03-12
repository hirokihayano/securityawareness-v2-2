"use client";

import { useState } from "react";
import SeverityBadge from "@/components/SeverityBadge";
import { threatArticles } from "@/data/mock";

export default function ThreatsPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const filtered = filter === "all"
    ? threatArticles
    : threatArticles.filter((a) => a.severity === filter);

  return (
    <div className="space-y-6">
      {/* Alert Banner */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-3">
        <span className="text-2xl">⚠️</span>
        <div>
          <p className="text-sm font-bold text-red-800">緊急アラート</p>
          <p className="text-sm text-red-700">
            生成AIを悪用した新型フィッシング攻撃が急増しています。不審なメールは開かず報告してください。
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-500">フィルタ:</span>
        {["all", "critical", "high", "medium", "info"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
              filter === f
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {f === "all" ? "すべて" : f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* Article List */}
      <div className="space-y-4">
        {filtered.map((article) => {
          const isExpanded = expandedId === article.id;
          return (
            <div
              key={article.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <div
                onClick={() => setExpandedId(isExpanded ? null : article.id)}
                className="p-5 cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <SeverityBadge severity={article.severity} />
                      <span className="text-xs text-gray-400">{article.source}</span>
                      <span className="text-xs text-gray-400">{article.date}</span>
                    </div>
                    <h3 className="text-base font-bold text-gray-800 mb-2">{article.title}</h3>
                    <p className="text-sm text-gray-600">{article.summary}</p>
                    <div className="flex gap-2 mt-3">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="text-gray-400 ml-4 text-lg">
                    {isExpanded ? "▲" : "▼"}
                  </span>
                </div>
              </div>

              {/* AI Summary */}
              {isExpanded && (
                <div className="border-t border-gray-100 bg-blue-50 p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">🤖</span>
                    <h4 className="text-sm font-bold text-blue-800">AI要約（わかりやすく解説）</h4>
                  </div>
                  <p className="text-sm text-blue-900 leading-relaxed">{article.aiSummary}</p>
                  <div className="mt-3 flex gap-2">
                    <button className="text-xs px-3 py-1 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                      📝 この脅威を報告する
                    </button>
                    <button className="text-xs px-3 py-1 bg-white text-blue-600 border border-blue-200 rounded-full hover:bg-blue-100 transition-colors">
                      🔗 詳細を見る
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Weekly Digest */}
      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
        <h3 className="text-base font-bold text-gray-800 mb-3">📰 今週のダイジェスト</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-red-50 rounded-lg">
            <p className="text-2xl font-bold text-red-700">3</p>
            <p className="text-xs text-red-600">重大な脅威情報</p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg">
            <p className="text-2xl font-bold text-yellow-700">2</p>
            <p className="text-xs text-yellow-600">注意すべき脅威</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-2xl font-bold text-blue-700">78%</p>
            <p className="text-xs text-blue-600">今週の閲覧率</p>
          </div>
        </div>
      </div>
    </div>
  );
}

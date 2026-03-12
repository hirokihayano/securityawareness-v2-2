"use client";

import { useState } from "react";
import { qaItems } from "@/data/mock";

export default function QAPage() {
  const [showForm, setShowForm] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>("Q002");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">
            セキュリティに関する疑問や不安を気軽に質問できます。匿名投稿が可能です。
          </p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          💬 質問する
        </button>
      </div>

      {/* Question Form */}
      {showForm && (
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="text-base font-bold text-gray-800 mb-3">新しい質問を投稿</h3>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">カテゴリ</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500">
                <option>リモートワーク</option>
                <option>AI利用</option>
                <option>パスワード</option>
                <option>データ管理</option>
                <option>その他</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">質問内容</label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
                rows={3}
                placeholder="セキュリティに関する質問を入力してください"
              />
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <input type="checkbox" id="qa-anonymous" className="w-4 h-4 text-blue-600" defaultChecked />
              <label htmlFor="qa-anonymous" className="text-sm text-gray-700">匿名で投稿する</label>
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowForm(false)}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
              >
                キャンセル
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                投稿する
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Category Filter */}
      <div className="flex gap-2 flex-wrap">
        {["すべて", "リモートワーク", "AI利用", "パスワード", "データ管理"].map((cat, i) => (
          <button
            key={cat}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
              i === 0
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Q&A List */}
      <div className="space-y-4">
        {qaItems.map((item) => {
          const isExpanded = expandedId === item.id;
          return (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <div
                onClick={() => setExpandedId(isExpanded ? null : item.id)}
                className="p-5 cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  {/* Vote Count */}
                  <div className="flex flex-col items-center text-gray-400 shrink-0 pt-1">
                    <button className="hover:text-blue-500 transition-colors">▲</button>
                    <span className="text-sm font-bold text-gray-700">{item.votes}</span>
                    <button className="hover:text-blue-500 transition-colors">▼</button>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full">
                        {item.category}
                      </span>
                      <span className="text-xs text-gray-400">{item.date}</span>
                      <span className="text-xs text-gray-400">
                        {item.answers.length} 件の回答
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold text-gray-800">{item.question}</h3>
                  </div>

                  <span className="text-gray-400 text-lg shrink-0">
                    {isExpanded ? "▲" : "▼"}
                  </span>
                </div>
              </div>

              {/* Answers */}
              {isExpanded && (
                <div className="border-t border-gray-100">
                  {item.answers.map((answer) => (
                    <div
                      key={answer.id}
                      className={`p-5 border-b border-gray-50 ${
                        answer.isOfficial ? "bg-green-50" : "bg-white"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex flex-col items-center text-gray-400 shrink-0 pt-1">
                          <button className="hover:text-blue-500 transition-colors">▲</button>
                          <span className="text-sm font-bold text-gray-700">{answer.votes}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-medium text-gray-600">{answer.author}</span>
                            {answer.isOfficial && (
                              <span className="text-xs px-2 py-0.5 bg-green-200 text-green-800 rounded-full font-medium">
                                ✓ 公式回答
                              </span>
                            )}
                            <span className="text-xs text-gray-400">{answer.date}</span>
                          </div>
                          <p className="text-sm text-gray-700 leading-relaxed">{answer.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* Reply Form */}
                  <div className="p-4 bg-gray-50">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
                        placeholder="回答を入力..."
                      />
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                        回答する
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

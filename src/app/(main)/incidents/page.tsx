"use client";

import { useState } from "react";
import SeverityBadge from "@/components/SeverityBadge";
import { incidents } from "@/data/mock";

const categories = ["不審メール", "不審な電話", "物理セキュリティ", "データ関連", "その他"];

export default function IncidentsPage() {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowForm(false);
      setSelectedCategory("");
    }, 3000);
  };

  return (
    <div className="space-y-6">
      {/* Report Button */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold mb-1">不審な事象を発見しましたか？</h3>
            <p className="text-blue-100 text-sm">
              報告は組織を守る最も重要な行動です。匿名での報告も可能です。
            </p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-white text-blue-700 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg text-sm"
          >
            {showForm ? "フォームを閉じる" : "📝 報告する"}
          </button>
        </div>
      </div>

      {/* Report Form */}
      {showForm && (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          {submitted ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">報告ありがとうございます！</h3>
              <p className="text-gray-500">
                セキュリティチームが確認し、対応状況をお知らせします。
                <br />
                あなたの報告が組織のセキュリティを守ります。
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-base font-bold text-gray-800">インシデント報告フォーム</h3>

              {/* Category Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  カテゴリを選択 <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedCategory(cat)}
                      className={`p-3 rounded-lg border text-sm font-medium transition-colors ${
                        selectedCategory === cat
                          ? "border-blue-500 bg-blue-50 text-blue-700"
                          : "border-gray-200 hover:border-blue-300 text-gray-600"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  タイトル <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  placeholder="例: CEO名義の不審な振込依頼メールを受信"
                  required
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  詳細（任意）
                </label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  rows={4}
                  placeholder="いつ、どのような状況で発生したかを記入してください"
                />
              </div>

              {/* Anonymous Toggle */}
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <input type="checkbox" id="anonymous" className="w-4 h-4 text-blue-600" />
                <label htmlFor="anonymous" className="text-sm text-gray-700">
                  匿名で報告する（セキュリティチームにも名前は表示されません）
                </label>
              </div>

              {/* Submit */}
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
                >
                  キャンセル
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  報告を送信
                </button>
              </div>
            </form>
          )}
        </div>
      )}

      {/* Reports History */}
      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
        <h3 className="text-base font-bold text-gray-800 mb-4">報告履歴</h3>
        <div className="space-y-3">
          {incidents.map((inc) => (
            <div key={inc.id} className="p-4 rounded-lg border border-gray-100 hover:border-blue-200 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-gray-400">{inc.id}</span>
                    <SeverityBadge severity={inc.severity} />
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                      inc.status === "対応中" ? "bg-red-50 text-red-600" :
                      inc.status === "調査中" ? "bg-yellow-50 text-yellow-600" :
                      inc.status === "完了" ? "bg-green-50 text-green-600" :
                      "bg-blue-50 text-blue-600"
                    }`}>
                      {inc.status}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-gray-800 mb-1">{inc.title}</h4>
                  <p className="text-xs text-gray-500">{inc.description}</p>
                </div>
                <div className="text-right ml-4 shrink-0">
                  <p className="text-xs text-gray-400">{inc.date}</p>
                  <p className="text-xs text-gray-400 mt-1">報告者: {inc.reporter}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

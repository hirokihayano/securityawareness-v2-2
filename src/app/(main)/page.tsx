"use client";

import StatCard from "@/components/StatCard";
import SeverityBadge from "@/components/SeverityBadge";
import { incidents, threatArticles, riskScoreHistory } from "@/data/mock";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Dashboard() {
  const latestRisk = riskScoreHistory[riskScoreHistory.length - 1];
  const prevRisk = riskScoreHistory[riskScoreHistory.length - 2];
  const riskChange = latestRisk.score - prevRisk.score;

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="ヒューマンリスクスコア"
          value={`${latestRisk.score}`}
          change={`${riskChange > 0 ? "+" : ""}${riskChange} 前月比`}
          changeType={riskChange < 0 ? "positive" : "negative"}
          icon="🎯"
        />
        <StatCard
          title="今月の報告件数"
          value="45"
          change="+12 前月比"
          changeType="positive"
          icon="📝"
        />
        <StatCard
          title="不審メール報告率"
          value="61%"
          change="+6% 前月比"
          changeType="positive"
          icon="📧"
        />
        <StatCard
          title="平均報告時間"
          value="2.3h"
          change="-0.8h 前月比"
          changeType="positive"
          icon="⏱️"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Risk Score Chart */}
        <div className="lg:col-span-2 bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="text-base font-bold text-gray-800 mb-4">リスクスコア推移</h3>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={riskScoreHistory}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="#94a3b8" />
              <YAxis domain={[0, 100]} tick={{ fontSize: 12 }} stroke="#94a3b8" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="score"
                stroke="#3b82f6"
                fill="#3b82f6"
                fillOpacity={0.15}
                strokeWidth={2}
                name="リスクスコア"
              />
            </AreaChart>
          </ResponsiveContainer>
          <p className="text-xs text-gray-400 mt-2">※ スコアが低いほどリスクが低い状態です</p>
        </div>

        {/* Recent Threats */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="text-base font-bold text-gray-800 mb-4">最新の脅威情報</h3>
          <div className="space-y-3">
            {threatArticles.slice(0, 4).map((article) => (
              <div key={article.id} className="p-3 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors cursor-pointer">
                <div className="flex items-center gap-2 mb-1">
                  <SeverityBadge severity={article.severity} />
                  <span className="text-xs text-gray-400">{article.date}</span>
                </div>
                <p className="text-sm font-medium text-gray-700 leading-snug">{article.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Reports */}
      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-bold text-gray-800">最近のインシデント報告</h3>
          <span className="text-sm text-blue-600 hover:underline cursor-pointer">すべて表示 →</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-3 px-2 text-gray-500 font-medium">ID</th>
                <th className="text-left py-3 px-2 text-gray-500 font-medium">タイトル</th>
                <th className="text-left py-3 px-2 text-gray-500 font-medium">カテゴリ</th>
                <th className="text-left py-3 px-2 text-gray-500 font-medium">重要度</th>
                <th className="text-left py-3 px-2 text-gray-500 font-medium">ステータス</th>
                <th className="text-left py-3 px-2 text-gray-500 font-medium">日付</th>
              </tr>
            </thead>
            <tbody>
              {incidents.slice(0, 5).map((inc) => (
                <tr key={inc.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-2 text-gray-500 font-mono text-xs">{inc.id}</td>
                  <td className="py-3 px-2 font-medium text-gray-700">{inc.title}</td>
                  <td className="py-3 px-2 text-gray-500">{inc.category}</td>
                  <td className="py-3 px-2"><SeverityBadge severity={inc.severity} /></td>
                  <td className="py-3 px-2">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                      inc.status === "対応中" ? "bg-red-50 text-red-600" :
                      inc.status === "調査中" ? "bg-yellow-50 text-yellow-600" :
                      inc.status === "完了" ? "bg-green-50 text-green-600" :
                      "bg-blue-50 text-blue-600"
                    }`}>
                      {inc.status}
                    </span>
                  </td>
                  <td className="py-3 px-2 text-gray-400">{inc.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

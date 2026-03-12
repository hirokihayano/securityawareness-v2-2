"use client";

import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import StatCard from "@/components/StatCard";
import {
  riskScoreHistory,
  departmentStats,
  reportCategoryData,
  monthlyReports,
  engagementData,
} from "@/data/mock";

export default function ExecutiveDashboard() {
  return (
    <div className="space-y-6">
      {/* Overall KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="組織リスクスコア"
          value="45 / 100"
          change="-7 前月比（改善）"
          changeType="positive"
          icon="🎯"
        />
        <StatCard
          title="月間報告件数"
          value="45件"
          change="+86% 3ヶ月前比"
          changeType="positive"
          icon="📝"
        />
        <StatCard
          title="平均報告時間"
          value="2.3時間"
          change="-58% 導入前比"
          changeType="positive"
          icon="⏱️"
        />
        <StatCard
          title="SANS成熟度レベル"
          value="Level 3"
          change="導入前: Level 1"
          changeType="positive"
          icon="📊"
        />
      </div>

      {/* Risk Score Trend + Category Pie */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="text-base font-bold text-gray-800 mb-4">
            ヒューマンリスクスコア推移
          </h3>
          <ResponsiveContainer width="100%" height={280}>
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
          <div className="mt-3 flex items-center gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
              目標: 40以下
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-yellow-500 inline-block"></span>
              注意: 41-60
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-red-500 inline-block"></span>
              危険: 61以上
            </span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="text-base font-bold text-gray-800 mb-4">報告カテゴリ内訳</h3>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie
                data={reportCategoryData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                dataKey="value"
                nameKey="name"
                label={({ name, percent }) =>
                  `${name} ${((percent ?? 0) * 100).toFixed(0)}%`
                }
                labelLine={false}
              >
                {reportCategoryData.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Department Stats */}
      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
        <h3 className="text-base font-bold text-gray-800 mb-4">部門別統計</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={departmentStats} barCategoryGap="20%">
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="#94a3b8" />
            <YAxis tick={{ fontSize: 12 }} stroke="#94a3b8" />
            <Tooltip />
            <Legend />
            <Bar dataKey="reportCount" name="報告件数" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            <Bar dataKey="riskScore" name="リスクスコア" fill="#ef4444" radius={[4, 4, 0, 0]} />
            <Bar dataKey="engagement" name="エンゲージメント%" fill="#10b981" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Monthly Reports + Engagement */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="text-base font-bold text-gray-800 mb-4">月間報告件数推移</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={monthlyReports}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="#94a3b8" />
              <YAxis tick={{ fontSize: 12 }} stroke="#94a3b8" />
              <Tooltip />
              <Bar dataKey="count" name="報告件数" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="text-base font-bold text-gray-800 mb-4">エンゲージメント指標推移</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={engagementData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="#94a3b8" />
              <YAxis tick={{ fontSize: 12 }} stroke="#94a3b8" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="newsView" name="ニュース閲覧率%" stroke="#3b82f6" strokeWidth={2} dot={{ r: 3 }} />
              <Line type="monotone" dataKey="qaUsage" name="Q&A利用件数" stroke="#8b5cf6" strokeWidth={2} dot={{ r: 3 }} />
              <Line type="monotone" dataKey="reportRate" name="報告率%" stroke="#10b981" strokeWidth={2} dot={{ r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ROI Summary */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-6 text-white">
        <h3 className="text-base font-bold mb-4">ROIサマリー</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-3xl font-bold">58%</p>
            <p className="text-blue-200 text-sm">インシデント報告時間の短縮</p>
          </div>
          <div>
            <p className="text-3xl font-bold">3.2x</p>
            <p className="text-blue-200 text-sm">報告件数の増加倍率</p>
          </div>
          <div>
            <p className="text-3xl font-bold">¥12M</p>
            <p className="text-blue-200 text-sm">推定リスク削減額（年間）</p>
          </div>
        </div>
      </div>
    </div>
  );
}

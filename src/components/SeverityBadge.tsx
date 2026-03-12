import type { Severity } from "@/data/mock";

const config: Record<string, { label: string; bg: string; text: string }> = {
  critical: { label: "Critical", bg: "bg-red-100", text: "text-red-700" },
  high: { label: "High", bg: "bg-orange-100", text: "text-orange-700" },
  medium: { label: "Medium", bg: "bg-yellow-100", text: "text-yellow-700" },
  low: { label: "Low", bg: "bg-blue-100", text: "text-blue-700" },
  info: { label: "Info", bg: "bg-gray-100", text: "text-gray-600" },
};

export default function SeverityBadge({ severity }: { severity: Severity | string }) {
  const c = config[severity] || config.info;
  return (
    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${c.bg} ${c.text}`}>
      {c.label}
    </span>
  );
}

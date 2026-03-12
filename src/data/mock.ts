// ========== Mock Data ==========

export const riskScoreHistory = [
  { month: "2025/10", score: 72 },
  { month: "2025/11", score: 68 },
  { month: "2025/12", score: 65 },
  { month: "2026/01", score: 58 },
  { month: "2026/02", score: 52 },
  { month: "2026/03", score: 45 },
];

export const departmentStats = [
  { name: "営業部", reportCount: 24, riskScore: 42, engagement: 78 },
  { name: "開発部", reportCount: 31, riskScore: 35, engagement: 85 },
  { name: "人事部", reportCount: 12, riskScore: 55, engagement: 62 },
  { name: "経理部", reportCount: 8, riskScore: 61, engagement: 55 },
  { name: "マーケ部", reportCount: 18, riskScore: 48, engagement: 71 },
  { name: "総務部", reportCount: 15, riskScore: 50, engagement: 68 },
];

export const reportCategoryData = [
  { name: "不審メール", value: 45, color: "#3b82f6" },
  { name: "不審な電話", value: 12, color: "#8b5cf6" },
  { name: "物理セキュリティ", value: 8, color: "#f59e0b" },
  { name: "データ関連", value: 15, color: "#ef4444" },
  { name: "その他", value: 10, color: "#64748b" },
];

export const monthlyReports = [
  { month: "2025/10", count: 12 },
  { month: "2025/11", count: 18 },
  { month: "2025/12", count: 25 },
  { month: "2026/01", count: 38 },
  { month: "2026/02", count: 52 },
  { month: "2026/03", count: 45 },
];

export type Severity = "critical" | "high" | "medium" | "low" | "info";

export interface Incident {
  id: string;
  title: string;
  category: string;
  severity: Severity;
  status: "対応中" | "調査中" | "完了" | "受付済";
  reporter: string;
  date: string;
  description: string;
}

export const incidents: Incident[] = [
  {
    id: "INC-2026-042",
    title: "CEO名義の不審な振込依頼メール",
    category: "不審メール",
    severity: "critical",
    status: "対応中",
    reporter: "匿名",
    date: "2026-03-10",
    description: "CEO名義で振込依頼のメールが届いた。送信元ドメインが異なることに気づき報告。",
  },
  {
    id: "INC-2026-041",
    title: "Microsoft365ログインページの偽装サイト",
    category: "不審メール",
    severity: "high",
    status: "調査中",
    reporter: "田中太郎",
    date: "2026-03-09",
    description: "社内を装ったメールからMicrosoft365の偽ログインページに誘導するリンクが含まれていた。",
  },
  {
    id: "INC-2026-040",
    title: "来客用WiFiへの不正接続試行",
    category: "物理セキュリティ",
    severity: "medium",
    status: "完了",
    reporter: "鈴木花子",
    date: "2026-03-08",
    description: "来客用WiFiに対して大量の接続試行が検知された。",
  },
  {
    id: "INC-2026-039",
    title: "共有フォルダの権限設定ミス",
    category: "データ関連",
    severity: "high",
    status: "完了",
    reporter: "佐藤一郎",
    date: "2026-03-07",
    description: "人事部の共有フォルダが全社員に公開されている状態を発見。",
  },
  {
    id: "INC-2026-038",
    title: "サポートを名乗る不審な電話",
    category: "不審な電話",
    severity: "medium",
    status: "受付済",
    reporter: "匿名",
    date: "2026-03-06",
    description: "IT部門のサポートを名乗る電話があり、パスワードを聞き出そうとしていた。",
  },
];

export interface ThreatArticle {
  id: string;
  title: string;
  source: string;
  date: string;
  severity: "critical" | "high" | "medium" | "info";
  summary: string;
  aiSummary: string;
  tags: string[];
}

export const threatArticles: ThreatArticle[] = [
  {
    id: "T001",
    title: "生成AIを悪用した新型フィッシング攻撃が急増",
    source: "IPA",
    date: "2026-03-09",
    severity: "critical",
    summary: "生成AIを活用して自然な日本語のフィッシングメールを作成する攻撃が急増。従来の文法的な不自然さによる検知が困難に。",
    aiSummary: "生成AIで作られた巧妙な詐欺メールが増えています。以前は不自然な日本語で見分けがつきましたが、今は自然な文章のため注意が必要です。不審な依頼は、メール以外の方法（電話など）で必ず確認しましょう。",
    tags: ["フィッシング", "AI", "メール"],
  },
  {
    id: "T002",
    title: "ランサムウェア「BlackSuit」による国内企業被害が拡大",
    source: "JPCERT/CC",
    date: "2026-03-08",
    severity: "high",
    summary: "ランサムウェアグループ「BlackSuit」による国内製造業・医療機関への攻撃が確認。VPN機器の脆弱性を悪用した侵入が主な経路。",
    aiSummary: "「BlackSuit」というランサムウェア（身代金ウイルス）が日本企業を狙っています。VPN（リモートワーク用接続）の弱点から侵入されるケースが多いです。VPNソフトは常に最新版に更新してください。",
    tags: ["ランサムウェア", "VPN", "脆弱性"],
  },
  {
    id: "T003",
    title: "QRコード詐欺の新手口: 公共施設のポスターを改ざん",
    source: "警察庁",
    date: "2026-03-07",
    severity: "medium",
    summary: "公共施設や店舗に掲示されたQRコードの上に偽のQRコードシールを貼り付け、不正サイトに誘導する手口が全国で確認。",
    aiSummary: "街中のQRコードが偽物にすり替えられる被害が発生しています。QRコードを読み取る際は、アクセス先のURLを確認し、見覚えのないサイトには個人情報を入力しないでください。",
    tags: ["QRコード", "詐欺", "物理"],
  },
  {
    id: "T004",
    title: "Microsoft Teams経由のマルウェア配布キャンペーン",
    source: "NISC",
    date: "2026-03-05",
    severity: "high",
    summary: "Microsoft Teamsの外部ユーザーからのメッセージ機能を悪用し、マルウェアを配布するキャンペーンが確認。",
    aiSummary: "Teamsで知らない人からファイルが送られてくる攻撃が確認されています。外部ユーザーからの不審なメッセージやファイルは開かず、IT部門に報告してください。",
    tags: ["Teams", "マルウェア", "チャット"],
  },
  {
    id: "T005",
    title: "パスワードスプレー攻撃によるクラウドサービス侵害が増加",
    source: "CISA",
    date: "2026-03-03",
    severity: "medium",
    summary: "よく使われるパスワードを多数のアカウントに試行する「パスワードスプレー攻撃」によるMicrosoft 365/Google Workspaceへの不正アクセスが増加。",
    aiSummary: "よくあるパスワード（password123など）を使っていると、自動ツールで簡単に突破されます。12文字以上の複雑なパスワードを設定し、多要素認証（MFA）を必ず有効にしましょう。",
    tags: ["パスワード", "クラウド", "認証"],
  },
];

export interface QAItem {
  id: string;
  question: string;
  category: string;
  date: string;
  votes: number;
  answers: {
    id: string;
    content: string;
    author: string;
    isOfficial: boolean;
    date: string;
    votes: number;
  }[];
}

export const qaItems: QAItem[] = [
  {
    id: "Q001",
    question: "自宅のWiFiでVPN接続する際、家族の端末からも社内ネットワークにアクセスされる可能性はありますか？",
    category: "リモートワーク",
    date: "2026-03-09",
    votes: 24,
    answers: [
      {
        id: "A001",
        content: "VPN接続はあなたの端末のみに適用されるため、家族の端末から直接社内ネットワークにアクセスされることはありません。ただし、お使いの端末を家族が使用した場合はアクセスされる可能性がありますので、端末のロック設定は必ず行ってください。",
        author: "セキュリティチーム",
        isOfficial: true,
        date: "2026-03-09",
        votes: 18,
      },
    ],
  },
  {
    id: "Q002",
    question: "ChatGPTなどの生成AIに社内の情報を入力しても大丈夫ですか？",
    category: "AI利用",
    date: "2026-03-08",
    votes: 42,
    answers: [
      {
        id: "A002",
        content: "社外の生成AIサービスに機密情報・個人情報を入力することは禁止されています。業務利用が承認されたAIツール（社内AI基盤）のみ使用してください。判断に迷う場合は、セキュリティチームにご相談ください。",
        author: "セキュリティチーム",
        isOfficial: true,
        date: "2026-03-08",
        votes: 35,
      },
      {
        id: "A003",
        content: "補足ですが、議事録の要約や一般的な文章作成など、機密情報を含まない範囲であれば利用可能です。迷ったら「この内容が外部に漏れても問題ないか？」を基準に判断するとよいと思います。",
        author: "匿名",
        isOfficial: false,
        date: "2026-03-08",
        votes: 12,
      },
    ],
  },
  {
    id: "Q003",
    question: "パスワードマネージャーを使ってもいいですか？おすすめはありますか？",
    category: "パスワード",
    date: "2026-03-07",
    votes: 31,
    answers: [
      {
        id: "A004",
        content: "パスワードマネージャーの利用を推奨しています。会社として1Passwordの法人ライセンスを導入済みですので、IT部門にアカウント発行を依頼してください。ブラウザの保存機能よりも安全です。",
        author: "セキュリティチーム",
        isOfficial: true,
        date: "2026-03-07",
        votes: 28,
      },
    ],
  },
  {
    id: "Q004",
    question: "フリーWiFiでメールを確認するのは危険ですか？",
    category: "リモートワーク",
    date: "2026-03-05",
    votes: 19,
    answers: [
      {
        id: "A005",
        content: "カフェや空港などのフリーWiFiは通信が暗号化されていない場合があり、盗聴のリスクがあります。業務でやむを得ずフリーWiFiを使う場合は、必ずVPNに接続してからアクセスしてください。",
        author: "セキュリティチーム",
        isOfficial: true,
        date: "2026-03-05",
        votes: 15,
      },
    ],
  },
  {
    id: "Q005",
    question: "USBメモリを使ってファイルを持ち運んでもいいですか？",
    category: "データ管理",
    date: "2026-03-03",
    votes: 14,
    answers: [
      {
        id: "A006",
        content: "原則として個人のUSBメモリの業務使用は禁止です。ファイル共有はSharePoint/OneDriveを使用してください。どうしても必要な場合は、IT部門が貸し出す暗号化USBメモリを使用してください。",
        author: "セキュリティチーム",
        isOfficial: true,
        date: "2026-03-04",
        votes: 11,
      },
    ],
  },
];

export const engagementData = [
  { month: "2025/10", newsView: 32, qaUsage: 5, reportRate: 15 },
  { month: "2025/11", newsView: 38, qaUsage: 8, reportRate: 22 },
  { month: "2025/12", newsView: 45, qaUsage: 12, reportRate: 30 },
  { month: "2026/01", newsView: 52, qaUsage: 18, reportRate: 42 },
  { month: "2026/02", newsView: 58, qaUsage: 22, reportRate: 55 },
  { month: "2026/03", newsView: 62, qaUsage: 28, reportRate: 61 },
];

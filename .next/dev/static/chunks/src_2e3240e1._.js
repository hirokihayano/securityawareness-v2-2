(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/SeverityBadge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SeverityBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const config = {
    critical: {
        label: "Critical",
        bg: "bg-red-100",
        text: "text-red-700"
    },
    high: {
        label: "High",
        bg: "bg-orange-100",
        text: "text-orange-700"
    },
    medium: {
        label: "Medium",
        bg: "bg-yellow-100",
        text: "text-yellow-700"
    },
    low: {
        label: "Low",
        bg: "bg-blue-100",
        text: "text-blue-700"
    },
    info: {
        label: "Info",
        bg: "bg-gray-100",
        text: "text-gray-600"
    }
};
function SeverityBadge({ severity }) {
    const c = config[severity] || config.info;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${c.bg} ${c.text}`,
        children: c.label
    }, void 0, false, {
        fileName: "[project]/src/components/SeverityBadge.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = SeverityBadge;
var _c;
__turbopack_context__.k.register(_c, "SeverityBadge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/mock.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ========== Mock Data ==========
__turbopack_context__.s([
    "departmentStats",
    ()=>departmentStats,
    "engagementData",
    ()=>engagementData,
    "incidents",
    ()=>incidents,
    "monthlyReports",
    ()=>monthlyReports,
    "qaItems",
    ()=>qaItems,
    "reportCategoryData",
    ()=>reportCategoryData,
    "riskScoreHistory",
    ()=>riskScoreHistory,
    "threatArticles",
    ()=>threatArticles
]);
const riskScoreHistory = [
    {
        month: "2025/10",
        score: 72
    },
    {
        month: "2025/11",
        score: 68
    },
    {
        month: "2025/12",
        score: 65
    },
    {
        month: "2026/01",
        score: 58
    },
    {
        month: "2026/02",
        score: 52
    },
    {
        month: "2026/03",
        score: 45
    }
];
const departmentStats = [
    {
        name: "営業部",
        reportCount: 24,
        riskScore: 42,
        engagement: 78
    },
    {
        name: "開発部",
        reportCount: 31,
        riskScore: 35,
        engagement: 85
    },
    {
        name: "人事部",
        reportCount: 12,
        riskScore: 55,
        engagement: 62
    },
    {
        name: "経理部",
        reportCount: 8,
        riskScore: 61,
        engagement: 55
    },
    {
        name: "マーケ部",
        reportCount: 18,
        riskScore: 48,
        engagement: 71
    },
    {
        name: "総務部",
        reportCount: 15,
        riskScore: 50,
        engagement: 68
    }
];
const reportCategoryData = [
    {
        name: "不審メール",
        value: 45,
        color: "#3b82f6"
    },
    {
        name: "不審な電話",
        value: 12,
        color: "#8b5cf6"
    },
    {
        name: "物理セキュリティ",
        value: 8,
        color: "#f59e0b"
    },
    {
        name: "データ関連",
        value: 15,
        color: "#ef4444"
    },
    {
        name: "その他",
        value: 10,
        color: "#64748b"
    }
];
const monthlyReports = [
    {
        month: "2025/10",
        count: 12
    },
    {
        month: "2025/11",
        count: 18
    },
    {
        month: "2025/12",
        count: 25
    },
    {
        month: "2026/01",
        count: 38
    },
    {
        month: "2026/02",
        count: 52
    },
    {
        month: "2026/03",
        count: 45
    }
];
const incidents = [
    {
        id: "INC-2026-042",
        title: "CEO名義の不審な振込依頼メール",
        category: "不審メール",
        severity: "critical",
        status: "対応中",
        reporter: "匿名",
        date: "2026-03-10",
        description: "CEO名義で振込依頼のメールが届いた。送信元ドメインが異なることに気づき報告。"
    },
    {
        id: "INC-2026-041",
        title: "Microsoft365ログインページの偽装サイト",
        category: "不審メール",
        severity: "high",
        status: "調査中",
        reporter: "田中太郎",
        date: "2026-03-09",
        description: "社内を装ったメールからMicrosoft365の偽ログインページに誘導するリンクが含まれていた。"
    },
    {
        id: "INC-2026-040",
        title: "来客用WiFiへの不正接続試行",
        category: "物理セキュリティ",
        severity: "medium",
        status: "完了",
        reporter: "鈴木花子",
        date: "2026-03-08",
        description: "来客用WiFiに対して大量の接続試行が検知された。"
    },
    {
        id: "INC-2026-039",
        title: "共有フォルダの権限設定ミス",
        category: "データ関連",
        severity: "high",
        status: "完了",
        reporter: "佐藤一郎",
        date: "2026-03-07",
        description: "人事部の共有フォルダが全社員に公開されている状態を発見。"
    },
    {
        id: "INC-2026-038",
        title: "サポートを名乗る不審な電話",
        category: "不審な電話",
        severity: "medium",
        status: "受付済",
        reporter: "匿名",
        date: "2026-03-06",
        description: "IT部門のサポートを名乗る電話があり、パスワードを聞き出そうとしていた。"
    }
];
const threatArticles = [
    {
        id: "T001",
        title: "生成AIを悪用した新型フィッシング攻撃が急増",
        source: "IPA",
        date: "2026-03-09",
        severity: "critical",
        summary: "生成AIを活用して自然な日本語のフィッシングメールを作成する攻撃が急増。従来の文法的な不自然さによる検知が困難に。",
        aiSummary: "生成AIで作られた巧妙な詐欺メールが増えています。以前は不自然な日本語で見分けがつきましたが、今は自然な文章のため注意が必要です。不審な依頼は、メール以外の方法（電話など）で必ず確認しましょう。",
        tags: [
            "フィッシング",
            "AI",
            "メール"
        ]
    },
    {
        id: "T002",
        title: "ランサムウェア「BlackSuit」による国内企業被害が拡大",
        source: "JPCERT/CC",
        date: "2026-03-08",
        severity: "high",
        summary: "ランサムウェアグループ「BlackSuit」による国内製造業・医療機関への攻撃が確認。VPN機器の脆弱性を悪用した侵入が主な経路。",
        aiSummary: "「BlackSuit」というランサムウェア（身代金ウイルス）が日本企業を狙っています。VPN（リモートワーク用接続）の弱点から侵入されるケースが多いです。VPNソフトは常に最新版に更新してください。",
        tags: [
            "ランサムウェア",
            "VPN",
            "脆弱性"
        ]
    },
    {
        id: "T003",
        title: "QRコード詐欺の新手口: 公共施設のポスターを改ざん",
        source: "警察庁",
        date: "2026-03-07",
        severity: "medium",
        summary: "公共施設や店舗に掲示されたQRコードの上に偽のQRコードシールを貼り付け、不正サイトに誘導する手口が全国で確認。",
        aiSummary: "街中のQRコードが偽物にすり替えられる被害が発生しています。QRコードを読み取る際は、アクセス先のURLを確認し、見覚えのないサイトには個人情報を入力しないでください。",
        tags: [
            "QRコード",
            "詐欺",
            "物理"
        ]
    },
    {
        id: "T004",
        title: "Microsoft Teams経由のマルウェア配布キャンペーン",
        source: "NISC",
        date: "2026-03-05",
        severity: "high",
        summary: "Microsoft Teamsの外部ユーザーからのメッセージ機能を悪用し、マルウェアを配布するキャンペーンが確認。",
        aiSummary: "Teamsで知らない人からファイルが送られてくる攻撃が確認されています。外部ユーザーからの不審なメッセージやファイルは開かず、IT部門に報告してください。",
        tags: [
            "Teams",
            "マルウェア",
            "チャット"
        ]
    },
    {
        id: "T005",
        title: "パスワードスプレー攻撃によるクラウドサービス侵害が増加",
        source: "CISA",
        date: "2026-03-03",
        severity: "medium",
        summary: "よく使われるパスワードを多数のアカウントに試行する「パスワードスプレー攻撃」によるMicrosoft 365/Google Workspaceへの不正アクセスが増加。",
        aiSummary: "よくあるパスワード（password123など）を使っていると、自動ツールで簡単に突破されます。12文字以上の複雑なパスワードを設定し、多要素認証（MFA）を必ず有効にしましょう。",
        tags: [
            "パスワード",
            "クラウド",
            "認証"
        ]
    }
];
const qaItems = [
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
                votes: 18
            }
        ]
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
                votes: 35
            },
            {
                id: "A003",
                content: "補足ですが、議事録の要約や一般的な文章作成など、機密情報を含まない範囲であれば利用可能です。迷ったら「この内容が外部に漏れても問題ないか？」を基準に判断するとよいと思います。",
                author: "匿名",
                isOfficial: false,
                date: "2026-03-08",
                votes: 12
            }
        ]
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
                votes: 28
            }
        ]
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
                votes: 15
            }
        ]
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
                votes: 11
            }
        ]
    }
];
const engagementData = [
    {
        month: "2025/10",
        newsView: 32,
        qaUsage: 5,
        reportRate: 15
    },
    {
        month: "2025/11",
        newsView: 38,
        qaUsage: 8,
        reportRate: 22
    },
    {
        month: "2025/12",
        newsView: 45,
        qaUsage: 12,
        reportRate: 30
    },
    {
        month: "2026/01",
        newsView: 52,
        qaUsage: 18,
        reportRate: 42
    },
    {
        month: "2026/02",
        newsView: 58,
        qaUsage: 22,
        reportRate: 55
    },
    {
        month: "2026/03",
        newsView: 62,
        qaUsage: 28,
        reportRate: 61
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/incidents/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>IncidentsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SeverityBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SeverityBadge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mock.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const categories = [
    "不審メール",
    "不審な電話",
    "物理セキュリティ",
    "データ関連",
    "その他"
];
function IncidentsPage() {
    _s();
    const [showForm, setShowForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const handleSubmit = (e)=>{
        e.preventDefault();
        setSubmitted(true);
        setTimeout(()=>{
            setSubmitted(false);
            setShowForm(false);
            setSelectedCategory("");
        }, 3000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-6 text-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-bold mb-1",
                                    children: "不審な事象を発見しましたか？"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/incidents/page.tsx",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-blue-100 text-sm",
                                    children: "報告は組織を守る最も重要な行動です。匿名での報告も可能です。"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/incidents/page.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/incidents/page.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowForm(!showForm),
                            className: "bg-white text-blue-700 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg text-sm",
                            children: showForm ? "フォームを閉じる" : "📝 報告する"
                        }, void 0, false, {
                            fileName: "[project]/src/app/incidents/page.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/incidents/page.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/incidents/page.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            showForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-xl p-6 shadow-sm border border-gray-100",
                children: submitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-5xl mb-4",
                            children: "🎉"
                        }, void 0, false, {
                            fileName: "[project]/src/app/incidents/page.tsx",
                            lineNumber: 49,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-bold text-gray-800 mb-2",
                            children: "報告ありがとうございます！"
                        }, void 0, false, {
                            fileName: "[project]/src/app/incidents/page.tsx",
                            lineNumber: 50,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500",
                            children: [
                                "セキュリティチームが確認し、対応状況をお知らせします。",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/src/app/incidents/page.tsx",
                                    lineNumber: 53,
                                    columnNumber: 17
                                }, this),
                                "あなたの報告が組織のセキュリティを守ります。"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/incidents/page.tsx",
                            lineNumber: 51,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/incidents/page.tsx",
                    lineNumber: 48,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-base font-bold text-gray-800",
                            children: "インシデント報告フォーム"
                        }, void 0, false, {
                            fileName: "[project]/src/app/incidents/page.tsx",
                            lineNumber: 59,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                    children: [
                                        "カテゴリを選択 ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-red-500",
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/incidents/page.tsx",
                                            lineNumber: 64,
                                            columnNumber: 27
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/incidents/page.tsx",
                                    lineNumber: 63,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 md:grid-cols-5 gap-2",
                                    children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setSelectedCategory(cat),
                                            className: `p-3 rounded-lg border text-sm font-medium transition-colors ${selectedCategory === cat ? "border-blue-500 bg-blue-50 text-blue-700" : "border-gray-200 hover:border-blue-300 text-gray-600"}`,
                                            children: cat
                                        }, cat, false, {
                                            fileName: "[project]/src/app/incidents/page.tsx",
                                            lineNumber: 68,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/incidents/page.tsx",
                                    lineNumber: 66,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/incidents/page.tsx",
                            lineNumber: 62,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                    children: [
                                        "タイトル ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-red-500",
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/incidents/page.tsx",
                                            lineNumber: 87,
                                            columnNumber: 24
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/incidents/page.tsx",
                                    lineNumber: 86,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm",
                                    placeholder: "例: CEO名義の不審な振込依頼メールを受信",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/incidents/page.tsx",
                                    lineNumber: 89,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/incidents/page.tsx",
                            lineNumber: 85,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                    children: "詳細（任意）"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/incidents/page.tsx",
                                    lineNumber: 99,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm",
                                    rows: 4,
                                    placeholder: "いつ、どのような状況で発生したかを記入してください"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/incidents/page.tsx",
                                    lineNumber: 102,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/incidents/page.tsx",
                            lineNumber: 98,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 p-3 bg-gray-50 rounded-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    id: "anonymous",
                                    className: "w-4 h-4 text-blue-600"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/incidents/page.tsx",
                                    lineNumber: 111,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "anonymous",
                                    className: "text-sm text-gray-700",
                                    children: "匿名で報告する（セキュリティチームにも名前は表示されません）"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/incidents/page.tsx",
                                    lineNumber: 112,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/incidents/page.tsx",
                            lineNumber: 110,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setShowForm(false),
                                    className: "px-4 py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors",
                                    children: "キャンセル"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/incidents/page.tsx",
                                    lineNumber: 119,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors",
                                    children: "報告を送信"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/incidents/page.tsx",
                                    lineNumber: 126,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/incidents/page.tsx",
                            lineNumber: 118,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/incidents/page.tsx",
                    lineNumber: 58,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/incidents/page.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-xl p-5 shadow-sm border border-gray-100",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-base font-bold text-gray-800 mb-4",
                        children: "報告履歴"
                    }, void 0, false, {
                        fileName: "[project]/src/app/incidents/page.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["incidents"].map((inc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 rounded-lg border border-gray-100 hover:border-blue-200 transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 mb-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs font-mono text-gray-400",
                                                            children: inc.id
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/incidents/page.tsx",
                                                            lineNumber: 147,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SeverityBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            severity: inc.severity
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/incidents/page.tsx",
                                                            lineNumber: 148,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `text-xs font-medium px-2 py-0.5 rounded-full ${inc.status === "対応中" ? "bg-red-50 text-red-600" : inc.status === "調査中" ? "bg-yellow-50 text-yellow-600" : inc.status === "完了" ? "bg-green-50 text-green-600" : "bg-blue-50 text-blue-600"}`,
                                                            children: inc.status
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/incidents/page.tsx",
                                                            lineNumber: 149,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/incidents/page.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-semibold text-gray-800 mb-1",
                                                    children: inc.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/incidents/page.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-500",
                                                    children: inc.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/incidents/page.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/incidents/page.tsx",
                                            lineNumber: 145,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-right ml-4 shrink-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-400",
                                                    children: inc.date
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/incidents/page.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-400 mt-1",
                                                    children: [
                                                        "報告者: ",
                                                        inc.reporter
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/incidents/page.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/incidents/page.tsx",
                                            lineNumber: 161,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/incidents/page.tsx",
                                    lineNumber: 144,
                                    columnNumber: 15
                                }, this)
                            }, inc.id, false, {
                                fileName: "[project]/src/app/incidents/page.tsx",
                                lineNumber: 143,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/incidents/page.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/incidents/page.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/incidents/page.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(IncidentsPage, "Ukw3r/sPOzishnaUsXw4BxqwuxU=");
_c = IncidentsPage;
var _c;
__turbopack_context__.k.register(_c, "IncidentsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_2e3240e1._.js.map
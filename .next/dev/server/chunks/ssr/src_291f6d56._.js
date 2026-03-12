module.exports = [
"[project]/src/data/mock.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/app/qa/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QAPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mock.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function QAPage() {
    const [showForm, setShowForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [expandedId, setExpandedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Q002");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-500",
                            children: "セキュリティに関する疑問や不安を気軽に質問できます。匿名投稿が可能です。"
                        }, void 0, false, {
                            fileName: "[project]/src/app/qa/page.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/qa/page.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowForm(!showForm),
                        className: "px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors",
                        children: "💬 質問する"
                    }, void 0, false, {
                        fileName: "[project]/src/app/qa/page.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/qa/page.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            showForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-xl p-5 shadow-sm border border-gray-100",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-base font-bold text-gray-800 mb-3",
                        children: "新しい質問を投稿"
                    }, void 0, false, {
                        fileName: "[project]/src/app/qa/page.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "カテゴリ"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/qa/page.tsx",
                                        lineNumber: 33,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "リモートワーク"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/qa/page.tsx",
                                                lineNumber: 35,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "AI利用"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/qa/page.tsx",
                                                lineNumber: 36,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "パスワード"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/qa/page.tsx",
                                                lineNumber: 37,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "データ管理"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/qa/page.tsx",
                                                lineNumber: 38,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "その他"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/qa/page.tsx",
                                                lineNumber: 39,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/qa/page.tsx",
                                        lineNumber: 34,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/qa/page.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "質問内容"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/qa/page.tsx",
                                        lineNumber: 43,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        className: "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500",
                                        rows: 3,
                                        placeholder: "セキュリティに関する質問を入力してください"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/qa/page.tsx",
                                        lineNumber: 44,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/qa/page.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 p-3 bg-gray-50 rounded-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        id: "qa-anonymous",
                                        className: "w-4 h-4 text-blue-600",
                                        defaultChecked: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/qa/page.tsx",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "qa-anonymous",
                                        className: "text-sm text-gray-700",
                                        children: "匿名で投稿する"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/qa/page.tsx",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/qa/page.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-end gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowForm(false),
                                        className: "px-4 py-2 text-sm text-gray-600 hover:text-gray-800",
                                        children: "キャンセル"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/qa/page.tsx",
                                        lineNumber: 55,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors",
                                        children: "投稿する"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/qa/page.tsx",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/qa/page.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/qa/page.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/qa/page.tsx",
                lineNumber: 29,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 flex-wrap",
                children: [
                    "すべて",
                    "リモートワーク",
                    "AI利用",
                    "パスワード",
                    "データ管理"
                ].map((cat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `px-3 py-1 rounded-full text-xs font-medium transition-colors ${i === 0 ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`,
                        children: cat
                    }, cat, false, {
                        fileName: "[project]/src/app/qa/page.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/qa/page.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["qaItems"].map((item)=>{
                    const isExpanded = expandedId === item.id;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>setExpandedId(isExpanded ? null : item.id),
                                className: "p-5 cursor-pointer hover:bg-gray-50 transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-center text-gray-400 shrink-0 pt-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "hover:text-blue-500 transition-colors",
                                                    children: "▲"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/qa/page.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-bold text-gray-700",
                                                    children: item.votes
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/qa/page.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "hover:text-blue-500 transition-colors",
                                                    children: "▼"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/qa/page.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/qa/page.tsx",
                                            lineNumber: 100,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 mb-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full",
                                                            children: item.category
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/qa/page.tsx",
                                                            lineNumber: 108,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-gray-400",
                                                            children: item.date
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/qa/page.tsx",
                                                            lineNumber: 111,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-gray-400",
                                                            children: [
                                                                item.answers.length,
                                                                " 件の回答"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/qa/page.tsx",
                                                            lineNumber: 112,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/qa/page.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-sm font-semibold text-gray-800",
                                                    children: item.question
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/qa/page.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/qa/page.tsx",
                                            lineNumber: 106,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-400 text-lg shrink-0",
                                            children: isExpanded ? "▲" : "▼"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/qa/page.tsx",
                                            lineNumber: 119,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/qa/page.tsx",
                                    lineNumber: 98,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/qa/page.tsx",
                                lineNumber: 94,
                                columnNumber: 15
                            }, this),
                            isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-gray-100",
                                children: [
                                    item.answers.map((answer)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `p-5 border-b border-gray-50 ${answer.isOfficial ? "bg-green-50" : "bg-white"}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col items-center text-gray-400 shrink-0 pt-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "hover:text-blue-500 transition-colors",
                                                                children: "▲"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/qa/page.tsx",
                                                                lineNumber: 137,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-bold text-gray-700",
                                                                children: answer.votes
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/qa/page.tsx",
                                                                lineNumber: 138,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/qa/page.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2 mb-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs font-medium text-gray-600",
                                                                        children: answer.author
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/qa/page.tsx",
                                                                        lineNumber: 142,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    answer.isOfficial && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs px-2 py-0.5 bg-green-200 text-green-800 rounded-full font-medium",
                                                                        children: "✓ 公式回答"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/qa/page.tsx",
                                                                        lineNumber: 144,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs text-gray-400",
                                                                        children: answer.date
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/qa/page.tsx",
                                                                        lineNumber: 148,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/qa/page.tsx",
                                                                lineNumber: 141,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-gray-700 leading-relaxed",
                                                                children: answer.content
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/qa/page.tsx",
                                                                lineNumber: 150,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/qa/page.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/qa/page.tsx",
                                                lineNumber: 135,
                                                columnNumber: 23
                                            }, this)
                                        }, answer.id, false, {
                                            fileName: "[project]/src/app/qa/page.tsx",
                                            lineNumber: 129,
                                            columnNumber: 21
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 bg-gray-50",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    className: "flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500",
                                                    placeholder: "回答を入力..."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/qa/page.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors",
                                                    children: "回答する"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/qa/page.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/qa/page.tsx",
                                            lineNumber: 157,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/qa/page.tsx",
                                        lineNumber: 156,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/qa/page.tsx",
                                lineNumber: 127,
                                columnNumber: 17
                            }, this)
                        ]
                    }, item.id, true, {
                        fileName: "[project]/src/app/qa/page.tsx",
                        lineNumber: 90,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/app/qa/page.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/qa/page.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_291f6d56._.js.map
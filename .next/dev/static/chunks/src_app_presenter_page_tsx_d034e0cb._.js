(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/presenter/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PresenterPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* eslint-enable @typescript-eslint/no-explicit-any */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
// --- Slide narration texts ---
const NARRATIONS = [
    "皆さん、こんにちは。本日は「セキュアハブ」をご紹介します。組織のセキュリティ文化そのものを変革するプラットフォームです。",
    "現状を見てみましょう。従業員の70パーセント以上がリスク行動を自覚しながら利便性を優先。データ侵害の88パーセントは認証情報の窃取が原因で、平均コストは440万ドルです。しかし多くの企業の教育は年1回のeラーニングだけ。これでは行動は変わりません。",
    "ギャップ分析から4つの根本課題が見えました。報告忌避文化、経営層の関与不足、形式的な教育、当事者意識の欠如。注目すべきは、すべてが技術ではなく「組織文化」の問題だということです。だからこそ、文化そのものを変える仕組みが必要なのです。",
    "ここで、既存サービスとの違いを整理します。セキュリオなどの既存サービスは「教育・テスト・訓練」で知識を定着させるのが主軸です。一方、セキュアハブは「報告文化・脅威共有・当事者意識」という文化変革が主軸。脅威情報のAI要約配信、匿名Q&A、チャンピオン制度は既存サービスにない独自機能です。つまり、両者は競合ではなく補完関係。教育と文化変革の両輪で、組織を強くします。",
    "セキュアハブは3本の柱で構成されています。報告文化。ワンクリックで匿名報告ができ、心理的安全性を確保。脅威共有。最新の脅威をAIが要約し、全員に届けます。当事者意識。チャンピオン制度で各部門にリーダーを育てます。目指すのは、セキュリティを「やらされること」から「みんなで取り組むこと」に変えることです。",
    "主要機能は5つ。ワンクリック報告、脅威情報フィード、匿名Q&A、チャンピオン管理、経営ダッシュボード。「気づく、報告する、学ぶ、共有する、守る」。このサイクルが日常になることで、セキュリティが文化になります。",
    "報告機能の核心は「ハードルを下げる」こと。ワンクリックで匿名報告、AIが自動トリアージ。報告後は感謝メッセージが届き、「報告してよかった」と思える体験を設計しています。脅威情報フィードでは、IPAやJPCERT等の情報をAIが自動要約。専門知識がなくても、最新の脅威が分かりやすく届きます。",
    "実際の報告画面です。カテゴリを選んで、匿名トグルをオンにすれば完全匿名。詳細は任意入力、スクリーンショットも添付可能。送信ボタンを押すだけで完了です。とにかくシンプルに。心理的ハードルを下げることにこだわりました。",
    "経営層向けダッシュボードです。リスクスコア72点、月間報告156件、平均報告時間47分。すべての数値が改善トレンドを示しています。部門別の報告状況も一目で分かります。このダッシュボードで経営層のコミットメントが高まります。",
    "期待される効果。インシデント報告がゼロから月50件以上に。報告時間は数日から1時間以内に。2年後にはSANS成熟度をレベル4に引き上げます。開発は4フェーズ、7ヶ月。MVPは2ヶ月で稼働開始できます。セキュアハブで、セキュリティを「みんなのこと」に。組織の文化を、一緒に変えていきましょう。ご清聴ありがとうございました。"
];
const SLIDE_TITLES = [
    "タイトル",
    "セキュリティの現状",
    "Gap分析：根本課題",
    "既存サービスとの違い",
    "SecureHubのコンセプト",
    "5つの主要機能",
    "報告機能 & 脅威フィード",
    "デモ：インシデント報告画面",
    "デモ：経営層ダッシュボード",
    "期待される効果とロードマップ"
];
function PresenterPage() {
    _s();
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("setup");
    const [apiKey, setApiKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [currentSlide, setCurrentSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSpeaking, setIsSpeaking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isListening, setIsListening] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isProcessing, setIsProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [transcript, setTranscript] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [qaHistory, setQaHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [statusText, setStatusText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const recognitionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const synthRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const iframeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const totalSlides = NARRATIONS.length;
    // Speak text using Web Speech Synthesis
    const speak = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PresenterPage.useCallback[speak]": (text)=>{
            return new Promise({
                "PresenterPage.useCallback[speak]": (resolve)=>{
                    window.speechSynthesis.cancel();
                    const utterance = new SpeechSynthesisUtterance(text);
                    utterance.lang = "ja-JP";
                    utterance.rate = 1.05;
                    utterance.pitch = 1.0;
                    // Try to find a Japanese voice
                    const voices = window.speechSynthesis.getVoices();
                    const jaVoice = voices.find({
                        "PresenterPage.useCallback[speak]": (v)=>v.lang.startsWith("ja") && v.name.includes("Kyoko")
                    }["PresenterPage.useCallback[speak]"]) || voices.find({
                        "PresenterPage.useCallback[speak]": (v)=>v.lang.startsWith("ja")
                    }["PresenterPage.useCallback[speak]"]);
                    if (jaVoice) utterance.voice = jaVoice;
                    utterance.onstart = ({
                        "PresenterPage.useCallback[speak]": ()=>setIsSpeaking(true)
                    })["PresenterPage.useCallback[speak]"];
                    utterance.onend = ({
                        "PresenterPage.useCallback[speak]": ()=>{
                            setIsSpeaking(false);
                            resolve();
                        }
                    })["PresenterPage.useCallback[speak]"];
                    utterance.onerror = ({
                        "PresenterPage.useCallback[speak]": ()=>{
                            setIsSpeaking(false);
                            resolve();
                        }
                    })["PresenterPage.useCallback[speak]"];
                    synthRef.current = utterance;
                    window.speechSynthesis.speak(utterance);
                }
            }["PresenterPage.useCallback[speak]"]);
        }
    }["PresenterPage.useCallback[speak]"], []);
    // Navigate iframe to slide
    const goToSlide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PresenterPage.useCallback[goToSlide]": (index)=>{
            setCurrentSlide(index);
            if (iframeRef.current?.contentWindow) {
                iframeRef.current.contentWindow.postMessage({
                    type: "goToSlide",
                    slide: index
                }, "*");
            }
        }
    }["PresenterPage.useCallback[goToSlide]"], []);
    // Play presentation from current slide
    const playPresentation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PresenterPage.useCallback[playPresentation]": async ()=>{
            setIsPlaying(true);
            for(let i = currentSlide; i < totalSlides; i++){
                goToSlide(i);
                setStatusText(`スライド ${i + 1}/${totalSlides}: ${SLIDE_TITLES[i]}`);
                await speak(NARRATIONS[i]);
                // Brief pause between slides
                await new Promise({
                    "PresenterPage.useCallback[playPresentation]": (r)=>setTimeout(r, 800)
                }["PresenterPage.useCallback[playPresentation]"]);
            }
            setIsPlaying(false);
            setStatusText("プレゼン完了 — 質疑応答モードに切り替えできます");
        }
    }["PresenterPage.useCallback[playPresentation]"], [
        currentSlide,
        totalSlides,
        goToSlide,
        speak
    ]);
    // Stop presentation
    const stopPresentation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PresenterPage.useCallback[stopPresentation]": ()=>{
            window.speechSynthesis.cancel();
            setIsPlaying(false);
            setIsSpeaking(false);
            setStatusText("停止しました");
        }
    }["PresenterPage.useCallback[stopPresentation]"], []);
    // Start speech recognition
    const startListening = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PresenterPage.useCallback[startListening]": ()=>{
            const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
            if (!SpeechRecognitionAPI) {
                setStatusText("このブラウザは音声認識に対応していません（Chrome推奨）");
                return;
            }
            const recognition = new SpeechRecognitionAPI();
            recognition.lang = "ja-JP";
            recognition.continuous = false;
            recognition.interimResults = true;
            recognition.onstart = ({
                "PresenterPage.useCallback[startListening]": ()=>{
                    setIsListening(true);
                    setStatusText("🎤 聞いています... 質問をどうぞ");
                }
            })["PresenterPage.useCallback[startListening]"];
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            recognition.onresult = ({
                "PresenterPage.useCallback[startListening]": (event)=>{
                    let finalTranscript = "";
                    for(let i = 0; i < event.results.length; i++){
                        finalTranscript += event.results[i][0].transcript;
                    }
                    setTranscript(finalTranscript);
                }
            })["PresenterPage.useCallback[startListening]"];
            recognition.onend = ({
                "PresenterPage.useCallback[startListening]": ()=>{
                    setIsListening(false);
                }
            })["PresenterPage.useCallback[startListening]"];
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            recognition.onerror = ({
                "PresenterPage.useCallback[startListening]": (event)=>{
                    setIsListening(false);
                    setStatusText(`音声認識エラー: ${event.error}`);
                }
            })["PresenterPage.useCallback[startListening]"];
            recognitionRef.current = recognition;
            recognition.start();
        }
    }["PresenterPage.useCallback[startListening]"], []);
    // Stop listening
    const stopListening = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PresenterPage.useCallback[stopListening]": ()=>{
            if (recognitionRef.current) {
                recognitionRef.current.stop();
            }
            setIsListening(false);
        }
    }["PresenterPage.useCallback[stopListening]"], []);
    // Submit question to Claude API
    const submitQuestion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PresenterPage.useCallback[submitQuestion]": async (question)=>{
            if (!question.trim()) return;
            setIsProcessing(true);
            setStatusText("🤔 回答を考えています...");
            try {
                const res = await fetch("/api/chat", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        question,
                        apiKey
                    })
                });
                const data = await res.json();
                if (data.error) {
                    setStatusText(`エラー: ${data.error}`);
                    setIsProcessing(false);
                    return;
                }
                const answer = data.answer;
                setQaHistory({
                    "PresenterPage.useCallback[submitQuestion]": (prev)=>[
                            ...prev,
                            {
                                question,
                                answer
                            }
                        ]
                }["PresenterPage.useCallback[submitQuestion]"]);
                setTranscript("");
                setIsProcessing(false);
                setStatusText("💬 回答を読み上げています...");
                await speak(answer);
                setStatusText("✅ 回答完了 — 次の質問をどうぞ");
            } catch  {
                setStatusText("API呼び出しに失敗しました");
                setIsProcessing(false);
            }
        }
    }["PresenterPage.useCallback[submitQuestion]"], [
        apiKey,
        speak
    ]);
    // Load voices
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PresenterPage.useEffect": ()=>{
            window.speechSynthesis.getVoices();
            window.speechSynthesis.onvoiceschanged = ({
                "PresenterPage.useEffect": ()=>{
                    window.speechSynthesis.getVoices();
                }
            })["PresenterPage.useEffect"];
        }
    }["PresenterPage.useEffect"], []);
    // ===== SETUP SCREEN =====
    if (mode === "setup") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh",
                background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)",
                color: "#e2e8f0",
                fontFamily: "'Helvetica Neue', Arial, sans-serif"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        fontSize: "4rem",
                        marginBottom: "1rem"
                    },
                    children: "🛡"
                }, void 0, false, {
                    fileName: "[project]/src/app/presenter/page.tsx",
                    lineNumber: 240,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    style: {
                        fontSize: "2.5rem",
                        fontWeight: 700,
                        marginBottom: "0.5rem"
                    },
                    children: "SecureHub Presenter"
                }, void 0, false, {
                    fileName: "[project]/src/app/presenter/page.tsx",
                    lineNumber: 241,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        color: "#94a3b8",
                        marginBottom: "2rem"
                    },
                    children: "リアルタイムプレゼン & 質疑応答システム"
                }, void 0, false, {
                    fileName: "[project]/src/app/presenter/page.tsx",
                    lineNumber: 250,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        background: "rgba(30, 58, 95, 0.5)",
                        borderRadius: "16px",
                        padding: "2rem",
                        width: "500px",
                        border: "1px solid rgba(59, 130, 246, 0.3)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            style: {
                                display: "block",
                                marginBottom: "0.5rem",
                                fontSize: "0.9rem",
                                color: "#94a3b8"
                            },
                            children: "Claude API Key（質疑応答用・Haiku使用で低コスト）"
                        }, void 0, false, {
                            fileName: "[project]/src/app/presenter/page.tsx",
                            lineNumber: 263,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "password",
                            value: apiKey,
                            onChange: (e)=>setApiKey(e.target.value),
                            placeholder: "sk-ant-...",
                            style: {
                                width: "100%",
                                padding: "12px 16px",
                                borderRadius: "8px",
                                border: "1px solid rgba(59, 130, 246, 0.3)",
                                background: "rgba(15, 23, 42, 0.8)",
                                color: "#e2e8f0",
                                fontSize: "1rem",
                                marginBottom: "1rem",
                                boxSizing: "border-box"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/presenter/page.tsx",
                            lineNumber: 273,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontSize: "0.75rem",
                                color: "#64748b",
                                marginBottom: "1.5rem"
                            },
                            children: "※ APIキーはブラウザ内のみで使用し、サーバーに保存されません"
                        }, void 0, false, {
                            fileName: "[project]/src/app/presenter/page.tsx",
                            lineNumber: 290,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                gap: "12px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        if (!apiKey) {
                                            alert("APIキーを入力してください");
                                            return;
                                        }
                                        setMode("presentation");
                                    },
                                    style: {
                                        flex: 1,
                                        padding: "14px",
                                        borderRadius: "10px",
                                        border: "none",
                                        background: "linear-gradient(135deg, #1e40af 0%, #06b6d4 100%)",
                                        color: "#fff",
                                        fontSize: "1rem",
                                        fontWeight: 700,
                                        cursor: "pointer"
                                    },
                                    children: "▶ プレゼン開始"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/presenter/page.tsx",
                                    lineNumber: 301,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        if (!apiKey) {
                                            alert("APIキーを入力してください");
                                            return;
                                        }
                                        setMode("qa");
                                    },
                                    style: {
                                        flex: 1,
                                        padding: "14px",
                                        borderRadius: "10px",
                                        border: "1px solid #06b6d4",
                                        background: "transparent",
                                        color: "#22d3ee",
                                        fontSize: "1rem",
                                        fontWeight: 700,
                                        cursor: "pointer"
                                    },
                                    children: "🎤 質疑応答のみ"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/presenter/page.tsx",
                                    lineNumber: 324,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/presenter/page.tsx",
                            lineNumber: 300,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/presenter/page.tsx",
                    lineNumber: 254,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/presenter/page.tsx",
            lineNumber: 228,
            columnNumber: 7
        }, this);
    }
    // ===== PRESENTATION / QA MODE =====
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            height: "100vh",
            background: "#0f172a",
            fontFamily: "'Helvetica Neue', Arial, sans-serif"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    display: "flex",
                    flexDirection: "column"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            position: "relative"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                            ref: iframeRef,
                            src: `/presentation/demo_presentation_v2.html#/${currentSlide}`,
                            style: {
                                width: "100%",
                                height: "100%",
                                border: "none"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/presenter/page.tsx",
                            lineNumber: 366,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/presenter/page.tsx",
                        lineNumber: 365,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            padding: "10px 20px",
                            background: "rgba(30, 58, 95, 0.8)",
                            borderTop: "1px solid rgba(59, 130, 246, 0.3)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>goToSlide(Math.max(0, currentSlide - 1)),
                                disabled: currentSlide === 0,
                                style: btnStyle,
                                children: "◀"
                            }, void 0, false, {
                                fileName: "[project]/src/app/presenter/page.tsx",
                                lineNumber: 389,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: "#94a3b8",
                                    fontSize: "0.85rem",
                                    minWidth: "80px"
                                },
                                children: [
                                    currentSlide + 1,
                                    " / ",
                                    totalSlides
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/presenter/page.tsx",
                                lineNumber: 396,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>goToSlide(Math.min(totalSlides - 1, currentSlide + 1)),
                                disabled: currentSlide === totalSlides - 1,
                                style: btnStyle,
                                children: "▶"
                            }, void 0, false, {
                                fileName: "[project]/src/app/presenter/page.tsx",
                                lineNumber: 401,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: "1px",
                                    height: "24px",
                                    background: "rgba(59,130,246,0.3)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/presenter/page.tsx",
                                lineNumber: 411,
                                columnNumber: 11
                            }, this),
                            !isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: playPresentation,
                                style: actionBtnStyle,
                                children: "▶ 再生"
                            }, void 0, false, {
                                fileName: "[project]/src/app/presenter/page.tsx",
                                lineNumber: 421,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: stopPresentation,
                                style: {
                                    ...actionBtnStyle,
                                    background: "#ef4444"
                                },
                                children: "⏹ 停止"
                            }, void 0, false, {
                                fileName: "[project]/src/app/presenter/page.tsx",
                                lineNumber: 425,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>speak(NARRATIONS[currentSlide]),
                                disabled: isSpeaking || isPlaying,
                                style: btnStyle,
                                children: "🔊 このスライド"
                            }, void 0, false, {
                                fileName: "[project]/src/app/presenter/page.tsx",
                                lineNumber: 434,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: "1px",
                                    height: "24px",
                                    background: "rgba(59,130,246,0.3)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/presenter/page.tsx",
                                lineNumber: 442,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    stopPresentation();
                                    setMode(mode === "presentation" ? "qa" : "presentation");
                                },
                                style: {
                                    ...actionBtnStyle,
                                    background: mode === "qa" ? "linear-gradient(135deg, #1e40af, #06b6d4)" : "#06b6d4"
                                },
                                children: mode === "qa" ? "📊 プレゼンモード" : "🎤 質疑応答モード"
                            }, void 0, false, {
                                fileName: "[project]/src/app/presenter/page.tsx",
                                lineNumber: 451,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: "#94a3b8",
                                    fontSize: "0.8rem",
                                    marginLeft: "auto"
                                },
                                children: statusText
                            }, void 0, false, {
                                fileName: "[project]/src/app/presenter/page.tsx",
                                lineNumber: 468,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/presenter/page.tsx",
                        lineNumber: 378,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/presenter/page.tsx",
                lineNumber: 363,
                columnNumber: 7
            }, this),
            mode === "qa" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: "400px",
                    display: "flex",
                    flexDirection: "column",
                    background: "rgba(15, 23, 42, 0.95)",
                    borderLeft: "1px solid rgba(59, 130, 246, 0.3)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: "16px 20px",
                            borderBottom: "1px solid rgba(59,130,246,0.3)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    color: "#22d3ee",
                                    fontSize: "1.1rem",
                                    margin: 0,
                                    fontWeight: 700
                                },
                                children: "🎤 質疑応答"
                            }, void 0, false, {
                                fileName: "[project]/src/app/presenter/page.tsx",
                                lineNumber: 498,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: "#64748b",
                                    fontSize: "0.75rem",
                                    margin: "4px 0 0"
                                },
                                children: "マイクで質問 or テキスト入力"
                            }, void 0, false, {
                                fileName: "[project]/src/app/presenter/page.tsx",
                                lineNumber: 508,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/presenter/page.tsx",
                        lineNumber: 492,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            overflowY: "auto",
                            padding: "12px 16px"
                        },
                        children: [
                            qaHistory.map((qa, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: "16px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                background: "rgba(59,130,246,0.15)",
                                                borderRadius: "10px",
                                                padding: "10px 14px",
                                                marginBottom: "6px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: "#3b82f6",
                                                        fontSize: "0.7rem",
                                                        fontWeight: 700
                                                    },
                                                    children: "Q:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/presenter/page.tsx",
                                                    lineNumber: 537,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        color: "#e2e8f0",
                                                        fontSize: "0.85rem",
                                                        margin: "4px 0 0"
                                                    },
                                                    children: qa.question
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/presenter/page.tsx",
                                                    lineNumber: 546,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/presenter/page.tsx",
                                            lineNumber: 529,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                background: "rgba(6,182,212,0.1)",
                                                borderRadius: "10px",
                                                padding: "10px 14px",
                                                borderLeft: "3px solid #06b6d4"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: "#06b6d4",
                                                        fontSize: "0.7rem",
                                                        fontWeight: 700
                                                    },
                                                    children: "A:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/presenter/page.tsx",
                                                    lineNumber: 564,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        color: "#e2e8f0",
                                                        fontSize: "0.85rem",
                                                        margin: "4px 0 0",
                                                        lineHeight: 1.6
                                                    },
                                                    children: qa.answer
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/presenter/page.tsx",
                                                    lineNumber: 573,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/presenter/page.tsx",
                                            lineNumber: 556,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/src/app/presenter/page.tsx",
                                    lineNumber: 528,
                                    columnNumber: 15
                                }, this)),
                            isProcessing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: "center",
                                    padding: "20px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            color: "#06b6d4",
                                            fontSize: "1.5rem"
                                        },
                                        children: "⏳"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/presenter/page.tsx",
                                        lineNumber: 588,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: "#94a3b8",
                                            fontSize: "0.8rem"
                                        },
                                        children: "回答を生成中..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/presenter/page.tsx",
                                        lineNumber: 591,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/presenter/page.tsx",
                                lineNumber: 587,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/presenter/page.tsx",
                        lineNumber: 520,
                        columnNumber: 11
                    }, this),
                    transcript && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: "8px 16px",
                            background: "rgba(59,130,246,0.1)",
                            borderTop: "1px solid rgba(59,130,246,0.2)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: "#94a3b8",
                                fontSize: "0.75rem",
                                margin: 0
                            },
                            children: [
                                "認識中: ",
                                transcript
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/presenter/page.tsx",
                            lineNumber: 607,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/presenter/page.tsx",
                        lineNumber: 600,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: "12px 16px",
                            borderTop: "1px solid rgba(59,130,246,0.3)",
                            display: "flex",
                            gap: "8px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    if (isListening) {
                                        stopListening();
                                        if (transcript) submitQuestion(transcript);
                                    } else {
                                        setTranscript("");
                                        startListening();
                                    }
                                },
                                disabled: isProcessing || isSpeaking,
                                style: {
                                    width: "48px",
                                    height: "48px",
                                    borderRadius: "50%",
                                    border: "none",
                                    background: isListening ? "#ef4444" : "linear-gradient(135deg, #1e40af, #06b6d4)",
                                    color: "#fff",
                                    fontSize: "1.3rem",
                                    cursor: "pointer",
                                    flexShrink: 0,
                                    animation: isListening ? "pulse 1.5s infinite" : "none"
                                },
                                children: "🎤"
                            }, void 0, false, {
                                fileName: "[project]/src/app/presenter/page.tsx",
                                lineNumber: 625,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: transcript,
                                onChange: (e)=>setTranscript(e.target.value),
                                onKeyDown: (e)=>{
                                    if (e.key === "Enter" && transcript) {
                                        submitQuestion(transcript);
                                    }
                                },
                                placeholder: "質問を入力（Enterで送信）",
                                disabled: isProcessing || isSpeaking,
                                style: {
                                    flex: 1,
                                    padding: "10px 14px",
                                    borderRadius: "10px",
                                    border: "1px solid rgba(59,130,246,0.3)",
                                    background: "rgba(15, 23, 42, 0.8)",
                                    color: "#e2e8f0",
                                    fontSize: "0.9rem"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/presenter/page.tsx",
                                lineNumber: 655,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>transcript && submitQuestion(transcript),
                                disabled: !transcript || isProcessing || isSpeaking,
                                style: {
                                    padding: "10px 16px",
                                    borderRadius: "10px",
                                    border: "none",
                                    background: "#1e40af",
                                    color: "#fff",
                                    fontSize: "0.9rem",
                                    cursor: "pointer"
                                },
                                children: "送信"
                            }, void 0, false, {
                                fileName: "[project]/src/app/presenter/page.tsx",
                                lineNumber: 678,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/presenter/page.tsx",
                        lineNumber: 616,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/presenter/page.tsx",
                lineNumber: 482,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7); }
          70% { box-shadow: 0 0 0 15px rgba(239, 68, 68, 0); }
          100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
        }
      `
            }, void 0, false, {
                fileName: "[project]/src/app/presenter/page.tsx",
                lineNumber: 698,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/presenter/page.tsx",
        lineNumber: 354,
        columnNumber: 5
    }, this);
}
_s(PresenterPage, "L+aQi0HiguFrbs/16pRBsx31/zs=");
_c = PresenterPage;
const btnStyle = {
    padding: "6px 14px",
    borderRadius: "6px",
    border: "1px solid rgba(59,130,246,0.3)",
    background: "rgba(30, 58, 95, 0.5)",
    color: "#e2e8f0",
    fontSize: "0.8rem",
    cursor: "pointer"
};
const actionBtnStyle = {
    padding: "8px 18px",
    borderRadius: "8px",
    border: "none",
    background: "linear-gradient(135deg, #1e40af 0%, #06b6d4 100%)",
    color: "#fff",
    fontSize: "0.85rem",
    fontWeight: 700,
    cursor: "pointer"
};
var _c;
__turbopack_context__.k.register(_c, "PresenterPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_presenter_page_tsx_d034e0cb._.js.map
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
    // Slide 1: タイトル
    "皆さん、こんにちは。本日は、組織のセキュリティ文化を根本から変革するプラットフォーム「セキュアハブ」をご紹介します。なぜ今、文化変革が必要なのか。その理由からお話しします。",
    // Slide 2: セキュリティの現状
    "まず、セキュリティの現状です。プルーフポイントの調査によると、従業員の70パーセント以上がリスク行動だと分かりながら利便性を優先しています。データ侵害の88パーセントは認証情報の窃取が原因で、1件あたりの平均被害額は440万ドルです。にもかかわらず、多くの企業の対策は年1回のeラーニングにとどまっています。知識を与えるだけでは、人の行動は変わりません。ここに大きな課題があります。",
    // Slide 3: Gap分析
    "では、何が足りないのか。ギャップ分析から見えた根本課題は4つです。報告すると評価が下がるという報告忌避の文化。経営層のセキュリティへの関与不足。テストに受かるためだけの形式的な教育。そして「セキュリティは情シスの仕事」という当事者意識の欠如です。いずれも技術ではなく組織文化の問題です。だからこそ、文化そのものを変える仕組みが必要なのです。",
    // Slide 4: 既存サービスとの違い
    "ここで、既存サービスとの違いを整理します。セキュリオは、eラーニングやフィッシング訓練で知識を定着させることが主軸です。重要な取り組みですが、知識があっても行動が伴わないのが課題です。一方セキュアハブは、報告文化の醸成、脅威共有、チャンピオン制度による当事者意識の向上という文化変革に特化しています。AI自動要約、匿名Q&A、チャンピオン制度は既存サービスにない独自機能です。両者は競合ではなく補完関係。教育で知識を、セキュアハブで行動変容を。この両輪で組織を強くします。",
    // Slide 5: コンセプト - 3本の柱
    "セキュアハブは3本の柱で設計されています。1つ目は報告文化。ワンクリックで匿名報告ができ、心理的ハードルを徹底的に下げます。2つ目は脅威共有。最新脅威情報をAIが自動要約し、専門知識がなくても全社員に届けます。3つ目は当事者意識。各部門にセキュリティチャンピオンを配置し、現場のリーダーを育成します。セキュリティを「やらされること」から「みんなで取り組むこと」に変えることが目標です。",
    // Slide 6: 5つの主要機能
    "具体的な機能は5つあります。ワンクリックのインシデント報告。AIが要約する脅威情報フィード。誰でも気軽に相談できる匿名Q&A。部門リーダーを育てるチャンピオン管理。そして経営層が全体を俯瞰できるダッシュボードです。気づく、報告する、学ぶ、共有する、守る。この5つのサイクルが日常業務に組み込まれることで、セキュリティが文化として定着します。",
    // Slide 7: 報告機能 & 脅威フィード
    "続いて、報告機能と脅威フィードの詳細です。報告機能の核心は、とにかくハードルを下げること。ワンクリックで匿名報告ができ、AIが自動で重要度を判定しトリアージします。報告後には感謝メッセージが届き、「報告してよかった」と感じられる設計です。脅威情報フィードでは、IPAやJPCERTの情報をAIが自動要約。専門知識がなくても最新の脅威が分かりやすく届きます。",
    // Slide 8: デモ：インシデント報告画面 (matches actual /incidents UI)
    "それでは、実際の報告画面をご覧ください。画面上部の「報告する」ボタンをクリックするとフォームが開きます。不審メール、不審な電話、物理セキュリティ、データ関連、その他の5つのカテゴリから選択し、タイトルを入力します。詳細は任意なので省略も可能です。「匿名で報告する」にチェックを入れれば、セキュリティチームにも名前は表示されません。送信を押せば完了です。画面下部には過去の報告履歴が一覧表示され、ステータスや重要度も確認できます。",
    // Slide 9: デモ：経営層ダッシュボード (matches actual /executive UI)
    "次に、経営層向けダッシュボードです。上部に4つのKPIカードがあります。リスクスコア100点中45点で前月比7ポイント改善。月間報告45件で3ヶ月前から86パーセント増。平均報告時間2.3時間で導入前から58パーセント短縮。SANS成熟度レベル3に到達。その下にリスクスコア推移、カテゴリ内訳、部門別統計がグラフで可視化されています。ROIサマリーでは報告件数3.2倍、年間リスク削減額1200万円と、投資対効果を経営層に明確に示せます。",
    // Slide 10: 期待される効果とロードマップ
    "最後に、期待される効果と開発計画です。セキュアハブにより、インシデント報告はゼロから月50件以上に。報告時間は数日から1時間以内に短縮。2年後にはSANS成熟度レベル4を目指します。開発は4フェーズ、合計7ヶ月。MVPはわずか2ヶ月で稼働開始できます。セキュアハブで、セキュリティを「みんなのこと」に。組織の文化変革を、ぜひ一緒に実現させてください。ご清聴ありがとうございました。"
];
const SLIDE_TITLES = [
    "タイトル",
    "セキュリティの現状",
    "Gap分析：根本課題",
    "既存サービスとの違い",
    "SecureHubのコンセプト",
    "5つの主要機能",
    "報告機能 & 脅威フィード",
    "デモ：インシデント報告",
    "デモ：経営ダッシュボード",
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
    const transcriptRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])("");
    // Demo slide indices (0-based): slide 7 = demo incidents, slide 8 = demo executive
    const DEMO_SLIDES = {
        7: "/incidents",
        8: "/executive"
    };
    const isDemoSlide = (index)=>index in DEMO_SLIDES;
    const totalSlides = NARRATIONS.length;
    // Speak text using Web Speech Synthesis
    const speak = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PresenterPage.useCallback[speak]": (text, rate = 1.25)=>{
            return new Promise({
                "PresenterPage.useCallback[speak]": (resolve)=>{
                    window.speechSynthesis.cancel();
                    const utterance = new SpeechSynthesisUtterance(text);
                    utterance.lang = "ja-JP";
                    utterance.rate = rate;
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
    // Navigate iframe to slide (switches to app for demo slides)
    const goToSlide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PresenterPage.useCallback[goToSlide]": (index)=>{
            setCurrentSlide(index);
            if (iframeRef.current) {
                if (isDemoSlide(index)) {
                    // Show actual running app for demo slides
                    iframeRef.current.src = DEMO_SLIDES[index];
                } else {
                    // Show presentation slides
                    const presentationUrl = `/presentation/demo_presentation_v2.html#/${index}`;
                    if (!iframeRef.current.src.includes("demo_presentation_v2.html")) {
                        iframeRef.current.src = presentationUrl;
                    } else if (iframeRef.current.contentWindow) {
                        iframeRef.current.contentWindow.postMessage({
                            type: "goToSlide",
                            slide: index
                        }, "*");
                    }
                }
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
                await speak(NARRATIONS[i], 1.25);
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
                    transcriptRef.current = finalTranscript;
                }
            })["PresenterPage.useCallback[startListening]"];
            recognition.onend = ({
                "PresenterPage.useCallback[startListening]": ()=>{
                    setIsListening(false);
                    // Auto-submit when speech recognition ends and there's a transcript
                    const finalText = transcriptRef.current;
                    if (finalText.trim()) {
                        submitQuestion(finalText);
                        transcriptRef.current = "";
                    }
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
    }["PresenterPage.useCallback[startListening]"], [
        submitQuestion
    ]);
    // Stop listening
    const stopListening = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PresenterPage.useCallback[stopListening]": ()=>{
            if (recognitionRef.current) {
                recognitionRef.current.stop();
            }
            setIsListening(false);
        }
    }["PresenterPage.useCallback[stopListening]"], []);
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
                    lineNumber: 273,
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
                    lineNumber: 274,
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
                    lineNumber: 283,
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
                            lineNumber: 296,
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
                            lineNumber: 306,
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
                            lineNumber: 323,
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
                                    lineNumber: 334,
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
                                    lineNumber: 357,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/presenter/page.tsx",
                            lineNumber: 333,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/presenter/page.tsx",
                    lineNumber: 287,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/presenter/page.tsx",
            lineNumber: 261,
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
                            src: isDemoSlide(currentSlide) ? DEMO_SLIDES[currentSlide] : `/presentation/demo_presentation_v2.html#/${currentSlide}`,
                            style: {
                                width: "100%",
                                height: "100%",
                                border: "none"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/presenter/page.tsx",
                            lineNumber: 399,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/presenter/page.tsx",
                        lineNumber: 398,
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
                                lineNumber: 422,
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
                                lineNumber: 429,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>goToSlide(Math.min(totalSlides - 1, currentSlide + 1)),
                                disabled: currentSlide === totalSlides - 1,
                                style: btnStyle,
                                children: "▶"
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
                                lineNumber: 444,
                                columnNumber: 11
                            }, this),
                            !isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: playPresentation,
                                style: actionBtnStyle,
                                children: "▶ 再生"
                            }, void 0, false, {
                                fileName: "[project]/src/app/presenter/page.tsx",
                                lineNumber: 454,
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
                                lineNumber: 458,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>speak(NARRATIONS[currentSlide]),
                                disabled: isSpeaking || isPlaying,
                                style: btnStyle,
                                children: "🔊 このスライド"
                            }, void 0, false, {
                                fileName: "[project]/src/app/presenter/page.tsx",
                                lineNumber: 467,
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
                                lineNumber: 475,
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
                                lineNumber: 484,
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
                                lineNumber: 501,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/presenter/page.tsx",
                        lineNumber: 411,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/presenter/page.tsx",
                lineNumber: 396,
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
                                lineNumber: 531,
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
                                lineNumber: 541,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/presenter/page.tsx",
                        lineNumber: 525,
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
                                                    lineNumber: 570,
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
                                                    lineNumber: 579,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/presenter/page.tsx",
                                            lineNumber: 562,
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
                                                    lineNumber: 597,
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
                                                    lineNumber: 606,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/presenter/page.tsx",
                                            lineNumber: 589,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/src/app/presenter/page.tsx",
                                    lineNumber: 561,
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
                                        lineNumber: 621,
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
                                        lineNumber: 624,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/presenter/page.tsx",
                                lineNumber: 620,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/presenter/page.tsx",
                        lineNumber: 553,
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
                            lineNumber: 640,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/presenter/page.tsx",
                        lineNumber: 633,
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
                                    // Auto-submit is handled by recognition.onend
                                    } else {
                                        setTranscript("");
                                        transcriptRef.current = "";
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
                                lineNumber: 658,
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
                                lineNumber: 689,
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
                                lineNumber: 712,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/presenter/page.tsx",
                        lineNumber: 649,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/presenter/page.tsx",
                lineNumber: 515,
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
                lineNumber: 732,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/presenter/page.tsx",
        lineNumber: 387,
        columnNumber: 5
    }, this);
}
_s(PresenterPage, "MHO9SHxP0xqFPDZc4wtFsDAo9ms=");
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
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_6e9b37a5._.js.map
"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}
/* eslint-enable @typescript-eslint/no-explicit-any */

import { useState, useRef, useCallback, useEffect } from "react";

// --- Slide narration texts ---
const NARRATIONS: string[] = [
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
  "最後に、期待される効果と開発計画です。セキュアハブにより、インシデント報告はゼロから月50件以上に。報告時間は数日から1時間以内に短縮。2年後にはSANS成熟度レベル4を目指します。開発は4フェーズ、合計7ヶ月。MVPはわずか2ヶ月で稼働開始できます。セキュアハブで、セキュリティを「みんなのこと」に。組織の文化変革を、ぜひ一緒に実現させてください。ご清聴ありがとうございました。",
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
  "期待される効果とロードマップ",
];

type Mode = "setup" | "presentation" | "qa";

interface QAEntry {
  question: string;
  answer: string;
}

export default function PresenterPage() {
  const [mode, setMode] = useState<Mode>("setup");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [qaHistory, setQaHistory] = useState<QAEntry[]>([]);
  const [statusText, setStatusText] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const recognitionRef = useRef<any>(null);
  const synthRef = useRef<SpeechSynthesisUtterance | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const transcriptRef = useRef<string>("");

  // Demo slide indices (0-based): slide 7 = demo incidents, slide 8 = demo executive
  const DEMO_SLIDES: Record<number, string> = { 7: "/incidents", 8: "/executive" };
  const isDemoSlide = (index: number) => index in DEMO_SLIDES;

  const totalSlides = NARRATIONS.length;

  // Speak text using Web Speech Synthesis
  const speak = useCallback((text: string, rate: number = 1.1): Promise<void> => {
    return new Promise((resolve) => {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "ja-JP";
      utterance.rate = rate;
      utterance.pitch = 1.0;

      // Try to find a Japanese voice
      const voices = window.speechSynthesis.getVoices();
      const jaVoice = voices.find(
        (v) => v.lang.startsWith("ja") && v.name.includes("Kyoko")
      ) || voices.find((v) => v.lang.startsWith("ja"));
      if (jaVoice) utterance.voice = jaVoice;

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => {
        setIsSpeaking(false);
        resolve();
      };
      utterance.onerror = () => {
        setIsSpeaking(false);
        resolve();
      };
      synthRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    });
  }, []);

  // Navigate iframe to slide (switches to app for demo slides)
  const goToSlide = useCallback((index: number) => {
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
          iframeRef.current.contentWindow.postMessage(
            { type: "goToSlide", slide: index },
            "*"
          );
        }
      }
    }
  }, []);

  // Play presentation from current slide
  const playPresentation = useCallback(async () => {
    setIsPlaying(true);
    for (let i = currentSlide; i < totalSlides; i++) {
      goToSlide(i);
      setStatusText(`スライド ${i + 1}/${totalSlides}: ${SLIDE_TITLES[i]}`);
      await speak(NARRATIONS[i], 1.1);
      // Pause between slides
      await new Promise((r) => setTimeout(r, 1500));
    }
    setIsPlaying(false);
    setStatusText("プレゼン完了 — 質疑応答モードに切り替えできます");
  }, [currentSlide, totalSlides, goToSlide, speak]);

  // Stop presentation
  const stopPresentation = useCallback(() => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setIsSpeaking(false);
    setStatusText("停止しました");
  }, []);

  // Submit question to Claude API
  const submitQuestion = useCallback(
    async (question: string) => {
      if (!question.trim()) return;

      setIsProcessing(true);
      setStatusText("🤔 回答を考えています...");

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ question }),
        });

        const data = await res.json();

        if (data.error) {
          setStatusText(`エラー: ${data.error}`);
          setIsProcessing(false);
          return;
        }

        const answer = data.answer;
        setQaHistory((prev) => [...prev, { question, answer }]);
        setTranscript("");
        setIsProcessing(false);
        setStatusText("💬 回答を読み上げています...");
        await speak(answer);
        setStatusText("✅ 回答完了 — 次の質問をどうぞ");
      } catch {
        setStatusText("API呼び出しに失敗しました");
        setIsProcessing(false);
      }
    },
    [speak]
  );

  // Start speech recognition
  const startListening = useCallback(() => {
    const SpeechRecognitionAPI =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognitionAPI) {
      setStatusText("このブラウザは音声認識に対応していません（Chrome推奨）");
      return;
    }

    const recognition = new SpeechRecognitionAPI();
    recognition.lang = "ja-JP";
    recognition.continuous = false;
    recognition.interimResults = true;

    recognition.onstart = () => {
      setIsListening(true);
      setStatusText("🎤 聞いています... 質問をどうぞ");
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    recognition.onresult = (event: any) => {
      let finalTranscript = "";
      for (let i = 0; i < event.results.length; i++) {
        finalTranscript += event.results[i][0].transcript;
      }
      setTranscript(finalTranscript);
      transcriptRef.current = finalTranscript;
    };

    recognition.onend = () => {
      setIsListening(false);
      // Auto-submit when speech recognition ends and there's a transcript
      const finalText = transcriptRef.current;
      if (finalText.trim()) {
        submitQuestion(finalText);
        transcriptRef.current = "";
      }
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    recognition.onerror = (event: any) => {
      setIsListening(false);
      setStatusText(`音声認識エラー: ${event.error}`);
    };

    recognitionRef.current = recognition;
    recognition.start();
  }, [submitQuestion]);

  // Stop listening
  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    setIsListening(false);
  }, []);

  // Load voices
  useEffect(() => {
    window.speechSynthesis.getVoices();
    window.speechSynthesis.onvoiceschanged = () => {
      window.speechSynthesis.getVoices();
    };
  }, []);

  // ===== SETUP SCREEN =====
  if (mode === "setup") {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)",
          color: "#e2e8f0",
          fontFamily: "'Helvetica Neue', Arial, sans-serif",
        }}
      >
        <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🛡</div>
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: 700,
            marginBottom: "0.5rem",
          }}
        >
          SecureHub Presenter
        </h1>
        <p style={{ color: "#94a3b8", marginBottom: "2rem" }}>
          リアルタイムプレゼン & 質疑応答システム
        </p>

        <div
          style={{
            background: "rgba(30, 58, 95, 0.5)",
            borderRadius: "16px",
            padding: "2rem",
            width: "500px",
            border: "1px solid rgba(59, 130, 246, 0.3)",
          }}
        >
          <div style={{ display: "flex", gap: "12px" }}>
            <button
              onClick={() => setMode("presentation")}
              style={{
                flex: 1,
                padding: "14px",
                borderRadius: "10px",
                border: "none",
                background:
                  "linear-gradient(135deg, #1e40af 0%, #06b6d4 100%)",
                color: "#fff",
                fontSize: "1rem",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              ▶ プレゼン開始
            </button>
            <button
              onClick={() => setMode("qa")}
              style={{
                flex: 1,
                padding: "14px",
                borderRadius: "10px",
                border: "1px solid #06b6d4",
                background: "transparent",
                color: "#22d3ee",
                fontSize: "1rem",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              🎤 質疑応答のみ
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ===== PRESENTATION / QA MODE =====
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        background: "#0f172a",
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
      }}
    >
      {/* Main: Slide area */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Slide iframe */}
        <div style={{ flex: 1, position: "relative" }}>
          <iframe
            ref={iframeRef}
            src={isDemoSlide(currentSlide) ? DEMO_SLIDES[currentSlide] : `/presentation/demo_presentation_v2.html#/${currentSlide}`}
            tabIndex={-1}
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              pointerEvents: mode === "qa" ? "none" : "auto",
            }}
          />
        </div>

        {/* Controls bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "10px 20px",
            background: "rgba(30, 58, 95, 0.8)",
            borderTop: "1px solid rgba(59, 130, 246, 0.3)",
          }}
        >
          {/* Slide nav */}
          <button
            onClick={() => goToSlide(Math.max(0, currentSlide - 1))}
            disabled={currentSlide === 0}
            style={btnStyle}
          >
            ◀
          </button>
          <span
            style={{ color: "#94a3b8", fontSize: "0.85rem", minWidth: "80px" }}
          >
            {currentSlide + 1} / {totalSlides}
          </span>
          <button
            onClick={() =>
              goToSlide(Math.min(totalSlides - 1, currentSlide + 1))
            }
            disabled={currentSlide === totalSlides - 1}
            style={btnStyle}
          >
            ▶
          </button>

          <div
            style={{
              width: "1px",
              height: "24px",
              background: "rgba(59,130,246,0.3)",
            }}
          />

          {/* Play/Stop */}
          {!isPlaying ? (
            <button onClick={playPresentation} style={actionBtnStyle}>
              ▶ 再生
            </button>
          ) : (
            <button
              onClick={stopPresentation}
              style={{ ...actionBtnStyle, background: "#ef4444" }}
            >
              ⏹ 停止
            </button>
          )}

          {/* Speak current slide */}
          <button
            onClick={() => speak(NARRATIONS[currentSlide])}
            disabled={isSpeaking || isPlaying}
            style={btnStyle}
          >
            🔊 このスライド
          </button>

          <div
            style={{
              width: "1px",
              height: "24px",
              background: "rgba(59,130,246,0.3)",
            }}
          />

          {/* Mode toggle */}
          <button
            onClick={() => {
              stopPresentation();
              setMode(mode === "presentation" ? "qa" : "presentation");
            }}
            style={{
              ...actionBtnStyle,
              background:
                mode === "qa"
                  ? "linear-gradient(135deg, #1e40af, #06b6d4)"
                  : "#06b6d4",
            }}
          >
            {mode === "qa" ? "📊 プレゼンモード" : "🎤 質疑応答モード"}
          </button>

          {/* Status */}
          <span
            style={{
              color: "#94a3b8",
              fontSize: "0.8rem",
              marginLeft: "auto",
            }}
          >
            {statusText}
          </span>
        </div>
      </div>

      {/* Q&A Panel (visible in QA mode) */}
      {mode === "qa" && (
        <div
          style={{
            width: "400px",
            display: "flex",
            flexDirection: "column",
            background: "rgba(15, 23, 42, 0.95)",
            borderLeft: "1px solid rgba(59, 130, 246, 0.3)",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "16px 20px",
              borderBottom: "1px solid rgba(59,130,246,0.3)",
            }}
          >
            <h2
              style={{
                color: "#22d3ee",
                fontSize: "1.1rem",
                margin: 0,
                fontWeight: 700,
              }}
            >
              🎤 質疑応答
            </h2>
            <p
              style={{
                color: "#64748b",
                fontSize: "0.75rem",
                margin: "4px 0 0",
              }}
            >
              マイクで質問 or テキスト入力
            </p>
          </div>

          {/* QA History */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "12px 16px",
            }}
          >
            {qaHistory.map((qa, i) => (
              <div key={i} style={{ marginBottom: "16px" }}>
                <div
                  style={{
                    background: "rgba(59,130,246,0.15)",
                    borderRadius: "10px",
                    padding: "10px 14px",
                    marginBottom: "6px",
                  }}
                >
                  <span
                    style={{
                      color: "#3b82f6",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                    }}
                  >
                    Q:
                  </span>
                  <p
                    style={{
                      color: "#e2e8f0",
                      fontSize: "0.85rem",
                      margin: "4px 0 0",
                    }}
                  >
                    {qa.question}
                  </p>
                </div>
                <div
                  style={{
                    background: "rgba(6,182,212,0.1)",
                    borderRadius: "10px",
                    padding: "10px 14px",
                    borderLeft: "3px solid #06b6d4",
                  }}
                >
                  <span
                    style={{
                      color: "#06b6d4",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                    }}
                  >
                    A:
                  </span>
                  <p
                    style={{
                      color: "#e2e8f0",
                      fontSize: "0.85rem",
                      margin: "4px 0 0",
                      lineHeight: 1.6,
                    }}
                  >
                    {qa.answer}
                  </p>
                </div>
              </div>
            ))}
            {isProcessing && (
              <div style={{ textAlign: "center", padding: "20px" }}>
                <div style={{ color: "#06b6d4", fontSize: "1.5rem" }}>
                  ⏳
                </div>
                <p style={{ color: "#94a3b8", fontSize: "0.8rem" }}>
                  回答を生成中...
                </p>
              </div>
            )}
          </div>

          {/* Transcript display */}
          {transcript && (
            <div
              style={{
                padding: "8px 16px",
                background: "rgba(59,130,246,0.1)",
                borderTop: "1px solid rgba(59,130,246,0.2)",
              }}
            >
              <p
                style={{ color: "#94a3b8", fontSize: "0.75rem", margin: 0 }}
              >
                認識中: {transcript}
              </p>
            </div>
          )}

          {/* Input area */}
          <div
            style={{
              padding: "12px 16px",
              borderTop: "1px solid rgba(59,130,246,0.3)",
              display: "flex",
              gap: "8px",
            }}
          >
            {/* Mic button */}
            <button
              onClick={() => {
                if (isListening) {
                  stopListening();
                  // Auto-submit is handled by recognition.onend
                } else {
                  setTranscript("");
                  transcriptRef.current = "";
                  startListening();
                }
              }}
              disabled={isProcessing || isSpeaking}
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                border: "none",
                background: isListening
                  ? "#ef4444"
                  : "linear-gradient(135deg, #1e40af, #06b6d4)",
                color: "#fff",
                fontSize: "1.3rem",
                cursor: "pointer",
                flexShrink: 0,
                animation: isListening ? "pulse 1.5s infinite" : "none",
              }}
            >
              🎤
            </button>

            {/* Text input */}
            <input
              type="text"
              value={transcript}
              onChange={(e) => setTranscript(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && transcript) {
                  submitQuestion(transcript);
                }
              }}
              placeholder="質問を入力（Enterで送信）"
              disabled={isProcessing || isSpeaking}
              style={{
                flex: 1,
                padding: "10px 14px",
                borderRadius: "10px",
                border: "1px solid rgba(59,130,246,0.3)",
                background: "rgba(15, 23, 42, 0.8)",
                color: "#e2e8f0",
                fontSize: "0.9rem",
              }}
            />

            {/* Send button */}
            <button
              onClick={() => transcript && submitQuestion(transcript)}
              disabled={!transcript || isProcessing || isSpeaking}
              style={{
                padding: "10px 16px",
                borderRadius: "10px",
                border: "none",
                background: "#1e40af",
                color: "#fff",
                fontSize: "0.9rem",
                cursor: "pointer",
              }}
            >
              送信
            </button>
          </div>
        </div>
      )}

      {/* Pulse animation */}
      <style>{`
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7); }
          70% { box-shadow: 0 0 0 15px rgba(239, 68, 68, 0); }
          100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
        }
      `}</style>
    </div>
  );
}

const btnStyle: React.CSSProperties = {
  padding: "6px 14px",
  borderRadius: "6px",
  border: "1px solid rgba(59,130,246,0.3)",
  background: "rgba(30, 58, 95, 0.5)",
  color: "#e2e8f0",
  fontSize: "0.8rem",
  cursor: "pointer",
};

const actionBtnStyle: React.CSSProperties = {
  padding: "8px 18px",
  borderRadius: "8px",
  border: "none",
  background: "linear-gradient(135deg, #1e40af 0%, #06b6d4 100%)",
  color: "#fff",
  fontSize: "0.85rem",
  fontWeight: 700,
  cursor: "pointer",
};

import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `あなたは「SecureHub」のプレゼンターアシスタントです。SecureHubはセキュリティ文化醸成プラットフォームで、以下の特徴があります：

【サービス概要】
SecureHubは、組織のセキュリティ文化を変革するプラットフォームです。「教育」ではなく「文化変革」にフォーカスしています。

【3本の柱】
1. 報告文化：ワンクリック匿名報告、AI自動トリアージ、感謝フィードバック
2. 脅威共有：IPA/JPCERT等の情報をAI要約して全社配信、週次ダイジェスト
3. 当事者意識：チャンピオン制度で各部門にセキュリティリーダーを育成

【5つの主要機能】
1. ワンクリックインシデント報告（匿名対応、AI自動トリアージ）
2. 脅威情報フィード（AI要約、緊急アラート）
3. 匿名Q&A（AIチャットボット、ナレッジベース化）
4. チャンピオン管理（活動ログ、バッジ・表彰、コミュニティ）
5. 経営層ダッシュボード（リスクスコア、部門別統計、ROI、自動レポート）

【既存サービス（セキュリオ等）との違い】
- セキュリオ：教育・テスト・訓練が主軸（知識定着）
- SecureHub：報告文化・脅威共有・当事者意識が主軸（文化変革）
- 両者は競合ではなく補完関係
- SecureHub独自機能：脅威情報AI要約配信、匿名Q&A、チャンピオン制度

【技術スタック】
Next.js + TypeScript + PostgreSQL + Redis + Claude API

【開発計画】
- 全体：4フェーズ、約7ヶ月
- Phase 1（0-2ヶ月）：MVP（ワンクリック報告 + 基本ダッシュボード）
- Phase 2（2-4ヶ月）：ニュースフィード、Q&A、Slack/Teams連携
- Phase 3（4-5.5ヶ月）：チャンピオン管理、経営ダッシュボード
- Phase 4（5.5-7ヶ月）：AIチャットボット、自動トリアージ、AI要約

【期待効果】
- インシデント報告：0 → 50+件/月
- 報告時間：数日 → 1時間以内
- SANS成熟度：Level 2 → Level 4（2年目標）

【背景データ】
- 従業員の70%以上がリスク行動を自認（Proofpoint）
- データ侵害の88%が認証情報窃取（Verizon DBIR）
- 平均コスト$4.4M（IBM）
- サイバー攻撃通信6,862億パケットで過去最高（NICT）

回答は簡潔に、プレゼンの質疑応答にふさわしいトーンで答えてください。日本語で回答してください。1-3文程度で簡潔に。`;

export async function POST(request: NextRequest) {
  try {
    const { question, apiKey } = await request.json();

    if (!question || !apiKey) {
      return NextResponse.json(
        { error: "question and apiKey are required" },
        { status: 400 }
      );
    }

    const client = new Anthropic({ apiKey });

    const message = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 200,
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content: question }],
    });

    const text =
      message.content[0].type === "text" ? message.content[0].text : "";

    return NextResponse.json({ answer: text });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

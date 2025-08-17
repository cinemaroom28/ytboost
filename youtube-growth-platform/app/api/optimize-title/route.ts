import { type NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"
import { optimizeTitle } from "@/lib/ai-optimizer"

export async function POST(request: NextRequest) {
  try {
    const { title, userId, videoTopic, targetAudience, competitorTitles } = await request.json()

    if (!title || !userId) {
      return NextResponse.json({ error: "Title and userId are required" }, { status: 400 })
    }

    const optimization = await optimizeTitle(
      title,
      videoTopic || "General content",
      targetAudience || "General audience",
      competitorTitles || [],
    )

    const { error } = await supabase.from("optimization_results").insert({
      user_id: userId,
      tool_type: "title",
      input_data: {
        original_title: title,
        video_topic: videoTopic,
        target_audience: targetAudience,
      },
      suggestions: {
        suggestions: optimization.suggestions,
        improvements: optimization.improvements,
        optimized_title: optimization.optimizedTitle,
        reasoning: optimization.reasoning,
      },
      score: optimization.score,
    })

    if (error) {
      console.error("Database error:", error)
      return NextResponse.json({ error: "Failed to save results" }, { status: 500 })
    }

    return NextResponse.json({
      score: optimization.score,
      suggestions: optimization.suggestions,
      improvements: optimization.improvements,
      optimizedTitle: optimization.optimizedTitle,
      reasoning: optimization.reasoning,
    })
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

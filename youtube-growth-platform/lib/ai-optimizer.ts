import { generateText } from "ai"
import { groq } from "@ai-sdk/groq"

export interface TitleOptimization {
  score: number
  suggestions: string[]
  improvements: string[]
  optimizedTitle: string
  reasoning: string
}

export interface ThumbnailAnalysis {
  score: number
  recommendations: string[]
  colorAnalysis: string
  textReadability: number
  emotionalImpact: string
}

export interface DescriptionOptimization {
  score: number
  optimizedDescription: string
  keywordSuggestions: string[]
  improvements: string[]
  seoScore: number
}

export async function optimizeTitle(
  currentTitle: string,
  videoTopic: string,
  targetAudience: string,
  competitorTitles: string[] = [],
): Promise<TitleOptimization> {
  try {
    const { text } = await generateText({
      model: groq("llama-3.1-70b-versatile"),
      prompt: `You are a YouTube optimization expert. Analyze and optimize this video title for maximum engagement and discoverability.

Current Title: "${currentTitle}"
Video Topic: ${videoTopic}
Target Audience: ${targetAudience}
Competitor Titles: ${competitorTitles.join(", ")}

Provide a detailed analysis including:
1. Score the current title (1-100)
2. List 5 specific improvement suggestions
3. Provide 3 optimized title alternatives
4. Explain your reasoning
5. Consider SEO, emotional triggers, and click-through rate optimization

Format your response as JSON with this structure:
{
  "score": number,
  "suggestions": ["suggestion1", "suggestion2", ...],
  "improvements": ["improvement1", "improvement2", ...],
  "optimizedTitles": ["title1", "title2", "title3"],
  "reasoning": "detailed explanation"
}`,
    })

    const analysis = JSON.parse(text)

    return {
      score: analysis.score,
      suggestions: analysis.suggestions,
      improvements: analysis.improvements,
      optimizedTitle: analysis.optimizedTitles[0],
      reasoning: analysis.reasoning,
    }
  } catch (error) {
    console.error("Error optimizing title:", error)
    return {
      score: 0,
      suggestions: ["Error analyzing title"],
      improvements: ["Please try again"],
      optimizedTitle: currentTitle,
      reasoning: "Analysis failed",
    }
  }
}

export async function analyzeDescription(
  description: string,
  videoTopic: string,
  targetKeywords: string[],
): Promise<DescriptionOptimization> {
  try {
    const { text } = await generateText({
      model: groq("llama-3.1-70b-versatile"),
      prompt: `Analyze and optimize this YouTube video description for SEO and engagement.

Current Description: "${description}"
Video Topic: ${videoTopic}
Target Keywords: ${targetKeywords.join(", ")}

Provide:
1. SEO score (1-100)
2. Optimized description (first 125 characters are crucial)
3. Additional keyword suggestions
4. Specific improvements needed
5. Overall optimization score

Format as JSON:
{
  "score": number,
  "optimizedDescription": "optimized description text",
  "keywordSuggestions": ["keyword1", "keyword2", ...],
  "improvements": ["improvement1", "improvement2", ...],
  "seoScore": number
}`,
    })

    return JSON.parse(text)
  } catch (error) {
    console.error("Error analyzing description:", error)
    return {
      score: 0,
      optimizedDescription: description,
      keywordSuggestions: [],
      improvements: ["Error analyzing description"],
      seoScore: 0,
    }
  }
}

export async function generateTags(title: string, description: string, category: string): Promise<string[]> {
  try {
    const { text } = await generateText({
      model: groq("llama-3.1-70b-versatile"),
      prompt: `Generate optimized YouTube tags for this video:

Title: "${title}"
Description: "${description}"
Category: ${category}

Generate 15-20 relevant tags including:
- Primary keywords (high search volume)
- Long-tail keywords (specific, less competitive)
- Related topics and synonyms
- Trending terms in this niche

Return only a JSON array of strings: ["tag1", "tag2", ...]`,
    })

    return JSON.parse(text)
  } catch (error) {
    console.error("Error generating tags:", error)
    return []
  }
}

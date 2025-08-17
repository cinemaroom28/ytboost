import { type NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get("userId")

    if (!userId) {
      return NextResponse.json({ error: "userId is required" }, { status: 400 })
    }

    // Get latest analytics data
    const { data: analytics, error } = await supabase
      .from("channel_analytics")
      .select("*")
      .eq("user_id", userId)
      .order("date", { ascending: false })
      .limit(30)

    if (error) {
      console.error("Database error:", error)
      return NextResponse.json({ error: "Failed to fetch analytics" }, { status: 500 })
    }

    // Calculate growth metrics
    const latest = analytics[0]
    const previous = analytics[1]

    const metrics = {
      subscribers: latest?.subscribers || 0,
      views: latest?.views || 0,
      watchTime: latest?.watch_time_hours || 0,
      engagement: latest?.engagement_rate || 0,
      subscriberGrowth: previous
        ? (((latest?.subscribers || 0) - previous.subscribers) / previous.subscribers) * 100
        : 0,
      viewGrowth: previous ? (((latest?.views || 0) - previous.views) / previous.views) * 100 : 0,
      chartData: analytics.reverse().map((item) => ({
        date: item.date,
        subscribers: item.subscribers,
        views: item.views,
        watchTime: item.watch_time_hours,
        engagement: item.engagement_rate,
      })),
    }

    return NextResponse.json(metrics)
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { userId, subscribers, views, watchTime, engagement } = await request.json()

    if (!userId) {
      return NextResponse.json({ error: "userId is required" }, { status: 400 })
    }

    // Insert new analytics data
    const { error } = await supabase.from("channel_analytics").insert({
      user_id: userId,
      date: new Date().toISOString().split("T")[0],
      subscribers: subscribers || 0,
      views: views || 0,
      watch_time_hours: watchTime || 0,
      engagement_rate: engagement || 0,
    })

    if (error) {
      console.error("Database error:", error)
      return NextResponse.json({ error: "Failed to save analytics" }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

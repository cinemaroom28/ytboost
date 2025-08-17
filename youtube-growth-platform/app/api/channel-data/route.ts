import { type NextRequest, NextResponse } from "next/server"
import { getChannelData, getChannelVideos, getChannelAnalytics } from "@/lib/youtube-api"

export async function POST(request: NextRequest) {
  try {
    const { accessToken, channelId, startDate, endDate } = await request.json()

    if (!accessToken) {
      return NextResponse.json({ error: "Access token is required" }, { status: 400 })
    }

    const [channelData, videos, analytics] = await Promise.all([
      getChannelData(accessToken),
      getChannelVideos(accessToken, 10),
      channelId && startDate && endDate ? getChannelAnalytics(accessToken, channelId, startDate, endDate) : null,
    ])

    return NextResponse.json({
      channel: channelData,
      videos,
      analytics,
    })
  } catch (error) {
    console.error("Channel data error:", error)
    return NextResponse.json({ error: "Failed to fetch channel data" }, { status: 500 })
  }
}

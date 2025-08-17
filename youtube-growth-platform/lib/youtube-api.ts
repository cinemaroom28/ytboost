import { google } from "googleapis"

const youtube = google.youtube({
  version: "v3",
  auth: process.env.YOUTUBE_API_KEY,
})

const youtubeAnalytics = google.youtubeAnalytics({
  version: "v2",
})

export interface ChannelData {
  channelId: string
  title: string
  subscriberCount: number
  viewCount: number
  videoCount: number
  customUrl?: string
  description: string
  publishedAt: string
}

export interface VideoData {
  videoId: string
  title: string
  description: string
  viewCount: number
  likeCount: number
  commentCount: number
  publishedAt: string
  duration: string
  tags: string[]
}

export interface AnalyticsData {
  views: number
  estimatedMinutesWatched: number
  averageViewDuration: number
  subscribersGained: number
  subscribersLost: number
}

export async function getChannelData(accessToken: string): Promise<ChannelData | null> {
  try {
    const auth = new google.auth.OAuth2()
    auth.setCredentials({ access_token: accessToken })

    const response = await youtube.channels.list({
      auth,
      part: ["snippet", "statistics"],
      mine: true,
    })

    const channel = response.data.items?.[0]
    if (!channel) return null

    return {
      channelId: channel.id!,
      title: channel.snippet?.title || "",
      subscriberCount: Number.parseInt(channel.statistics?.subscriberCount || "0"),
      viewCount: Number.parseInt(channel.statistics?.viewCount || "0"),
      videoCount: Number.parseInt(channel.statistics?.videoCount || "0"),
      customUrl: channel.snippet?.customUrl,
      description: channel.snippet?.description || "",
      publishedAt: channel.snippet?.publishedAt || "",
    }
  } catch (error) {
    console.error("Error fetching channel data:", error)
    return null
  }
}

export async function getChannelVideos(accessToken: string, maxResults = 10): Promise<VideoData[]> {
  try {
    const auth = new google.auth.OAuth2()
    auth.setCredentials({ access_token: accessToken })

    const response = await youtube.search.list({
      auth,
      part: ["snippet"],
      forMine: true,
      type: ["video"],
      order: "date",
      maxResults,
    })

    const videoIds = response.data.items?.map((item) => item.id?.videoId).filter(Boolean) || []

    if (videoIds.length === 0) return []

    const videosResponse = await youtube.videos.list({
      auth,
      part: ["snippet", "statistics", "contentDetails"],
      id: videoIds,
    })

    return (
      videosResponse.data.items?.map((video) => ({
        videoId: video.id!,
        title: video.snippet?.title || "",
        description: video.snippet?.description || "",
        viewCount: Number.parseInt(video.statistics?.viewCount || "0"),
        likeCount: Number.parseInt(video.statistics?.likeCount || "0"),
        commentCount: Number.parseInt(video.statistics?.commentCount || "0"),
        publishedAt: video.snippet?.publishedAt || "",
        duration: video.contentDetails?.duration || "",
        tags: video.snippet?.tags || [],
      })) || []
    )
  } catch (error) {
    console.error("Error fetching videos:", error)
    return []
  }
}

export async function getChannelAnalytics(
  accessToken: string,
  channelId: string,
  startDate: string,
  endDate: string,
): Promise<AnalyticsData | null> {
  try {
    const auth = new google.auth.OAuth2()
    auth.setCredentials({ access_token: accessToken })

    const response = await youtubeAnalytics.reports.query({
      auth,
      ids: `channel==${channelId}`,
      startDate,
      endDate,
      metrics: "views,estimatedMinutesWatched,averageViewDuration,subscribersGained,subscribersLost",
    })

    const data = response.data.rows?.[0]
    if (!data) return null

    return {
      views: data[0] as number,
      estimatedMinutesWatched: data[1] as number,
      averageViewDuration: data[2] as number,
      subscribersGained: data[3] as number,
      subscribersLost: data[4] as number,
    }
  } catch (error) {
    console.error("Error fetching analytics:", error)
    return null
  }
}

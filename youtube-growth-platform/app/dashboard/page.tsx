"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  ArrowUpRight,
  ArrowDownRight,
  Users,
  Eye,
  ThumbsUp,
  MessageSquare,
  TrendingUp,
  Calendar,
  PlayCircle,
  BarChart3,
  PieChart,
  Activity,
  Plus,
} from "lucide-react"
import Link from "next/link"

interface AnalyticsData {
  subscribers: number
  views: number
  watchTime: number
  engagement: number
  subscriberGrowth: number
  viewGrowth: number
  chartData: Array<{
    date: string
    subscribers: number
    views: number
    watchTime: number
    engagement: number
  }>
}

export default function DashboardPage() {
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [showAddData, setShowAddData] = useState(false)
  const [newData, setNewData] = useState({
    subscribers: "",
    views: "",
    watchTime: "",
    engagement: "",
  })

  // Mock user ID - in a real app, this would come from authentication
  const userId = "demo-user-123"

  useEffect(() => {
    fetchAnalytics()
  }, [])

  const fetchAnalytics = async () => {
    try {
      const response = await fetch(`/api/channel-analytics?userId=${userId}`)
      if (response.ok) {
        const data = await response.json()
        setAnalytics(data)
      }
    } catch (error) {
      console.error("Failed to fetch analytics:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleAddData = async () => {
    try {
      const response = await fetch("/api/channel-analytics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          subscribers: Number.parseInt(newData.subscribers) || 0,
          views: Number.parseInt(newData.views) || 0,
          watchTime: Number.parseFloat(newData.watchTime) || 0,
          engagement: Number.parseFloat(newData.engagement) || 0,
        }),
      })

      if (response.ok) {
        setNewData({ subscribers: "", views: "", watchTime: "", engagement: "" })
        setShowAddData(false)
        fetchAnalytics() // Refresh data
      }
    } catch (error) {
      console.error("Failed to add analytics data:", error)
    }
  }

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`
    return num.toString()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <PlayCircle className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold font-serif text-foreground">YTBoost</span>
              </Link>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/dashboard" className="text-primary font-medium">
                Dashboard
              </Link>
              <Link href="/optimization" className="text-muted-foreground hover:text-foreground transition-colors">
                Optimization
              </Link>
              <Link href="/strategy" className="text-muted-foreground hover:text-foreground transition-colors">
                Strategy
              </Link>
              <Link href="/analysis" className="text-muted-foreground hover:text-foreground transition-colors">
                Analysis
              </Link>
            </nav>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm">
                Settings
              </Button>
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-accent-foreground">JD</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold font-serif text-foreground mb-2">Analytics Dashboard</h1>
            <p className="text-muted-foreground">Track your YouTube channel performance and growth metrics</p>
          </div>
          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <Button variant="outline" size="sm" onClick={() => setShowAddData(!showAddData)}>
              <Plus className="w-4 h-4 mr-2" />
              Add Data
            </Button>
            <Button variant="outline" size="sm">
              <Calendar className="w-4 h-4 mr-2" />
              Last 30 Days
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Export Report
            </Button>
          </div>
        </div>

        {showAddData && (
          <Card className="bg-card border-border mb-8">
            <CardHeader>
              <CardTitle className="text-foreground">Add Analytics Data</CardTitle>
              <CardDescription className="text-muted-foreground">
                Input your current YouTube channel metrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <Label htmlFor="subscribers">Subscribers</Label>
                  <Input
                    id="subscribers"
                    type="number"
                    placeholder="45200"
                    value={newData.subscribers}
                    onChange={(e) => setNewData({ ...newData, subscribers: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="views">Total Views</Label>
                  <Input
                    id="views"
                    type="number"
                    placeholder="2400000"
                    value={newData.views}
                    onChange={(e) => setNewData({ ...newData, views: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="watchTime">Watch Time (hours)</Label>
                  <Input
                    id="watchTime"
                    type="number"
                    step="0.1"
                    placeholder="18500"
                    value={newData.watchTime}
                    onChange={(e) => setNewData({ ...newData, watchTime: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="engagement">Engagement Rate (%)</Label>
                  <Input
                    id="engagement"
                    type="number"
                    step="0.1"
                    placeholder="6.8"
                    value={newData.engagement}
                    onChange={(e) => setNewData({ ...newData, engagement: e.target.value })}
                  />
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <Button onClick={handleAddData} className="bg-primary hover:bg-primary/90">
                  Save Data
                </Button>
                <Button variant="outline" onClick={() => setShowAddData(false)}>
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Views</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {loading ? "Loading..." : formatNumber(analytics?.views || 0)}
              </div>
              <div className="flex items-center text-sm">
                {analytics?.viewGrowth && analytics.viewGrowth > 0 ? (
                  <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                ) : (
                  <ArrowDownRight className="h-4 w-4 text-red-500 mr-1" />
                )}
                <span className={analytics?.viewGrowth && analytics.viewGrowth > 0 ? "text-green-500" : "text-red-500"}>
                  {analytics?.viewGrowth ? `${analytics.viewGrowth.toFixed(1)}%` : "0%"}
                </span>
                <span className="text-muted-foreground ml-1">from last entry</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Subscribers</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {loading ? "Loading..." : formatNumber(analytics?.subscribers || 0)}
              </div>
              <div className="flex items-center text-sm">
                {analytics?.subscriberGrowth && analytics.subscriberGrowth > 0 ? (
                  <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                ) : (
                  <ArrowDownRight className="h-4 w-4 text-red-500 mr-1" />
                )}
                <span
                  className={
                    analytics?.subscriberGrowth && analytics.subscriberGrowth > 0 ? "text-green-500" : "text-red-500"
                  }
                >
                  {analytics?.subscriberGrowth ? `${analytics.subscriberGrowth.toFixed(1)}%` : "0%"}
                </span>
                <span className="text-muted-foreground ml-1">from last entry</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Engagement Rate</CardTitle>
              <ThumbsUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {loading ? "Loading..." : `${analytics?.engagement || 0}%`}
              </div>
              <div className="flex items-center text-sm">
                <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-green-500">Track over time</span>
                <span className="text-muted-foreground ml-1">with more data</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Watch Time</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {loading ? "Loading..." : formatNumber(analytics?.watchTime || 0)}
              </div>
              <div className="flex items-center text-sm">
                <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-green-500">Hours tracked</span>
                <span className="text-muted-foreground ml-1">this period</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <TrendingUp className="w-5 h-5 text-primary" />
                Growth Trends
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Views and subscriber growth over the last 6 months
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-muted/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">Interactive chart would be rendered here</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <PieChart className="w-5 h-5 text-accent" />
                Audience Demographics
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Age and geographic distribution of your viewers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-muted/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <PieChart className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">Demographic chart would be rendered here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Videos Performance */}
        <Card className="bg-card border-border mb-8">
          <CardHeader>
            <CardTitle className="text-foreground">Recent Videos Performance</CardTitle>
            <CardDescription className="text-muted-foreground">
              Your latest uploads and their key metrics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  title: "10 YouTube Growth Hacks That Actually Work",
                  views: "125K",
                  likes: "8.2K",
                  comments: "342",
                  duration: "12:45",
                  performance: 92,
                },
                {
                  title: "How I Gained 50K Subscribers in 30 Days",
                  views: "89K",
                  likes: "6.1K",
                  comments: "278",
                  duration: "15:20",
                  performance: 85,
                },
                {
                  title: "YouTube Algorithm Secrets Revealed",
                  views: "67K",
                  likes: "4.8K",
                  comments: "195",
                  duration: "9:33",
                  performance: 78,
                },
              ].map((video, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground mb-1">{video.title}</h4>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {video.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <ThumbsUp className="w-4 h-4" />
                        {video.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageSquare className="w-4 h-4" />
                        {video.comments}
                      </span>
                      <Badge variant="secondary" className="bg-accent/10 text-accent-foreground">
                        {video.duration}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <div className="text-sm font-medium text-foreground">{video.performance}%</div>
                      <div className="text-xs text-muted-foreground">Performance</div>
                    </div>
                    <Progress value={video.performance} className="w-16" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Quick Actions</CardTitle>
            <CardDescription className="text-muted-foreground">
              Common tasks to optimize your channel performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-auto p-4 flex flex-col items-start gap-2 bg-transparent">
                <TrendingUp className="w-5 h-5 text-primary" />
                <div className="text-left">
                  <div className="font-medium">Analyze Top Videos</div>
                  <div className="text-sm text-muted-foreground">Find what makes your best content work</div>
                </div>
              </Button>

              <Button variant="outline" className="h-auto p-4 flex flex-col items-start gap-2 bg-transparent">
                <Users className="w-5 h-5 text-accent" />
                <div className="text-left">
                  <div className="font-medium">Audience Insights</div>
                  <div className="text-sm text-muted-foreground">Understand your viewer demographics</div>
                </div>
              </Button>

              <Button variant="outline" className="h-auto p-4 flex flex-col items-start gap-2 bg-transparent">
                <MessageSquare className="w-5 h-5 text-secondary" />
                <div className="text-left">
                  <div className="font-medium">Engagement Report</div>
                  <div className="text-sm text-muted-foreground">Track comments and community growth</div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

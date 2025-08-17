import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Search,
  Clock,
  PlayCircle,
  BarChart3,
  Activity,
  Target,
  Zap,
  AlertTriangle,
  CheckCircle,
  ArrowUp,
  ArrowDown,
  Minus,
} from "lucide-react"
import Link from "next/link"

export default function AnalysisPage() {
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
              <Link href="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
                Dashboard
              </Link>
              <Link href="/optimization" className="text-muted-foreground hover:text-foreground transition-colors">
                Optimization
              </Link>
              <Link href="/strategy" className="text-muted-foreground hover:text-foreground transition-colors">
                Strategy
              </Link>
              <Link href="/analysis" className="text-primary font-medium">
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
            <h1 className="text-3xl font-bold font-serif text-foreground mb-2">Channel Analysis</h1>
            <p className="text-muted-foreground">
              Deep insights into your channel performance and competitive positioning
            </p>
          </div>
          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <Button variant="outline" size="sm">
              <Search className="w-4 h-4 mr-2" />
              Analyze Competitor
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Generate Report
            </Button>
          </div>
        </div>

        <Tabs defaultValue="health" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-muted/30">
            <TabsTrigger value="health" className="flex items-center gap-2">
              <Activity className="w-4 h-4" />
              Health Score
            </TabsTrigger>
            <TabsTrigger value="competitors" className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              Competitors
            </TabsTrigger>
            <TabsTrigger value="content" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Content
            </TabsTrigger>
            <TabsTrigger value="seo" className="flex items-center gap-2">
              <Search className="w-4 h-4" />
              SEO
            </TabsTrigger>
            <TabsTrigger value="retention" className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Retention
            </TabsTrigger>
          </TabsList>

          {/* Channel Health Score */}
          <TabsContent value="health" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="bg-card border-border">
                <CardHeader className="text-center">
                  <CardTitle className="flex items-center justify-center gap-2 text-foreground">
                    <Activity className="w-5 h-5 text-primary" />
                    Overall Health Score
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Comprehensive channel performance rating
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="relative w-32 h-32 mx-auto">
                    <div className="absolute inset-0 rounded-full border-8 border-muted"></div>
                    <div
                      className="absolute inset-0 rounded-full border-8 border-primary border-t-transparent"
                      style={{ transform: "rotate(245deg)" }}
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary">82</div>
                        <div className="text-sm text-muted-foreground">/ 100</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Badge className="bg-green-100 text-green-800 border-green-200">Excellent</Badge>
                    <p className="text-sm text-muted-foreground">
                      Your channel is performing well with room for optimization
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border lg:col-span-2">
                <CardHeader>
                  <CardTitle className="text-foreground">Health Breakdown</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Detailed analysis of key performance areas
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { category: "Content Quality", score: 88, status: "excellent", icon: CheckCircle },
                    { category: "Upload Consistency", score: 92, status: "excellent", icon: CheckCircle },
                    { category: "SEO Optimization", score: 75, status: "good", icon: AlertTriangle },
                    { category: "Audience Engagement", score: 68, status: "needs-work", icon: AlertTriangle },
                    { category: "Channel Branding", score: 85, status: "good", icon: CheckCircle },
                    { category: "Growth Velocity", score: 79, status: "good", icon: CheckCircle },
                  ].map((item, index) => {
                    const Icon = item.icon
                    return (
                      <div key={index} className="flex items-center gap-4">
                        <Icon
                          className={`w-5 h-5 ${
                            item.status === "excellent"
                              ? "text-green-500"
                              : item.status === "good"
                                ? "text-blue-500"
                                : "text-yellow-500"
                          }`}
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium text-foreground">{item.category}</span>
                            <span className="text-sm font-bold text-foreground">{item.score}/100</span>
                          </div>
                          <Progress value={item.score} className="h-2" />
                        </div>
                      </div>
                    )
                  })}
                </CardContent>
              </Card>
            </div>

            {/* Recommendations */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Zap className="w-5 h-5 text-accent" />
                  Priority Recommendations
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Actions to improve your channel health score
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    priority: "High",
                    action: "Improve audience engagement",
                    description: "Respond to comments within 2 hours and create more interactive content",
                    impact: "+8 points",
                  },
                  {
                    priority: "Medium",
                    action: "Optimize video SEO",
                    description: "Add more relevant tags and improve video descriptions",
                    impact: "+5 points",
                  },
                  {
                    priority: "Low",
                    action: "Update channel banner",
                    description: "Refresh your channel art to reflect current content focus",
                    impact: "+2 points",
                  },
                ].map((rec, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-muted/20 rounded-lg">
                    <Badge
                      className={`${
                        rec.priority === "High"
                          ? "bg-red-100 text-red-800"
                          : rec.priority === "Medium"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {rec.priority}
                    </Badge>
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground mb-1">{rec.action}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{rec.description}</p>
                      <Badge variant="outline" className="text-xs">
                        {rec.impact}
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Competitor Analysis */}
          <TabsContent value="competitors" className="space-y-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Search className="w-5 h-5 text-primary" />
                  Add Competitor
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Analyze competitors to identify growth opportunities
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <Label htmlFor="competitor-url" className="text-foreground">
                      Competitor Channel URL
                    </Label>
                    <Input
                      id="competitor-url"
                      placeholder="https://youtube.com/@competitor"
                      className="bg-input border-border"
                    />
                  </div>
                  <Button className="mt-6 bg-primary hover:bg-primary/90">
                    <Search className="w-4 h-4 mr-2" />
                    Analyze
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Competitor Comparison</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    How you stack up against similar channels
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      channel: "Your Channel",
                      subscribers: "45.2K",
                      avgViews: "12.5K",
                      uploadFreq: "3/week",
                      engagement: "6.8%",
                      isYou: true,
                    },
                    {
                      channel: "Creator Academy",
                      subscribers: "89.1K",
                      avgViews: "25.3K",
                      uploadFreq: "2/week",
                      engagement: "8.2%",
                      isYou: false,
                    },
                    {
                      channel: "Growth Guru",
                      subscribers: "156K",
                      avgViews: "45.7K",
                      uploadFreq: "4/week",
                      engagement: "5.4%",
                      isYou: false,
                    },
                    {
                      channel: "Content King",
                      subscribers: "78.9K",
                      avgViews: "18.2K",
                      uploadFreq: "2/week",
                      engagement: "7.1%",
                      isYou: false,
                    },
                  ].map((competitor, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border ${
                        competitor.isYou ? "bg-primary/10 border-primary/20" : "bg-muted/20 border-border"
                      }`}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium text-foreground">{competitor.channel}</h4>
                        {competitor.isYou && <Badge className="bg-primary/20 text-primary">You</Badge>}
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Subscribers: </span>
                          <span className="font-medium text-foreground">{competitor.subscribers}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Avg Views: </span>
                          <span className="font-medium text-foreground">{competitor.avgViews}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Upload Freq: </span>
                          <span className="font-medium text-foreground">{competitor.uploadFreq}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Engagement: </span>
                          <span className="font-medium text-foreground">{competitor.engagement}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Competitive Insights</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Key learnings from competitor analysis
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      insight: "Upload Frequency Gap",
                      description: "Top competitors upload 4x/week vs your 3x/week",
                      action: "Consider increasing upload frequency",
                      trend: "up",
                    },
                    {
                      insight: "Engagement Advantage",
                      description: "Your engagement rate is competitive at 6.8%",
                      action: "Maintain current community focus",
                      trend: "neutral",
                    },
                    {
                      insight: "View Count Opportunity",
                      description: "Average competitor gets 2x more views per video",
                      action: "Improve thumbnail and title optimization",
                      trend: "up",
                    },
                    {
                      insight: "Subscriber Growth",
                      description: "You're growing faster than 60% of competitors",
                      action: "Continue current growth strategies",
                      trend: "down",
                    },
                  ].map((insight, index) => (
                    <div key={index} className="p-3 bg-muted/20 rounded-lg">
                      <div className="flex items-start gap-3">
                        {insight.trend === "up" ? (
                          <ArrowUp className="w-4 h-4 text-green-500 mt-0.5" />
                        ) : insight.trend === "down" ? (
                          <ArrowDown className="w-4 h-4 text-red-500 mt-0.5" />
                        ) : (
                          <Minus className="w-4 h-4 text-yellow-500 mt-0.5" />
                        )}
                        <div className="flex-1">
                          <h4 className="font-medium text-foreground text-sm mb-1">{insight.insight}</h4>
                          <p className="text-xs text-muted-foreground mb-2">{insight.description}</p>
                          <p className="text-xs font-medium text-primary">{insight.action}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Content Performance */}
          <TabsContent value="content" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <BarChart3 className="w-5 h-5 text-accent" />
                    Top Performing Content
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Your best videos by engagement and views
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      title: "10 YouTube Growth Hacks That Actually Work",
                      views: "125K",
                      engagement: "9.2%",
                      performance: 95,
                    },
                    {
                      title: "How I Gained 50K Subscribers in 30 Days",
                      views: "89K",
                      engagement: "8.7%",
                      performance: 88,
                    },
                    {
                      title: "YouTube Algorithm Secrets Revealed",
                      views: "67K",
                      engagement: "7.1%",
                      performance: 82,
                    },
                    {
                      title: "My $10K/Month YouTube Setup Tour",
                      views: "54K",
                      engagement: "6.8%",
                      performance: 78,
                    },
                  ].map((video, index) => (
                    <div key={index} className="p-4 bg-muted/20 rounded-lg space-y-2">
                      <h4 className="font-medium text-foreground text-sm leading-relaxed">{video.title}</h4>
                      <div className="flex justify-between items-center text-xs text-muted-foreground">
                        <span>{video.views} views</span>
                        <span>{video.engagement} engagement</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Progress value={video.performance} className="flex-1 h-2" />
                        <Badge className="bg-primary/10 text-primary text-xs">{video.performance}%</Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Content Patterns</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    What makes your content successful
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                      <h4 className="font-medium text-green-800 text-sm mb-1">High-Performing Patterns</h4>
                      <ul className="text-xs text-green-700 space-y-1">
                        <li>• Videos with numbers in titles get 40% more views</li>
                        <li>• "How to" content has 25% higher engagement</li>
                        <li>• Videos 10-15 minutes long perform best</li>
                        <li>• Tuesday uploads get 30% more initial traction</li>
                      </ul>
                    </div>

                    <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <h4 className="font-medium text-yellow-800 text-sm mb-1">Improvement Opportunities</h4>
                      <ul className="text-xs text-yellow-700 space-y-1">
                        <li>• Shorter videos (under 8 min) underperform by 35%</li>
                        <li>• Weekend uploads get 20% fewer views</li>
                        <li>• Generic thumbnails reduce CTR by 15%</li>
                        <li>• Videos without clear CTA have lower engagement</li>
                      </ul>
                    </div>

                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <h4 className="font-medium text-blue-800 text-sm mb-1">Content Recommendations</h4>
                      <ul className="text-xs text-blue-700 space-y-1">
                        <li>• Create more "beginner guide" content</li>
                        <li>• Experiment with case study format</li>
                        <li>• Add more personal story elements</li>
                        <li>• Consider collaboration videos</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* SEO Analysis */}
          <TabsContent value="seo" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <Search className="w-5 h-5 text-secondary" />
                    SEO Health Check
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    How well optimized your content is for search
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { metric: "Title Optimization", score: 85, status: "good" },
                    { metric: "Description Quality", score: 72, status: "needs-work" },
                    { metric: "Tag Relevance", score: 68, status: "needs-work" },
                    { metric: "Thumbnail CTR", score: 91, status: "excellent" },
                    { metric: "Keyword Density", score: 79, status: "good" },
                    { metric: "Video Length", score: 88, status: "excellent" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          item.status === "excellent"
                            ? "bg-green-500"
                            : item.status === "good"
                              ? "bg-blue-500"
                              : "bg-yellow-500"
                        }`}
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-foreground">{item.metric}</span>
                          <span className="text-sm font-bold text-foreground">{item.score}%</span>
                        </div>
                        <Progress value={item.score} className="h-2" />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Keyword Opportunities</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    High-potential keywords you're not targeting
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      keyword: "youtube shorts strategy",
                      volume: "High",
                      difficulty: "Medium",
                      opportunity: "85%",
                    },
                    {
                      keyword: "content creator tools 2025",
                      volume: "Medium",
                      difficulty: "Low",
                      opportunity: "92%",
                    },
                    {
                      keyword: "youtube monetization guide",
                      volume: "High",
                      difficulty: "High",
                      opportunity: "67%",
                    },
                    {
                      keyword: "video editing for beginners",
                      volume: "Medium",
                      difficulty: "Medium",
                      opportunity: "78%",
                    },
                  ].map((keyword, index) => (
                    <div key={index} className="p-3 bg-muted/20 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-foreground text-sm">{keyword.keyword}</h4>
                        <Badge className="bg-primary/10 text-primary text-xs">{keyword.opportunity}</Badge>
                      </div>
                      <div className="flex gap-2">
                        <Badge
                          variant="outline"
                          className={`text-xs ${
                            keyword.volume === "High"
                              ? "border-green-500 text-green-700"
                              : keyword.volume === "Medium"
                                ? "border-yellow-500 text-yellow-700"
                                : "border-gray-500 text-gray-700"
                          }`}
                        >
                          {keyword.volume} Volume
                        </Badge>
                        <Badge
                          variant="outline"
                          className={`text-xs ${
                            keyword.difficulty === "Low"
                              ? "border-green-500 text-green-700"
                              : keyword.difficulty === "Medium"
                                ? "border-yellow-500 text-yellow-700"
                                : "border-red-500 text-red-700"
                          }`}
                        >
                          {keyword.difficulty} Difficulty
                        </Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Audience Retention */}
          <TabsContent value="retention" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <Clock className="w-5 h-5 text-primary" />
                    Retention Analysis
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    How well your videos hold viewer attention
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">68%</div>
                    <div className="text-sm text-muted-foreground">Average Retention Rate</div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">0-30 seconds</span>
                      <div className="flex items-center gap-2">
                        <Progress value={95} className="w-20 h-2" />
                        <span className="text-sm font-medium text-foreground">95%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">30s-2min</span>
                      <div className="flex items-center gap-2">
                        <Progress value={82} className="w-20 h-2" />
                        <span className="text-sm font-medium text-foreground">82%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">2-5min</span>
                      <div className="flex items-center gap-2">
                        <Progress value={71} className="w-20 h-2" />
                        <span className="text-sm font-medium text-foreground">71%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">5-10min</span>
                      <div className="flex items-center gap-2">
                        <Progress value={58} className="w-20 h-2" />
                        <span className="text-sm font-medium text-foreground">58%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">10min+</span>
                      <div className="flex items-center gap-2">
                        <Progress value={45} className="w-20 h-2" />
                        <span className="text-sm font-medium text-foreground">45%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Retention Insights</CardTitle>
                  <CardDescription className="text-muted-foreground">Key patterns in viewer behavior</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                      <h4 className="font-medium text-green-800 text-sm mb-1">Strong Points</h4>
                      <ul className="text-xs text-green-700 space-y-1">
                        <li>• Excellent hook retention (95% at 30s)</li>
                        <li>• Strong intro keeps 82% through 2 minutes</li>
                        <li>• Above-average overall retention rate</li>
                      </ul>
                    </div>

                    <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <h4 className="font-medium text-yellow-800 text-sm mb-1">Drop-off Points</h4>
                      <ul className="text-xs text-yellow-700 space-y-1">
                        <li>• Significant drop at 5-minute mark</li>
                        <li>• Viewers leave during sponsor segments</li>
                        <li>• Long explanations cause 15% drop-off</li>
                      </ul>
                    </div>

                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <h4 className="font-medium text-blue-800 text-sm mb-1">Recommendations</h4>
                      <ul className="text-xs text-blue-700 space-y-1">
                        <li>• Add engagement hooks every 2-3 minutes</li>
                        <li>• Shorten sponsor integrations</li>
                        <li>• Use visual aids for complex topics</li>
                        <li>• Add preview of upcoming content</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

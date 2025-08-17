"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Lightbulb,
  ImageIcon,
  FileText,
  Hash,
  Clock,
  PlayCircle,
  Sparkles,
  Target,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react"
import Link from "next/link"

interface TitleOptimization {
  score: number
  suggestions: string[]
  improvements: string[]
  optimizedTitle?: string
  reasoning?: string
}

export default function OptimizationPage() {
  const [titleInput, setTitleInput] = useState("")
  const [videoTopic, setVideoTopic] = useState("")
  const [targetAudience, setTargetAudience] = useState("")
  const [titleResults, setTitleResults] = useState<TitleOptimization | null>(null)
  const [isOptimizing, setIsOptimizing] = useState(false)

  // Mock user ID - in a real app, this would come from authentication
  const userId = "demo-user-123"

  const handleTitleOptimization = async () => {
    if (!titleInput.trim()) return

    setIsOptimizing(true)
    try {
      const response = await fetch("/api/optimize-title", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: titleInput,
          userId,
          videoTopic: videoTopic || "General content",
          targetAudience: targetAudience || "General audience",
          competitorTitles: [], // Could be populated from competitor analysis
        }),
      })

      if (response.ok) {
        const data = await response.json()
        setTitleResults(data)
      } else {
        console.error("Failed to optimize title")
      }
    } catch (error) {
      console.error("Error optimizing title:", error)
    } finally {
      setIsOptimizing(false)
    }
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
              <Link href="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
                Dashboard
              </Link>
              <Link href="/optimization" className="text-primary font-medium">
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
            <h1 className="text-3xl font-bold font-serif text-foreground mb-2">Content Optimization</h1>
            <p className="text-muted-foreground">
              AI-powered tools to optimize your videos for maximum reach and engagement
            </p>
          </div>
          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <Button variant="outline" size="sm">
              <Sparkles className="w-4 h-4 mr-2" />
              AI Assistant
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Save Template
            </Button>
          </div>
        </div>

        <Tabs defaultValue="title" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-muted/30">
            <TabsTrigger value="title" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Title
            </TabsTrigger>
            <TabsTrigger value="thumbnail" className="flex items-center gap-2">
              <ImageIcon className="w-4 h-4" />
              Thumbnail
            </TabsTrigger>
            <TabsTrigger value="description" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Description
            </TabsTrigger>
            <TabsTrigger value="tags" className="flex items-center gap-2">
              <Hash className="w-4 h-4" />
              Tags
            </TabsTrigger>
            <TabsTrigger value="timing" className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Timing
            </TabsTrigger>
          </TabsList>

          {/* Title Optimization */}
          <TabsContent value="title" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <Lightbulb className="w-5 h-5 text-primary" />
                    AI-Powered Title Optimizer
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Get AI-generated title suggestions optimized for your specific content and audience
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="video-title" className="text-foreground">
                      Current Video Title
                    </Label>
                    <Input
                      id="video-title"
                      placeholder="e.g., How to Grow Your YouTube Channel Fast"
                      className="bg-input border-border"
                      value={titleInput}
                      onChange={(e) => setTitleInput(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="video-topic" className="text-foreground">
                      Video Topic/Niche
                    </Label>
                    <Input
                      id="video-topic"
                      placeholder="e.g., YouTube Growth, Tech Reviews, Gaming"
                      className="bg-input border-border"
                      value={videoTopic}
                      onChange={(e) => setVideoTopic(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="target-audience" className="text-foreground">
                      Target Audience
                    </Label>
                    <Input
                      id="target-audience"
                      placeholder="e.g., Beginner content creators, Tech enthusiasts"
                      className="bg-input border-border"
                      value={targetAudience}
                      onChange={(e) => setTargetAudience(e.target.value)}
                    />
                  </div>
                  <Button
                    className="w-full bg-primary hover:bg-primary/90"
                    onClick={handleTitleOptimization}
                    disabled={isOptimizing || !titleInput.trim()}
                  >
                    {isOptimizing ? (
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    ) : (
                      <Sparkles className="w-4 h-4 mr-2" />
                    )}
                    {isOptimizing ? "AI is analyzing..." : "Generate AI-Optimized Titles"}
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">AI Analysis Results</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {titleResults
                      ? "AI-powered optimization with performance predictions"
                      : "Enter a title to get AI-powered analysis"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {titleResults ? (
                    <>
                      <div className="mb-4 p-4 bg-primary/10 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-foreground">AI Performance Score</span>
                          <Badge variant="secondary" className="bg-primary/20 text-primary">
                            {titleResults.score}%
                          </Badge>
                        </div>
                        <Progress value={titleResults.score} className="h-2" />
                      </div>

                      {titleResults.optimizedTitle && (
                        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                          <h4 className="font-medium text-green-800 mb-2">🎯 AI-Optimized Title:</h4>
                          <p className="text-green-700 font-medium">{titleResults.optimizedTitle}</p>
                        </div>
                      )}

                      <div className="space-y-3">
                        <h4 className="font-medium text-foreground">AI Suggestions:</h4>
                        {titleResults.suggestions.map((suggestion, index) => (
                          <div key={index} className="p-3 bg-muted/20 rounded-lg">
                            <p className="text-sm text-foreground">{suggestion}</p>
                          </div>
                        ))}
                      </div>

                      {titleResults.improvements.length > 0 && (
                        <div className="space-y-2">
                          <h4 className="font-medium text-foreground">AI Recommendations:</h4>
                          {titleResults.improvements.map((improvement, index) => (
                            <div key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <Sparkles className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              {improvement}
                            </div>
                          ))}
                        </div>
                      )}

                      {titleResults.reasoning && (
                        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                          <h4 className="font-medium text-blue-800 mb-2">🤖 AI Analysis:</h4>
                          <p className="text-blue-700 text-sm">{titleResults.reasoning}</p>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="text-center py-8">
                      <Sparkles className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">
                        Enter a video title above to get AI-powered optimization analysis
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Thumbnail Optimization */}
          <TabsContent value="thumbnail" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <ImageIcon className="w-5 h-5 text-accent" />
                    Thumbnail Analyzer
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Upload your thumbnail for AI-powered optimization suggestions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <ImageIcon className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground mb-2">Drop your thumbnail here or click to upload</p>
                    <Button variant="outline" size="sm">
                      Choose File
                    </Button>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="bg-transparent">
                      <Target className="w-4 h-4 mr-2" />
                      A/B Test
                    </Button>
                    <Button variant="outline" className="bg-transparent">
                      <Sparkles className="w-4 h-4 mr-2" />
                      AI Generate
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Thumbnail Best Practices</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Key elements that make thumbnails perform better
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { practice: "High contrast colors", status: "good", description: "Makes thumbnail stand out" },
                    { practice: "Clear facial expressions", status: "warning", description: "Emotions drive clicks" },
                    { practice: "Readable text overlay", status: "good", description: "Text is large and clear" },
                    {
                      practice: "Rule of thirds composition",
                      status: "warning",
                      description: "Better visual balance needed",
                    },
                    { practice: "Brand consistency", status: "good", description: "Matches channel style" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-muted/20 rounded-lg">
                      {item.status === "good" ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-yellow-500" />
                      )}
                      <div className="flex-1">
                        <div className="font-medium text-foreground text-sm">{item.practice}</div>
                        <div className="text-xs text-muted-foreground">{item.description}</div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Description Optimization */}
          <TabsContent value="description" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <FileText className="w-5 h-5 text-secondary" />
                    Description Builder
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Create SEO-optimized descriptions that boost discoverability
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="video-summary" className="text-foreground">
                      Video Summary
                    </Label>
                    <Textarea
                      id="video-summary"
                      placeholder="Briefly describe what your video is about..."
                      className="bg-input border-border min-h-[100px]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="target-keywords" className="text-foreground">
                      Target Keywords
                    </Label>
                    <Input
                      id="target-keywords"
                      placeholder="e.g., youtube growth, content creation, social media"
                      className="bg-input border-border"
                    />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Generate Description
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Generated Description</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    SEO-optimized description with strategic keyword placement
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/20 rounded-lg p-4 space-y-3">
                    <p className="text-sm text-foreground leading-relaxed">
                      In this comprehensive guide, I'll share the exact YouTube growth strategies that helped me gain
                      over 100K subscribers in just 6 months. You'll discover proven content creation techniques,
                      optimization secrets, and social media marketing tactics that actually work in 2025.
                    </p>
                    <p className="text-sm text-foreground leading-relaxed">
                      🎯 What you'll learn:
                      <br />• Advanced YouTube algorithm optimization
                      <br />• Content creation workflows that save time
                      <br />• Thumbnail and title strategies for maximum CTR
                      <br />• Community building and engagement tactics
                    </p>
                    <p className="text-sm text-muted-foreground">
                      #YouTubeGrowth #ContentCreation #SocialMediaMarketing #YouTubeTips #CreatorEconomy
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-sm text-muted-foreground">Character count: 487/5000</span>
                    <Button size="sm" variant="outline">
                      Copy Description
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Tags Optimization */}
          <TabsContent value="tags" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <Hash className="w-5 h-5 text-primary" />
                    Smart Tag Generator
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Find the best tags to maximize your video's discoverability
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="video-content" className="text-foreground">
                      Video Content
                    </Label>
                    <Input
                      id="video-content"
                      placeholder="Describe your video content..."
                      className="bg-input border-border"
                    />
                  </div>
                  <div>
                    <Label htmlFor="competitor-analysis" className="text-foreground">
                      Competitor Channel (Optional)
                    </Label>
                    <Input
                      id="competitor-analysis"
                      placeholder="Enter competitor channel URL"
                      className="bg-input border-border"
                    />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Hash className="w-4 h-4 mr-2" />
                    Generate Tags
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Recommended Tags</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    High-performing tags ranked by search volume and competition
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">High Volume, Low Competition</h4>
                      <div className="flex flex-wrap gap-2">
                        {["youtube growth 2025", "content creator tips", "social media strategy"].map((tag, index) => (
                          <Badge key={index} className="bg-green-100 text-green-800 border-green-200">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">Medium Competition</h4>
                      <div className="flex flex-wrap gap-2">
                        {["youtube algorithm", "video marketing", "creator economy"].map((tag, index) => (
                          <Badge key={index} className="bg-yellow-100 text-yellow-800 border-yellow-200">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">Long-tail Keywords</h4>
                      <div className="flex flex-wrap gap-2">
                        {["how to grow youtube channel fast", "youtube monetization strategies"].map((tag, index) => (
                          <Badge key={index} className="bg-blue-100 text-blue-800 border-blue-200">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Timing Optimization */}
          <TabsContent value="timing" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <Clock className="w-5 h-5 text-accent" />
                    Optimal Upload Times
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    When your audience is most active and engaged
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-7 gap-2 text-center">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => (
                      <div key={index} className="text-xs font-medium text-muted-foreground">
                        {day}
                      </div>
                    ))}
                    {Array.from({ length: 7 }, (_, dayIndex) => (
                      <div key={dayIndex} className="space-y-1">
                        {Array.from({ length: 24 }, (_, hourIndex) => {
                          const activity = Math.random() * 100
                          return (
                            <div
                              key={hourIndex}
                              className={`w-full h-2 rounded-sm ${
                                activity > 80
                                  ? "bg-primary"
                                  : activity > 60
                                    ? "bg-accent"
                                    : activity > 40
                                      ? "bg-secondary/50"
                                      : "bg-muted"
                              }`}
                              title={`${hourIndex}:00 - ${Math.round(activity)}% activity`}
                            />
                          )
                        })}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>12 AM</span>
                    <span>12 PM</span>
                    <span>11 PM</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Best Upload Schedule</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Personalized recommendations based on your audience data
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { day: "Tuesday", time: "2:00 PM EST", engagement: "Peak engagement", color: "bg-primary" },
                    { day: "Thursday", time: "6:00 PM EST", engagement: "High engagement", color: "bg-accent" },
                    { day: "Saturday", time: "10:00 AM EST", engagement: "Weekend boost", color: "bg-secondary" },
                  ].map((schedule, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-muted/20 rounded-lg">
                      <div className={`w-3 h-3 rounded-full ${schedule.color}`} />
                      <div className="flex-1">
                        <div className="font-medium text-foreground">
                          {schedule.day} at {schedule.time}
                        </div>
                        <div className="text-sm text-muted-foreground">{schedule.engagement}</div>
                      </div>
                      <Button size="sm" variant="outline">
                        Schedule
                      </Button>
                    </div>
                  ))}
                  <div className="pt-4 border-t border-border">
                    <h4 className="font-medium text-foreground mb-2">Quick Tips</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Your audience is most active on weekday afternoons</li>
                      <li>• Weekend mornings show 25% higher engagement</li>
                      <li>• Avoid uploading during 11 PM - 6 AM EST</li>
                    </ul>
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

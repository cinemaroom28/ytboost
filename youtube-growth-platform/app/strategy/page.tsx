import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Target,
  Users,
  DollarSign,
  Handshake,
  Trophy,
  PlayCircle,
  BookOpen,
  Lightbulb,
  CheckCircle,
  ArrowRight,
  Globe,
  Video,
  MessageSquare,
} from "lucide-react"
import Link from "next/link"

export default function StrategyPage() {
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
              <Link href="/strategy" className="text-primary font-medium">
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
            <h1 className="text-3xl font-bold font-serif text-foreground mb-2">Growth Strategy Hub</h1>
            <p className="text-muted-foreground">
              Comprehensive strategies and roadmaps to accelerate your YouTube growth
            </p>
          </div>
          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <Button variant="outline" size="sm">
              <BookOpen className="w-4 h-4 mr-2" />
              Strategy Guide
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Create Plan
            </Button>
          </div>
        </div>

        <Tabs defaultValue="roadmap" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 bg-muted/30">
            <TabsTrigger value="roadmap" className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              Roadmap
            </TabsTrigger>
            <TabsTrigger value="content" className="flex items-center gap-2">
              <Video className="w-4 h-4" />
              Content
            </TabsTrigger>
            <TabsTrigger value="audience" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Audience
            </TabsTrigger>
            <TabsTrigger value="monetization" className="flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              Monetization
            </TabsTrigger>
            <TabsTrigger value="collaboration" className="flex items-center gap-2">
              <Handshake className="w-4 h-4" />
              Collaboration
            </TabsTrigger>
            <TabsTrigger value="challenges" className="flex items-center gap-2">
              <Trophy className="w-4 h-4" />
              Challenges
            </TabsTrigger>
          </TabsList>

          {/* Growth Roadmap */}
          <TabsContent value="roadmap" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <Target className="w-5 h-5 text-primary" />
                    Current Milestone
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">Your active growth target</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">50K</div>
                    <div className="text-muted-foreground">Subscribers Goal</div>
                  </div>
                  <Progress value={68} className="h-3" />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>34K Current</span>
                    <span>68% Complete</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-foreground">Consistent upload schedule</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-foreground">Optimized thumbnails</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-4 h-4 border-2 border-muted rounded-full" />
                      <span className="text-muted-foreground">Community engagement</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border lg:col-span-2">
                <CardHeader>
                  <CardTitle className="text-foreground">Growth Roadmap</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Your personalized path to YouTube success
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {[
                      {
                        milestone: "10K Subscribers",
                        status: "completed",
                        timeframe: "Completed 3 months ago",
                        strategies: ["Niche focus", "SEO optimization", "Consistent posting"],
                      },
                      {
                        milestone: "50K Subscribers",
                        status: "current",
                        timeframe: "Target: Next 2 months",
                        strategies: ["Community building", "Collaborations", "Shorts strategy"],
                      },
                      {
                        milestone: "100K Subscribers",
                        status: "upcoming",
                        timeframe: "Target: 6 months",
                        strategies: ["Brand partnerships", "Live streaming", "Course creation"],
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div
                          className={`w-4 h-4 rounded-full mt-1 ${
                            item.status === "completed"
                              ? "bg-green-500"
                              : item.status === "current"
                                ? "bg-primary"
                                : "bg-muted"
                          }`}
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-medium text-foreground">{item.milestone}</h4>
                            {item.status === "current" && <Badge className="bg-primary/10 text-primary">Active</Badge>}
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{item.timeframe}</p>
                          <div className="flex flex-wrap gap-1">
                            {item.strategies.map((strategy, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {strategy}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Content Strategy */}
          <TabsContent value="content" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <Video className="w-5 h-5 text-accent" />
                    Content Pillars
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Core themes that define your channel
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { pillar: "YouTube Growth Tips", percentage: 40, color: "bg-primary" },
                    { pillar: "Content Creation", percentage: 30, color: "bg-accent" },
                    { pillar: "Creator Lifestyle", percentage: 20, color: "bg-secondary" },
                    { pillar: "Tech Reviews", percentage: 10, color: "bg-muted" },
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">{item.pillar}</span>
                        <span className="text-sm text-muted-foreground">{item.percentage}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className={`h-2 rounded-full ${item.color}`} style={{ width: `${item.percentage}%` }} />
                      </div>
                    </div>
                  ))}
                  <Button className="w-full mt-4 bg-transparent" variant="outline">
                    <Lightbulb className="w-4 h-4 mr-2" />
                    Generate Content Ideas
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Content Calendar</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Planned content for the next 30 days
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      date: "Dec 15",
                      title: "10 YouTube Mistakes Killing Your Growth",
                      type: "Tutorial",
                      status: "Scheduled",
                    },
                    {
                      date: "Dec 18",
                      title: "My $10K/Month YouTube Setup Tour",
                      type: "Lifestyle",
                      status: "In Progress",
                    },
                    {
                      date: "Dec 22",
                      title: "Best Camera for YouTube in 2025",
                      type: "Review",
                      status: "Planning",
                    },
                    {
                      date: "Dec 25",
                      title: "Year in Review: My YouTube Journey",
                      type: "Personal",
                      status: "Idea",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-muted/20 rounded-lg">
                      <div className="text-center">
                        <div className="text-sm font-medium text-foreground">{item.date}</div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-foreground">{item.title}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            {item.type}
                          </Badge>
                          <Badge
                            variant="secondary"
                            className={`text-xs ${
                              item.status === "Scheduled"
                                ? "bg-green-100 text-green-800"
                                : item.status === "In Progress"
                                  ? "bg-blue-100 text-blue-800"
                                  : item.status === "Planning"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {item.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Audience Development */}
          <TabsContent value="audience" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <Users className="w-5 h-5 text-primary" />
                    Audience Personas
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Key segments of your target audience
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      name: "Aspiring Creators",
                      percentage: 45,
                      description: "New YouTubers looking for growth tips",
                      interests: ["YouTube tips", "Content creation", "Monetization"],
                    },
                    {
                      name: "Established Creators",
                      percentage: 35,
                      description: "Creators wanting to scale their channels",
                      interests: ["Advanced strategies", "Business growth", "Automation"],
                    },
                    {
                      name: "Content Consumers",
                      percentage: 20,
                      description: "Viewers interested in creator lifestyle",
                      interests: ["Behind the scenes", "Tech reviews", "Inspiration"],
                    },
                  ].map((persona, index) => (
                    <div key={index} className="p-4 bg-muted/20 rounded-lg space-y-2">
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium text-foreground">{persona.name}</h4>
                        <Badge className="bg-primary/10 text-primary">{persona.percentage}%</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{persona.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {persona.interests.map((interest, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {interest}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Community Building</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Strategies to engage and grow your community
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      strategy: "Weekly Community Posts",
                      impact: "High",
                      effort: "Low",
                      description: "Share behind-the-scenes content and polls",
                    },
                    {
                      strategy: "Live Q&A Sessions",
                      impact: "High",
                      effort: "Medium",
                      description: "Monthly live streams to answer questions",
                    },
                    {
                      strategy: "Discord Community",
                      impact: "Medium",
                      effort: "High",
                      description: "Create a dedicated space for discussions",
                    },
                    {
                      strategy: "Respond to Comments",
                      impact: "Medium",
                      effort: "Medium",
                      description: "Engage with viewers within 24 hours",
                    },
                  ].map((item, index) => (
                    <div key={index} className="p-3 bg-muted/20 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-foreground text-sm">{item.strategy}</h4>
                        <div className="flex gap-1">
                          <Badge
                            variant="outline"
                            className={`text-xs ${
                              item.impact === "High"
                                ? "border-green-500 text-green-700"
                                : item.impact === "Medium"
                                  ? "border-yellow-500 text-yellow-700"
                                  : "border-gray-500 text-gray-700"
                            }`}
                          >
                            {item.impact} Impact
                          </Badge>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Monetization Strategy */}
          <TabsContent value="monetization" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <DollarSign className="w-5 h-5 text-accent" />
                    Revenue Streams
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Current and potential income sources
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { source: "YouTube Ad Revenue", current: "$2,400", potential: "$8,000", status: "active" },
                    { source: "Sponsorships", current: "$1,200", potential: "$15,000", status: "active" },
                    { source: "Course Sales", current: "$0", potential: "$25,000", status: "planned" },
                    { source: "Affiliate Marketing", current: "$800", potential: "$5,000", status: "active" },
                    { source: "Merchandise", current: "$0", potential: "$3,000", status: "planned" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium text-foreground text-sm">{item.source}</h4>
                          <Badge variant={item.status === "active" ? "default" : "secondary"} className="text-xs">
                            {item.status}
                          </Badge>
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          Current: {item.current}/month • Potential: {item.potential}/month
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    </div>
                  ))}
                  <div className="pt-4 border-t border-border">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">Total Monthly Revenue</span>
                      <div className="text-right">
                        <div className="font-bold text-foreground">$4,400</div>
                        <div className="text-xs text-muted-foreground">Potential: $56,000</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Monetization Roadmap</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Step-by-step plan to maximize revenue
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      phase: "Phase 1: Foundation",
                      timeframe: "Next 30 days",
                      goals: ["Reach 1K subscribers", "4K watch hours", "Enable monetization"],
                      status: "completed",
                    },
                    {
                      phase: "Phase 2: Growth",
                      timeframe: "Next 90 days",
                      goals: ["Land first sponsorship", "Launch affiliate program", "Build email list"],
                      status: "current",
                    },
                    {
                      phase: "Phase 3: Scale",
                      timeframe: "Next 6 months",
                      goals: ["Create online course", "Launch merchandise", "Premium community"],
                      status: "planned",
                    },
                  ].map((phase, index) => (
                    <div key={index} className="p-4 bg-muted/20 rounded-lg space-y-2">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium text-foreground">{phase.phase}</h4>
                        <Badge
                          className={`text-xs ${
                            phase.status === "completed"
                              ? "bg-green-100 text-green-800"
                              : phase.status === "current"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {phase.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{phase.timeframe}</p>
                      <ul className="space-y-1">
                        {phase.goals.map((goal, i) => (
                          <li key={i} className="text-sm text-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            {goal}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Collaboration */}
          <TabsContent value="collaboration" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <Handshake className="w-5 h-5 text-secondary" />
                    Collaboration Opportunities
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Potential partnerships to accelerate growth
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      type: "Channel Collaborations",
                      description: "Partner with similar-sized creators",
                      potential: "5K-15K new subscribers",
                      effort: "Medium",
                    },
                    {
                      type: "Podcast Appearances",
                      description: "Guest on creator-focused podcasts",
                      potential: "2K-8K new subscribers",
                      effort: "Low",
                    },
                    {
                      type: "Brand Partnerships",
                      description: "Sponsored content with relevant brands",
                      potential: "$5K-20K revenue",
                      effort: "Medium",
                    },
                    {
                      type: "Cross-Platform Content",
                      description: "Repurpose content for TikTok, Instagram",
                      potential: "10K-50K new followers",
                      effort: "High",
                    },
                  ].map((opportunity, index) => (
                    <div key={index} className="p-4 bg-muted/20 rounded-lg space-y-2">
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium text-foreground">{opportunity.type}</h4>
                        <Badge variant="outline" className="text-xs">
                          {opportunity.effort} Effort
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{opportunity.description}</p>
                      <div className="text-sm font-medium text-primary">{opportunity.potential}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Networking Strategy</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Build relationships in the creator community
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-muted/20 rounded-lg">
                      <h4 className="font-medium text-foreground text-sm mb-1">Creator Events</h4>
                      <p className="text-xs text-muted-foreground mb-2">Attend VidCon, Creator Economy Report events</p>
                      <div className="flex gap-2">
                        <Badge variant="outline" className="text-xs">
                          Networking
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Learning
                        </Badge>
                      </div>
                    </div>

                    <div className="p-3 bg-muted/20 rounded-lg">
                      <h4 className="font-medium text-foreground text-sm mb-1">Online Communities</h4>
                      <p className="text-xs text-muted-foreground mb-2">Join Discord servers, Facebook groups</p>
                      <div className="flex gap-2">
                        <Badge variant="outline" className="text-xs">
                          Support
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Collaboration
                        </Badge>
                      </div>
                    </div>

                    <div className="p-3 bg-muted/20 rounded-lg">
                      <h4 className="font-medium text-foreground text-sm mb-1">Social Media Engagement</h4>
                      <p className="text-xs text-muted-foreground mb-2">Actively engage with other creators' content</p>
                      <div className="flex gap-2">
                        <Badge variant="outline" className="text-xs">
                          Visibility
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Relationships
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-transparent" variant="outline">
                    <Globe className="w-4 h-4 mr-2" />
                    Find Collaboration Partners
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Growth Challenges */}
          <TabsContent value="challenges" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <Trophy className="w-5 h-5 text-primary" />
                    30-Day Growth Challenge
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Focused challenges to accelerate your progress
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <h3 className="text-lg font-bold text-primary mb-1">Consistency Challenge</h3>
                    <p className="text-sm text-muted-foreground">Upload 3 videos per week for 30 days</p>
                  </div>

                  <div className="space-y-3">
                    {[
                      { week: "Week 1", goal: "3 videos uploaded", progress: 100, status: "completed" },
                      { week: "Week 2", goal: "3 videos uploaded", progress: 100, status: "completed" },
                      { week: "Week 3", goal: "3 videos uploaded", progress: 67, status: "current" },
                      { week: "Week 4", goal: "3 videos uploaded", progress: 0, status: "upcoming" },
                    ].map((week, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div
                          className={`w-3 h-3 rounded-full ${
                            week.status === "completed"
                              ? "bg-green-500"
                              : week.status === "current"
                                ? "bg-primary"
                                : "bg-muted"
                          }`}
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium text-foreground">{week.week}</span>
                            <span className="text-xs text-muted-foreground">{week.progress}%</span>
                          </div>
                          <Progress value={week.progress} className="h-2" />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">Challenge Progress</span>
                      <span className="text-sm font-bold text-primary">67%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Achievement Badges</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Milestones you've unlocked on your growth journey
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { name: "First 1K", icon: "🎯", earned: true },
                      { name: "Viral Video", icon: "🚀", earned: true },
                      { name: "Consistent Creator", icon: "📅", earned: true },
                      { name: "Community Builder", icon: "👥", earned: false },
                      { name: "Revenue Generator", icon: "💰", earned: false },
                      { name: "Collaboration Master", icon: "🤝", earned: false },
                    ].map((badge, index) => (
                      <div
                        key={index}
                        className={`p-3 rounded-lg text-center ${
                          badge.earned ? "bg-primary/10 border border-primary/20" : "bg-muted/20 border border-muted"
                        }`}
                      >
                        <div className="text-2xl mb-1">{badge.icon}</div>
                        <div
                          className={`text-xs font-medium ${badge.earned ? "text-primary" : "text-muted-foreground"}`}
                        >
                          {badge.name}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-border">
                    <h4 className="font-medium text-foreground mb-2">Next Challenge</h4>
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <MessageSquare className="w-4 h-4 text-accent" />
                        <span className="text-sm font-medium text-foreground">Engagement Boost</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Increase average comment count by 50%</p>
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

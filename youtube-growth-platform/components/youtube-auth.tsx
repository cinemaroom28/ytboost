"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Youtube, Loader2 } from "lucide-react"

interface YouTubeAuthProps {
  onAuthSuccess: (accessToken: string) => void
}

export function YouTubeAuth({ onAuthSuccess }: YouTubeAuthProps) {
  const [isAuthenticating, setIsAuthenticating] = useState(false)

  const handleAuth = async () => {
    setIsAuthenticating(true)
    try {
      const response = await fetch("/api/auth/youtube")
      const { authUrl } = await response.json()

      // Open auth window
      const authWindow = window.open(authUrl, "youtube-auth", "width=500,height=600")

      // Listen for auth completion
      const checkClosed = setInterval(() => {
        if (authWindow?.closed) {
          clearInterval(checkClosed)
          setIsAuthenticating(false)
          // In a real app, you'd handle the callback properly
          // For now, we'll simulate success
          onAuthSuccess("demo-token")
        }
      }, 1000)
    } catch (error) {
      console.error("Auth failed:", error)
      setIsAuthenticating(false)
    }
  }

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2">
          <Youtube className="h-6 w-6 text-red-500" />
          Connect YouTube Channel
        </CardTitle>
        <CardDescription>Connect your YouTube channel to access real analytics and optimization tools</CardDescription>
      </CardHeader>
      <CardContent>
        <Button onClick={handleAuth} disabled={isAuthenticating} className="w-full bg-red-500 hover:bg-red-600">
          {isAuthenticating ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Connecting...
            </>
          ) : (
            <>
              <Youtube className="mr-2 h-4 w-4" />
              Connect with YouTube
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  )
}

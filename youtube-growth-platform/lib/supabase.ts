import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          youtube_channel_id: string | null
          youtube_channel_name: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          youtube_channel_id?: string | null
          youtube_channel_name?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          youtube_channel_id?: string | null
          youtube_channel_name?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      channel_analytics: {
        Row: {
          id: string
          user_id: string
          date: string
          subscribers: number
          views: number
          watch_time_hours: number
          engagement_rate: number
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          date: string
          subscribers?: number
          views?: number
          watch_time_hours?: number
          engagement_rate?: number
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          date?: string
          subscribers?: number
          views?: number
          watch_time_hours?: number
          engagement_rate?: number
          created_at?: string
        }
      }
      video_analytics: {
        Row: {
          id: string
          user_id: string
          video_id: string
          title: string | null
          views: number
          likes: number
          comments: number
          watch_time_hours: number
          published_at: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          video_id: string
          title?: string | null
          views?: number
          likes?: number
          comments?: number
          watch_time_hours?: number
          published_at?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          video_id?: string
          title?: string | null
          views?: number
          likes?: number
          comments?: number
          watch_time_hours?: number
          published_at?: string | null
          created_at?: string
        }
      }
      optimization_results: {
        Row: {
          id: string
          user_id: string
          tool_type: string
          input_data: any
          suggestions: any
          score: number | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          tool_type: string
          input_data?: any
          suggestions?: any
          score?: number | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          tool_type?: string
          input_data?: any
          suggestions?: any
          score?: number | null
          created_at?: string
        }
      }
      growth_goals: {
        Row: {
          id: string
          user_id: string
          goal_type: string
          target_value: number
          current_value: number
          deadline: string | null
          status: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          goal_type: string
          target_value: number
          current_value?: number
          deadline?: string | null
          status?: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          goal_type?: string
          target_value?: number
          current_value?: number
          deadline?: string | null
          status?: string
          created_at?: string
        }
      }
    }
  }
}

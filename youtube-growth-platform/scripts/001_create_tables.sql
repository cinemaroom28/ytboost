-- Create users table for authentication
CREATE TABLE IF NOT EXISTS users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  youtube_channel_id VARCHAR(255),
  youtube_channel_name VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create channel_analytics table for storing YouTube data
CREATE TABLE IF NOT EXISTS channel_analytics (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  subscribers INTEGER DEFAULT 0,
  views INTEGER DEFAULT 0,
  watch_time_hours DECIMAL(10,2) DEFAULT 0,
  engagement_rate DECIMAL(5,2) DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create video_analytics table for individual video performance
CREATE TABLE IF NOT EXISTS video_analytics (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  video_id VARCHAR(255) NOT NULL,
  title VARCHAR(500),
  views INTEGER DEFAULT 0,
  likes INTEGER DEFAULT 0,
  comments INTEGER DEFAULT 0,
  watch_time_hours DECIMAL(10,2) DEFAULT 0,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create optimization_results table for storing tool results
CREATE TABLE IF NOT EXISTS optimization_results (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  tool_type VARCHAR(50) NOT NULL, -- 'title', 'thumbnail', 'description', 'tags', 'timing'
  input_data JSONB,
  suggestions JSONB,
  score INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create growth_goals table for tracking user goals
CREATE TABLE IF NOT EXISTS growth_goals (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  goal_type VARCHAR(50) NOT NULL, -- 'subscribers', 'views', 'watch_time'
  target_value INTEGER NOT NULL,
  current_value INTEGER DEFAULT 0,
  deadline DATE,
  status VARCHAR(20) DEFAULT 'active', -- 'active', 'completed', 'paused'
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_channel_analytics_user_date ON channel_analytics(user_id, date);
CREATE INDEX IF NOT EXISTS idx_video_analytics_user ON video_analytics(user_id);
CREATE INDEX IF NOT EXISTS idx_optimization_results_user ON optimization_results(user_id);
CREATE INDEX IF NOT EXISTS idx_growth_goals_user ON growth_goals(user_id);

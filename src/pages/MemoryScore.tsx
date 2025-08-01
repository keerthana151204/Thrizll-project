import { useState, useEffect } from "react";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Heart, Camera, MessageCircle, Calendar, Sparkles, Trophy, Target } from "lucide-react";

interface BondMetrics {
  overallScore: number;
  weeklyChange: number;
  memoriesCreated: number;
  memoriesRevisited: number;
  emotionalMoments: number;
  bondStreak: number;
  achievements: string[];
}

interface Activity {
  type: "memory_added" | "memory_revisited" | "time_capsule" | "surprise_sent";
  description: string;
  points: number;
  date: Date;
}

export default function MemoryScore() {
  const [metrics, setMetrics] = useState<BondMetrics>({
    overallScore: 85,
    weeklyChange: 12,
    memoriesCreated: 24,
    memoriesRevisited: 18,
    emotionalMoments: 7,
    bondStreak: 12,
    achievements: [
      "Memory Collector",
      "Time Capsule Creator", 
      "Surprise Master",
      "Bond Builder"
    ],
  });

  const [recentActivity, setRecentActivity] = useState<Activity[]>([
    {
      type: "memory_added",
      description: "Added 5 photos from weekend trip",
      points: 15,
      date: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    },
    {
      type: "surprise_sent",
      description: "Sent surprise drop to My Love",
      points: 25,
      date: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
    },
    {
      type: "memory_revisited",
      description: "Revisited 'First Date' collection",
      points: 10,
      date: new Date(Date.now() - 1000 * 60 * 60 * 48), // 2 days ago
    },
    {
      type: "time_capsule",
      description: "Created anniversary time capsule",
      points: 30,
      date: new Date(Date.now() - 1000 * 60 * 60 * 72), // 3 days ago
    },
  ]);

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "memory_added": return <Camera className="w-4 h-4" />;
      case "memory_revisited": return <Heart className="w-4 h-4" />;
      case "time_capsule": return <Calendar className="w-4 h-4" />;
      case "surprise_sent": return <Sparkles className="w-4 h-4" />;
      default: return <Heart className="w-4 h-4" />;
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-accent";
    if (score >= 60) return "text-primary";
    return "text-muted-foreground";
  };

  const getProgressColor = (score: number) => {
    if (score >= 80) return "bg-accent";
    if (score >= 60) return "bg-primary";
    return "bg-muted-foreground";
  };

  return (
    <div className="min-h-screen bg-gradient-memory">
      <Navigation />
      
      <div className="pt-24 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
              <TrendingUp className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-sunset bg-clip-text text-transparent mb-4">
              Bond Score
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Track your relationship energy and see how your shared memories are strengthening your bond.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Score Card */}
            <div className="lg:col-span-2">
              <Card className="p-8 bg-card/80 backdrop-blur-sm border-border/50 mb-8">
                <div className="text-center mb-8">
                  <div className={`text-6xl font-bold ${getScoreColor(metrics.overallScore)} mb-2`}>
                    {metrics.overallScore}
                  </div>
                  <div className="text-lg text-muted-foreground mb-4">Bond Chemistry Score</div>
                  
                  <div className="max-w-md mx-auto mb-6">
                    <Progress 
                      value={metrics.overallScore} 
                      className="h-3"
                    />
                  </div>

                  <div className="flex items-center justify-center gap-2 text-sm">
                    <TrendingUp className="w-4 h-4 text-accent" />
                    <span className="text-accent font-medium">+{metrics.weeklyChange} points this week</span>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-muted/30 rounded-lg p-4 text-center">
                    <Camera className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">{metrics.memoriesCreated}</div>
                    <div className="text-sm text-muted-foreground">Memories Created</div>
                  </div>
                  
                  <div className="bg-muted/30 rounded-lg p-4 text-center">
                    <Heart className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">{metrics.memoriesRevisited}</div>
                    <div className="text-sm text-muted-foreground">Memories Revisited</div>
                  </div>
                  
                  <div className="bg-muted/30 rounded-lg p-4 text-center">
                    <Sparkles className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">{metrics.emotionalMoments}</div>
                    <div className="text-sm text-muted-foreground">Emotional Moments</div>
                  </div>
                  
                  <div className="bg-muted/30 rounded-lg p-4 text-center">
                    <Target className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">{metrics.bondStreak}</div>
                    <div className="text-sm text-muted-foreground">Day Streak</div>
                  </div>
                </div>
              </Card>

              {/* Recent Activity */}
              <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  Recent Activity
                </h3>
                
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                        {getActivityIcon(activity.type)}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{activity.description}</p>
                        <p className="text-xs text-muted-foreground">
                          {activity.date.toLocaleDateString()} • +{activity.points} points
                        </p>
                      </div>
                      <div className="text-primary font-bold">+{activity.points}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Achievements */}
              <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-primary" />
                  Achievements
                </h3>
                
                <div className="space-y-3">
                  {metrics.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                      <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                        <Trophy className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-sm font-medium">{achievement}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Next Goals */}
              <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Next Goals
                </h3>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Reach 90 Bond Score</span>
                      <span>5 points to go</span>
                    </div>
                    <Progress value={94} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>15-day Streak</span>
                      <span>3 days to go</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Memory Master Badge</span>
                      <span>6 memories to go</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                </div>

                <Button variant="heart" className="w-full mt-6" size="sm">
                  <Heart className="w-4 h-4 mr-2" />
                  Boost Your Score
                </Button>
              </Card>

              {/* Tips */}
              <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  Score Boosters
                </h3>
                
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                    <span>Create time capsules for future moments (+30 pts)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                    <span>Send surprise memory drops (+25 pts)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                    <span>Add voice notes to photos (+15 pts)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                    <span>Revisit old memories regularly (+10 pts)</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
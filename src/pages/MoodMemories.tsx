import { useState, useEffect } from "react";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Smile, Frown, Zap, Coffee, Sun, Cloud, Star, Play, Pause } from "lucide-react";

interface MoodMemory {
  id: string;
  title: string;
  date: string;
  mood: "happy" | "sad" | "excited" | "calm" | "nostalgic";
  imageUrl: string;
  description: string;
  matchScore: number;
}

const moodConfig = {
  happy: { icon: Smile, color: "text-yellow-500", bg: "bg-yellow-50", label: "Joyful" },
  sad: { icon: Frown, color: "text-blue-500", bg: "bg-blue-50", label: "Reflective" },
  excited: { icon: Zap, color: "text-orange-500", bg: "bg-orange-50", label: "Energetic" },
  calm: { icon: Coffee, color: "text-green-500", bg: "bg-green-50", label: "Peaceful" },
  nostalgic: { icon: Star, color: "text-purple-500", bg: "bg-purple-50", label: "Nostalgic" }
};

export default function MoodMemories() {
  const [currentMood, setCurrentMood] = useState<keyof typeof moodConfig>("happy");
  const [memories, setMemories] = useState<MoodMemory[]>([
    {
      id: "1",
      title: "Beach Sunset Adventure",
      date: "2024-07-15",
      mood: "happy",
      imageUrl: "/placeholder.svg",
      description: "That perfect evening when we watched the sunset and laughed until our stomachs hurt",
      matchScore: 95
    },
    {
      id: "2", 
      title: "Cozy Rainy Day",
      date: "2024-06-20",
      mood: "calm",
      imageUrl: "/placeholder.svg",
      description: "Hot chocolate and board games while rain pattered on the windows",
      matchScore: 88
    },
    {
      id: "3",
      title: "Concert Night",
      date: "2024-05-10",
      mood: "excited",
      imageUrl: "/placeholder.svg",
      description: "Dancing and singing our hearts out at our favorite band's concert",
      matchScore: 92
    }
  ]);
  
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const analyzeMood = () => {
    setIsAnalyzing(true);
    // Simulate mood analysis
    setTimeout(() => {
      const moods = Object.keys(moodConfig) as Array<keyof typeof moodConfig>;
      const randomMood = moods[Math.floor(Math.random() * moods.length)];
      setCurrentMood(randomMood);
      setIsAnalyzing(false);
    }, 2000);
  };

  const filteredMemories = memories.filter(memory => memory.mood === currentMood);
  const MoodIcon = moodConfig[currentMood].icon;

  return (
    <div className="min-h-screen bg-gradient-memory">
      <Navigation />
      
      <div className="pt-24 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
              <Heart className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-sunset bg-clip-text text-transparent mb-4">
              Mood-Linked Memories
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let AI understand your emotional state and surface memories that perfectly match your current mood.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Mood Analysis */}
            <div className="lg:col-span-1">
              <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50 mb-6">
                <h3 className="text-xl font-semibold mb-4">Current Mood</h3>
                
                <div className={`${moodConfig[currentMood].bg} rounded-lg p-6 text-center mb-6`}>
                  <MoodIcon className={`w-12 h-12 ${moodConfig[currentMood].color} mx-auto mb-3`} />
                  <div className="text-lg font-semibold text-foreground">{moodConfig[currentMood].label}</div>
                  <div className="text-sm text-muted-foreground mt-2">
                    Based on your recent activity
                  </div>
                </div>

                <Button 
                  onClick={analyzeMood}
                  disabled={isAnalyzing}
                  className="w-full"
                  variant="heart"
                >
                  {isAnalyzing ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Zap className="w-4 h-4 mr-2" />
                      Analyze My Mood
                    </>
                  )}
                </Button>
              </Card>

              {/* Mood History */}
              <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50">
                <h3 className="text-lg font-semibold mb-4">Recent Moods</h3>
                
                <div className="space-y-3">
                  {Object.entries(moodConfig).map(([mood, config]) => {
                    const Icon = config.icon;
                    return (
                      <div 
                        key={mood}
                        className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                          currentMood === mood ? 'bg-primary/10 border border-primary/20' : 'bg-muted/30 hover:bg-muted/50'
                        }`}
                        onClick={() => setCurrentMood(mood as keyof typeof moodConfig)}
                      >
                        <Icon className={`w-5 h-5 ${config.color}`} />
                        <span className="text-sm font-medium">{config.label}</span>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </div>

            {/* Matched Memories */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">
                  Memories for Your {moodConfig[currentMood].label} Mood
                </h2>
                <Badge variant="secondary" className="px-3 py-1">
                  {filteredMemories.length} matches
                </Badge>
              </div>

              <div className="space-y-6">
                {filteredMemories.map((memory) => (
                  <Card key={memory.id} className="p-6 bg-card/80 backdrop-blur-sm border-border/50">
                    <div className="flex gap-6">
                      <div className="w-32 h-32 bg-muted rounded-lg flex-shrink-0 flex items-center justify-center">
                        <Sun className="w-8 h-8 text-muted-foreground" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-lg font-semibold">{memory.title}</h3>
                            <p className="text-sm text-muted-foreground">{memory.date}</p>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {memory.matchScore}% match
                          </Badge>
                        </div>
                        
                        <p className="text-muted-foreground mb-4">{memory.description}</p>
                        
                        <div className="flex items-center gap-3">
                          <Button size="sm" variant="heart">
                            <Play className="w-4 h-4 mr-2" />
                            View Memory
                          </Button>
                          <Button size="sm" variant="outline">
                            <Heart className="w-4 h-4 mr-2" />
                            Save to Favorites
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {filteredMemories.length === 0 && (
                <Card className="p-12 bg-card/80 backdrop-blur-sm border-border/50 text-center">
                  <Cloud className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No memories found for this mood</h3>
                  <p className="text-muted-foreground">
                    Create more memories or try a different mood to see your personalized collection.
                  </p>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
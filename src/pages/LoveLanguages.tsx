import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Heart, MessageCircle, Gift, Hand, Clock, Star, CheckCircle, ArrowRight } from "lucide-react";

interface LoveLanguage {
  id: string;
  name: string;
  icon: any;
  description: string;
  score: number;
  color: string;
  examples: string[];
}

const loveLanguages: LoveLanguage[] = [
  {
    id: "words",
    name: "Words of Affirmation",
    icon: MessageCircle,
    description: "Hearing loving words and verbal appreciation",
    score: 85,
    color: "text-blue-500",
    examples: ["Heartfelt captions on photos", "Voice notes with memories", "Written love letters"]
  },
  {
    id: "acts",
    name: "Acts of Service",
    icon: Hand,
    description: "Actions that show care and thoughtfulness",
    score: 72,
    color: "text-green-500", 
    examples: ["Creating surprise memory drops", "Organizing photo collections", "Planning memory experiences"]
  },
  {
    id: "gifts",
    name: "Receiving Gifts",
    icon: Gift,
    description: "Thoughtful presents and tokens of love",
    score: 68,
    color: "text-purple-500",
    examples: ["Digital memory gifts", "Custom photo compilations", "Surprise memory packages"]
  },
  {
    id: "time",
    name: "Quality Time",
    icon: Clock,
    description: "Focused attention and shared experiences",
    score: 90,
    color: "text-orange-500",
    examples: ["Shared memory browsing", "Creating memories together", "Memory storytelling sessions"]
  },
  {
    id: "touch",
    name: "Physical Touch",
    icon: Heart,
    description: "Physical expressions of love and affection",
    score: 45,
    color: "text-red-500",
    examples: ["Photos with physical closeness", "Touch-based memory triggers", "Hugging photos"]
  }
];

export default function LoveLanguages() {
  const [selectedLanguage, setSelectedLanguage] = useState<LoveLanguage>(loveLanguages[3]); // Quality Time (highest score)
  const [showQuiz, setShowQuiz] = useState(false);

  const personalizedSuggestions = {
    words: [
      "Add heartfelt captions to every shared photo",
      "Create voice notes explaining why memories are special", 
      "Generate AI love letters based on your memories",
      "Set daily affirmation reminders with memory context"
    ],
    acts: [
      "Automatically organize photos by special occasions",
      "Create surprise memory deliveries on important dates",
      "Set up memory backup and protection services",
      "Plan future memory-making experiences"
    ],
    gifts: [
      "Generate custom photo books from your memories",
      "Create digital memory treasure boxes",
      "Design personalized memory timelines as gifts",
      "Make surprise memory packages for special occasions"
    ],
    time: [
      "Schedule weekly memory browsing sessions together",
      "Create shared memory storytelling experiences",
      "Set up memory discussion prompts",
      "Plan memory-focused date nights"
    ],
    touch: [
      "Focus on photos that show physical connection",
      "Create memory triggers for reunion moments",
      "Highlight memories of comfort and closeness",
      "Suggest creating tactile memory experiences"
    ]
  };

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
              Love Languages
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Personalize your memory experience based on how you and your loved ones express and receive love.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Love Language Assessment */}
            <div className="lg:col-span-2">
              <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50 mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Your Love Language Profile</h2>
                  <Button variant="outline" onClick={() => setShowQuiz(!showQuiz)}>
                    {showQuiz ? "Hide Quiz" : "Take Quiz"}
                  </Button>
                </div>

                <div className="space-y-4">
                  {loveLanguages.map((language) => {
                    const Icon = language.icon;
                    return (
                      <div 
                        key={language.id}
                        className={`p-4 rounded-lg border cursor-pointer transition-all ${
                          selectedLanguage.id === language.id 
                            ? 'border-primary bg-primary/5' 
                            : 'border-border hover:border-primary/50'
                        }`}
                        onClick={() => setSelectedLanguage(language)}
                      >
                        <div className="flex items-center gap-4 mb-3">
                          <Icon className={`w-6 h-6 ${language.color}`} />
                          <div className="flex-1">
                            <h3 className="font-semibold">{language.name}</h3>
                            <p className="text-sm text-muted-foreground">{language.description}</p>
                          </div>
                          <Badge variant="secondary">{language.score}%</Badge>
                        </div>
                        <Progress value={language.score} className="h-2" />
                      </div>
                    );
                  })}
                </div>
              </Card>

              {/* Personalized Suggestions */}
              <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50">
                <div className="flex items-center gap-3 mb-6">
                  <selectedLanguage.icon className={`w-6 h-6 ${selectedLanguage.color}`} />
                  <h3 className="text-xl font-semibold">
                    Personalized for {selectedLanguage.name}
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {personalizedSuggestions[selectedLanguage.id as keyof typeof personalizedSuggestions].map((suggestion, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <span className="text-sm">{suggestion}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full mt-6" variant="heart">
                  <Star className="w-4 h-4 mr-2" />
                  Apply Personalization
                </Button>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Primary Love Language */}
              <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary" />
                  Primary Love Language
                </h3>
                
                <div className="text-center">
                  <selectedLanguage.icon className={`w-12 h-12 ${selectedLanguage.color} mx-auto mb-4`} />
                  <h4 className="font-semibold text-lg mb-2">{selectedLanguage.name}</h4>
                  <div className="text-2xl font-bold text-primary mb-3">{selectedLanguage.score}%</div>
                  <p className="text-sm text-muted-foreground">{selectedLanguage.description}</p>
                </div>
              </Card>

              {/* Partner Assessment */}
              <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50">
                <h3 className="text-lg font-semibold mb-4">Partner Assessment</h3>
                
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Invite your partner to take the love language quiz for even better personalization.
                  </p>
                  
                  <Button variant="outline" className="w-full">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Send Invitation
                  </Button>
                </div>
              </Card>

              {/* Quick Actions */}
              <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50">
                <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                
                <div className="space-y-3">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Update Memory Captions
                  </Button>
                  
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Gift className="w-4 h-4 mr-2" />
                    Create Love Language Gift
                  </Button>
                  
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Clock className="w-4 h-4 mr-2" />
                    Schedule Quality Time
                  </Button>
                </div>
              </Card>

              {/* Memory Tips */}
              <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50">
                <h3 className="text-lg font-semibold mb-4">Memory Tips</h3>
                
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                    <span>Mix different love languages in your memory collections</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                    <span>Update your preferences as your relationship grows</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                    <span>Use love languages to guide future memory creation</span>
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
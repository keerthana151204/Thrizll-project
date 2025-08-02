import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Book, Calendar, Heart, Sparkles, Share2, Download, ChevronLeft, ChevronRight, Star } from "lucide-react";

interface DiaryEntry {
  id: string;
  month: string;
  year: number;
  title: string;
  content: string;
  highlights: string[];
  memoryCount: number;
  moodScore: number;
  featured: boolean;
}

const diaryEntries: DiaryEntry[] = [
  {
    id: "2024-01",
    month: "January",
    year: 2024,
    title: "New Year, New Adventures",
    content: "January was your month of fresh beginnings and cozy moments. From midnight celebrations under starlit skies to lazy Sunday mornings with hot coffee and shared dreams, you painted the start of 2024 with brushstrokes of hope and togetherness. The highlight was undoubtedly that unexpected snow day when you both became kids again, building snowmen and having snowball fights until your cheeks turned rosy red...",
    highlights: ["New Year's Eve celebration", "First snow day together", "Weekend getaway to the mountains"],
    memoryCount: 28,
    moodScore: 85,
    featured: false
  },
  {
    id: "2024-02",
    month: "February", 
    year: 2024,
    title: "Love in Full Bloom",
    content: "February brought romance and unexpected joy into your world. Valentine's Day wasn't just a day but a celebration that stretched across weeks - from handwritten notes hidden in coffee cups to spontaneous dance sessions in the kitchen. The month culminated with that magical evening when you both got caught in the rain but instead of running for shelter, you danced in the downpour, laughing until your sides hurt...",
    highlights: ["Valentine's surprise adventure", "Cooking disasters turned victories", "Dancing in the rain"],
    memoryCount: 35,
    moodScore: 92,
    featured: true
  },
  {
    id: "2024-03",
    month: "March",
    year: 2024,
    title: "Spring Awakening",
    content: "March whispered promises of renewal as you both embraced change and growth. The cherry blossoms became witnesses to your late-night conversations and early morning walks. You discovered new favorite spots in the city, from that hidden bookstore café to the rooftop garden where you watched sunsets paint the sky in watercolor hues...",
    highlights: ["Cherry blossom picnics", "New city explorations", "Rooftop sunset sessions"],
    memoryCount: 31,
    moodScore: 88,
    featured: false
  }
];

export default function SharedDiary() {
  const [selectedEntry, setSelectedEntry] = useState<DiaryEntry>(diaryEntries[1]); // February (featured)
  const [viewMode, setViewMode] = useState<"story" | "highlights">("story");

  const nextEntry = () => {
    const currentIndex = diaryEntries.findIndex(entry => entry.id === selectedEntry.id);
    const nextIndex = (currentIndex + 1) % diaryEntries.length;
    setSelectedEntry(diaryEntries[nextIndex]);
  };

  const prevEntry = () => {
    const currentIndex = diaryEntries.findIndex(entry => entry.id === selectedEntry.id);
    const prevIndex = currentIndex === 0 ? diaryEntries.length - 1 : currentIndex - 1;
    setSelectedEntry(diaryEntries[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-gradient-memory">
      <Navigation />
      
      <div className="pt-24 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
              <Book className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-sunset bg-clip-text text-transparent mb-4">
              Shared AI Diary
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your AI relationship historian crafts beautiful monthly narratives from your shared moments.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Timeline Sidebar */}
            <div className="lg:col-span-1">
              <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Timeline
                </h3>
                
                <div className="space-y-3">
                  {diaryEntries.map((entry) => (
                    <div
                      key={entry.id}
                      className={`p-3 rounded-lg cursor-pointer transition-all ${
                        selectedEntry.id === entry.id
                          ? 'bg-primary/10 border border-primary/20'
                          : 'bg-muted/30 hover:bg-muted/50'
                      }`}
                      onClick={() => setSelectedEntry(entry)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-sm">{entry.month} {entry.year}</span>
                        {entry.featured && <Star className="w-4 h-4 text-accent" />}
                      </div>
                      <div className="text-xs text-muted-foreground mb-2">{entry.memoryCount} memories</div>
                      <div className="flex items-center gap-2">
                        <div className="w-full bg-muted rounded-full h-1.5">
                          <div 
                            className="bg-primary h-1.5 rounded-full" 
                            style={{ width: `${entry.moodScore}%` }}
                          />
                        </div>
                        <span className="text-xs text-muted-foreground">{entry.moodScore}%</span>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="my-6" />

                <div className="space-y-3">
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Export Diary
                  </Button>
                  <Button variant="outline" size="sm" className="w-full">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share Chapter
                  </Button>
                </div>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <Card className="p-8 bg-card/80 backdrop-blur-sm border-border/50">
                {/* Entry Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <Button variant="ghost" size="sm" onClick={prevEntry}>
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <div>
                      <h2 className="text-2xl font-bold flex items-center gap-2">
                        {selectedEntry.title}
                        {selectedEntry.featured && <Star className="w-5 h-5 text-accent" />}
                      </h2>
                      <p className="text-muted-foreground">{selectedEntry.month} {selectedEntry.year}</p>
                    </div>
                    <Button variant="ghost" size="sm" onClick={nextEntry}>
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="flex items-center gap-3">
                    <Badge variant="secondary">
                      {selectedEntry.memoryCount} memories
                    </Badge>
                    <Badge variant="outline">
                      {selectedEntry.moodScore}% joy score
                    </Badge>
                  </div>
                </div>

                {/* View Mode Toggle */}
                <div className="flex items-center gap-2 mb-6">
                  <Button
                    variant={viewMode === "story" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("story")}
                  >
                    <Book className="w-4 h-4 mr-2" />
                    Story
                  </Button>
                  <Button
                    variant={viewMode === "highlights" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("highlights")}
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    Highlights
                  </Button>
                </div>

                {/* Content */}
                {viewMode === "story" ? (
                  <div className="prose prose-lg max-w-none">
                    <p className="text-foreground leading-relaxed text-base">
                      {selectedEntry.content}
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold mb-4">Month Highlights</h3>
                    {selectedEntry.highlights.map((highlight, index) => (
                      <Card key={index} className="p-4 bg-muted/30">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                            <Heart className="w-4 h-4 text-primary" />
                          </div>
                          <span className="font-medium">{highlight}</span>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}

                {/* Footer Actions */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t">
                  <div className="flex items-center gap-4">
                    <Button variant="heart" size="sm">
                      <Heart className="w-4 h-4 mr-2" />
                      Love This Chapter
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </div>

                  <Button variant="outline" size="sm">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Regenerate Story
                  </Button>
                </div>
              </Card>

              {/* Stats */}
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <Card className="p-4 bg-card/80 backdrop-blur-sm border-border/50 text-center">
                  <Book className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-lg font-bold">{diaryEntries.length}</div>
                  <div className="text-sm text-muted-foreground">Chapters Written</div>
                </Card>
                
                <Card className="p-4 bg-card/80 backdrop-blur-sm border-border/50 text-center">
                  <Heart className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-lg font-bold">
                    {diaryEntries.reduce((sum, entry) => sum + entry.memoryCount, 0)}
                  </div>
                  <div className="text-sm text-muted-foreground">Memories Captured</div>
                </Card>
                
                <Card className="p-4 bg-card/80 backdrop-blur-sm border-border/50 text-center">
                  <Sparkles className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-lg font-bold">
                    {Math.round(diaryEntries.reduce((sum, entry) => sum + entry.moodScore, 0) / diaryEntries.length)}%
                  </div>
                  <div className="text-sm text-muted-foreground">Average Joy Score</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
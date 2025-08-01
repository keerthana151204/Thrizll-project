import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Heart, Camera, Users, Sparkles, MapPin } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Curation",
    description: "Smart algorithms organize your memories into beautiful stories, finding connections you never noticed.",
    highlight: "Our Road Trips, Rainy Day Adventures, Summer 2024"
  },
  {
    icon: Heart,
    title: "Emotional Storytelling",
    description: "Add voice notes, poems, and personal touches that capture the feelings behind every moment.",
    highlight: "What was your favorite part of this trip?"
  },
  {
    icon: Sparkles,
    title: "Memory Resurfacing",
    description: "Rediscover precious moments on anniversaries, birthdays, or when you need a smile.",
    highlight: "Remember this day last year?"
  },
  {
    icon: Users,
    title: "Collaborative Canvas",
    description: "Build your scrapbook together, adding memories and stories from both perspectives.",
    highlight: "Living scrapbook with interactive tiles"
  },
  {
    icon: Camera,
    title: "Smart Integration",
    description: "Seamlessly import from Instagram, Google Photos, and WhatsApp to never lose a moment.",
    highlight: "Auto-sync from your favorite platforms"
  },
  {
    icon: MapPin,
    title: "Location Stories",
    description: "Group memories by places you've been together, creating beautiful travel narratives.",
    highlight: "Goa Summer 2024, Paris Weekend"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20 px-6 bg-gradient-memory">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-sunset bg-clip-text text-transparent mb-6">
            Where Technology Meets Love
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We've designed every feature to strengthen your bonds, not just store your photos. 
            This is memory-keeping reimagined for the heart.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 bg-card/80 backdrop-blur-sm hover:shadow-memory transition-memory border-border/50 group">
              <div className="mb-4">
                <div className="w-12 h-12 bg-gradient-warm rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow transition-memory">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  {feature.description}
                </p>
                <div className="text-sm text-primary font-medium italic">
                  "{feature.highlight}"
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="mb-6">
            <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full">
              Coming Soon
            </span>
          </div>
          <h3 className="text-2xl font-bold mb-4">Future Magic</h3>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-8">
            <span className="bg-card/60 px-3 py-2 rounded-lg">AR Memory Projection</span>
            <span className="bg-card/60 px-3 py-2 rounded-lg">Sentiment Music Soundtracks</span>
            <span className="bg-card/60 px-3 py-2 rounded-lg">Physical Memory Books</span>
            <span className="bg-card/60 px-3 py-2 rounded-lg">Group Memory Spaces</span>
          </div>
          <Button variant="vintage" size="lg">
            Join the Waitlist
          </Button>
        </div>
      </div>
    </section>
  );
}
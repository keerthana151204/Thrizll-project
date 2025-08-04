import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Heart, Camera, Users, Sparkles, MapPin, Archive, Gift, TrendingUp, MessageCircle, Book } from "lucide-react";
import { Link } from "react-router-dom";

const phase1Features = [
  {
    icon: Archive,
    title: "Time Capsule Mode",
    description: "Seal precious memories today and unlock them on special future dates. Create anticipation and make ordinary days magical.",
    highlight: "Open on our 5th anniversary",
    link: "/time-capsule",
    status: "Live Now"
  },
  {
    icon: Gift,
    title: "Surprise Memory Drops",
    description: "Schedule surprise memory deliveries for your loved ones. Turn ordinary days into extraordinary moments.",
    highlight: "Unexpected joy delivered",
    link: "/surprise-drops", 
    status: "Live Now"
  },
  {
    icon: TrendingUp,
    title: "Bond Chemistry Score",
    description: "Track your relationship energy and see how shared memories strengthen your connection over time.",
    highlight: "Your bond score: 85/100",
    link: "/memory-score",
    status: "Live Now"
  }
];

const phase2Features = [
  {
    icon: Brain,
    title: "Mood-Linked Memory Resurfacing",
    description: "AI detects your emotional state and surfaces the perfect memories to match your mood.",
    highlight: "Feeling lonely? Here's a warm hug from last summer",
    link: "/mood-memories",
    status: "Live Now"
  },
  {
    icon: MessageCircle,
    title: "Love Languages Personalization", 
    description: "Tailored memory prompts and captions based on your unique love language preferences.",
    highlight: "Words of Affirmation: 'You make every moment special'",
    link: "/love-languages",
    status: "Live Now"
  },
  {
    icon: Book,
    title: "Shared AI Diary",
    description: "Your relationship historian writes beautiful monthly narratives from your shared moments.",
    highlight: "Chapter 12: July was your month of rainy adventures...",
    link: "/shared-diary",
    status: "Live Now"
  }
];

const phase3Features = [
  {
    icon: Sparkles,
    title: "AI Memory Re-Enactment",
    description: "Transform static photos into living moments with subtle animations and ambient sounds.",
    highlight: "Your beach photo now has gentle waves and seagulls",
    link: "/memory-re-enactment",
    status: "Live Now"
  },
  {
    icon: MapPin,
    title: "Location-Triggered Memory Bubbles", 
    description: "Discover past memories when you return to special places together.",
    highlight: "Standing outside your favorite café triggers memories from 2 years ago",
    link: "/location-memories",
    status: "Live Now"
  },
  {
    icon: Heart,
    title: "Memory Matching Games",
    description: "Turn your shared memories into fun puzzle games to play together.",
    highlight: "Match photos from your beach trip - can you remember the year?",
    link: "/memory-games", 
    status: "Live Now"
  }
];

const futureFeatures = [
  {
    icon: Camera,
    title: "Multi-Sensory Experiences",
    description: "Add touch, smell, and temperature to your memory recreations.",
    highlight: "Feel the ocean breeze from your beach vacation"
  },
  {
    icon: Users,
    title: "Memory in a Bottle (AR)",
    description: "Leave virtual memories in physical spaces using augmented reality.",
    highlight: "Your anniversary dinner table holds a floating love note"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20 px-6 bg-gradient-memory">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-sunset bg-clip-text text-transparent mb-6">
            Phase 1: Live Now! 🎉
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the future of memory-keeping today. These innovative features are ready to transform your relationships.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {phase1Features.map((feature, index) => (
            <Card key={index} className="p-6 bg-card/80 backdrop-blur-sm hover:shadow-memory transition-memory border-border/50 group relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="text-xs font-bold bg-accent text-accent-foreground px-2 py-1 rounded-full">
                  {feature.status}
                </span>
              </div>
              <div className="mb-4">
                <div className="w-12 h-12 bg-gradient-warm rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow transition-memory">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  {feature.description}
                </p>
                <div className="text-sm text-primary font-medium italic mb-4">
                  "{feature.highlight}"
                </div>
                <Button variant="heart" size="sm" asChild className="w-full">
                  <Link to={feature.link}>
                    Try It Now
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold bg-gradient-sunset bg-clip-text text-transparent mb-6">
            Phase 2: Core Innovation - Live Now! 🚀
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Advanced emotional intelligence and personalization features are here!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {phase2Features.map((feature, index) => (
            <Card key={index} className="p-6 bg-card/80 backdrop-blur-sm hover:shadow-memory transition-memory border-border/50 group relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="text-xs font-bold bg-accent text-accent-foreground px-2 py-1 rounded-full">
                  {feature.status}
                </span>
              </div>
              <div className="mb-4">
                <div className="w-12 h-12 bg-gradient-warm rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow transition-memory">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  {feature.description}
                </p>
                <div className="text-sm text-primary font-medium italic mb-4">
                  "{feature.highlight}"
                </div>
                <Button variant="heart" size="sm" asChild className="w-full">
                  <Link to={feature.link}>
                    Try It Now
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold bg-gradient-sunset bg-clip-text text-transparent mb-6">
            Phase 3: Advanced Magic - Live Now! ✨
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Immersive AR, gaming, and next-generation memory experiences are here!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {phase3Features.map((feature, index) => (
            <Card key={index} className="p-6 bg-card/80 backdrop-blur-sm hover:shadow-memory transition-memory border-border/50 group relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="text-xs font-bold bg-accent text-accent-foreground px-2 py-1 rounded-full">
                  {feature.status}
                </span>
              </div>
              <div className="mb-4">
                <div className="w-12 h-12 bg-gradient-warm rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow transition-memory">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  {feature.description}
                </p>
                <div className="text-sm text-primary font-medium italic mb-4">
                  "{feature.highlight}"
                </div>
                <Button variant="heart" size="sm" asChild className="w-full">
                  <Link to={feature.link}>
                    Try It Now
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold bg-gradient-sunset bg-clip-text text-transparent mb-6">
            Phase 4: Coming Soon
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Next-generation AR and multi-sensory memory experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {futureFeatures.map((feature, index) => (
            <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-border/30 group opacity-75">
              <div className="mb-4">
                <div className="w-12 h-12 bg-muted/50 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-muted-foreground">{feature.title}</h3>
                <p className="text-muted-foreground/80 leading-relaxed mb-3">
                  {feature.description}
                </p>
                <div className="text-sm text-muted-foreground font-medium italic">
                  "{feature.highlight}"
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="mb-6">
            <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full">
              Phase 4 & Beyond
            </span>
          </div>
          <h3 className="text-2xl font-bold mb-4">Next-Generation Memory Magic</h3>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-8">
            <span className="bg-card/60 px-3 py-2 rounded-lg">Memory in a Bottle (AR)</span>
            <span className="bg-card/60 px-3 py-2 rounded-lg">Multi-Sensory Experiences</span>
            <span className="bg-card/60 px-3 py-2 rounded-lg">Holographic Memories</span>
            <span className="bg-card/60 px-3 py-2 rounded-lg">Time-Travel Experiences</span>
          </div>
          <Button variant="vintage" size="lg">
            Join the Future Waitlist
          </Button>
        </div>
      </div>
    </section>
  );
}
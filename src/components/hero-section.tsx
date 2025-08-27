import { Button } from "@/components/ui/button";
import { Heart, Camera, Users, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-memories.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-memory opacity-80" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8 flex justify-center">
          <div className="flex items-center gap-3 bg-primary/10 backdrop-blur-sm rounded-full px-6 py-3 border border-primary/20">
            <Heart className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Build to Bond</span>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-sunset bg-clip-text text-transparent mb-6 leading-tight">
          Thrizll
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/80 mb-4 max-w-2xl mx-auto leading-relaxed">
          A Living Scrapbook for Your Shared Memories
        </p>
        
        <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto">
          Transform scattered photos and moments into an emotionally rich, AI-powered memory experience that grows stronger with every shared story.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="heart" size="xl" className="gap-3" asChild>
            <Link to="/time-capsule">
              <Heart className="w-5 h-5" />
              Start Your Memory Journey
            </Link>
          </Button>
          <Button variant="vintage" size="xl" className="gap-3" asChild>
            <Link to="/memory-score">
              <Camera className="w-5 h-5" />
              See Your Bond Score
            </Link>
          </Button>
        </div>
        
        {/* Feature highlights */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>AI-Powered Curation</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-primary" />
            <span>Collaborative Storytelling</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-primary" />
            <span>Emotional Connections</span>
          </div>
        </div>
      </div>
      
      {/* Floating memory cards effect */}
      <div className="absolute top-20 left-10 opacity-30 transform rotate-12 transition-memory hover:rotate-6 hover:opacity-50">
        <div className="w-32 h-24 bg-card rounded-lg shadow-memory border border-border/30" />
      </div>
      <div className="absolute bottom-32 right-16 opacity-30 transform -rotate-6 transition-memory hover:rotate-0 hover:opacity-50">
        <div className="w-28 h-20 bg-card rounded-lg shadow-memory border border-border/30" />
      </div>
    </section>
  );
}
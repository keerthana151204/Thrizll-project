import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Navigation } from "@/components/navigation";
import { MapPin, Clock, Heart, Camera, Navigation as NavigationIcon, Map } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function LocationMemories() {
  const [isLocationEnabled, setIsLocationEnabled] = useState(false);
  const [nearbyMemories, setNearbyMemories] = useState([
    {
      id: 1,
      location: "Central Park Café",
      distance: "15 meters",
      memory: "First date conversation over coffee",
      date: "March 15, 2023",
      photos: 3,
      trigger: "active"
    },
    {
      id: 2,
      location: "Brooklyn Bridge",
      distance: "50 meters", 
      memory: "Sunset walk and promise rings",
      date: "July 4, 2023",
      photos: 8,
      trigger: "nearby"
    },
    {
      id: 3,
      location: "The Little Bookstore",
      distance: "200 meters",
      memory: "Found our favorite poetry book together",
      date: "October 12, 2022",
      photos: 2,
      trigger: "distant"
    }
  ]);

  const handleLocationToggle = (enabled: boolean) => {
    setIsLocationEnabled(enabled);
    if (enabled) {
      toast.success("🗺️ Location bubbles activated! Memories will surface as you explore.");
    } else {
      toast.info("Location bubbles paused. Enable to rediscover memories.");
    }
  };

  const handleMemoryBubble = (memory: any) => {
    toast.success(`✨ Memory unlocked: "${memory.memory}"`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              Immersive Experience
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-sunset bg-clip-text text-transparent mb-6">
              Location Memory Bubbles
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Rediscover forgotten moments as you walk through your shared places. Your memories come alive when you return to where they were made.
            </p>
          </div>

          {/* Location Toggle */}
          <Card className="p-6 mb-8 bg-card/80 backdrop-blur-sm border-border/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-warm rounded-lg flex items-center justify-center">
                  <NavigationIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Memory Location Detection</h3>
                  <p className="text-sm text-muted-foreground">
                    {isLocationEnabled ? "Actively scanning for memory locations nearby" : "Paused - enable to discover memories"}
                  </p>
                </div>
              </div>
              <Switch
                checked={isLocationEnabled}
                onCheckedChange={handleLocationToggle}
              />
            </div>
          </Card>

          {/* Current Location Status */}
          {isLocationEnabled && (
            <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Currently scanning: Downtown Manhattan</span>
              </div>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>3 memory locations detected</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>Last update: Just now</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-primary" />
                  <span>15 memories in this area</span>
                </div>
              </div>
            </Card>
          )}

          {/* Nearby Memory Bubbles */}
          <div className="space-y-6 mb-12">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <Map className="w-6 h-6 text-primary" />
              Nearby Memory Bubbles
            </h2>
            
            {nearbyMemories.map((memory) => (
              <Card 
                key={memory.id} 
                className={`p-6 border-border/50 transition-all duration-300 cursor-pointer hover:shadow-memory ${
                  memory.trigger === 'active' ? 'bg-primary/10 border-primary/30 shadow-glow' :
                  memory.trigger === 'nearby' ? 'bg-accent/5 border-accent/20' :
                  'bg-card/50 border-border/30 opacity-75'
                }`}
                onClick={() => handleMemoryBubble(memory)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      memory.trigger === 'active' ? 'bg-primary text-primary-foreground animate-pulse' :
                      memory.trigger === 'nearby' ? 'bg-accent text-accent-foreground' :
                      'bg-muted text-muted-foreground'
                    }`}>
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{memory.location}</h3>
                      <p className="text-sm text-muted-foreground">{memory.distance} away</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-1">
                      <Camera className="w-4 h-4" />
                      <span>{memory.photos} photos</span>
                    </div>
                    <div className="text-xs text-muted-foreground">{memory.date}</div>
                  </div>
                </div>
                
                <div className="bg-background/50 rounded-lg p-4">
                  <p className="text-sm italic">"{memory.memory}"</p>
                  {memory.trigger === 'active' && (
                    <div className="mt-2 text-xs text-primary font-medium">
                      ✨ Memory bubble active - tap to relive this moment
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>

          {/* How It Works */}
          <Card className="p-8 bg-card/80 backdrop-blur-sm border-border/50">
            <h3 className="text-2xl font-semibold mb-6">How Memory Bubbles Work</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="font-semibold mb-2">Smart Detection</h4>
                <p className="text-sm text-muted-foreground">
                  AI recognizes when you're near locations where memories were created
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="font-semibold mb-2">Gentle Surfacing</h4>
                <p className="text-sm text-muted-foreground">
                  Memories appear as soft notifications, never interrupting your moment
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="font-semibold mb-2">Perfect Timing</h4>
                <p className="text-sm text-muted-foreground">
                  Memories surface when you have time to appreciate them
                </p>
              </div>
            </div>
          </Card>

          {/* Privacy Note */}
          <div className="mt-8 p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground text-center">
              🔒 Your location data is processed locally and never shared. Memory bubbles work entirely on your device for maximum privacy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
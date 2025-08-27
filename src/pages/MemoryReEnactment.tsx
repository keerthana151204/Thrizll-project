import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Navigation } from "@/components/navigation";
import { Sparkles, Play, Upload, Download, Volume2, VolumeX } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function MemoryReEnactment() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [animationStyle, setAnimationStyle] = useState("gentle");

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      toast.success("Photo uploaded! Ready for AI re-enactment.");
    }
  };

  const handleReEnactment = async () => {
    if (!selectedFile) {
      toast.error("Please upload a photo first.");
      return;
    }

    setIsProcessing(true);
    
    // Simulate AI processing
    setTimeout(() => {
      setIsProcessing(false);
      toast.success("✨ Your memory is now alive with gentle animations and ambient sounds!");
    }, 3000);
  };

  const animationStyles = [
    { id: "gentle", name: "Gentle Motion", description: "Subtle movements like swaying trees" },
    { id: "dynamic", name: "Dynamic Scene", description: "Active elements like flowing water" },
    { id: "atmospheric", name: "Atmospheric", description: "Weather effects and lighting changes" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              AI-Powered Magic
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-sunset bg-clip-text text-transparent mb-6">
              AI Memory Re-Enactment
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Transform your static photos into living, breathing moments. Watch as gentle animations and ambient sounds bring your memories back to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Upload Section */}
            <Card className="p-8 bg-card/80 backdrop-blur-sm border-border/50">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Upload className="w-6 h-6 text-primary" />
                Upload Your Memory
              </h3>
              
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center mb-6">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                  id="photo-upload"
                />
                <label
                  htmlFor="photo-upload"
                  className="cursor-pointer block"
                >
                  {selectedFile ? (
                    <div>
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Sparkles className="w-8 h-8 text-primary" />
                      </div>
                      <p className="text-lg font-medium text-primary">{selectedFile.name}</p>
                      <p className="text-sm text-muted-foreground">Ready for AI magic!</p>
                    </div>
                  ) : (
                    <div>
                      <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-lg font-medium mb-2">Drop your photo here</p>
                      <p className="text-sm text-muted-foreground">Or click to browse</p>
                    </div>
                  )}
                </label>
              </div>

              {/* Animation Style Selection */}
              <div className="mb-6">
                <label className="text-sm font-medium mb-3 block">Animation Style</label>
                <div className="grid gap-3">
                  {animationStyles.map((style) => (
                    <label key={style.id} className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-accent/10 transition-colors">
                      <input
                        type="radio"
                        name="animationStyle"
                        value={style.id}
                        checked={animationStyle === style.id}
                        onChange={(e) => setAnimationStyle(e.target.value)}
                        className="text-primary"
                      />
                      <div>
                        <div className="font-medium">{style.name}</div>
                        <div className="text-sm text-muted-foreground">{style.description}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Sound Toggle */}
              <div className="flex items-center gap-3 mb-6">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSoundEnabled(!soundEnabled)}
                  className="gap-2"
                >
                  {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                  {soundEnabled ? "Sound Enabled" : "Sound Disabled"}
                </Button>
              </div>

              <Button
                onClick={handleReEnactment}
                disabled={!selectedFile || isProcessing}
                className="w-full gap-2"
                variant="heart"
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" />
                    Creating Magic...
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    Bring Memory to Life
                  </>
                )}
              </Button>
            </Card>

            {/* Preview Section */}
            <Card className="p-8 bg-card/80 backdrop-blur-sm border-border/50">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-primary" />
                Living Memory Preview
              </h3>
              
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center mb-6">
                {selectedFile ? (
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-warm rounded-full flex items-center justify-center mb-4 animate-pulse">
                      <Play className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <p className="text-lg font-medium">Processing your memory...</p>
                    <p className="text-sm text-muted-foreground">AI is adding life to your photo</p>
                  </div>
                ) : (
                  <div className="text-center text-muted-foreground">
                    <Sparkles className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p>Upload a photo to see the magic</p>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-accent/10 rounded-lg">
                  <span className="text-sm">Gentle animations</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                </div>
                <div className="flex items-center justify-between p-3 bg-accent/10 rounded-lg">
                  <span className="text-sm">Ambient soundscape</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                </div>
                <div className="flex items-center justify-between p-3 bg-accent/10 rounded-lg">
                  <span className="text-sm">Atmospheric effects</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                </div>
              </div>
            </Card>
          </div>

          {/* Examples Section */}
          <Card className="p-8 bg-card/80 backdrop-blur-sm border-border/50">
            <h3 className="text-2xl font-semibold mb-6">See What's Possible</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-sm font-medium">Beach Photo</span>
                </div>
                <p className="text-sm text-muted-foreground">→ Gentle waves + seagull sounds</p>
              </div>
              <div className="text-center">
                <div className="aspect-square bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-sm font-medium">Forest Walk</span>
                </div>
                <p className="text-sm text-muted-foreground">→ Swaying trees + bird songs</p>
              </div>
              <div className="text-center">
                <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-sm font-medium">City Sunset</span>
                </div>
                <p className="text-sm text-muted-foreground">→ Twinkling lights + ambient city</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
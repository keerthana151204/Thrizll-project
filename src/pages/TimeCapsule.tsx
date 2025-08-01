import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Archive, Clock, Heart, Upload, CalendarIcon, Lock, Unlock } from "lucide-react";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";

interface TimeCapsule {
  id: string;
  title: string;
  message: string;
  openDate: Date;
  createdDate: Date;
  isLocked: boolean;
  memories: File[];
}

export default function TimeCapsule() {
  const [capsules, setCapsules] = useState<TimeCapsule[]>([]);
  const [isCreating, setIsCreating] = useState(false);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [openDate, setOpenDate] = useState<Date>();
  const [memories, setMemories] = useState<File[]>([]);
  const { toast } = useToast();

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setMemories(prev => [...prev, ...files]);
  };

  const createCapsule = () => {
    if (!title || !message || !openDate) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields to create your time capsule.",
        variant: "destructive",
      });
      return;
    }

    const newCapsule: TimeCapsule = {
      id: crypto.randomUUID(),
      title,
      message,
      openDate,
      createdDate: new Date(),
      isLocked: openDate > new Date(),
      memories,
    };

    setCapsules(prev => [...prev, newCapsule]);
    setTitle("");
    setMessage("");
    setOpenDate(undefined);
    setMemories([]);
    setIsCreating(false);

    toast({
      title: "Time Capsule Created! 💝",
      description: `Your capsule "${title}" will unlock on ${format(openDate, "PPP")}`,
    });
  };

  const openCapsule = (id: string) => {
    setCapsules(prev =>
      prev.map(capsule =>
        capsule.id === id ? { ...capsule, isLocked: false } : capsule
      )
    );
    toast({
      title: "Time Capsule Opened! ✨",
      description: "Your beautiful memories are now revealed.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-memory">
      <Navigation />
      
      <div className="pt-24 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
              <Archive className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-sunset bg-clip-text text-transparent mb-4">
              Time Capsule
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Seal your precious memories today and unlock them on special future dates. 
              Create anticipation and make ordinary days magical.
            </p>
          </div>

          {/* Create New Capsule */}
          {!isCreating ? (
            <div className="text-center mb-12">
              <Button 
                variant="heart" 
                size="lg" 
                onClick={() => setIsCreating(true)}
                className="gap-3"
              >
                <Archive className="w-5 h-5" />
                Create New Time Capsule
              </Button>
            </div>
          ) : (
            <Card className="p-8 mb-12 bg-card/80 backdrop-blur-sm border-border/50">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <Heart className="w-6 h-6 text-primary" />
                Seal Your Memories
              </h3>

              <div className="space-y-6">
                <div>
                  <Label htmlFor="title">Capsule Title</Label>
                  <Input
                    id="title"
                    placeholder="Our 5th Anniversary Capsule"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message to Future You</Label>
                  <Textarea
                    id="message"
                    placeholder="Write a heartfelt message to read when this capsule opens..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                  />
                </div>

                <div>
                  <Label>Open Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {openDate ? format(openDate, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={openDate}
                        onSelect={setOpenDate}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div>
                  <Label htmlFor="memories">Add Memories</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                    <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground mb-4">
                      Upload photos, videos, or documents
                    </p>
                    <Button variant="outline" asChild>
                      <label htmlFor="file-upload" className="cursor-pointer">
                        Choose Files
                      </label>
                    </Button>
                    <input
                      id="file-upload"
                      type="file"
                      multiple
                      accept="image/*,video/*,.pdf"
                      className="hidden"
                      onChange={handleFileSelect}
                    />
                    {memories.length > 0 && (
                      <p className="text-sm text-primary mt-2">
                        {memories.length} file{memories.length > 1 ? 's' : ''} selected
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button variant="heart" onClick={createCapsule} className="flex-1">
                    <Lock className="w-4 h-4 mr-2" />
                    Seal Time Capsule
                  </Button>
                  <Button variant="ghost" onClick={() => setIsCreating(false)}>
                    Cancel
                  </Button>
                </div>
              </div>
            </Card>
          )}

          {/* Existing Capsules */}
          <div className="space-y-6">
            {capsules.length === 0 ? (
              <Card className="p-12 text-center bg-card/50 backdrop-blur-sm border-border/50">
                <Archive className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  No time capsules yet. Create your first one to start building memories for the future!
                </p>
              </Card>
            ) : (
              capsules.map((capsule) => (
                <Card key={capsule.id} className="p-6 bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-memory transition-memory">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        {capsule.isLocked ? (
                          <Lock className="w-5 h-5 text-muted-foreground" />
                        ) : (
                          <Unlock className="w-5 h-5 text-primary" />
                        )}
                        <h4 className="text-xl font-semibold">{capsule.title}</h4>
                      </div>
                      
                      <div className="space-y-2 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>Opens: {format(capsule.openDate, "PPP")}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Heart className="w-4 h-4" />
                          <span>Created: {format(capsule.createdDate, "PPP")}</span>
                        </div>
                      </div>

                      {!capsule.isLocked && (
                        <div className="bg-muted/50 rounded-lg p-4 mb-4">
                          <p className="text-sm">{capsule.message}</p>
                          {capsule.memories.length > 0 && (
                            <div className="mt-3 grid grid-cols-4 gap-2">
                              {capsule.memories.slice(0, 4).map((memory, index) => (
                                <img
                                  key={index}
                                  src={URL.createObjectURL(memory)}
                                  alt={`Memory ${index + 1}`}
                                  className="w-full h-16 object-cover rounded"
                                />
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="ml-4">
                      {capsule.isLocked && capsule.openDate <= new Date() ? (
                        <Button 
                          variant="heart" 
                          onClick={() => openCapsule(capsule.id)}
                          className="gap-2"
                        >
                          <Unlock className="w-4 h-4" />
                          Open
                        </Button>
                      ) : capsule.isLocked ? (
                        <div className="text-center">
                          <div className="text-sm text-muted-foreground">
                            Locked until
                          </div>
                          <div className="text-sm font-medium">
                            {format(capsule.openDate, "MMM d, yyyy")}
                          </div>
                        </div>
                      ) : (
                        <div className="text-center">
                          <div className="text-sm text-primary font-medium">
                            ✨ Opened
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

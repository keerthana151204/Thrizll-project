import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Gift, Heart, Clock, Calendar as CalendarIcon, Upload, Send, Sparkles } from "lucide-react";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";

interface SurpriseDrop {
  id: string;
  title: string;
  message: string;
  recipient: string;
  deliveryDate: Date;
  deliveryTime: string;
  memories: File[];
  status: "scheduled" | "sent" | "delivered";
  createdDate: Date;
}

export default function SurpriseDrops() {
  const [drops, setDrops] = useState<SurpriseDrop[]>([]);
  const [isCreating, setIsCreating] = useState(false);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [recipient, setRecipient] = useState("");
  const [deliveryDate, setDeliveryDate] = useState<Date>();
  const [deliveryTime, setDeliveryTime] = useState("");
  const [memories, setMemories] = useState<File[]>([]);
  const { toast } = useToast();

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setMemories(prev => [...prev, ...files]);
  };

  const createDrop = () => {
    if (!title || !message || !recipient || !deliveryDate || !deliveryTime) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields to schedule your surprise drop.",
        variant: "destructive",
      });
      return;
    }

    const newDrop: SurpriseDrop = {
      id: crypto.randomUUID(),
      title,
      message,
      recipient,
      deliveryDate,
      deliveryTime,
      memories,
      status: "scheduled",
      createdDate: new Date(),
    };

    setDrops(prev => [...prev, newDrop]);
    setTitle("");
    setMessage("");
    setRecipient("");
    setDeliveryDate(undefined);
    setDeliveryTime("");
    setMemories([]);
    setIsCreating(false);

    toast({
      title: "Surprise Drop Scheduled! 🎁",
      description: `Your surprise for ${recipient} will be delivered on ${format(deliveryDate, "PPP")} at ${deliveryTime}`,
    });
  };

  const sendNow = (id: string) => {
    setDrops(prev => 
      prev.map(drop => 
        drop.id === id ? { ...drop, status: "sent" as const } : drop
      )
    );
    toast({
      title: "Surprise Delivered! ✨",
      description: "Your special memory has been sent instantly!",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "scheduled": return "text-muted-foreground";
      case "sent": return "text-primary";
      case "delivered": return "text-accent";
      default: return "text-muted-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "scheduled": return <Clock className="w-4 h-4" />;
      case "sent": return <Send className="w-4 h-4" />;
      case "delivered": return <Sparkles className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-memory">
      <Navigation />
      
      <div className="pt-24 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
              <Gift className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-sunset bg-clip-text text-transparent mb-4">
              Surprise Drops
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Schedule surprise memory deliveries for your loved ones. 
              Turn ordinary days into extraordinary moments with unexpected joy.
            </p>
          </div>

          {/* Create New Drop */}
          {!isCreating ? (
            <div className="text-center mb-12">
              <Button 
                variant="heart" 
                size="lg" 
                onClick={() => setIsCreating(true)}
                className="gap-3"
              >
                <Gift className="w-5 h-5" />
                Schedule Surprise Drop
              </Button>
            </div>
          ) : (
            <Card className="p-8 mb-12 bg-card/80 backdrop-blur-sm border-border/50">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <Heart className="w-6 h-6 text-primary" />
                Create Surprise Drop
              </h3>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="title">Surprise Title</Label>
                    <Input
                      id="title"
                      placeholder="Remember our first date?"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="recipient">Recipient</Label>
                    <Input
                      id="recipient"
                      placeholder="My Love, Best Friend..."
                      value={recipient}
                      onChange={(e) => setRecipient(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Surprise Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Write a heartfelt message to surprise them with..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>Delivery Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {deliveryDate ? format(deliveryDate, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={deliveryDate}
                          onSelect={setDeliveryDate}
                          disabled={(date) => date < new Date()}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div>
                    <Label>Delivery Time</Label>
                    <Select value={deliveryTime} onValueChange={setDeliveryTime}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="09:00">9:00 AM (Morning surprise)</SelectItem>
                        <SelectItem value="12:00">12:00 PM (Lunch break joy)</SelectItem>
                        <SelectItem value="15:00">3:00 PM (Afternoon pick-me-up)</SelectItem>
                        <SelectItem value="18:00">6:00 PM (Evening delight)</SelectItem>
                        <SelectItem value="21:00">9:00 PM (Bedtime sweetness)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="memories">Add Memories</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                    <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground mb-4">
                      Upload photos, videos, or voice notes
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
                      accept="image/*,video/*,audio/*"
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
                  <Button variant="heart" onClick={createDrop} className="flex-1">
                    <Gift className="w-4 h-4 mr-2" />
                    Schedule Surprise
                  </Button>
                  <Button variant="ghost" onClick={() => setIsCreating(false)}>
                    Cancel
                  </Button>
                </div>
              </div>
            </Card>
          )}

          {/* Scheduled Drops */}
          <div className="space-y-6">
            {drops.length === 0 ? (
              <Card className="p-12 text-center bg-card/50 backdrop-blur-sm border-border/50">
                <Gift className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  No surprise drops scheduled yet. Create your first one to bring unexpected joy!
                </p>
              </Card>
            ) : (
              drops.map((drop) => (
                <Card key={drop.id} className="p-6 bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-memory transition-memory">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Gift className="w-5 h-5 text-primary" />
                        <h4 className="text-xl font-semibold">{drop.title}</h4>
                        <div className={`flex items-center gap-1 text-sm ${getStatusColor(drop.status)}`}>
                          {getStatusIcon(drop.status)}
                          <span className="capitalize">{drop.status}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <Heart className="w-4 h-4" />
                          <span>For: {drop.recipient}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CalendarIcon className="w-4 h-4" />
                          <span>Delivery: {format(drop.deliveryDate, "PPP")} at {drop.deliveryTime}</span>
                        </div>
                      </div>

                      <div className="bg-muted/50 rounded-lg p-4 mb-4">
                        <p className="text-sm">{drop.message}</p>
                        {drop.memories.length > 0 && (
                          <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                            <Upload className="w-4 h-4" />
                            <span>{drop.memories.length} memory file{drop.memories.length > 1 ? 's' : ''} attached</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="ml-4 flex flex-col gap-2">
                      {drop.status === "scheduled" && (
                        <Button 
                          variant="vintage" 
                          size="sm"
                          onClick={() => sendNow(drop.id)}
                          className="gap-2"
                        >
                          <Send className="w-4 h-4" />
                          Send Now
                        </Button>
                      )}
                      <div className="text-xs text-muted-foreground text-center">
                        Created {format(drop.createdDate, "MMM d")}
                      </div>
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
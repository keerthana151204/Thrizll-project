import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/use-auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, Archive, Gift, TrendingUp, Brain, MessageCircle, Book, Sparkles, MapPin, Gamepad2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Auth = () => {
  const { signIn, signUp } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const [signInForm, setSignInForm] = useState({
    email: '',
    password: ''
  });

  const [signUpForm, setSignUpForm] = useState({
    email: '',
    password: '',
    displayName: ''
  });

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await signIn(signInForm.email, signInForm.password);
    
    if (error) {
      toast({
        variant: "destructive",
        title: "Sign in failed",
        description: error.message
      });
    } else {
      navigate('/');
    }
    
    setLoading(false);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await signUp(signUpForm.email, signUpForm.password, signUpForm.displayName);
    
    if (error) {
      toast({
        variant: "destructive", 
        title: "Sign up failed",
        description: error.message
      });
    } else {
      toast({
        title: "Welcome to Thrizll!",
        description: "Check your email to confirm your account."
      });
    }
    
    setLoading(false);
  };

  const features = [
    { icon: Archive, title: "Time Capsule", description: "Store memories for the future" },
    { icon: Gift, title: "Surprise Drops", description: "Unexpected memory gifts" },
    { icon: TrendingUp, title: "Bond Score", description: "Track your relationship strength" },
    { icon: Brain, title: "Mood Memories", description: "Capture emotional moments" },
    { icon: MessageCircle, title: "Love Languages", description: "Express love your way" },
    { icon: Book, title: "Shared Diary", description: "Write together" },
    { icon: Sparkles, title: "AI Re-Enactment", description: "Relive moments with AI" },
    { icon: MapPin, title: "Location Bubbles", description: "Geo-tagged memories" },
    { icon: Gamepad2, title: "Memory Games", description: "Interactive challenges" }
  ];

  return (
    <div className="min-h-screen bg-gradient-memory flex flex-col lg:flex-row">
      {/* Left side - Hero content */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 lg:p-16">
        <div className="max-w-2xl text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
            <Heart className="w-12 h-12 text-primary" />
            <h1 className="text-6xl lg:text-7xl font-bold bg-gradient-sunset bg-clip-text text-transparent">
              Thrizll
            </h1>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-semibold text-foreground mb-6">
            A Living Scrapbook for Your Shared Memories
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12">
            Turn everyday moments into lasting bonds. Thrizll helps couples create, preserve, and celebrate their unique love story through AI-powered memory curation and interactive experiences.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-card/80 backdrop-blur-sm rounded-lg p-4 border border-border/30">
                <feature.icon className="w-6 h-6 text-primary mb-2" />
                <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
                <p className="text-xs text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right side - Auth forms */}
      <div className="flex-1 flex items-center justify-center p-8 lg:max-w-md">
        <Card className="w-full max-w-md bg-card/95 backdrop-blur-md border border-border/50 shadow-memory">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-primary">Welcome</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="signin" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="signin">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>
              
              <TabsContent value="signin">
                <form onSubmit={handleSignIn} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signin-email">Email</Label>
                    <Input
                      id="signin-email"
                      type="email"
                      placeholder="your@email.com"
                      value={signInForm.email}
                      onChange={(e) => setSignInForm({ ...signInForm, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signin-password">Password</Label>
                    <Input
                      id="signin-password"
                      type="password"
                      value={signInForm.password}
                      onChange={(e) => setSignInForm({ ...signInForm, password: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" variant="heart" className="w-full" disabled={loading}>
                    {loading ? 'Signing in...' : 'Sign In'}
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="signup">
                <form onSubmit={handleSignUp} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-name">Display Name</Label>
                    <Input
                      id="signup-name"
                      type="text"
                      placeholder="Your name"
                      value={signUpForm.displayName}
                      onChange={(e) => setSignUpForm({ ...signUpForm, displayName: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input
                      id="signup-email"
                      type="email"
                      placeholder="your@email.com"
                      value={signUpForm.email}
                      onChange={(e) => setSignUpForm({ ...signUpForm, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <Input
                      id="signup-password"
                      type="password"
                      value={signUpForm.password}
                      onChange={(e) => setSignUpForm({ ...signUpForm, password: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" variant="heart" className="w-full" disabled={loading}>
                    {loading ? 'Creating account...' : 'Create Account'}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
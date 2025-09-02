import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Heart, Archive, Gift, TrendingUp, Home, Brain, MessageCircle, Book, Sparkles, MapPin, Gamepad2, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export function Navigation() {
  const location = useLocation();

  const mainItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/memory-score", label: "Bond Score", icon: TrendingUp },
  ];

  const memoryItems = [
    { href: "/time-capsule", label: "Time Capsule", icon: Archive, description: "Store memories for the future" },
    { href: "/surprise-drops", label: "Surprise Drops", icon: Gift, description: "Unexpected memory gifts" },
    { href: "/mood-memories", label: "Mood Memories", icon: Brain, description: "Capture emotional moments" },
    { href: "/shared-diary", label: "Shared Diary", icon: Book, description: "Write together" },
  ];

  const experienceItems = [
    { href: "/memory-re-enactment", label: "AI Re-Enactment", icon: Sparkles, description: "Relive moments with AI" },
    { href: "/location-memories", label: "Location Bubbles", icon: MapPin, description: "Geo-tagged memories" },
    { href: "/memory-games", label: "Memory Games", icon: Gamepad2, description: "Interactive memory challenges" },
    { href: "/love-languages", label: "Love Languages", icon: MessageCircle, description: "Express love your way" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-card/95 backdrop-blur-md rounded-2xl px-6 py-3 border border-border/50 shadow-memory">
        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-primary mr-2" />
              
              {/* Main Navigation Items */}
              {mainItems.map((item) => (
                <Button
                  key={item.href}
                  variant={location.pathname === item.href ? "heart" : "ghost"}
                  size="sm"
                  asChild
                  className="gap-2"
                >
                  <Link to={item.href}>
                    <item.icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{item.label}</span>
                  </Link>
                </Button>
              ))}

              {/* Memory Features Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-muted/50 text-sm font-medium">
                  <Archive className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Memories</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-80">
                    <div className="grid gap-1">
                      <h4 className="text-sm font-medium leading-none mb-2 text-primary">Memory Features</h4>
                      {memoryItems.map((item) => (
                        <NavigationMenuLink key={item.href} asChild>
                          <Link
                            to={item.href}
                            className={cn(
                              "group grid grid-cols-[auto_1fr] items-start gap-3 rounded-md p-3 hover:bg-muted/50 transition-colors",
                              location.pathname === item.href && "bg-muted text-primary"
                            )}
                          >
                            <item.icon className="w-4 h-4 mt-0.5 text-muted-foreground group-hover:text-primary" />
                            <div className="space-y-1">
                              <p className="text-sm font-medium leading-none">{item.label}</p>
                              <p className="text-xs text-muted-foreground">{item.description}</p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Experience Features Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-muted/50 text-sm font-medium">
                  <Sparkles className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Experiences</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-80">
                    <div className="grid gap-1">
                      <h4 className="text-sm font-medium leading-none mb-2 text-primary">Interactive Experiences</h4>
                      {experienceItems.map((item) => (
                        <NavigationMenuLink key={item.href} asChild>
                          <Link
                            to={item.href}
                            className={cn(
                              "group grid grid-cols-[auto_1fr] items-start gap-3 rounded-md p-3 hover:bg-muted/50 transition-colors",
                              location.pathname === item.href && "bg-muted text-primary"
                            )}
                          >
                            <item.icon className="w-4 h-4 mt-0.5 text-muted-foreground group-hover:text-primary" />
                            <div className="space-y-1">
                              <p className="text-sm font-medium leading-none">{item.label}</p>
                              <p className="text-xs text-muted-foreground">{item.description}</p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
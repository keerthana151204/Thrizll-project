import { Button } from "@/components/ui/button";
import { Heart, Archive, Gift, TrendingUp, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function Navigation() {
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/time-capsule", label: "Time Capsule", icon: Archive },
    { href: "/surprise-drops", label: "Surprise Drops", icon: Gift },
    { href: "/memory-score", label: "Bond Score", icon: TrendingUp },
  ];

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-card/80 backdrop-blur-sm rounded-full px-6 py-3 border border-border/50 shadow-memory">
        <div className="flex items-center gap-2">
          <Heart className="w-5 h-5 text-primary mr-2" />
          {navItems.map((item) => (
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
        </div>
      </div>
    </nav>
  );
}
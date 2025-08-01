import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-6 bg-card/30 backdrop-blur-sm border-t border-border/30">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <h3 className="text-2xl font-bold bg-gradient-sunset bg-clip-text text-transparent mb-2">
            Loveable
          </h3>
          <p className="text-muted-foreground">
            Building technology that brings hearts closer together
          </p>
        </div>
        
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <span>Made with</span>
          <Heart className="w-4 h-4 text-primary" />
          <span>for every beautiful memory</span>
        </div>
        
        <div className="mt-6 pt-6 border-t border-border/30 text-xs text-muted-foreground">
          <p>© 2024 Loveable. All memories are precious.</p>
        </div>
      </div>
    </footer>
  );
}
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TimeCapsule from "./pages/TimeCapsule";
import SurpriseDrops from "./pages/SurpriseDrops";
import MemoryScore from "./pages/MemoryScore";
import MoodMemories from "./pages/MoodMemories";
import LoveLanguages from "./pages/LoveLanguages";
import SharedDiary from "./pages/SharedDiary";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/time-capsule" element={<TimeCapsule />} />
          <Route path="/surprise-drops" element={<SurpriseDrops />} />
          <Route path="/memory-score" element={<MemoryScore />} />
          <Route path="/mood-memories" element={<MoodMemories />} />
          <Route path="/love-languages" element={<LoveLanguages />} />
          <Route path="/shared-diary" element={<SharedDiary />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

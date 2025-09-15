import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/use-auth";
import { ProtectedRoute } from "@/components/protected-route";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import TimeCapsule from "./pages/TimeCapsule";
import SurpriseDrops from "./pages/SurpriseDrops";
import MemoryScore from "./pages/MemoryScore";
import MoodMemories from "./pages/MoodMemories";
import LoveLanguages from "./pages/LoveLanguages";
import SharedDiary from "./pages/SharedDiary";
import MemoryReEnactment from "./pages/MemoryReEnactment";
import LocationMemories from "./pages/LocationMemories";
import MemoryGames from "./pages/MemoryGames";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/" element={
              <ProtectedRoute>
                <Index />
              </ProtectedRoute>
            } />
            <Route path="/time-capsule" element={
              <ProtectedRoute>
                <TimeCapsule />
              </ProtectedRoute>
            } />
            <Route path="/surprise-drops" element={
              <ProtectedRoute>
                <SurpriseDrops />
              </ProtectedRoute>
            } />
            <Route path="/memory-score" element={
              <ProtectedRoute>
                <MemoryScore />
              </ProtectedRoute>
            } />
            <Route path="/mood-memories" element={
              <ProtectedRoute>
                <MoodMemories />
              </ProtectedRoute>
            } />
            <Route path="/love-languages" element={
              <ProtectedRoute>
                <LoveLanguages />
              </ProtectedRoute>
            } />
            <Route path="/shared-diary" element={
              <ProtectedRoute>
                <SharedDiary />
              </ProtectedRoute>
            } />
            <Route path="/memory-re-enactment" element={
              <ProtectedRoute>
                <MemoryReEnactment />
              </ProtectedRoute>
            } />
            <Route path="/location-memories" element={
              <ProtectedRoute>
                <LocationMemories />
              </ProtectedRoute>
            } />
            <Route path="/memory-games" element={
              <ProtectedRoute>
                <MemoryGames />
              </ProtectedRoute>
            } />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;

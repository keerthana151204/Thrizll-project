import { HeroSection } from "@/components/hero-section";
import { MemoryUpload } from "@/components/memory-upload";
import { FeaturesSection } from "@/components/features-section";
import { Footer } from "@/components/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <MemoryUpload />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default Index;

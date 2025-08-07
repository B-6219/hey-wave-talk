import { NerdHeader } from "@/components/layout/NerdHeader";
import { NerdCategoryNav } from "@/components/layout/NerdCategoryNav";
import { NerdHeroBanner } from "@/components/home/NerdHeroBanner";
import { NerdCategoryGrid } from "@/components/home/NerdCategoryGrid";
import { NerdDealsSection } from "@/components/home/NerdDealsSection";
import { NerdFooter } from "@/components/layout/NerdFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NerdHeader />
      <NerdCategoryNav />
      <NerdHeroBanner />
      <NerdCategoryGrid />
      <NerdDealsSection />
      <NerdFooter />
    </div>
  );
};

export default Index;

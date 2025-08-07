import { Header } from "@/components/layout/Header";
import { CategoryNav } from "@/components/layout/CategoryNav";
import { HeroBanner } from "@/components/home/HeroBanner";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { DealsSection } from "@/components/home/DealsSection";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CategoryNav />
      
      <main>
        {/* Hero Section */}
        <section className="py-6">
          <div className="container mx-auto px-4">
            <HeroBanner />
          </div>
        </section>

        {/* Category Grid */}
        <CategoryGrid />

        {/* Flash Sales */}
        <DealsSection />

        {/* Additional content sections would go here */}
      </main>

      <Footer />
    </div>
  );
};

export default Index;

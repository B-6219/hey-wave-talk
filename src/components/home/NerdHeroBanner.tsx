import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Zap, Cpu, Smartphone } from "lucide-react";

const banners = [
  {
    id: 1,
    title: "iPhone 15 Pro Max",
    subtitle: "Titanium. So strong. So light. So Pro.",
    description: "The most advanced iPhone ever with A17 Pro chip",
    price: "From KSh 179,999",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&h=600&fit=crop",
    gradient: "bg-gradient-hero",
    icon: Smartphone
  },
  {
    id: 2,
    title: "MacBook Pro M3",
    subtitle: "Mind-blowing. Head-turning.",
    description: "Supercharged by M3 chip for incredible performance",
    price: "From KSh 249,999",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=600&fit=crop",
    gradient: "bg-gradient-tech",
    icon: Cpu
  },
  {
    id: 3,
    title: "Gaming Beast",
    subtitle: "Unleash Your Power",
    description: "RTX 4090 Gaming Laptops - Ultimate Performance",
    price: "From KSh 299,999",
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=800&h=600&fit=crop",
    gradient: "bg-gradient-accent",
    icon: Zap
  }
];

export function NerdHeroBanner() {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const banner = banners[currentBanner];
  const Icon = banner.icon;

  return (
    <section className="relative h-[500px] overflow-hidden">
      <div className={`absolute inset-0 ${banner.gradient}`}>
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
            {/* Content */}
            <div className="text-white space-y-6 animate-fade-in">
              <div className="flex items-center gap-3">
                <Icon className="h-8 w-8 text-accent animate-glow" />
                <span className="text-accent font-semibold tracking-wide uppercase">
                  Tech Innovation
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                {banner.title}
              </h1>
              
              <h2 className="text-xl lg:text-2xl text-gray-200 font-medium">
                {banner.subtitle}
              </h2>
              
              <p className="text-lg text-gray-300 max-w-md">
                {banner.description}
              </p>
              
              <div className="space-y-4">
                <p className="text-2xl font-bold text-accent">
                  {banner.price}
                </p>
                
                <div className="flex gap-4">
                  <Button size="lg" className="btn-neon bg-accent hover:bg-accent-hover text-accent-foreground">
                    Shop Now
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-primary"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg shadow-tech">
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <button
        onClick={prevBanner}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextBanner}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentBanner(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentBanner 
                ? "bg-accent scale-125 shadow-neon" 
                : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
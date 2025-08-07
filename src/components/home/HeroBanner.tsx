import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const banners = [
  {
    id: 1,
    title: "Big Sale Up to 70% Off",
    subtitle: "Electronics, Fashion & More",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&h=400&fit=crop",
    cta: "Shop Now",
    bgColor: "bg-gradient-hero"
  },
  {
    id: 2,
    title: "Free Delivery",
    subtitle: "On orders above KSh 1000",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=400&fit=crop",
    cta: "Learn More",
    bgColor: "bg-jumia-green"
  },
  {
    id: 3,
    title: "New Arrivals",
    subtitle: "Latest Fashion Trends",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=400&fit=crop",
    cta: "Explore",
    bgColor: "bg-jumia-dark"
  }
];

export function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <Card className="relative w-full h-[400px] overflow-hidden rounded-lg shadow-lg">
      <div className="relative w-full h-full">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
              index === currentSlide ? "translate-x-0" : "translate-x-full"
            } ${index < currentSlide ? "-translate-x-full" : ""}`}
          >
            <div className={`w-full h-full ${banner.bgColor} relative`}>
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-full object-cover mix-blend-overlay opacity-80"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 flex items-center justify-start p-8 md:p-16">
                <div className="text-white max-w-md">
                  <h2 className="text-4xl md:text-6xl font-bold mb-4">
                    {banner.title}
                  </h2>
                  <p className="text-xl md:text-2xl mb-6 opacity-90">
                    {banner.subtitle}
                  </p>
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90 px-8 py-3 text-lg font-semibold"
                  >
                    {banner.cta}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </Card>
  );
}
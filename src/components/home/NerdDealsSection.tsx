import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Star, Zap } from "lucide-react";
import { useState, useEffect } from "react";

const flashSaleProducts = [
  {
    id: 1,
    name: "iPhone 14 Pro",
    originalPrice: 159999,
    salePrice: 129999,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
    rating: 4.8,
    reviews: 234,
    discount: 19,
    stock: 15
  },
  {
    id: 2,
    name: "MacBook Air M2",
    originalPrice: 179999,
    salePrice: 149999,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=300&fit=crop",
    rating: 4.9,
    reviews: 156,
    discount: 17,
    stock: 8
  },
  {
    id: 3,
    name: "AirPods Pro 2",
    originalPrice: 39999,
    salePrice: 29999,
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=300&h=300&fit=crop",
    rating: 4.7,
    reviews: 891,
    discount: 25,
    stock: 23
  },
  {
    id: 4,
    name: "Gaming Mouse X1",
    originalPrice: 12999,
    salePrice: 7999,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop",
    rating: 4.6,
    reviews: 445,
    discount: 38,
    stock: 31
  }
];

export function NerdDealsSection() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Zap className="h-8 w-8 text-accent animate-glow" />
              <h2 className="text-3xl font-bold text-foreground">Flash Sale</h2>
            </div>
            
            {/* Countdown Timer */}
            <div className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg">
              <Clock className="h-4 w-4" />
              <span className="font-mono text-sm">
                {String(timeLeft.hours).padStart(2, '0')}:
                {String(timeLeft.minutes).padStart(2, '0')}:
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </div>
          </div>
          
          <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
            View All Deals
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {flashSaleProducts.map((product) => (
            <Card
              key={product.id}
              className="group cursor-pointer hover:shadow-tech transition-all duration-300 hover:-translate-y-1 border-border"
            >
              <CardContent className="p-4">
                {/* Product Image */}
                <div className="relative mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  
                  {/* Discount Badge */}
                  <Badge className="absolute top-2 left-2 bg-accent text-accent-foreground font-bold neon-glow">
                    -{product.discount}%
                  </Badge>
                  
                  {/* Stock Badge */}
                  {product.stock < 20 && (
                    <Badge 
                      variant="destructive" 
                      className="absolute top-2 right-2 text-xs animate-tech-pulse"
                    >
                      Only {product.stock} left
                    </Badge>
                  )}
                </div>

                {/* Product Info */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-accent text-accent" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      ({product.reviews} reviews)
                    </span>
                  </div>
                  
                  {/* Pricing */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-accent">
                        {formatPrice(product.salePrice)}
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  </div>
                  
                  {/* Add to Cart Button */}
                  <Button 
                    className="w-full btn-neon bg-accent hover:bg-accent-hover text-accent-foreground"
                    size="sm"
                  >
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
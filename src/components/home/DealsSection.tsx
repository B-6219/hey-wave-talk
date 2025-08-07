import { useState } from "react";
import { Star, Heart, ShoppingCart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const deals = [
  {
    id: 1,
    title: "Samsung Galaxy A54 5G",
    originalPrice: 45000,
    salePrice: 32000,
    discount: 29,
    rating: 4.5,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop",
    badge: "Flash Sale"
  },
  {
    id: 2,
    title: "HP Pavilion Gaming Laptop",
    originalPrice: 85000,
    salePrice: 65000,
    discount: 24,
    rating: 4.3,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop",
    badge: "Limited Time"
  },
  {
    id: 3,
    title: "Nike Air Force 1",
    originalPrice: 12000,
    salePrice: 8500,
    discount: 29,
    rating: 4.7,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop",
    badge: "Best Seller"
  },
  {
    id: 4,
    title: "iPhone 14 Pro Max",
    originalPrice: 150000,
    salePrice: 135000,
    discount: 10,
    rating: 4.8,
    reviews: 567,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
    badge: "Hot Deal"
  },
  {
    id: 5,
    title: "Sony WH-1000XM4 Headphones",
    originalPrice: 28000,
    salePrice: 22000,
    discount: 21,
    rating: 4.6,
    reviews: 345,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
    badge: "Deal of the Day"
  },
  {
    id: 6,
    title: "Adidas Ultraboost 22",
    originalPrice: 18000,
    salePrice: 14000,
    discount: 22,
    rating: 4.4,
    reviews: 78,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",
    badge: "Flash Sale"
  }
];

export function DealsSection() {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-8 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">Flash Sales</h2>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Deals
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {deals.map((deal) => (
            <Card key={deal.id} className="group hover:shadow-orange transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-4">
                <div className="relative mb-3">
                  <img
                    src={deal.image}
                    alt={deal.title}
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground">
                    -{deal.discount}%
                  </Badge>
                  <Badge 
                    variant="secondary" 
                    className="absolute top-2 right-2 bg-white/90 text-foreground"
                  >
                    {deal.badge}
                  </Badge>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute bottom-2 right-2 bg-white/80 hover:bg-white"
                    onClick={() => toggleFavorite(deal.id)}
                  >
                    <Heart 
                      className={`h-4 w-4 ${favorites.includes(deal.id) ? 'text-red-500 fill-red-500' : 'text-gray-600'}`} 
                    />
                  </Button>
                </div>
                
                <h3 className="font-medium text-sm text-foreground mb-2 line-clamp-2">
                  {deal.title}
                </h3>
                
                <div className="flex items-center gap-1 mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < Math.floor(deal.rating) 
                            ? 'text-yellow-400 fill-yellow-400' 
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    ({deal.reviews})
                  </span>
                </div>
                
                <div className="space-y-1 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-primary">
                      KSh {deal.salePrice.toLocaleString()}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground line-through">
                    KSh {deal.originalPrice.toLocaleString()}
                  </span>
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary-hover text-primary-foreground">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
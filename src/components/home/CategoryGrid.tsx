import { Card, CardContent } from "@/components/ui/card";
import { 
  Smartphone, 
  Laptop, 
  Shirt, 
  Home, 
  Baby, 
  Gamepad2, 
  Dumbbell, 
  Car
} from "lucide-react";

const categories = [
  {
    name: "Phones & Tablets",
    icon: Smartphone,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=200&fit=crop",
    itemCount: "2,500+ items"
  },
  {
    name: "Computing",
    icon: Laptop,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop",
    itemCount: "1,800+ items"
  },
  {
    name: "Fashion",
    icon: Shirt,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=200&fit=crop",
    itemCount: "5,000+ items"
  },
  {
    name: "Home & Office",
    icon: Home,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop",
    itemCount: "3,200+ items"
  },
  {
    name: "Baby Products",
    icon: Baby,
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=300&h=200&fit=crop",
    itemCount: "1,200+ items"
  },
  {
    name: "Gaming",
    icon: Gamepad2,
    image: "https://images.unsplash.com/photo-1605902711834-8b11c3e3ef2f?w=300&h=200&fit=crop",
    itemCount: "800+ items"
  },
  {
    name: "Sports",
    icon: Dumbbell,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
    itemCount: "1,500+ items"
  },
  {
    name: "Automotive",
    icon: Car,
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=300&h=200&fit=crop",
    itemCount: "900+ items"
  }
];

export function CategoryGrid() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-foreground mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.name}
                className="group cursor-pointer hover:shadow-orange transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-4 text-center">
                  <div className="relative mb-3">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-24 object-cover rounded-md mb-2"
                    />
                    <div className="absolute inset-0 bg-primary/20 rounded-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="font-medium text-sm text-foreground mb-1 line-clamp-2">
                    {category.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {category.itemCount}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
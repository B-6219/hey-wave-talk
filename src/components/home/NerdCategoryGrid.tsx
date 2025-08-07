import { Card, CardContent } from "@/components/ui/card";
import { 
  Smartphone, 
  Laptop, 
  Headphones, 
  Camera, 
  Watch, 
  Gamepad2, 
  Monitor,
  HardDrive
} from "lucide-react";

const categories = [
  {
    name: "Smartphones",
    icon: Smartphone,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=200&fit=crop",
    itemCount: "500+ models",
    featured: true
  },
  {
    name: "Laptops",
    icon: Laptop,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop",
    itemCount: "300+ models",
    featured: true
  },
  {
    name: "Audio",
    icon: Headphones,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop",
    itemCount: "200+ products"
  },
  {
    name: "Cameras",
    icon: Camera,
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=300&h=200&fit=crop",
    itemCount: "150+ cameras"
  },
  {
    name: "Smartwatches",
    icon: Watch,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=200&fit=crop",
    itemCount: "100+ watches"
  },
  {
    name: "Gaming",
    icon: Gamepad2,
    image: "https://images.unsplash.com/photo-1605902711834-8b11c3e3ef2f?w=300&h=200&fit=crop",
    itemCount: "80+ products"
  },
  {
    name: "Monitors",
    icon: Monitor,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=200&fit=crop",
    itemCount: "120+ displays"
  },
  {
    name: "Storage",
    icon: HardDrive,
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=300&h=200&fit=crop",
    itemCount: "90+ drives"
  }
];

export function NerdCategoryGrid() {
  return (
    <section className="py-12 tech-grid">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Shop by Category</h2>
          <p className="text-muted-foreground">Discover the latest tech across all categories</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.name}
                className={`group cursor-pointer transition-all duration-300 hover:shadow-tech hover:-translate-y-2 border-border ${
                  category.featured ? 'ring-2 ring-accent/20' : ''
                }`}
              >
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-32 object-cover rounded-lg mb-3"
                    />
                    <div className="absolute inset-0 bg-black/60 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Icon className="h-12 w-12 text-accent neon-glow" />
                    </div>
                    {category.featured && (
                      <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-bold">
                        HOT
                      </div>
                    )}
                  </div>
                  
                  <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-accent transition-colors">
                    {category.name}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground">
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
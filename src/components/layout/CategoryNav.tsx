import { 
  Smartphone, 
  Laptop, 
  Shirt, 
  Home, 
  Baby, 
  Gamepad2, 
  Dumbbell, 
  Car,
  Stethoscope,
  BookOpen
} from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  { icon: Smartphone, name: "Phones & Tablets", href: "/phones" },
  { icon: Laptop, name: "Computing", href: "/computing" },
  { icon: Shirt, name: "Fashion", href: "/fashion" },
  { icon: Home, name: "Home & Office", href: "/home" },
  { icon: Baby, name: "Baby Products", href: "/baby" },
  { icon: Gamepad2, name: "Gaming", href: "/gaming" },
  { icon: Dumbbell, name: "Sports", href: "/sports" },
  { icon: Car, name: "Automotive", href: "/automotive" },
  { icon: Stethoscope, name: "Health & Beauty", href: "/health" },
  { icon: BookOpen, name: "Books & Media", href: "/books" },
];

export function CategoryNav() {
  return (
    <nav className="bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-1 overflow-x-auto py-2">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Button
                key={category.name}
                variant="ghost"
                className="flex items-center gap-2 whitespace-nowrap min-w-fit px-4 py-2 hover:bg-accent hover:text-primary"
              >
                <Icon className="h-4 w-4" />
                <span className="text-sm">{category.name}</span>
              </Button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
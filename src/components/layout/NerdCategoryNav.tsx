import { 
  Smartphone, 
  Laptop, 
  Headphones, 
  Camera, 
  Watch, 
  Gamepad2, 
  Monitor,
  HardDrive,
  Bluetooth
} from "lucide-react";

const categories = [
  { name: "Phones", icon: Smartphone },
  { name: "Laptops", icon: Laptop },
  { name: "Audio", icon: Headphones },
  { name: "Cameras", icon: Camera },
  { name: "Smartwatches", icon: Watch },
  { name: "Gaming", icon: Gamepad2 },
  { name: "Monitors", icon: Monitor },
  { name: "Storage", icon: HardDrive },
  { name: "Accessories", icon: Bluetooth },
];

export function NerdCategoryNav() {
  return (
    <nav className="bg-muted border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-8 py-3 overflow-x-auto scrollbar-hide">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.name}
                className="flex items-center gap-2 cursor-pointer hover:text-accent transition-colors whitespace-nowrap group"
              >
                <Icon className="h-4 w-4 group-hover:text-accent transition-colors" />
                <span className="text-sm font-medium">{category.name}</span>
              </div>
            );
          })}
          <div className="flex items-center gap-2 cursor-pointer hover:text-accent transition-colors whitespace-nowrap group">
            <span className="text-sm font-medium text-accent">Black Friday</span>
            <span className="bg-accent text-accent-foreground px-2 py-1 rounded text-xs font-bold animate-glow">
              SALE
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
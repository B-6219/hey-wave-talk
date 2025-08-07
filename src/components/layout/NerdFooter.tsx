import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  CreditCard,
  Shield,
  Truck
} from "lucide-react";

export function NerdFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Features Bar */}
      <div className="border-b border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <Truck className="h-8 w-8 text-accent" />
              <div>
                <h3 className="font-semibold">Free Shipping</h3>
                <p className="text-sm text-primary-foreground/70">On orders over KSh 5,000</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Shield className="h-8 w-8 text-accent" />
              <div>
                <h3 className="font-semibold">Secure Payment</h3>
                <p className="text-sm text-primary-foreground/70">100% secure transactions</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <CreditCard className="h-8 w-8 text-accent" />
              <div>
                <h3 className="font-semibold">Easy Returns</h3>
                <p className="text-sm text-primary-foreground/70">30-day return policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              <span className="relative">
                NERD
                <span className="absolute -top-1 -right-6 text-accent text-lg animate-glow">●</span>
              </span>
              <span className="block text-xs font-normal text-primary-foreground/70 tracking-[0.2em] uppercase">
                Tech Store
              </span>
            </div>
            
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Kenya's premier destination for cutting-edge technology. 
              We bring you the latest phones, laptops, and tech accessories 
              with unmatched quality and service.
            </p>
            
            <div className="flex gap-4">
              <Facebook className="h-5 w-5 cursor-pointer hover:text-accent transition-colors" />
              <Twitter className="h-5 w-5 cursor-pointer hover:text-accent transition-colors" />
              <Instagram className="h-5 w-5 cursor-pointer hover:text-accent transition-colors" />
              <Youtube className="h-5 w-5 cursor-pointer hover:text-accent transition-colors" />
            </div>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">Help Center</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">Track Your Order</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">Warranty</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">Contact Support</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">Smartphones</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">Laptops</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">Audio</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">Gaming</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">Accessories</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">Sale Items</a></li>
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Connected</h3>
            
            {/* Newsletter */}
            <div className="space-y-2">
              <p className="text-sm text-primary-foreground/70">
                Get the latest tech news and exclusive deals
              </p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
                <Button className="bg-accent text-accent-foreground hover:bg-accent-hover neon-glow">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/70">+254 700 123 456</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/70">hello@nerd.co.ke</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/70">Nairobi, Kenya</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/70">
              © 2024 Nerd Tech Store. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6 text-sm text-primary-foreground/70">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-accent transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
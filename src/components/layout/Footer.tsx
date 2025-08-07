import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-jumia-dark text-white">
      {/* Newsletter Section */}
      <div className="bg-primary py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-2">NEW TO JUMIA?</h3>
              <p className="text-primary-foreground/80">
                Subscribe to our newsletter to get updates on our latest offers!
              </p>
            </div>
            <div className="flex gap-2 w-full max-w-md">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white text-foreground border-white"
              />
              <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold mb-4">
              JUMIA
              <span className="block text-sm font-normal text-white/60">
                ONLINE SHOPPING
              </span>
            </div>
            <p className="text-white/80 mb-4 max-w-md">
              Jumia is your number one online shopping destination in Kenya. 
              We offer a wide range of products from electronics to fashion, 
              home appliances and much more.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">NEED HELP?</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">How to shop on Jumia?</a></li>
              <li><a href="#" className="hover:text-white">Corporate & Bulk Purchase</a></li>
              <li><a href="#" className="hover:text-white">Return & Refunds</a></li>
              <li><a href="#" className="hover:text-white">Ship your package anywhere</a></li>
              <li><a href="#" className="hover:text-white">Dispute Resolution Policy</a></li>
            </ul>
          </div>

          {/* About Jumia */}
          <div>
            <h4 className="font-semibold mb-4">ABOUT JUMIA</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-white">About us</a></li>
              <li><a href="#" className="hover:text-white">Jumia careers</a></li>
              <li><a href="#" className="hover:text-white">Jumia Express</a></li>
              <li><a href="#" className="hover:text-white">Terms and Conditions</a></li>
              <li><a href="#" className="hover:text-white">Privacy Notice</a></li>
              <li><a href="#" className="hover:text-white">Flash Sales</a></li>
            </ul>
          </div>

          {/* Make Money */}
          <div>
            <h4 className="font-semibold mb-4">MAKE MONEY WITH JUMIA</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-white">Sell on Jumia</a></li>
              <li><a href="#" className="hover:text-white">Vendor hub</a></li>
              <li><a href="#" className="hover:text-white">Become a Sales Consultant</a></li>
              <li><a href="#" className="hover:text-white">Become a Logistics Service Partner</a></li>
              <li><a href="#" className="hover:text-white">Join the Jumia DA Academy</a></li>
              <li><a href="#" className="hover:text-white">Join the Jumia KOL Program</a></li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium">Call us</p>
              <p className="text-white/80">0711 082 600</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium">Email us</p>
              <p className="text-white/80">help@jumia.co.ke</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium">Location</p>
              <p className="text-white/80">Nairobi, Kenya</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/20">
          <p className="text-white/60 text-sm">
            © 2024 Jumia Kenya. All rights reserved.
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <img src="/api/placeholder/100/30" alt="Visa" className="h-6" />
            <img src="/api/placeholder/100/30" alt="Mastercard" className="h-6" />
            <img src="/api/placeholder/100/30" alt="M-Pesa" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
}
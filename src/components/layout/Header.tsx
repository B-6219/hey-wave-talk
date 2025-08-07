import { useState } from "react";
import { Search, ShoppingCart, User, Menu, MapPin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

export function Header() {
  const [cartItems] = useState(3);

  return (
    <header className="w-full bg-background border-b border-border">
      {/* Top Bar */}
      <div className="bg-jumia-light-gray py-1">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm text-jumia-gray">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                Deliver to Kenya
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Globe className="h-3 w-3" />
                English
              </span>
              <span>Help</span>
              <span>Sell on Jumia</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <div className="text-2xl font-bold text-primary">
              JUMIA
              <span className="block text-xs font-normal text-jumia-gray">
                ONLINE SHOPPING
              </span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search products, brands and categories"
                className="w-full pr-12 h-12 border-2 border-primary focus:ring-primary focus:border-primary"
              />
              <Button
                size="sm"
                className="absolute right-1 top-1 h-10 px-6 bg-primary hover:bg-primary-hover"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* User Account */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  <span className="hidden md:inline">Account</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>Sign In</DropdownMenuItem>
                <DropdownMenuItem>My Account</DropdownMenuItem>
                <DropdownMenuItem>Orders</DropdownMenuItem>
                <DropdownMenuItem>Saved Items</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Help */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="hidden md:flex items-center gap-2">
                  <span>Help</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>Help Center</DropdownMenuItem>
                <DropdownMenuItem>Contact Us</DropdownMenuItem>
                <DropdownMenuItem>Report a Product</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Cart */}
            <Button variant="ghost" className="relative flex items-center gap-2">
              <ShoppingCart className="h-5 w-5" />
              <span className="hidden md:inline">Cart</span>
              {cartItems > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-primary text-primary-foreground text-xs">
                  {cartItems}
                </Badge>
              )}
            </Button>
          </div>

          {/* Mobile Menu */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
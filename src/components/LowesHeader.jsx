import React from 'react';
import { Search, MapPin, ShoppingCart, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const LowesHeader = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      {/* Top Banner */}
      <div className="bg-lowes-navy text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <span>Shop Labor Day deals for seasonal savings. Shop Now &gt;</span>
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:underline">Lowe's Credit Center</a>
              <a href="#" className="hover:underline">Order Status</a>
              <a href="#" className="hover:underline">Weekly Ad</a>
              <a href="#" className="hover:underline">Lowe's PRO</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-lowes-navy text-white px-6 py-3 rounded font-bold text-xl tracking-wide">
              LOWE'S
            </div>
          </div>

          {/* Location */}
          <div className="hidden md:flex items-center text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-1" />
            <span>Sterling Lowe's</span>
            <Button variant="ghost" size="sm" className="ml-1 text-blue-600">
              Closed
            </Button>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8 hidden md:block">
            <div className="relative">
              <Input
                placeholder="What can we help you find?"
                className="w-full pl-4 pr-12 h-12 border-2 border-gray-200 focus:border-lowes-blue focus:ring-lowes-blue"
              />
              <Button
                size="sm"
                className="absolute right-2 top-2 h-8 w-8 bg-lowes-blue hover:bg-lowes-navy"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex items-center">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-gray-50 border-t">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-8 py-3">
            <Button variant="ghost" className="flex items-center text-sm font-medium">
              <Menu className="h-4 w-4 mr-2" />
              Shop All
            </Button>
            <div className="hidden md:flex items-center space-x-6 text-sm">
              <a href="#" className="hover:text-lowes-blue font-medium">Installations</a>
              <a href="#" className="hover:text-lowes-blue font-medium">Appliances</a>
              <a href="#" className="hover:text-lowes-blue font-medium">Bathroom</a>
              <a href="#" className="hover:text-lowes-blue font-medium">Building Supplies</a>
              <a href="#" className="hover:text-lowes-blue font-medium">Flooring</a>
              <a href="#" className="hover:text-lowes-blue font-medium">Lawn & Garden</a>
              <a href="#" className="hover:text-lowes-blue font-medium">Lighting</a>
              <a href="#" className="hover:text-lowes-blue font-medium">Outdoors</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
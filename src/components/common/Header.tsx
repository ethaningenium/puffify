import React from "react";
import { Input } from "@/components/ui/input";
import { ShoppingBag } from "lucide-react";

const Header = () => {
  return (
    <header className="container flex justify-between items-center py-4">
      <span>puffify</span>
      <Input
        className="w-1/2 focus-visible:ring-0 focus:border-gray-700"
        placeholder="поиск..."
      />
      <ShoppingBag />
    </header>
  );
};

export default Header;

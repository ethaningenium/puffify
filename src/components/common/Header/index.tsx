import React from "react";
import { ShoppingBag, Heart } from "lucide-react";
import Search from "./Search";
import Icons from "./Icons";

const Header = () => {
  return (
    <header className="container flex justify-between items-center py-4">
      <span>puffify</span>
      <Search />
      <div className="flex gap-6">
        <Icons Icon={ShoppingBag} count={0} stroke={1.5} text="Корзина" />
        <Icons Icon={Heart} count={1} stroke={1.5} text="Избранное" />
      </div>
    </header>
  );
};

export default Header;

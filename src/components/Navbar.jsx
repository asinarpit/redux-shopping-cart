import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../cart-logo.png";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <nav className=" flex justify-between items-center max-w-6xl h-20 mx-auto px-5 ">
      <NavLink to="/">
        <div className="flex items-center gap-2">
        <span className="text-2xl text-gray-100">ShoppingCart</span>
          <img className="h-[40px]" src={logo} alt="Logo image" />

        </div>
       
      </NavLink>

      <div className="flex gap-5 items-center">
        <NavLink to="/">
          <p className="text-white font-semibold">Home</p>
        </NavLink>

        <NavLink to="/cart">
          <div className="relative">
            <AiOutlineShoppingCart size={30} fill="white" />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 rounded-full flex justify-center items-center animate-bounce text-white">
                {cart.length}
              </span>
            )}
          </div>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

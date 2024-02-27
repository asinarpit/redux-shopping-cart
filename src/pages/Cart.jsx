import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  return (
    <div className="flex my-10">
      {cart.length > 0 ? (
        <div className="flex flex-col  sm:flex-row  max-w-6xl mx-auto gap-5">
          <div className="flex flex-col">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          <div className="flex flex-col justify-between bg-gray-200 h-full rounded-lg p-5 mx-5">
            <div className="flex flex-col gap-4">
              <h1 className="text-5xl font-bold uppercase ">Your Cart</h1>
              <h2 className="text-3xl text-green-500 font-semibold uppercase">
                Summary
              </h2>
              <p className="text-lg">
                Total items: <span className="font-bold">{cart.length}</span>{" "}
              </p>
            </div>

            <div className="">
              <p className="text-2xl py-5">
                Total Amount :{" "}
                <span className="font-bold text-green-500">
                  ${totalAmount.toFixed(2)}
                </span>{" "}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex w-screen h-screen justify-center items-center">
          <div className="flex flex-col gap-5 items-center  ">
            <p className="text-5xl font-bold">Your cart is empty!</p>

            <NavLink to="/">
              <button className="bg-green-500 text-white py-2 px-3 rounded-lg font-semibold">
                Shop Now
              </button>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

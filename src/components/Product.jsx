import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { add, remove } from "../redux/slices/CartSlice";

const Product = ({ post }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to cart");
  };
  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.success("Item removed from cart");
  };

  return (
    <div className="flex  flex-col items-center mb-10 mx-5 rounded-lg justify-between p-5 gap-3 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] hover:scale-105 transition delay-50000">
      <h2 className="font-semibold text-md w-52 truncate">{post.title}</h2>
      <p className="text-xs text-gray-600 w-52">
        {post.description.split(" ").slice(0, 10).join(" ") + "..."}
      </p>

      <div className="h-[180px]">
        <img
          className="w-full h-full object-contain"
          src={post.image}
          alt="Product image"
        />
      </div>

      <div className="flex justify-between w-full mt-5">
        <p className="font-semibold text-green-500">${post.price}</p>

        {cart.some((p) => p.id === post.id) ? (
          <button
            className="bg-red-500 py-1 px-3 whitespace-nowrap text-white upper rounded-lg "
            onClick={removeFromCart}
          >
            Remove item
          </button>
        ) : (
          <button
            className="bg-green-500 py-1 px-3 whitespace-nowrap text-white upper rounded-lg "
            onClick={addToCart}
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;

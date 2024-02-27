import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/CartSlice";
const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
  };
  return (
    <div className="flex flex-col items-center sm:flex-row sm:items-start border-b-2 border-gray-300 p-5 text-left gap-10">
      <div className="h-[180px] w-[150px]">
        <img
          className="h-full w-full object-contain"
          src={item.image}
          alt="Cart item image"
        />
      </div>

      <div className="flex flex-col justify-between h-full w-full">
        <div>
          <h2 className="font-bold text-md">{item.title}</h2>
          <p className="text-regular text-gray-500">
            {item.description.split(" ").slice(0, 8).join(" ") + "..."}
          </p>
        </div>

        <div className="flex w-full justify-between items-baseline">
          <p className="font-bold text-lg text-green-500">${item.price}</p>
          <div className="cursor-pointer">
            <AiOutlineDelete size={23} fill="red" onClick={removeFromCart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

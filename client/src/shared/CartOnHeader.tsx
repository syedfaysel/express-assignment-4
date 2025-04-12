import { useMemo } from "react";
import { BsCart } from "react-icons/bs";
import { useAppSelector } from "@/redux/hooks";
import { selectCartItems } from "@/redux/features/cart/cartSlice";
import { Link } from "react-router-dom";

const CartOnHeader = () => {

  const cartItems = useAppSelector(selectCartItems);

  const subTotal = useMemo(() => {
        return cartItems.reduce(
            (total, val) => total + val?.price,
            0
        );
    }, [cartItems]);

  return (
    <div className="flex items-center hover:text-yellow-400">
      <span className="mr-[-10px] font-semibold text-[18px] md:text-[20px] text-yellow-400">{subTotal}&#2547;</span>
      <Link to="/cart" className="hidden md:flex items-center hover:text-yellow-400">
        <div className="w-12 md:w-14 h-12 md:h-14 rounded-full flex justify-center items-center hover:bg-blue-900/[0.5] cursor-pointer relative">
          <BsCart className="text-[22px] md:text-[24px]" />

          {cartItems.length > 0 && (
            <div className="font-bold h-[16px] md:h-[18px] min-w-[16px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-secondary text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
              {cartItems.length}
            </div>
          )}
        </div>
      </Link>
      {/* Icon end */}
    </div>
  );
};

export default CartOnHeader;
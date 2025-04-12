import { ChangeEvent } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  updateCart,
  removeFromCart,
  TCartItem,
} from "@/redux/features/cart/cartSlice";
import { useAppDispatch } from "@/redux/hooks";

type CartItemProps = {
  item: TCartItem;
};

const CartItem = ({ item }: CartItemProps) => {


  const dispatch = useAppDispatch();

  const handleUpdate = (e: ChangeEvent<HTMLSelectElement>, key: keyof TCartItem) => {
    const val = key === "quantity" ? parseInt(e.target.value) : e.target.value;

    dispatch(updateCart({
      productId: item.productId,
      selectedSize: item.selectedSize,
      selectedColor: item.selectedColor,
      key,
      val,
    }));
  };

  const handleRemove = () => {
    dispatch(removeFromCart({
      productId: item.productId,
      selectedSize: item.selectedSize,
      selectedColor: item.selectedColor,
    }));
  };

  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <img
          src={item.image}
          alt={item.name}
          width={120}
          height={120}
          className="object-cover"
        />
      </div>

      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            {item.name}
          </div>
          <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
            ৳{item.price}
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-4 text-sm md:text-md text-black/[0.6]">
            {/* {item.selectedSize && (
              <div className="flex items-center gap-1">
                <span className="font-semibold">Size:</span>
                <select
                  value={item.selectedSize}
                  onChange={(e) => handleUpdate(e, "selectedSize")}
                  className="hover:text-black"
                >
                  {item.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
            )} */}

            <div className="flex items-center gap-1">
              <span className="font-semibold">Qty:</span>
              <select
                value={item.quantity}
                onChange={(e) => handleUpdate(e, "quantity")}
                className="hover:text-black"
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <RiDeleteBin6Line
            onClick={handleRemove}
            className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
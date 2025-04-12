import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

// import { makePaymentRequest } from "@/utils/api";
import { useAppSelector } from "@/redux/hooks";
import { selectCartItems } from "@/redux/features/cart/cartSlice";
import Wrapper from "@/layout/Wrapper";
import CartItem from "./cartItem";
import { toast } from "sonner";

const Cart = () => {
  const [loading, setLoading] = useState(false);
  const cartItems = useAppSelector(selectCartItems);

  const subTotal = useMemo(() => {
    return cartItems.reduce((total, val) => total + val.price, 0);
  }, [cartItems]);


  const handlePayment = async () => {
    try {
      setTimeout(() => {
        setLoading(true);
        console.log("Checkout processing...");
        // Simulate payment processing
      }, 2000);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("Checkout Failed.Please try again.");
      console.log(error);
    }
  };

  return (
    <div className="mx-3 md:mx-0 md:py-20">
      <Wrapper>
        {cartItems.length > 0 && (
          <>
            {/* HEADING AND PARAGRAPH START */}
            <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
              <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                Shopping Cart
              </div>
            </div>
            {/* HEADING AND PARAGRAPH END */}

            {/* CART CONTENT START */}
            <div className="flex flex-col lg:flex-row gap-12 py-10">
              {/* CART ITEMS START */}
              <div className="flex-[2]">
                <div className="text-lg font-bold">Cart Items</div>
                {cartItems.map((item, index: number) => (
                  <CartItem
                    key={index}
                    item={item}
                  />
                ))}
              </div>
              {/* CART ITEMS END */}

              {/* SUMMARY START */}
              <div className="flex-[1]">
                <div className="text-lg font-bold">Summary</div>

                <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
                  <div className="flex justify-between">
                    <div className="uppercase text-md md:text-lg font-medium text-black">
                      Subtotal
                    </div>
                    <div className="text-md md:text-lg font-medium text-black">
                      &#2547;{subTotal.toLocaleString()}
                    </div>
                  </div>
                  <div className="text-sm md:text-md py-5 border-t mt-5">
                    The subtotal reflects the total price of your order,
                    including duties and taxes, before any applicable discounts.
                    It does not include delivery costs and international
                    transaction fees.
                  </div>
                </div>

                <Link
                  to={"/checkout"}
                  className={`w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  Checkout
                  {loading && (
                    <img
                      src="/spinner.svg"
                      alt="Loading"
                      className="w-5 h-5"
                    />
                  )}
                </Link>
              </div>

              {/* SUMMARY END */}
            </div>
            {/* CART CONTENT END */}
          </>
        )}

        {/* This is empty screen */}
        {cartItems.length < 1 && (
          <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
            <img
              src="/empty-cart.jpg"
              width={300}
              height={300}
              className="w-[300px] md:w-[400px]"
            />
            <span className="text-xl font-bold">Your cart is empty</span>
            <span className="text-center mt-4">
              Looks like you have not added anything in your cart.
              <br />
              Go ahead and explore top categories.
            </span>
            <Link
              to="/"
              className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
            >
              <span>Continue Shopping</span>
            </Link>
          </div>
        )}
      </Wrapper>
    </div>
  );
};

export default Cart;

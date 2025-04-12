import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Types
export type TCartItem = {
  productId: string;
  name: string;
  image: string;
  selectedSize?: string;
  selectedColor?: string;
  oneQuantityPrice: number; // Price per unit
  quantity: number;
  price: number; // oneQuantityPrice * quantity
};

export type TCartState = {
  cartItems: TCartItem[];
};

const initialState: TCartState = {
  cartItems: [],
};

const findCartItem = (
  cartItems: TCartItem[],
  productId: string,
  selectedSize?: string,
  selectedColor?: string
) =>
  cartItems.find(
    (item) =>
      item.productId === productId &&
      item.selectedSize === selectedSize &&
      item.selectedColor === selectedColor
  );

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<Omit<TCartItem, "quantity" | "price">>
    ) => {
      const existingItem = findCartItem(
        state.cartItems,
        action.payload.productId,
        action.payload.selectedSize,
        action.payload.selectedColor
      );

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.price = existingItem.quantity * existingItem.oneQuantityPrice;
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
          price: action.payload.oneQuantityPrice,
        });
      }
    },

    updateCart: (
      state,
      action: PayloadAction<{
        productId: string;
        selectedSize?: string;
        selectedColor?: string;
        key: keyof TCartItem;
        val: any;
      }>
    ) => {
      state.cartItems = state.cartItems.map((item) => {
        if (
          item.productId === action.payload.productId &&
          item.selectedSize === action.payload.selectedSize &&
          item.selectedColor === action.payload.selectedColor
        ) {
          const updated = { ...item, [action.payload.key]: action.payload.val };
          if (action.payload.key === "quantity") {
            updated.price = updated.oneQuantityPrice * action.payload.val;
          }
          return updated;
        }
        return item;
      });
    },

    removeFromCart: (
      state,
      action: PayloadAction<{
        productId: string;
        selectedSize?: string;
        selectedColor?: string;
      }>
    ) => {
      state.cartItems = state.cartItems.filter(
        (item) =>
          !(
            item.productId === action.payload.productId &&
            item.selectedSize === action.payload.selectedSize &&
            item.selectedColor === action.payload.selectedColor
          )
      );
    },

    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, updateCart, removeFromCart, clearCart } =
  cartSlice.actions;

export const selectCartItems = (state: { cart: TCartState }) =>
  state.cart.cartItems;

export default cartSlice.reducer;
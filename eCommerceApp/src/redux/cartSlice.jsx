import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },

    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.products = state.products.filter(
        (item => item.id !== action.payload)
      );
    },
    resetCart: (state) => {
      state.products = [];
    },

    increaseQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = Math.max(1, item.quantity + 1); 
      }
    },

    decreaseQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = Math.max(1, item.quantity - 1); 
      }
    },
  },

});

export const { setIsCartOpen, addToCart, removeItem, resetCart,increaseQuantity,
  decreaseQuantity,  } =
  cartSlice.actions;

export default cartSlice.reducer;

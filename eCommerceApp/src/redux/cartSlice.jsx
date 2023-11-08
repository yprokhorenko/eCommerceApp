import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  total_items: 0,
  total_amount: 0,
  shipping_fee: 230,

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
        item.amount += action.payload.amount;
      } else {
        state.products.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    resetCart: (state) => {
      state.products = [];
    },

    increaseamount: (state, action) => {
      const { id, productStock } = action.payload;
      const item = state.products.find((item) => item.id === id);
      if (item) {
        item.amount = Math.min(productStock, item.amount + 1);
      }
    },

    decreaseamount: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);

      if (item) {
        item.amount = Math.max(1, item.amount - 1);
      }
    },
  },
});

export const { setIsCartOpen, addToCart, removeItem, resetCart,increaseamount,
  decreaseamount,  } =
  cartSlice.actions;

export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  total_items: 0,
  total_amount: 0,
  shipping_fee: 230,
  favoriteProducts: [],
  isCartOpen: false,
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      const { id, remove } = action.payload;
      const existingProductIndex = state.favoriteProducts.findIndex(
        (product) => product.id === id
      );

      if (remove) {
        state.favoriteProducts = state.favoriteProducts.filter(
          (product) => product.id !== id
        );
      } else {
        if (existingProductIndex !== -1) {
          state.favoriteProducts = state.favoriteProducts.filter(
            (product) => product.id !== id
          );
        } else {
          state.favoriteProducts.push(action.payload);
        }
      }
    },

    
    updateSort: (state, action) => {
      state.sort = action.payload;
    },
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
  decreaseamount, addToFavorite } =
  cartSlice.actions;

export default cartSlice.reducer;

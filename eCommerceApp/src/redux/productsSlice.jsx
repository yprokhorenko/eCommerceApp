import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { products_url } from "../constants";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, thunkAPI) => {
    try {
      const res = await axios(products_url);
      // console.log("res", res.data);
      return res.data;
    } catch (err) {
      console.log("err", err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const getSingleProduct = createAsyncThunk(
  "products/getSingleProduct",
  async (url, thunkAPI) => {
    try {
      const response = await axios.get(url);
      // console.log("response", response.data);
      return response.data;
    } catch (err) {
      console.log("err", err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const initialState = {
  product: [],
  products: [],
  filtered_products: [],
  featuredProducts: [],
  freeShippingProducts: [],
  productsLoading: false,
  productsError: null,
  productLoading: false,
  productError: null,
  sort: "name-a",
  filters: {
    text: "",
    company: "all",
    category: "all",
    color: "all",
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateSort: (state, action) => {
      state.sort = action.payload;
    },
    startSort: (state, action) => {
      const { sort, filtered_products } = state;
      let tempProducts = [...filtered_products];
      if (sort === "price-lowest") {
        tempProducts = tempProducts.sort((a, b) => a.price - b.price);
      }
      if (sort === "price-highest") {
        tempProducts = tempProducts.sort((a, b) => b.price - a.price);
      }
      if (sort === "name-a") {
        tempProducts = tempProducts.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      }
      if (sort === "name-z") {
        tempProducts = tempProducts.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
      }
      return { ...state, filtered_products: tempProducts };
    },

    updateFilters: (state, action) => {
      const {name, value} = action.payload;
      return {...state, filters:{...state.filters,[name]:value} }
     },

    filterProducts: (state, action) => {
      return {...state}
    },

    clearFilters: (state, action) => {
      return {...state,
       filters: {
        ...state.filters,
        text: "",
        company: "all",
        category: "all",
        color: "all",
        price: state.filters.max_price,
        shipping: false,
       }
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.productsLoading = true;
        state.productsError = null;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.productsLoading = false;
        state.products = action.payload;
        state.featuredProducts = state.products.filter(
          (product) => product.featured === true
        );
        state.freeShippingProducts = state.products.filter(
          (product) => product.shipping === true
        );
        state.filtered_products = [...state.products];
        state.productsError = null;

        const prices = state.products.map((product) => product.price);
        const maxPrice = Math.max(...prices);
        state.filters.max_price = maxPrice;
        state.filters.price = maxPrice;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.productsLoading = false;
        state.productsError = action.error.message;
      })
      .addCase(getSingleProduct.pending, (state) => {
        state.productLoading = true;
        state.productError = null;
      })
      .addCase(getSingleProduct.fulfilled, (state, action) => {
        state.productLoading = false;
        state.product = action.payload;
        state.productError = null;
      })
      .addCase(getSingleProduct.rejected, (state, action) => {
        state.productLoading = false;
        state.productError = action.error.message;
      });
  },
});

export const { updateSort, startSort,updateFilters,filterProducts,clearFilters } = productsSlice.actions;

export default productsSlice.reducer;

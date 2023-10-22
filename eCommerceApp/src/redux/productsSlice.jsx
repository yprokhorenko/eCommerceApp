import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {products_url} from "../constants";

export const getProducts = createAsyncThunk(
    "products/getProducts",
    async (_, thunkAPI) => {
      try {
        const res = await axios(products_url);
        console.log("res", res.data);
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
        console.log("response", response.data); 
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
    sort: "name-a"
  };
  
  export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
      updateSort: (state, action) => {
        state.sort = action.payload;
      },
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
            state.featuredProducts = state.products.filter((product) => product.featured === true);
            state.freeShippingProducts = state.products.filter((product) => product.shipping === true);
            state.filtered_products = [...state.products];
            state.productsError = null;
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


export const { updateSort } = productsSlice.actions;

export default productsSlice.reducer;

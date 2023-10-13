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
  

  const initialState = {
    products: [],
    featuredProducts: [],
    freeShippingProducts: [],
    productsLoading: false, 
    productsError: null,
  };
  
  export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
       
      
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
          state.freeShippingProducts = state.products.filter((product)=> product.shipping === true);
          state.productsError = null; 

        })
        .addCase(getProducts.rejected, (state, action) => {
          state.productsLoading = false; 
          state.productsError = action.error.message; 
        });
    },
  });

  
export const {  } = productsSlice.actions;

export default productsSlice.reducer;

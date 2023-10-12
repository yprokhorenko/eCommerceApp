import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {products_url} from "../constants";
import { useEffect } from "react";



export const getProducts = createAsyncThunk(
    "products/getProducts",
    async (_, thunkAPI) => {
      try {
        const res = await axios(products_url);
        console.log("res", res.data);

        return res.data;


      } catch (err) {
        console.log(err);
        return thunkAPI.rejectWithValue(err);
      }
    }
  );
  


  const initialState = {
    products: [],
    featuredProducts: [],
    loading: false, 
    error: null,
  };
  
  export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
       

    },
    extraReducers: (builder) => {
      builder
        .addCase(getProducts.pending, (state) => {
          state.loading = true; 
          state.error = null; 
        })
        .addCase(getProducts.fulfilled, (state, action) => {
          state.loading = false; 
          state.products = action.payload; 
          state.error = null; 
        })
        .addCase(getProducts.rejected, (state, action) => {
          state.loading = false; 
          state.error = action.error.message; 
        });
    },
  });
export const {  } = productsSlice.actions;

export default productsSlice.reducer;

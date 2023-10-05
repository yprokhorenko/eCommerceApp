import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebarOpen: false,
  isCatalogOpen: false,
  isFavoriteOpen: false
};

export const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setIsSidebarOpen: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    setIsCatalogOpen: (state) => {
      state.isCatalogOpen = !state.isCatalogOpen;
    },
   
  
  },
});

export const { setIsSidebarOpen,setIsCatalogOpen } = navbarSlice.actions;

export default navbarSlice.reducer;

"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};
const cartsSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    setCarts: (state, action) => {
      const carts = action.payload;
      state.carts = carts;
    },
  },
});

export const { setCarts } = cartsSlice.actions;
export default cartsSlice.reducer;
export const useCurrentCarts = (state) => state.carts.carts;

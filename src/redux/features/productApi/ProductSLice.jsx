import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
};

const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const { products } = action.payload;
      state.product = products;
    },
  },
});

export const { addProduct } = ProductSlice.actions;

export default ProductSlice.reducer;

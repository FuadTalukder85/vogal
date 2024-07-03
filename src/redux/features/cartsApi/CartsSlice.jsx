import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: null,
};
const cartsSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCarts: (state, action) => {
      const { carts } = action.payload;
      state.carts = carts;
    },
  },
});

export const { setCarts } = cartsSlice.actions;
export default cartsSlice.reducer;

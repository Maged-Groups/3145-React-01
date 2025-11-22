import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    products: [],
  },
  reducers: {
    addToCart: () => {},
    removeFromCart: () => {},
    emptyCart: () => {},
  },
});

// const state = cartSlice.reducer;

// export default state;

export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.cart.push({
        title: action.payload.title,
        id: action.payload.id,
        img: action.payload.img,
        brand: action.payload.brand,
        price: action.payload.price,
      });
    },

    removeCart: (state, action) => {
      const id = action.payload;
      state.cart = state.cart.filter((itme) => itme.id !== id);
    },
  },
});

export const { addCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;

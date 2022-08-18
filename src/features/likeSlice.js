import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  like: false,
};

export const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    like: (state, action) => {
      state.like = action.payload;
    },
  },
});

export const { like } = likeSlice.actions;

export default likeSlice.reducer;

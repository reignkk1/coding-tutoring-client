import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };

const pageSlice = createSlice({
  name: "postPage",
  initialState,
  reducers: {
    pageIncrease: (state) => {
      state.value = state.value + 1;
    },
    pageReset: (state) => {
      state.value = 0;
    },
  },
});

export const { pageIncrease, pageReset } = pageSlice.actions;

export default pageSlice.reducer;

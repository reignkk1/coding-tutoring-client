import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = "" as "notice" | "teacher" | "student";

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory(
      state,
      action: PayloadAction<"notice" | "teacher" | "student">
    ) {
      return (state = action.payload);
    },
  },
});

export const { setCategory } = categorySlice.actions;
export default categorySlice.reducer;

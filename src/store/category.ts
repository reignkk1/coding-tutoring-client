import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = "" as "notices" | "teacher" | "student";

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory(
      state,
      action: PayloadAction<"notices" | "teacher" | "student">
    ) {
      return (state = action.payload);
    },
  },
});

export const { setCategory } = categorySlice.actions;
export default categorySlice.reducer;

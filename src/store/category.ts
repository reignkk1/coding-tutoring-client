import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = "" as "notice" | "teachers" | "students";

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory(
      state,
      action: PayloadAction<"notice" | "teachers" | "students">
    ) {
      return (state = action.payload);
    },
  },
});

export const { setCategory } = categorySlice.actions;
export default categorySlice.reducer;

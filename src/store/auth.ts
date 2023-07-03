import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface authState {
  authEmail: boolean;
}

const initialState: authState = {
  authEmail: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleAuth: (state, action) => {
      state.authEmail = action.payload;
    },
  },
});

export const { toggleAuth } = authSlice.actions;
export default authSlice.reducer;

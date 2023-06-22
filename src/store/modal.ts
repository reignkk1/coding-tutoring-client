import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface modalState {
  value: boolean;
}

// Define the initial state using that type
const initialState: modalState = {
  value: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.value = true;
    },
    closeModal: (state) => {
      state.value = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice;

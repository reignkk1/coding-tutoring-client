import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IPost {
  id?: number;
  subject?: string;
  title: string;
  content: string;
  area?: string;
  onOrOff?: string;
  member?: {
    id: number;
    nickname: string;
    gender: string;
    ageGroup: string;
    userClassification: string;
    career: string;
  };
}

const initialState = { value: [] as IPost[] };

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    updatePost(state, action: PayloadAction<IPost[]>) {
      state.value = action.payload;
    },
    reUpdatePost(state, action: PayloadAction<IPost[]>) {
      state.value = [...state.value, ...action.payload];
    },
  },
});

export const { updatePost, reUpdatePost } = postSlice.actions;
export default postSlice.reducer;

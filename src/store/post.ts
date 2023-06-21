import { createSlice } from "@reduxjs/toolkit";

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

const postSlice = createSlice({
  name: "post",
  initialState: [] as IPost[],
  reducers: {
    updatePost: (state, action) => {
      state = action.payload;
    },
  },
});

export const { updatePost } = postSlice.actions;
export default postSlice;

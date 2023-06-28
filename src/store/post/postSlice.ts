import { createSlice } from "@reduxjs/toolkit";
import { getNoticesPost, getStudentsPost, getTeachersPost } from "./PostThunk";

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

const initialState = { posts: [] as IPost[], isLoading: false, isError: false };

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // 선생님 게시물

    builder.addCase(getTeachersPost.pending, (state, action) => {
      action.meta.arg === 0 && (state.isLoading = true);
    });
    builder.addCase(getTeachersPost.fulfilled, (state, action) => {
      state.isLoading = false;
      action.meta.arg === 0
        ? (state.posts = action.payload)
        : (state.posts = [...state.posts, ...action.payload]);
    });
    builder.addCase(getTeachersPost.rejected, (state, action) => {
      state.isError = true;
    });

    // 학생 게시물

    builder.addCase(getStudentsPost.pending, (state, action) => {
      action.meta.arg === 0 && (state.isLoading = true);
    });
    builder.addCase(getStudentsPost.fulfilled, (state, action) => {
      state.isLoading = false;
      action.meta.arg === 0
        ? (state.posts = action.payload)
        : (state.posts = [...state.posts, ...action.payload]);
    });
    builder.addCase(getStudentsPost.rejected, (state, action) => {
      state.isError = true;
    });

    // 공지사항 게시물

    builder.addCase(getNoticesPost.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getNoticesPost.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    });
    builder.addCase(getNoticesPost.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

export default postSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import {
  getPost,
  searchSubjectPosts,
  searchTitlePosts,
} from "./api/PostReadThunk";
import { IPost } from "../../types/PostDataType";

const initialState = { posts: [] as IPost[], isLoading: false, isError: false };

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //모든 게시물
    builder.addCase(getPost.pending, (state, action) => {
      const { arg } = action.meta;
      if (arg.page) {
        arg.page === 0 && (state.isLoading = true);
      }
      state.isLoading = true;
    });
    builder.addCase(getPost.fulfilled, (state, action) => {
      const { arg } = action.meta;
      state.isLoading = false;
      if (arg.page) {
        arg.page === 0
          ? (state.posts = action.payload)
          : (state.posts = [...state.posts, ...action.payload]);
      }
      state.posts = action.payload;
    });
    builder.addCase(getPost.rejected, (state, action) => {
      state.isError = true;
    });

    //제목검색
    builder.addCase(searchTitlePosts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(searchTitlePosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    });
    builder.addCase(searchTitlePosts.rejected, (state, action) => {
      state.isError = true;
    });

    //과목 검색

    builder.addCase(searchSubjectPosts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(searchSubjectPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    });
    builder.addCase(searchSubjectPosts.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

export default postSlice.reducer;

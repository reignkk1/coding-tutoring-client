import { createSlice } from "@reduxjs/toolkit";
import {
  getNoticesPost,
  getStudentsPost,
  getTeachersPost,
  searchSubjectStudentPosts,
  searchSubjectTeacherPosts,
  searchTitleStudentPosts,
  searchTitleTeacherPosts,
} from "./api/PostReadThunk";
import { IPost } from "../../types/PostDataType";

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

    // 학생 게시물 제목 검색
    builder.addCase(searchTitleStudentPosts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(searchTitleStudentPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    });
    builder.addCase(searchTitleStudentPosts.rejected, (state, action) => {
      state.isError = true;
    });

    // 선생님 게시물 제목 검색
    builder.addCase(searchTitleTeacherPosts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(searchTitleTeacherPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    });
    builder.addCase(searchTitleTeacherPosts.rejected, (state, action) => {
      state.isError = true;
    });

    // 학생 과목 검색
    builder.addCase(searchSubjectStudentPosts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(searchSubjectStudentPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    });
    builder.addCase(searchSubjectStudentPosts.rejected, (state, action) => {
      state.isError = true;
    });

    // 선생님 과목 검색

    builder.addCase(searchSubjectTeacherPosts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(searchSubjectTeacherPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    });
    builder.addCase(searchSubjectTeacherPosts.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

export default postSlice.reducer;

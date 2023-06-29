import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const token = localStorage.getItem("token");

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

// 게시물 GET

export const getTeachersPost = createAsyncThunk(
  "getTeachersPost",
  async (page: number) => {
    try {
      const response = await axios.get(`/v1/teacherPosts?page=${page}&size=10`);
      if (response.status === 200) return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getStudentsPost = createAsyncThunk(
  "getStudentsPost",
  async (page: number) => {
    try {
      const response = await axios.get(`/v1/studentPosts?page=${page}&size=10`);
      if (response.status === 200) return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getNoticesPost = createAsyncThunk("getNoticesPost", async () => {
  try {
    const response = await axios.get("/v1/notices");
    if (response.status === 200) return response.data;
  } catch (error) {
    console.log(error);
  }
});

// 게시물 제목 Search

export const searchTitleTeacherPosts = createAsyncThunk(
  "searchTitleTeacherPosts",
  async (title: string) => {
    try {
      const response = await axios.get(
        `/v1/teacherPosts?content=${title}&searchType=TITLE`
      );
      if (response.status === 200) return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const searchTitleStudentPosts = createAsyncThunk(
  "searchTitleStudentPosts",
  async (title: string) => {
    try {
      const response = await axios.get(
        `/v1/studentPosts?content=${title}&searchType=TITLE`
      );
      if (response.status === 200) return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

// 희망 언어 선택 시 검색

export const searchSubjectTeacherPosts = createAsyncThunk(
  "searchSubjectTeacherPosts",
  async (subject: string) => {
    try {
      const response = await axios.get(
        `/v1/teacherPosts?content=${subject}&searchType=SUBJECT`
      );
      if (response.status === 200) return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const searchSubjectStudentPosts = createAsyncThunk(
  "searchSubjectStudentPosts",
  async (subject: string) => {
    try {
      const response = await axios.get(
        `/v1/studentPosts?content=${subject}&searchType=SUBJECT`
      );
      if (response.status === 200) return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

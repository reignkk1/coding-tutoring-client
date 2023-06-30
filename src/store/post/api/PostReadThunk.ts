import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const token = localStorage.getItem("token");

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

// 게시물 GET

//category 포맷 함수
const categoryFormat = (category: string) => {
  if (category === "notices") {
    return `${category}`;
  } else {
    return `${category}Posts`;
  }
};

//모든 게시물
export const getPost = createAsyncThunk(
  "getPost",
  async (param: { category: string; page?: number }) => {
    const apiUrl = categoryFormat(param.category);
    try {
      if (param.page) {
        const response = await axios.get(
          `/v1/${apiUrl}?page=${param.page}&size=10`
        );
        if (response.status === 200) return response.data;
      } else {
        const response = await axios.get(`/v1/${apiUrl}`);
        if (response.status === 200) return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

// 게시물 제목 Search
export const searchTitlePosts = createAsyncThunk(
  "seachTitlePosts",
  async (param: { category: string; title: string }) => {
    const apiUrl = categoryFormat(param.category);
    try {
      const response = await axios.get(
        `/v1/${apiUrl}?content=${param.title}&searchType=TITLE`
      );
      if (response.status === 200) return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

// 희망 언어 선택
export const searchSubjectPosts = createAsyncThunk(
  "searchSubjectPosts",
  async (param: { category: string; subject: string }) => {
    const apiUrl = categoryFormat(param.category);
    try {
      const response = await axios.get(
        `/v1/${apiUrl}?content=${param.subject}&searchType=SUBJECT`
      );
      if (response.status === 200) return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

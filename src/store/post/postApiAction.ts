import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IPost } from "../../types/PostDataType";

const token = localStorage.getItem("token");

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

//category 포맷 함수 for READ
const categoryFormat1 = (category: string) => {
  if (category === "notice") {
    return `${category}s`;
  } else {
    return `${category}Posts`;
  }
};

//category 포맷 함수 for DELETE, UPDATE
const categoryFormat2 = (category: string) => {
  if (category === "notice") {
    return `${category}`;
  } else {
    return `${category}Post`;
  }
};

//category 포맷 함수 for CREATE
const categoryFormat3 = (category: string) => {
  if (category === "notice") {
    return `${category}`;
  } else {
    return `${category.toLowerCase()}Post`;
  }
};

// 게시물 READ

//모든 게시물 가져오기
export const getPost = createAsyncThunk(
  "getPost",
  async (param: { category: string; page?: number }) => {
    const apiUrl = categoryFormat1(param.category);
    try {
      if (param.category === "notices") {
        const response = await axios.get(`/v1/${apiUrl}`);
        if (response.status === 200) return response.data;
      } else {
        const response = await axios.get(
          `/v1/${apiUrl}?page=${param.page}&size=10`
        );
        if (response.status === 200) return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

// 게시물 제목으로 검색
export const searchTitlePosts = createAsyncThunk(
  "seachTitlePosts",
  async (param: { category: string; title: string }) => {
    const apiUrl = categoryFormat1(param.category);
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

// 희망 언어로 검색
export const searchSubjectPosts = createAsyncThunk(
  "searchSubjectPosts",
  async (param: { category: string; subject: string }) => {
    const apiUrl = categoryFormat1(param.category);
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

//게시물 DELETE
export const deletePost = createAsyncThunk(
  "deletePost",
  async (param: { category: string; id: string }) => {
    const apiUrl = categoryFormat2(param.category);
    try {
      const response = await axios.delete(`/v1/${apiUrl}/${param.id}`);
      if (response.status === 200) {
        window.location.assign(`/${param.category}`);
        return alert("삭제완료");
      }
    } catch (error) {
      console.log(error);
    }
  }
);

// 게시물 CREATE
export const createPost = createAsyncThunk(
  "createPost",
  async (param: { category: string; data: IPost }) => {
    const apiUrl = categoryFormat3(param.category);
    try {
      const response = await axios.post(`/v1/${apiUrl}`, param.data);
      if (response.status === 200) {
        window.location.assign(`/${param.category.toLowerCase()}`);
        return alert("작성완료");
      }
    } catch (error: any) {
      console.log(error);
    }
  }
);

// 게시물 UPDATE
export const modifyPost = createAsyncThunk(
  "modifyPost",
  async (param: { category: string; data: IPost }) => {
    const apiUrl = categoryFormat2(param.category);
    try {
      const response = await axios.put(
        `/v1/${apiUrl}/${param.data.id}`,
        param.data
      );
      if (response.status === 200) {
        alert("수정완료");
        return window.location.replace(`/${param.category}`);
      }
    } catch (error) {
      console.log(error);
    }
  }
);

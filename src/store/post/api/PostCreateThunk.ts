import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IPost } from "../../../types/PostDataType";

const token = localStorage.getItem("token");

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

// 게시물 POST

export const createTeacherPost = createAsyncThunk(
  "createTeacherPost",
  async (data: IPost) => {
    try {
      const response = await axios.post("/v1/teacherPost", data);
      if (response.status === 200) {
        window.location.assign("/teachers");
        return alert("작성완료");
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const createStudentPost = createAsyncThunk(
  "createStudentPost",
  async (data: IPost) => {
    try {
      const response = await axios.post("/v1/studentPost", data);
      if (response.status === 200) {
        window.location.assign("/students");
        return alert("작성완료");
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const createNoticePost = createAsyncThunk(
  "createNoticePost",
  async (data: IPost) => {
    try {
      const response = await axios.post("/v1/notice", data);
      if (response.status === 200) {
        window.location.assign("/notice");
        return alert("작성완료");
      }
    } catch (error) {
      console.log(error);
    }
  }
);

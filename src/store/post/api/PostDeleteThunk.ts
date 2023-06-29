import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const token = localStorage.getItem("token");

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

// 게시물 DELETE

export const deleteNoticePost = createAsyncThunk(
  "deleteNoticePost",
  async (id: string) => {
    try {
      const response = await axios.delete(`/v1/notice/${id}`);
      if (response.status === 200) {
        window.location.assign("/notice");
        return alert("삭제완료");
      }
    } catch (error) {
      console.log(error);
    }
  }
);
export const deleteStudentPost = createAsyncThunk(
  "deleteStudentPost",
  async (id: string) => {
    try {
      const response = await axios.delete(`/v1/studentPost/${id}`);
      if (response.status === 200) {
        window.location.assign("/students");
        return alert("삭제완료");
      }
    } catch (error) {
      console.log(error);
    }
  }
);
export const deleteTeacherPost = createAsyncThunk(
  "deleteTeacherPost",
  async (id: string) => {
    try {
      const response = await axios.delete(`/v1/teacherPost/${id}`);
      if (response.status === 200) {
        window.location.assign("/teachers");
        return alert("삭제완료");
      }
    } catch (error) {
      console.log(error);
    }
  }
);

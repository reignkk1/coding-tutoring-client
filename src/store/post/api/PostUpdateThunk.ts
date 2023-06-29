import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IPost } from "../../../types/PostDataType";

const token = localStorage.getItem("token");

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

// 게시물 Modify

export const modifyNoticePost = createAsyncThunk(
  "modifyNoticePost",
  async (data: IPost) => {
    try {
      const response = await axios.put(`/v1/notice/${data.id}`, data);
      if (response.status === 200) {
        alert("수정완료");
        return window.location.replace(`/notice`);
      }
    } catch (error) {
      console.log(error);
    }
  }
);
export const modifyStudentPost = createAsyncThunk(
  "modifyStudentPost",
  async (data: IPost) => {
    try {
      const response = await axios.put(`/v1/studentPost/${data.id}`, data);
      if (response.status === 200) {
        alert("수정완료");
        return window.location.replace(`/students`);
      }
    } catch (error) {
      console.log(error);
    }
  }
);
export const modifyTeacherPost = createAsyncThunk(
  "modifyTeacherPost",
  async (data: IPost) => {
    try {
      const response = await axios.put(`/v1/teacherPost/${data.id}`, data);
      if (response.status === 200) {
        alert("수정완료");
        return window.location.replace(`/teachers`);
      }
    } catch (error) {
      console.log(error);
    }
  }
);

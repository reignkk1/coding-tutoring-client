import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const token = localStorage.getItem("token");

axios.defaults.baseURL =
  "http://ec2-52-79-63-208.ap-northeast-2.compute.amazonaws.com:8080";

axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

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

interface IData {
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
    role?: string;
    userClassification: string;
    career: string;
  };
}

export const createTeacherPost = createAsyncThunk(
  "createTeacherPost",
  async (data: IData) => {
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
  async (data: IData) => {
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
  async (data: IData) => {
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

// 삭제, 수정, 검색 API 남음

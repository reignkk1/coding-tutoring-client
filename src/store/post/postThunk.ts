import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL =
  "http://ec2-52-79-63-208.ap-northeast-2.compute.amazonaws.com:8080";

export const getTeachersPost = createAsyncThunk(
  "getTeachersPost",
  async (page: number) => {
    const { data } = await axios.get(`/v1/teacherPosts?page=${page}&size=10`);
    return data;
  }
);

export const getStudentsPost = createAsyncThunk(
  "getStudentsPost",
  async (page: number) => {
    const { data } = await axios.get(`/v1/studentPosts?page=${page}&size=10`);
    return data;
  }
);

export const getNoticesPost = createAsyncThunk("getNoticesPost", async () => {
  const { data } = await axios.get("/v1/notices");
  return data;
});

import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IPost } from "../../../types/PostDataType";

const token = localStorage.getItem("token");

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

// 게시물 Modify

//category 포맷
const categoryFormat = (category: string) => {
  if (category === "notice") {
    return `${category}`;
  } else {
    return `${category}Post`;
  }
};

export const modifyPost = createAsyncThunk(
  "modifyPost",
  async (param: { category: string; data: IPost }) => {
    const apiUrl = categoryFormat(param.category);
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

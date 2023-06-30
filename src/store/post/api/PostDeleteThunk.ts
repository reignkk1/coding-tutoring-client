import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const token = localStorage.getItem("token");

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

//category 포맷 함수
const categoryFormat = (category: string) => {
  if (category === "notice") {
    return `${category}`;
  } else {
    return `${category}Post`;
  }
};

// 게시물 DELETE
export const deletePost = createAsyncThunk(
  "deletePost",
  async (param: { category: string; id: string }) => {
    const apiUrl = categoryFormat(param.category);
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

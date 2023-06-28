import axios from "axios";
import { useEffect, useState } from "react";
import { AnyAction, Dispatch } from "redux";
import { reUpdatePost, updatePost } from "../store/post";
import { useDispatch } from "react-redux";

const token = localStorage.getItem("token");

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

export interface IPost {
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

// 게시물 작성

export function createPost(
  data: IPost,
  category: "TEACHER" | "STUDENT" | "notice",
  token?: string
) {
  const categoryValue =
    category === "TEACHER"
      ? "teacherPost"
      : category === "STUDENT"
      ? "studentPost"
      : "notice";

  return axios
    .post(`/v1/${categoryValue}`, data)
    .then((response) => {
      if (response.status === 200) {
        window.location.assign(
          category === "STUDENT" ? "/students" : "/teachers"
        );
        return alert("작성완료");
      }
    })
    .catch((error) => console.log(error));
}

// 모든 게시물 불러오기
export function useGetPosts(
  category: "teachers" | "students" | "notice",
  page?: number
) {
  const dispatch = useDispatch();

  useEffect(() => {
    const categoryValue =
      category === "teachers"
        ? "teacherPosts"
        : category === "students"
        ? "studentPosts"
        : "notices";
    axios
      .get(`/v1/${categoryValue}?page=${page}&size=10`)
      .then((response) => {
        if (response.status === 200) {
          console.log("data : ", response.data);
          console.log("page : ", page);
          dispatch(
            page === 0 ? updatePost(response.data) : reUpdatePost(response.data)
          );
        }
      })
      .catch((error) => console.log(error));
  }, [dispatch, category, page]);

  return null;
}

// 게시물 삭제
export function deletePost(
  postId: string,
  category: "teachers" | "students" | "notice"
) {
  const categoryValue =
    category === "teachers"
      ? "teacherPost"
      : category === "students"
      ? "studentPost"
      : "notice";
  axios
    .delete(`/v1/${categoryValue}/${postId}`)
    .then((response) => {
      if (response.status === 200) {
        window.location.replace(`/${category}`);
      }
    })
    .catch((error) => console.log(error));
}

// 게시물 수정
export function modifyPost(
  data: IPost,
  category: "teachers" | "students" | "notice"
) {
  const categoryValue =
    category === "teachers"
      ? "teacherPost"
      : category === "students"
      ? "studentPost"
      : "notice";

  axios
    .put(`/v1/${categoryValue}/${data.id}`, data)
    .then((response) => {
      if (response.status === 200) {
        alert("수정완료");
        return window.location.replace(`/${category}`);
      }
    })
    .catch((error) => console.log(error));
}

// 게시물 제목 검색
export function searchTitle(
  title: string,
  dispatch: Dispatch<AnyAction>,
  category: "teachers" | "students" | "notice"
) {
  const categoryValue =
    category === "teachers"
      ? "teacherPosts"
      : category === "students"
      ? "studentPosts"
      : "notices";

  axios
    .get(`v1/${categoryValue}?content=${title}&searchType=TITLE`)
    .then((response) => {
      console.log(response.data);
      dispatch(updatePost(response.data));
    })
    .catch((error) => console.log(error));
}

// 희망언어 클릭시 검색

export function searchSubject(
  subject: string,
  category: "teachers" | "students" | "notice",
  dispatch: Dispatch<AnyAction>
) {
  const categoryValue =
    category === "teachers"
      ? "teacherPosts"
      : category === "students"
      ? "studentPosts"
      : "notices";

  axios
    .get(`v1/${categoryValue}?content=${subject}&searchType=SUBJECT`)
    .then((response) => dispatch(updatePost(response.data)))
    .catch((error) => console.log(error));
}

import axios from "axios";
import { useEffect, useState } from "react";

axios.defaults.baseURL =
  "http://ec2-52-79-63-208.ap-northeast-2.compute.amazonaws.com:8080";

interface IPost {
  id?: number;
  area?: string;
  content: string;
  onOrOff?: string;
  subject?: string;
  title: string;
}

// 게시물 작성
export function createPost(data: IPost, category: string) {
  const categoryValue =
    category === "TEACHER"
      ? "teacherPost"
      : category === "STUDENT"
      ? "studentPost"
      : "notice";

  axios
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
export function useGetPosts(category?: string) {
  const [posts, setPosts] = useState<IPost[]>();

  const categoryValue =
    category === "teachers"
      ? "teacherPosts"
      : category === "students"
      ? "studentPosts"
      : "notices";

  useEffect(() => {
    axios
      .get(`/v1/${categoryValue}`)
      .then((response) => {
        if (response.status === 200) {
          setPosts(response.data);
        }
      })
      .catch((error) => console.log(error));
  }, [category]);

  return posts;
}

// 게시물 삭제
export function deletePost(postId: string, category: string) {
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
export function modifyPost(data: IPost, category: string) {
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

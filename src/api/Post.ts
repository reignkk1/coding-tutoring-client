import axios from "axios";
import { AnyAction, Dispatch } from "redux";

axios.defaults.baseURL =
  "http://ec2-52-79-63-208.ap-northeast-2.compute.amazonaws.com:8080";

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
    .then()
    .catch((error) => console.log(error));
}

import axios from "axios";
import { user } from "../UserData";

axios.defaults.baseURL =
  "http://ec2-52-79-63-208.ap-northeast-2.compute.amazonaws.com:8080";

interface ICreatePost {
  area?: string;
  content?: string;
  onOrOff?: string;
  subject?: string;
  title: string;
}

interface IGetPost {
  id: number;
  area: string;
  content: string;
  onOrOff: string;
  subject: string;
  title: string;
}

// 게시물 작성
export function createPost(data: ICreatePost, category: string) {
  const categoryValue =
    category === "teachers"
      ? "teacherPost"
      : category === "students"
      ? "studentPost"
      : "notice";
  axios
    .post(`/v1/${categoryValue}`, data)
    .then((response) => {
      if (response.status === 200) {
        window.location.assign(user.isStudent ? "/students" : "/teachers");
        return alert("작성완료");
      }
    })
    .catch((error) => console.log(error));
}

// 모든 게시물 불러오기
export function getPosts(
  setPosts: React.Dispatch<React.SetStateAction<IGetPost[] | undefined>>,
  category?: string
) {
  const categoryValue =
    category === "teachers"
      ? "teacherPosts"
      : category === "students"
      ? "studentPosts"
      : "notices";
  axios
    .get(`/v1/${categoryValue}`)
    .then((response) => {
      if (response.status === 200) {
        setPosts(response.data);
      }
    })
    .catch((error) => console.log(error));
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
    .then((response) => response.data)
    .catch((error) => console.log(error));
}

//유저 아이디로 post를 받아옴
export const getPostsByUserId = async (userId: string) => {
  try {
    const res = await axios({
      url: `/teacherPost/myPosts/${userId}`,
      method: "get",
    });
    if (res.status === 200) {
      return res.data.myPostList;
    }
  } catch (error) {
    console.log(error);
  }
};

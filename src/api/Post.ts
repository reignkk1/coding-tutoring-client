import axios from "axios";
import { user } from "../UserData";
import { useState } from "react";

axios.defaults.baseURL =
  "http://ec2-52-79-63-208.ap-northeast-2.compute.amazonaws.com:8080";

interface ICreatePost {
  area: string;
  content: string;
  onOrOff: string;
  subject: string;
  title: string;
}

interface IGetPost extends ICreatePost {
  id: number;
}

export function createPost(data: ICreatePost) {
  axios
    .post("/v1/teacherPost/post", data)
    .then((response) => {
      if (response.status === 200) {
        window.location.assign(user.isStudent ? "/students" : "/teachers");
        return alert("작성완료");
      }
    })
    .catch((error) => console.log(error));
}

export function useGetPosts() {
  const [posts, setPosts] = useState<IGetPost[]>();

  axios
    .get("/v1/teacherPost/posts")
    .then((response) => {
      if (response.status === 200) {
        setPosts(response.data);
      }
    })
    .catch((error) => console.log(error));

  return posts;
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

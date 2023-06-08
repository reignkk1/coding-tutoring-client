import axios from "axios";
import { user } from "../UserData";

axios.defaults.baseURL =
  "http://ec2-52-79-63-208.ap-northeast-2.compute.amazonaws.com:8080";

interface ICreatePost {
  area: string;
  content: string;
  onOrOff: string;
  subject: string;
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

export function getPosts(
  setPosts: React.Dispatch<React.SetStateAction<IGetPost[] | undefined>>
) {
  axios
    .get("/v1/teacherPost/posts")
    .then((response) => {
      if (response.status === 200) {
        setPosts(response.data);
      }
    })
    .catch((error) => console.log(error));
}

// export function deletePost(postId) {
//   axios
//     .delete(`/v1/teacherPost/post/${postId}`)
//     .then((response) => response.data);
// }

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

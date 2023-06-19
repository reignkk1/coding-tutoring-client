import { useContext } from "react";

import styled from "styled-components";
import Wrapper from "../components/common/Wrapper";
import { Profile } from "./PostDetail";

import { careerFormat, genderFormat } from "../util/format";
import PostList from "../components/mypage/PostList";
import { AuthContext } from "../context/AuthContext";

export default function MyPage(): JSX.Element {
  const { user } = useContext(AuthContext);
  const {
    img,
    nickname,
    career,
    userClassification,
    gender,
    studentPostResponseDtos,
    teacherPostResponseDtos,
  } = user || {};
  console.log(user);

  const havePosts =
    studentPostResponseDtos?.length + teacherPostResponseDtos?.length !== 0;

  return (
    <Wrapper>
      <Profile>
        <ImgContainer>
          <img src={img} alt="profile-img" />
        </ImgContainer>

        <div className="right">
          <p className="nickname">
            {nickname}&nbsp;
            {userClassification === "STUDENT" ? "학생" : "선생님"}
          </p>
          <p className="career">
            {careerFormat(`${career}`)} / {genderFormat(`${gender}`)}
          </p>
        </div>
      </Profile>

      <PostContainer>
        {!havePosts && (
          <Img src={require("../assets/noImg.png")} alt="no-img" />
        )}
        {havePosts && userClassification === "STUDENT" && (
          <Posts>
            {studentPostResponseDtos.map((post: any) => (
              <PostList post={post} category="students" />
            ))}
          </Posts>
        )}
        {havePosts && userClassification === "TEACHER" && (
          <Posts>
            {teacherPostResponseDtos.map((post: any) => (
              <PostList post={post} category="teachers" />
            ))}
          </Posts>
        )}
      </PostContainer>
    </Wrapper>
  );
}

export const ImgContainer = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 100%;
  overflow: hidden;

  img {
    width: 100%;
    object-fit: cover;
    aspect-ratio: 1/1;
  }
`;
const Posts = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-top: 4rem;
`;

const Img = styled.img`
  opacity: 0.5;
`;

const PostContainer = styled.div`
  width: 70%;
  margin-inline: auto;
  margin-block: 6rem;
  div {
    display: flex;
    flex-direction: column;
  }
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  li {
    margin-bottom: 2.5rem;
    padding: 1rem 1.5rem;

    overflow: hidden;
    clip-path: polygon(
      0 0,
      calc(100% - 16px) 0,
      100% 16px,
      100% 100%,
      100% 100%,
      0 100%,
      0 100%,
      0 0
    );
    background-color: #c9fd35;

    display: flex;
    align-items: center;

    color: #0e1620;

    transition: all 0.1s ease-out;

    &:hover {
      transform: translateY(-0.5rem);
    }
  }
`;

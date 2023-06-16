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
    id,
    nickname,
    career,
    userClassification,
    gender,
    studentPostResponseDtos,
    teacherPostResponseDtos,
  } = user || {};
  console.log(user);

  return (
    <Wrapper>
      <Container>
        <Profile>
          <ImgContainer>
            <img
              src={`${
                gender === "MALE"
                  ? "https://i.pinimg.com/564x/40/98/2a/40982a8167f0a53dedce3731178f2ef5.jpg"
                  : "https://i.pinimg.com/236x/11/27/98/11279881d6995a0aef4915b3906aae3f.jpg"
              }`}
              alt="profile-img"
            />
          </ImgContainer>

          <div className="right">
            <p className="nickname">
              {nickname}&nbsp;
              {userClassification === "STUDENT" ? "학생" : "선생님"}
            </p>
            <p className="career">
              {careerFormat(`${career}`)} / {genderFormat(`${gender}`)}
            </p>
            <button>쪽지 보내기</button>
          </div>
        </Profile>

        <Posts>
          {userClassification === "STUDENT" &&
            studentPostResponseDtos.map((post: any) => (
              <PostList post={post} />
            ))}
          {userClassification === "TEACHER" &&
            teacherPostResponseDtos.map((post: any) => (
              <PostList post={post} />
            ))}
        </Posts>
      </Container>
    </Wrapper>
  );
}

export const Container = styled.div`
  width: 70%;
  margin-inline: auto;
  padding-block: 4rem;
  display: flex;
  flex-direction: column;
`;

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
  background-color: yellow;
`;

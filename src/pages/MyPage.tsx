import { useEffect, useContext } from "react";
import { useNavigate } from "react-router";

import styled from "styled-components";
import Wrapper from "../components/common/Wrapper";
import { Profile } from "./PostDetail";
import Button from "../components/common/Button";

import { ageFormat, careerFormat, genderFormat } from "../util/format";
import PostList from "../components/mypage/PostList";
import { AuthContext } from "../context/AuthContext";

export default function MyPage(): JSX.Element {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const alertMoreInfo = () => {
      if (!user?.nickname) {
        window.alert(
          "교습 요청, 등록 및 쪽지 기능 활성화를 위해 추가 정보를 입력해 주세요."
        );
        navigate("/profile/update");
      }
    };
    alertMoreInfo();
  }, [navigate, user?.nickname]);

  const {
    img,
    nickname,
    ageGroup,
    career,
    userClassification,
    gender,
    studentPostResponseDtos,
    teacherPostResponseDtos,
  } = user || {};

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
            {careerFormat(`${career}`)} / {genderFormat(`${gender}`)} / &nbsp;
            {ageFormat(`${ageGroup}`)}
          </p>
          <Button
            onClick={() => {
              navigate("/profile/update", { state: user });
            }}
          >
            수정
          </Button>
        </div>
      </Profile>

      <PostContainer>
        {!havePosts && <p className="noPost">작성된 글이 없습니다.</p>}

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

  @media (max-width: 650px) {
    width: 6rem;
    height: 6rem;
  }

  &:hover {
    cursor: pointer;
  }
`;
const Posts = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const PostContainer = styled.div`
  width: 70%;
  margin-inline: auto;
  margin-block: 2rem;
  padding-inline: 4rem;

  .noPost {
    width: fit-content;
    margin-inline: auto;
  }
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
    margin-bottom: 1.5rem;
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
      cursor: pointer;
    }
    @media (max-width: 500px) {
      flex-direction: column;
      text-align: center;
    }
  }

  transition: all 0.3s ease-in-out;

  @media (max-width: 850px) {
    width: 100%;
  }
  @media (max-width: 650px) {
    padding-inline: 2rem;
  }
`;

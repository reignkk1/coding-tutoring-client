import { useState, useEffect } from "react";

import styled from "styled-components";
import Wrapper from "../components/common/Wrapper";
import { Profile } from "./PostDetail";

import PostList from "../components/mypage/PostList";
import { getPostsByUserId } from "../api/Post";

export default function MyPage(): JSX.Element {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPostsByUserId("tttt").then((res) => {
      setPosts(res);
    });
  }, []);

  return (
    <Wrapper>
      <Container>
        <Profile>
          <ImgContainer>
            <img
              src="https://i.pinimg.com/564x/92/32/a2/9232a2b8aba31dfe9a744fb232813f7f.jpg"
              alt="profile-img"
            />
          </ImgContainer>

          <div className="right">
            <p className="nickname">김성연&nbsp;선생님</p>
            <p className="career">3년차&nbsp;풀스택 개발자</p>
            <button>쪽지 보내기</button>
          </div>
        </Profile>

        <Posts>게시글 목록 영역(글이 없을때 보여줄게 필요함)</Posts>
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

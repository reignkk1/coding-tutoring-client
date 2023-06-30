import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { usePost } from "../../hooks/usePost";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { getPost } from "../../store/post/postApiAction";
import useCategory from "../../hooks/useCategory";
import { setCategory } from "../../store/category";

const Container = styled.div`
  width: 70%;
  margin-inline: auto;
  margin-block: 4rem;
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
    @media (max-width: 500px) {
      flex-direction: column;
      text-align: center;
    }
  }
  @media (max-width: 850px) {
    width: 100%;
  }
`;

const ImgBox = styled.div`
  margin-right: 3rem;
  text-align: center;
  img {
    margin-bottom: 0.5rem;
  }
  span {
    font-family: regular;
    font-size: 14px;
  }
  @media (max-width: 500px) {
    margin-right: 0;
  }
`;
const InfoBox = styled.div`
  line-height: 1.7;
  h2 {
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
  span {
    width: fit-content;
    border-radius: 5px;
    padding: 0.1rem 0.5rem;
    background-color: #0e1620;

    font-family: regular;
    line-height: 1.5;
    color: #c9fd35;

    @media (max-width: 500px) {
      font-size: 0.8rem;
      align-self: center;
    }
  }

  .area {
    display: flex;
    align-items: center;

    .icon {
      font-size: 1.2rem;
    }
  }
`;

export default function NoticePostList() {
  const navigate = useNavigate();
  const dispatch = useDispatch<ThunkDispatch<any, void, any>>();

  const [, categoryDispatch] = useCategory();
  const { posts, isLoading } = usePost();

  useEffect(() => {
    categoryDispatch(setCategory("notice"));
  }, [categoryDispatch]);

  useEffect(() => {
    dispatch(getPost({ category: "notice" }));
  }, [dispatch]);

  return isLoading ? (
    <div>로딩중..</div>
  ) : (
    <Container>
      <ul>
        {posts?.map((post, index) => (
          <li key={index}>
            <ImgBox>
              <img src="/admin-img.png" alt="프로필 사진" />
              <span>운영자</span>
            </ImgBox>
            <InfoBox>
              <h2
                onClick={() =>
                  navigate(`/notice/post/${post.id}`, {
                    state: post,
                  })
                }
              >
                {post.title}
              </h2>
            </InfoBox>
          </li>
        ))}
      </ul>
    </Container>
  );
}

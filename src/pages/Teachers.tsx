import styled from "styled-components";
import TopSheet from "../components/post/TopSheet";
import FindPostList from "../components/post/FindPostList";
import Wrapper from "../components/common/Wrapper";
import { useEffect } from "react";
import useCategory from "../hooks/useCategory";
import usePostScrollPage from "../hooks/usePostScrollPage";
import { getPost } from "../store/post/postApiAction";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { setCategory } from "../store/category";

const Container = styled.div`
  margin-top: 4rem;
  padding-inline: 4rem;

  @media (max-width: 650px) {
    padding-inline: 2rem;
  }
`;

export default function Teachers() {
  const [page, setPage] = usePostScrollPage();
  const [, categoryDispatch] = useCategory();

  const dispatch = useDispatch<ThunkDispatch<any, void, any>>();

  useEffect(() => {
    // console.log("페이지 처음 마운트", page);
    setPage(0);
    categoryDispatch(setCategory("teacher"));
  }, [categoryDispatch, setPage]);

  useEffect(() => {
    // console.log("이제야 제대로", page);
    dispatch(getPost({ category: "teacher", page }));
  }, [dispatch, page]);

  return (
    <Wrapper>
      <Container>
        <TopSheet />
        <FindPostList />
      </Container>
    </Wrapper>
  );
}

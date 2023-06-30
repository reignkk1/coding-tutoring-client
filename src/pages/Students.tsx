import { useEffect } from "react";
import Wrapper from "../components/common/Wrapper";
import TopSheet from "../components/post/TopSheet";
import FindPostList from "../components/post/FindPostList";
import styled from "styled-components";
import usePostScrollPage from "../hooks/usePostScrollPage";
import { getPost } from "../store/post/api/PostReadThunk";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import useCategory from "../hooks/useCategory";
import { setCategory } from "../store/category";

const Container = styled.div`
  margin-top: 4rem;
  padding-inline: 4rem;

  @media (max-width: 650px) {
    padding-inline: 2rem;
  }
`;

export default function Students() {
  const dispatch = useDispatch<ThunkDispatch<any, void, any>>();
  // const [category, categoryDispatch] = useCategory();

  const category = window.location.pathname.replace("/", "");

  const [page, setPage] = usePostScrollPage();

  // useEffect(() => {
  //   setPage(0);
  //   categoryDispatch(setCategory("student"));
  // }, [categoryDispatch, setPage]);
  useEffect(() => {
    setPage(0);
  }, [setPage]);

  useEffect(() => {
    dispatch(getPost({ category, page }));
  }, [page]);

  return (
    <Wrapper>
      <Container>
        <TopSheet />
        <FindPostList />
      </Container>
    </Wrapper>
  );
}

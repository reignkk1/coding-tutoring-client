import { useEffect } from "react";
import Wrapper from "../components/common/Wrapper";
import TopSheet from "../components/postPage/TopSheet";
import FindPostList from "../components/postPage/FindPostList";
import styled from "styled-components";
import usePostScrollPage from "../hooks/usePostScrollPage";
import { getStudentsPost } from "../store/post/PostThunk";
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
  const [, categoryDispatch] = useCategory();

  const [page, setPage] = usePostScrollPage();

  useEffect(() => {
    setPage(0);
    categoryDispatch(setCategory("students"));
  }, [categoryDispatch, setPage]);

  useEffect(() => {
    dispatch(getStudentsPost(page));
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

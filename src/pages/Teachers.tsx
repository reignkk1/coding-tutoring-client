import styled from "styled-components";
import TopSheet from "../components/postPage/TopSheet";
import FindPostList from "../components/postPage/FindPostList";
import Wrapper from "../components/common/Wrapper";
import { useEffect } from "react";
import useCategory from "../hooks/useCategory";
import usePostScrollPage from "../hooks/usePostScrollPage";
import { getTeachersPost } from "../store/post/PostThunk";
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
    setPage(0);
    categoryDispatch(setCategory("teachers"));
  }, [categoryDispatch, setPage]);

  useEffect(() => {
    dispatch(getTeachersPost(page));
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

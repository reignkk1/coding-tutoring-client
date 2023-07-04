import { useEffect } from "react";
import Wrapper from "../components/common/Wrapper";
import TopSheet from "../components/post/TopSheet";
import FindPostList from "../components/post/FindPostList";
import styled from "styled-components";
import usePostScrollPage from "../hooks/usePostScrollPage";
import { getPost } from "../store/post/postApiAction";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { setCategory } from "../store/category";
import { pageReset } from "../store/post/pageSlice";

const Container = styled.div`
  margin-top: 4rem;
  padding-inline: 4rem;

  @media (max-width: 650px) {
    padding-inline: 2rem;
  }
`;

export default function Students() {
  const dispatch = useDispatch<ThunkDispatch<any, void, any>>();
  const [page] = usePostScrollPage();

  useEffect(() => {
    dispatch(pageReset());
    dispatch(setCategory("student"));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getPost({ category: "student", page }));
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

import styled from "styled-components";
import Wrapper from "../components/common/Wrapper";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useLocation } from "react-router-dom";
import useWriteEditForm from "../hooks/useWriteEditForm";
import UserInfo from "./../components/write/UserInfo";
import EditFormList from "../components/write/WriteEditFormList";
import Button from "../components/common/Button";
import { ICategory } from "../types/category";
import { setInitialState } from "../store/post/PostWriteEditFormSlice";
import {
  modifyStudentPost,
  modifyTeacherPost,
} from "../store/post/api/PostUpdateThunk";

const Container = styled.div`
  height: 200vh;
  max-width: 900px;
  margin: 0 auto;
  padding-top: 50px;
  padding-inline: 2rem;
  button {
    margin-left: 5px;
  }

  transition: all 0.3s ease-in-out;

  @media (max-width: 450px) {
    font-size: 0.9rem;
  }
`;

const Required = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 50px;
`;

const ButtonBox = styled.div`
  text-align: center;
`;

interface IPost {
  id: number;
  title: string;
  area: string;
  content: string;
  onOrOff: string;
  subject: string;
}

export default function FindPageEdit({ category }: ICategory) {
  const post: IPost = useLocation().state;
  const { user } = useContext(AuthContext);

  const [state, dispatch] = useWriteEditForm();
  const { area, content, onOrOff, desiredSubjects, title } = state;

  useEffect(() => {
    dispatch(
      setInitialState({
        onOrOff: post.onOrOff,
        subject: post.subject,
        area: post.area,
        title: post.title,
        desiredSubjects: [post.subject],
        content: post.content,
      })
    );
  }, [dispatch, post]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (content.length > 255) return alert("255자 이하로 작성해주세요.");
    const data = {
      id: post.id,
      area,
      content,
      onOrOff,
      subject: desiredSubjects?.join(""),
      title,
    };
    if (category === "students") return dispatch(modifyStudentPost(data));
    if (category === "teachers") return dispatch(modifyTeacherPost(data));
  };

  return (
    <Wrapper>
      <Container>
        <UserInfo userData={user} />
        <Required>필수 *</Required>
        <form onSubmit={handleSubmit}>
          <EditFormList />
          <ButtonBox>
            <Button type="submit">수정하기</Button>
          </ButtonBox>
        </form>
      </Container>
    </Wrapper>
  );
}

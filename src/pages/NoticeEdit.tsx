import styled from "styled-components";
import Wrapper from "../components/common/Wrapper";
import { useEffect } from "react";
import Button from "../components/common/Button";
import Editor from "../components/write/Editor";
import { useLocation } from "react-router-dom";
import { modifyPost } from "../api/Post";
import useWriteEditForm from "../hooks/useWriteEditForm";

const Container = styled.div`
  height: 100vh;
  width: 900px;
  margin: 0 auto;
  padding-top: 50px;
`;
const Title = styled.input`
  width: 100%;
  padding: 8px 10px;
  font-size: 16px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  outline: none;
  border-radius: 5px;
  margin-bottom: 20px;
  &:focus {
    border-color: black;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  text-align: center;
`;

interface INoticePost {
  id: number;
  title: string;
  content: string;
}

export default function NoticeEdit() {
  const post: INoticePost = useLocation().state;

  const [state, dispatch] = useWriteEditForm();
  const { content, title } = state;

  useEffect(() => {
    dispatch({
      type: "SET_STATE",
      value: {
        title: post.title,
        content: post.content,
      },
    });
  }, [post, dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({ type: "SET_TITLE", value: e.target.value });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      id: post.id,
      title,
      content,
    };
    modifyPost(data, "notice");
  };

  return (
    <Wrapper>
      <Container>
        <form onSubmit={handleSubmit}>
          <Label htmlFor="title">제목</Label>
          <Title id="title" value={title} onChange={handleChange} />
          <Editor />
          <ButtonContainer>
            <Button type="submit">수정하기</Button>
          </ButtonContainer>
        </form>
      </Container>
    </Wrapper>
  );
}

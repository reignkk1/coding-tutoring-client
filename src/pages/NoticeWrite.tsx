import styled from "styled-components";
import Wrapper from "../components/common/Wrapper";
import Editor from "./../components/write/Editor";
import Button from "../components/common/Button";

import useWriteEditForm from "../hooks/useWriteEditForm";
import { setTitle } from "../store/post/PostWriteEditFormSlice";
import { createPost } from "../store/post/postApiAction";

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

export default function NoticeWrite() {
  const [state, dispatch] = useWriteEditForm();

  const { title, content } = state;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(setTitle(e.target.value));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      title,
      content,
    };

    dispatch(createPost({ category: "notice", data }));
  };
  return (
    <Wrapper>
      <Container>
        <form onSubmit={handleSubmit}>
          <Label htmlFor="title">제목</Label>
          <Title id="title" value={title} onChange={handleChange} />
          <Editor />
          <ButtonContainer>
            <Button type="submit">작성하기</Button>
          </ButtonContainer>
        </form>
      </Container>
    </Wrapper>
  );
}

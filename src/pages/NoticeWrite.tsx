import styled from "styled-components";
import Wrapper from "../components/common/Wrapper";
import Editor from "./../components/write/Editor";
import Button from "../components/common/Button";
import { createPost } from "../api/Post";
import useWriteEditForm from "../hooks/useWriteEditForm";
import { editTitle } from "../store/editPost";

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
    dispatch(editTitle(e.target.value));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      title,
      content,
    };
    createPost(data, "notice");
    window.location.assign("/notice");
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

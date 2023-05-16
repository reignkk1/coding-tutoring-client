import { styled } from "styled-components";
import Wrapper from "../components/common/Wrapper";
import Editor from "../components/write/Editor";
import Button from "../components/postPage/Button";

const Container = styled.div`
  height: 120vh;
  width: 900px;
  margin: 0 auto;
  padding-top: 50px;
`;

const TitleInput = styled.input`
  width: 100%;
  padding: 8px 10px;
  margin-top: 10px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  outline: none;
  border-radius: 5px;
  margin-bottom: 20px;
  &:focus {
    border-color: black;
  }
`;

const Label = styled.label``;

const ButtonBox = styled.div`
  text-align: center;
`;

export default function Write() {
  return (
    <Wrapper>
      <Container>
        <Label htmlFor="title">제목</Label>
        <TitleInput id="title" placeholder="제목을 입력해주세요." />
        <Label>내용</Label>
        <Editor />
        <ButtonBox>
          <Button>작성하기</Button>
        </ButtonBox>
      </Container>
    </Wrapper>
  );
}

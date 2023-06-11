import { useLocation } from "react-router-dom";
import Wrapper from "../components/common/Wrapper";
import styled from "styled-components";
import Button from "../components/postPage/Button";
import axios from "axios";
import { deletePost } from "../api/Post";

const Container = styled.div`
  padding: 100px;
`;
const Title = styled.div`
  margin-bottom: 100px;
`;
const Content = styled.div`
  margin-bottom: 100px;
`;
const ButtonContainer = styled.div``;

export default function NoticeDetail() {
  const post = useLocation().state;

  const handleDelete = () => {
    deletePost(post.id, "notice");
  };

  return (
    <Wrapper>
      <Container>
        <Title>내용</Title>
        <Content>{post.content}</Content>
        <ButtonContainer>
          <Button onClick={handleDelete}>삭제</Button>
        </ButtonContainer>
      </Container>
    </Wrapper>
  );
}

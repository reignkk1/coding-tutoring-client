import { useLocation } from "react-router-dom";
import Wrapper from "../components/common/Wrapper";
import styled from "styled-components";
import Button from "../components/postPage/Button";
import { deletePost } from "../api/Post";
import Parser from "html-react-parser";

const Container = styled.div`
  padding: 100px;
`;
const Title = styled.div`
  margin-bottom: 100px;
  font-size: 30px;
  font-weight: bold;
`;
const Content = styled.div`
  margin-bottom: 100px;

  line-height: 1.8;
`;
const ButtonContainer = styled.div``;

interface INoticePost {
  id: string;
  title: string;
  content: string;
}

export default function NoticeDetail() {
  const post: INoticePost = useLocation().state;

  const handleDelete = () => {
    if (window.confirm("정말로 삭제하겠습니까?")) {
      deletePost(post.id, "notice");
      window.location.assign("/notice");
    }
    return;
  };

  return (
    <Wrapper>
      <Container>
        <Title>{post.title}</Title>
        <Content>{Parser(post.content)}</Content>
        <ButtonContainer>
          <Button onClick={handleDelete}>삭제</Button>
        </ButtonContainer>
      </Container>
    </Wrapper>
  );
}

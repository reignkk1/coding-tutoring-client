import { useLocation, useNavigate } from "react-router-dom";
import Wrapper from "../components/common/Wrapper";
import styled from "styled-components";
import Button from "../components/common/Button";
import { deletePost } from "../api/Post";
import Parser from "html-react-parser";
import useIsAdmin from "../hooks/useIsAdmin";

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
const ButtonContainer = styled.div`
  button {
    margin-right: 10px;
  }
`;

interface INoticePost {
  id: string;
  title: string;
  content: string;
}

export default function NoticeDetail() {
  const post: INoticePost = useLocation().state;
  const navigate = useNavigate();

  const isAdmin = useIsAdmin();

  const handleDelete = () => {
    if (window.confirm("정말로 삭제하겠습니까?")) {
      deletePost(post.id, "notice");
      window.location.assign("/notice");
    }
    return;
  };

  const handleModify = () => navigate("edit", { state: post });
  return (
    <Wrapper>
      <Container>
        <Title>{post.title}</Title>
        <Content>{Parser(post.content)}</Content>
        {isAdmin && (
          <ButtonContainer>
            <Button onClick={handleDelete}>삭제</Button>
            <Button onClick={handleModify}>수정</Button>
          </ButtonContainer>
        )}
      </Container>
    </Wrapper>
  );
}

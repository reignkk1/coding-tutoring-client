import styled from "styled-components";
import Wrapper from "../components/common/Wrapper";
import TitleBox from "../components/postPage/TitleBox";
import Button from "../components/common/Button";
import { useNavigate } from "react-router-dom";
import NoticePostList from "../components/postPage/NoticePostList";
import useIsAdmin from "./../hooks/useIsAdmin";

const Container = styled.div`
  margin-top: 4rem;
  padding-inline: 4rem;
  button {
    margin-top: 30px;
  }
`;

export default function Notice() {
  const navigate = useNavigate();
  const isAdmin = useIsAdmin();

  return (
    <Wrapper>
      <Container>
        <TitleBox
          title="공지사항"
          firstExplain="과외바다의 새소식, 이벤트, 행사 정보를 공유하는 공간입니다."
        />
        {isAdmin && <Button onClick={() => navigate("write")}>작성하기</Button>}

        <NoticePostList />
      </Container>
    </Wrapper>
  );
}

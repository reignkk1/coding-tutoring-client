import styled from "styled-components";
import Wrapper from "../components/common/Wrapper";
import PostBox from "../components/postPage/PostBox";
import SearchBar from "../components/postPage/SearchBar";
import TitleBox from "../components/postPage/TitleBox";
import Button from "../components/postPage/Button";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  margin-top: 50px;
  form {
    margin-top: 30px;
    margin-bottom: 50px;
  }
`;

export default function Notice() {
  const navigate = useNavigate();
  const posts = [
    {
      id: 1,
      img: `https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`,
      name: `운영자`,
      category: `students`,
      subject: `수학`,
      intro: `대원외고 졸 수학/영어 수업`,
      education: `대학교 화학 졸업`,
      address: `강남구 청담동`,
    },
    {
      id: 1,
      img: `https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`,
      name: `운영자`,
      category: `students`,
      subject: `수학`,
      intro: `대원외고 졸 수학/영어 수업`,
      education: `대학교 화학 졸업`,
      address: `강남구 청담동`,
    },
    {
      id: 1,
      img: `https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`,
      name: `운영자`,
      category: `students`,
      subject: `수학`,
      intro: `대원외고 졸 수학/영어 수업`,
      education: `대학교 화학 졸업`,
      address: `강남구 청담동`,
    },
    {
      id: 1,
      img: `https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`,
      name: `운영자`,
      category: `students`,
      subject: `수학`,
      intro: `대원외고 졸 수학/영어 수업`,
      education: `대학교 화학 졸업`,
      address: `강남구 청담동`,
    },
    {
      id: 1,
      img: `https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`,
      name: `운영자`,
      category: `students`,
      subject: `수학`,
      intro: `대원외고 졸 수학/영어 수업`,
      education: `대학교 화학 졸업`,
      address: `강남구 청담동`,
    },
    {
      id: 1,
      img: `https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`,
      name: `운영자`,
      category: `students`,
      subject: `수학`,
      intro: `대원외고 졸 수학/영어 수업`,
      education: `대학교 화학 졸업`,
      address: `강남구 청담동`,
    },
  ];

  return (
    <Wrapper>
      <Container>
        <TitleBox
          title="공지사항"
          firstExplain="과외바다의 새소식, 이벤트, 행사 정보를 공유하는 공간입니다."
        />
        <SearchBar placeholder="제목을 입력해주세요!" />
        <Button onClick={() => navigate("write")}>✏️ 작성하기</Button>
        <PostBox posts={posts} />
      </Container>
    </Wrapper>
  );
}

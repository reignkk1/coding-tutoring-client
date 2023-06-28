import styled from "styled-components";
import Wrapper from "../components/common/Wrapper";
import SearchBar from "../components/postPage/SearchBar";
import Button from "../components/common/Button";
import TitleBox from "../components/postPage/TitleBox";
import { subjects } from "../components/write/SelectData";
import FindPostList from "../components/postPage/FindPostList";
import { searchSubject, useGetPosts } from "../api/Post";
import { ICategory } from "../types/category";
import { usePost } from "../hooks/usePost";
import { useEffect, useState } from "react";

const Container = styled.div`
  margin-top: 4rem;
  padding-inline: 4rem;

  @media (max-width: 650px) {
    padding-inline: 2rem;
  }
`;
const Top = styled.section`
  display: flex;
  gap: 2rem;
  justify-content: space-between;

  @media (max-width: 850px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: space-around;
`;

const Subject = styled.div`
  max-width: 600px;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(6, auto);
  row-gap: 10px;
  column-gap: 10px;

  transition: all 0.3s ease-in-out;

  @media (max-width: 850px) {
    width: 100%;
    grid-template-columns: repeat(5, auto);
  }

  @media (max-width: 650px) {
    grid-template-columns: repeat(4, auto);
  }

  @media (max-width: 450px) {
    grid-template-columns: repeat(3, auto);
  }

  button {
    background-color: #c9fd35;

    &:hover {
      background-color: #93ba27;
    }
  }
`;

export default function FindPage({ category }: ICategory) {
  const [, dispatch] = usePost();
  const [page, setPage] = useState(0);

  console.log("FindPage 재랜더링");
  useGetPosts(category, page);

  useEffect(() => {
    setPage(0);
  }, [category]);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    // 사용자의 스크롤 위치가 맨 밑에 있을 시
    if (scrollTop + clientHeight >= scrollHeight) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSubjectClick = (subject: string) =>
    searchSubject(subject, category, dispatch);

  return (
    <Wrapper>
      <Container>
        <Top>
          <Left>
            <TitleBox
              title={`과외 ${category === "teachers" ? "선생님" : "학생"} 찾기`}
              firstExplain="연결이 성사되어도 수수료가 없어요"
              secondExplain="연락 요청은 5건, 직접 연락은 3건까지 매월 이용할 수 있어요"
            />

            <SearchBar
              category={category}
              placeholder={"제목을 입력해주세요."}
            />
          </Left>
          <Subject>
            {subjects.map((subject, index) => (
              <Button
                onClick={() => handleSubjectClick(subject.value)}
                key={index}
              >
                {subject.name}
              </Button>
            ))}
          </Subject>
        </Top>
        <FindPostList category={category} />
      </Container>
    </Wrapper>
  );
}

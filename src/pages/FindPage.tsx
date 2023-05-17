import styled from "styled-components";
import Wrapper from "../components/common/Wrapper";
import PostBox from "../components/postPage/PostBox";
import SearchBar from "../components/postPage/SearchBar";
import Button from "../components/postPage/Button";
import TitleBox from "../components/postPage/TitleBox";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  margin-top: 50px;
`;

const SearchBox = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;
const Search = styled.div`
  display: flex;
  align-items: center;
`;
const Subject = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 400px;
  button {
    margin-right: 15px;
    margin-bottom: 15px;
  }
`;

export default function FindPage({ category }: { category: string }) {
  const navigate = useNavigate();

  const Subjects = [
    `전체`,
    `국어`,
    `수학`,
    `사회`,
    `과학`,
    `영어`,
    `물리`,
    `화학`,
    `생물`,
    `영어회화`,
    `일본어`,
    `중국어`,
  ];

  const posts = [
    {
      id: 1,
      img: `https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`,
      name: `민겸`,
      category: `students`,
      subject: `수학`,
      intro: `대원외고 졸 수학/영어 수업`,
      education: `대학교 화학 졸업`,
      address: `강남구 청담동`,
    },
    {
      id: 1,
      img: `https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`,
      name: `민겸`,
      category: `students`,
      subject: `수학`,
      intro: `대원외고 졸 수학/영어 수업`,
      education: `대학교 화학 졸업`,
      address: `강남구 청담동`,
    },
    {
      id: 1,
      img: `https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`,
      name: `민겸`,
      category: `students`,
      subject: `수학`,
      intro: `대원외고 졸 수학/영어 수업`,
      education: `대학교 화학 졸업`,
      address: `강남구 청담동`,
    },
    {
      id: 1,
      img: `https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`,
      name: `민겸`,
      category: `students`,
      subject: `수학`,
      intro: `대원외고 졸 수학/영어 수업`,
      education: `대학교 화학 졸업`,
      address: `강남구 청담동`,
    },
    {
      id: 1,
      img: `https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`,
      name: `민겸`,
      category: `students`,
      subject: `수학`,
      intro: `대원외고 졸 수학/영어 수업`,
      education: `대학교 화학 졸업`,
      address: `강남구 청담동`,
    },
    {
      id: 1,
      img: `https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`,
      name: `민겸`,
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
          title={`과외 ${category === "teachers" ? "선생님" : "학생"} 찾기`}
          firstExplain="연결이 성사되어도 수수료가 없어요"
          secondExplain="연락 요청은 5건, 직접 연락은 3건까지 매월 이용할 수 있어요"
        />
        <SearchBox>
          <Search>
            <Button>과목</Button>
            <SearchBar
              placeholder={`어느 ${
                category === "teachers" ? "선생님" : "학생"
              }을 찾으시나요?`}
            />
          </Search>

          <Subject>
            {Subjects.map((subject) => (
              <Button>{subject}</Button>
            ))}
          </Subject>
        </SearchBox>
        <Button onClick={() => navigate("write")}>✏️ 작성하기</Button>
        <PostBox posts={posts} />
      </Container>
    </Wrapper>
  );
}

import styled from "styled-components";
import Wrapper from "../components/common/Wrapper";
import SearchBar from "../components/postPage/SearchBar";
import Button from "../components/postPage/Button";
import TitleBox from "../components/postPage/TitleBox";
import { useNavigate } from "react-router-dom";
import { subjects } from "../components/write/SelectData";
import FindPostList from "../components/postPage/FindPostList";

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
  width: 600px;

  display: flex;
  flex-wrap: wrap;

  button {
    margin-right: 15px;
    margin-bottom: 15px;

    background-color: #c9fd35;

    &:hover {
      background-color: #b2e22d;
    }
  }
`;

export default function FindPage({ category }: { category: string }) {
  const navigate = useNavigate();

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
            <Button>카테고리</Button>
            <SearchBar
              placeholder={`어느 분야의 ${
                category === "teachers" ? "선생님" : "학생"
              }을 찾으시나요?`}
            />
          </Search>

          <Subject>
            {subjects.map((subject, index) => (
              <Button key={index}>{subject.name}</Button>
            ))}
          </Subject>
        </SearchBox>
        <Button onClick={() => navigate("/write")}>✏️ 작성하기</Button>
        <FindPostList category={category} />
      </Container>
    </Wrapper>
  );
}

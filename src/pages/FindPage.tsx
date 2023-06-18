import styled from "styled-components";
import Wrapper from "../components/common/Wrapper";
import SearchBar from "../components/postPage/SearchBar";
import Button from "../components/postPage/Button";
import TitleBox from "../components/postPage/TitleBox";
import { subjects } from "../components/write/SelectData";
import FindPostList from "../components/postPage/FindPostList";

const Container = styled.div`
  margin-top: 4rem;
  padding-inline: 4rem;
`;
const Top = styled.section`
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Subject = styled.div`
  width: 600px;

  display: grid;
  grid-template-columns: repeat(6, auto);
  row-gap: 10px;
  column-gap: 10px;

  button {
    background-color: #c9fd35;

    &:hover {
      background-color: #93ba27;
    }
  }
`;

export default function FindPage({ category }: { category: string }) {
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
              placeholder={`어느 분야의 ${
                category === "teachers" ? "선생님" : "학생"
              }을 찾으시나요?`}
            />
          </Left>

          <Subject>
            {subjects.map((subject, index) => (
              <Button key={index}>{subject.name}</Button>
            ))}
          </Subject>
        </Top>

        <FindPostList category={category} />
      </Container>
    </Wrapper>
  );
}

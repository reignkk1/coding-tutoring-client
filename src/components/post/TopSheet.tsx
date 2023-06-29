import styled from "styled-components";
import SearchBar from "./SearchBar";
import Button from "../common/Button";
import { useDispatch } from "react-redux";
import { subjects } from "../write/SelectData";
import TitleBox from "./TitleBox";
import useCategory from "../../hooks/useCategory";
import { ThunkDispatch } from "redux-thunk";
import {
  searchSubjectStudentPosts,
  searchSubjectTeacherPosts,
} from "../../store/post/api/PostReadThunk";

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

export default function TopSheet() {
  const dispatch = useDispatch<ThunkDispatch<any, void, any>>();
  const [category] = useCategory();

  const handleSubjectClick = (subject: string) => {
    if (category === "students")
      return dispatch(searchSubjectStudentPosts(subject));
    if (category === "teachers")
      return dispatch(searchSubjectTeacherPosts(subject));
  };

  return (
    <Top>
      <Left>
        <TitleBox
          title={`과외 ${category === "teachers" ? "선생님" : "학생"} 찾기`}
          firstExplain="연결이 성사되어도 수수료가 없어요"
          secondExplain="연락 요청은 5건, 직접 연락은 3건까지 매월 이용할 수 있어요"
        />

        <SearchBar placeholder={"제목을 입력해주세요."} />
      </Left>
      <Subject>
        {subjects.map((subject, index) => (
          <Button onClick={() => handleSubjectClick(subject.value)} key={index}>
            {subject.name}
          </Button>
        ))}
      </Subject>
    </Top>
  );
}

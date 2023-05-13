import { styled } from "styled-components";
import Wrapper from "../components/common/Wrapper";

const Container = styled.div`
  margin-top: 50px;
`;
const Title = styled.div`
  h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  div {
    margin-bottom: 5px;
  }
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
const Form = styled.form`
  margin-left: 10px;
`;
const Input = styled.input`
  margin-right: 10px;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  padding: 8px;
  font-size: 20px;
`;
const Button = styled.button`
  background-color: #f3f4f6;
  padding: 6px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  height: 35px;
`;

const PostBox = styled.section`
  width: 100%;
  margin-top: 100px;
  margin-bottom: 100px;
  div {
    display: flex;
    flex-direction: column;
  }
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  li {
    display: flex;
    margin-bottom: 45px;
  }
`;

const ImgBox = styled.div`
  text-align: center;
  margin-right: 50px;
  img {
    margin-bottom: 10px;
  }
  span {
    font-size: 14px;
  }
`;
const InfoBox = styled.div`
  font-size: 18px;
  line-height: 1.7;
  h2 {
    font-weight: bold;
    font-size: 24px;
  }
  span {
    color: blue;
  }
`;

export default function FindPage({ category }: { category: string }) {
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
        <Title>
          <h2>{`과외 ${category === "teachers" ? "선생님" : "학생"} 찾기`}</h2>
          <div>연결이 성사되어도 수수료가 없어요</div>
          <div>연락 요청은 5건, 직접 연락은 3건까지 매월 이용할 수 있어요</div>
        </Title>
        <SearchBox>
          <Search>
            <Button>과목</Button>
            <Form>
              <Input
                placeholder={`어느 ${
                  category === "teachers" ? "선생님" : "학생"
                }을 찾으시나요?`}
              />
              <Button>🔎 검색</Button>
            </Form>
          </Search>
          <Subject>
            {Subjects.map((subject) => (
              <Button>{subject}</Button>
            ))}
          </Subject>
        </SearchBox>
        <PostBox>
          <ul>
            {posts.map((post) => (
              <li>
                <ImgBox>
                  <img src={post.img} alt="프로필 사진" />
                  <span>{post.name}</span>
                </ImgBox>
                <InfoBox>
                  <h2>{post.subject}</h2>
                  <span>{post.intro}</span>
                  <p>{post.education}</p>
                  <p>{post.address}</p>
                </InfoBox>
              </li>
            ))}
          </ul>
        </PostBox>
      </Container>
    </Wrapper>
  );
}

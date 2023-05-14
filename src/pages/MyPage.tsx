import { useState, useEffect } from "react";
import Wrapper from "../components/common/Wrapper";
import { styled } from "styled-components";
import PostList from "../components/mypage/PostList";
import Category from "../components/mypage/Category";

export default function MyPage(): JSX.Element {
  //임의로 만든 데이터
  const userData = {
    name: "한현",
    img: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    posts: [
      {
        id: 1,
        category: "teachers",
        subject: "수학",
        intro: "대원외고 졸 수학/영어 수업",
        education: "대학교 화학 졸업",
        address: "강남구 청담동",
      },
      {
        id: 2,
        category: "teachers",
        subject: "물리",
        intro: "대원외고 졸 수학/영어 수업",
        education: "대학교 화학 졸업",
        address: "강남구 청담동",
      },
      {
        id: 3,
        category: "teachers",
        subject: "공통과학",
        intro: "대원외고 졸 수학/영어 수업",
        education: "대학교 화학 졸업",
        address: "강남구 청담동",
      },
      {
        id: 1,
        category: "students",
        subject: "피아노",
        intro: "성인이고 취미로 배우고 싶어요",
        sex: "여",
        age: "20대 중반",
        grade: "대학생",
        relation: "본인",
        address: "강남구 개포동",
      },
      {
        id: 2,
        category: "students",
        subject: "중국어",
        intro: "HSK 3급 자격증 준비하고 있습니다.",
        sex: "여",
        age: "20대 중반",
        grade: "대학생",
        relation: "본인",
        address: "강남구 개포동",
      },
    ],
  };
  const [selected, setSelected] = useState("teachers");
  const [posts, setPosts] = useState(
    userData.posts.filter((post) => post.category === "teachers")
  );

  const changeSelected = (categoryName: string) => {
    setSelected(categoryName);
  };

  useEffect(() => {
    setPosts(userData.posts.filter((post) => post.category === selected));
  }, [selected]);

  return (
    <Wrapper>
      <Container>
        <Profile>
          <div className="top">
            <ImgContainer>
              <img src={userData.img} alt="profile-img" />
            </ImgContainer>
            <Button>편집</Button>
          </div>
          <div className="bottom">
            <h1>{userData.name}</h1>
          </div>
        </Profile>
        <Find>
          <Category selected={selected} changeSelected={changeSelected} />
          <Posts>
            {posts.map((post) => (
              <PostList key={post.id} post={post} />
            ))}
          </Posts>
        </Find>
      </Container>
    </Wrapper>
  );
}

export const Container = styled.div`
  width: 70%;
  margin-inline: auto;
  padding-block: 4rem;
  display: flex;
  flex-direction: column;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;

  .top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .bottom {
    margin-top: 2rem;
    font-size: 2rem;
    font-weight: 600;
  }
`;

export const ImgContainer = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 100%;
  overflow: hidden;

  img {
    width: 100%;
    object-fit: cover;
    aspect-ratio: 1/1;
  }
`;

const Button = styled.div`
  background-color: #fff;
  padding: 0.8rem 1rem;
  border: 1px solid #0000006e;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background-color: #00000011;
  }
`;

const Find = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

const Posts = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  gap: 1rem;
`;

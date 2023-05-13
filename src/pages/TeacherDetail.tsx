import { useState } from "react";
import { styled } from "styled-components";
import Wrapper from "../components/common/Wrapper";
import { Container, ImgContainer } from "./MyPage";
import Category from "../components/detail/Category";

export default function TeacherDetail() {
  const [selected, setSelected] = useState("teachers");

  const changeSelected = (categoryName: string) => {
    setSelected(categoryName);
  };
  const post = {
    name: "한현",
    img: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    id: 1,
    category: "students",
    subject: "수학",
    intro: "대원외고 졸 수학/영어 수업",
    education: "대학교 화학 졸업",
    address: "강남구 청담동",
    description: [],
  };
  return (
    <Wrapper>
      <Container>
        <Profile>
          <div className="left">
            <ImgContainer>
              <img src={post.img} alt="profile-img" />
            </ImgContainer>
            <p>{post.name}</p>
          </div>
          <div className="right">
            <p>{post.subject}</p>
            <p>{post.education}</p>
            <p>{post.address}</p>
          </div>
        </Profile>
        <Category selected={selected} changeSelected={changeSelected} />
        <SectionContainer>
          <Section id="intro">
            <div>
              그러다가 또 하나의 길을 택했습니다. 먼저 길과 똑같이 아름답고,
              아마 더 나은 듯도 했지요. 풀이 더 무성하고 사람을 부르는
              듯했으니까요. 사람이 밟은 흔적은 먼저 길과 비슷하기는 했지만,
              -중략- 오랜 세월이 흐른 다음 나는 한숨 지으며 이야기하겠지요. "두
              갈래 길이 숲 속으로 나 있었다, 그래서 나는 - 사람이 덜 밟은 길을
              택했고, 그것이 내 운명을 바꾸어 놓았다"라고
            </div>
          </Section>
          <Section id="info">
            <div className="border">
              <div>
                <span>교습과목</span>
                <span>수학</span>
              </div>
              <div>
                <span>교습수단</span>
                <span>오프라인 교습만 가능해요</span>
              </div>
              <div>
                <span>교습가능지역</span>
                <span>[서울] 송파구, 강남구, 서초구학</span>
              </div>
              <div>
                <span>교습횟수</span>
                <span>교습 주당 2회</span>
              </div>
              <div>
                <span>교습비용</span>
                <span>교습비용 협의</span>
              </div>
              <div>
                <span>교습희망학생</span>
                <span>무관</span>
              </div>
            </div>
          </Section>
          <Section id="teacherInfo">
            <div className="border">
              <div>
                <span>교습과목</span>
                <span>수학</span>
              </div>
              <div>
                <span>교습수단</span>
                <span>오프라인 교습만 가능해요</span>
              </div>
              <div>
                <span>교습가능지역</span>
                <span>[서울] 송파구, 강남구, 서초구학</span>
              </div>
              <div>
                <span>교습횟수</span>
                <span>교습 주당 2회</span>
              </div>
              <div>
                <span>교습비용</span>
                <span>교습비용 협의</span>
              </div>
              <div>
                <span>교습희망학생</span>
                <span>무관</span>
              </div>
            </div>
          </Section>
        </SectionContainer>
      </Container>
    </Wrapper>
  );
}

export const Profile = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;

  .left {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      margin-top: 1rem;
    }
  }

  .right {
    font-size: 1rem;

    p {
      margin-bottom: 0.8rem;

      &:first-child {
        font-size: 1.3rem;
        font-weight: bold;
      }
    }
  }
`;

const SectionContainer = styled.section`
  background-color: yellow;
`;

const Section = styled.section`
  background-color: yellow;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid black;

  &#info,
  &#teacherInfo {
    .border {
      width: 70%;

      div {
        display: flex;
        padding: 1rem;

        span {
          &:first-child {
            width: 50%;
            font-weight: 700;
          }
        }
      }
    }
  }

  &#intro {
    padding: 1rem;
  }
`;

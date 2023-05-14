import { useState } from "react";
import { styled } from "styled-components";
import Wrapper from "../components/common/Wrapper";
import { Container, ImgContainer } from "./MyPage";
import TCategory from "../components/detail/TCategory";

export default function TeacherDetail() {
  const [selected, setSelected] = useState("intro");

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
        <TCategory selected={selected} changeSelected={changeSelected} />
        <SectionContainer>
          <Section id="intro">
            <div>
              저는 여태까지 대학 입학 후 학림학원에수 의대반 전담 수학클리닉
              조교를 하거나 국어학원에서 비문학 클리닉 조교로 일하는 등 가르쳐본
              경험이 풍부합니다. 다만 조교로 일할 때 한 사람에게 전담하여
              가르치기 힘들고 동시에 여러명을 케어해야만 한다는 점에서 성적
              향상을 비약적으로 할 수 없었다는 점이 아쉬웠는데 개인과외 또는
              그룹과외를 하게 된다면 빠른 성적향상을 기대해 볼 수 있을것
              같습니다. 저는 현재 학과 내에서 과대를 맡고 있을만큼 친화력도
              강하고 무조건 성과를 내기 위해 일에 대한 집착도 있습니다. 개념부터
              탄탄히 하여 문제를 해석해나가 보이지 않던 문제의 풀이법까지 확실히
              찾아내는 과정을 학생들에게 보여주고 싶습니다
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
                <span>사용자 NO / 닉네임</span>
                <span>1072061 / 헌신의굴거리나무53</span>
              </div>
              <div>
                <span>이름/성별/연령대</span>
                <span>강 ✱✱ 선생님 / 남 / 20대 초반</span>
              </div>
              <div>
                <span>대학교 학력</span>
                <span>서울대학교 기계공학과 휴학중</span>
              </div>
              <div>
                <span>대학원 학력</span>
                <span>대학원 학력 없음</span>
              </div>
              <div>
                <span>거주지</span>
                <span>서울특별시 노원구 중계동 거주</span>
              </div>
              <div>
                <span>개인교습 경력</span>
                <span>경력 2년</span>
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

const SectionContainer = styled.section``;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgba(201, 201, 201, 0.701);
  padding-block: 2rem;
  font-size: 1.2rem;

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

          &:nth-child(2) {
            color: blue;
            font-weight: bold;
          }
        }
      }
    }
  }

  &#intro {
    padding-inline: 1rem;
    div {
      line-height: 2rem;
    }
  }
`;

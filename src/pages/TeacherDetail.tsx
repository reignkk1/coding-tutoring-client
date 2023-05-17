import { useState } from "react";
import styled from "styled-components";
import Wrapper from "../components/common/Wrapper";
import { Container, ImgContainer } from "./MyPage";
import TCategory from "../components/detail/TCategory";

export default function TeacherDetail() {
  const [selected, setSelected] = useState("intro");

  const changeSelected = (categoryName: string) => {
    setSelected(categoryName);
  };
  const post = {
    userNum: 1072061,
    nickName: "헌신의굴거리나무",
    name: "강호",
    img: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    sex: "남",
    age: "20대 중반",
    education: "서울대학교 기계공학과 휴학중",
    career: "2년",
    address: "서울특별시 노원구 중계동 거주",

    category: "teachers",
    subject: "수학, 과학, 물리",
    intro: "",
    how: "온라인 / 오프라인",
    area: "서울 전체",
    times: "주당 1회",
    cost: "비용 협의",
    hopeStudent: "초등학생, 중학생, 고등학생",
  };
  return (
    <Wrapper>
      <Container>
        <Profile>
          <div className="left">
            <ImgContainer>
              <img src={post.img} alt="profile-img" />
            </ImgContainer>
            <p>{post.nickName}</p>
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
            <h3>교습 소개</h3>
            <div>
              단순 이론 학습 뿐 아니라 해당 개념의 문제 풀이를 통해 좀 더 빠른
              이해를 돕습니다. - 스터디 플래너 활용을 확인하여서 해당 학생의
              과목별 학업 수준에 따라 학습량을 코칭합니다. - 학습한 내용을 다시
              학생이 설명할 수 있게끔 연습합니다.
            </div>
          </Section>
          <Section id="info">
            <div className="border">
              <h3>교습 정보</h3>
              <div>
                <span>교습과목</span>
                <span>{post.subject}</span>
              </div>
              <div>
                <span>교습수단</span>
                <span>{post.how}</span>
              </div>
              <div>
                <span>교습가능지역</span>
                <span>{post.area}</span>
              </div>
              <div>
                <span>교습횟수</span>
                <span>{post.times}</span>
              </div>
              <div>
                <span>교습비용</span>
                <span>{post.cost}</span>
              </div>
              <div>
                <span>교습희망학생</span>
                <span>{post.hopeStudent}</span>
              </div>
            </div>
          </Section>
          <Section id="teacherInfo">
            <div className="border">
              <h3>선생님 정보</h3>
              <div>
                <span>사용자 NO / 닉네임</span>
                <span>
                  {post.userNum} / {post.nickName}
                </span>
              </div>
              <div>
                <span>이름/성별/연령대</span>
                <span>
                  {post.name} 선생님 / {post.sex} / {post.age}
                </span>
              </div>
              <div>
                <span>대학교 학력</span>
                <span>{post.education}</span>
              </div>
              <div>
                <span>거주지</span>
                <span>{post.address}</span>
              </div>
              <div>
                <span>개인교습 경력</span>
                <span>{post.career}</span>
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

      h3 {
        font-size: 2rem;
        font-weight: bold;
        padding: 2rem 1rem;
      }

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

    h3 {
      font-size: 2rem;
      font-weight: bold;
      padding: 2rem 1rem 1rem 1rem;
    }

    div {
      padding: 1rem;
      line-height: 2rem;
    }
  }
`;

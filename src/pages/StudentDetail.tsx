import { useState } from "react";
import { styled } from "styled-components";
import Wrapper from "../components/common/Wrapper";
import { Container, ImgContainer } from "./MyPage";
import SCategory from "../components/detail/SCategory";

export default function TeacherDetail() {
  const [selected, setSelected] = useState("request");

  const changeSelected = (categoryName: string) => {
    setSelected(categoryName);
  };
  const post = {
    name: "윤스맘",
    img: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    id: 1,
    category: "teachers",
    subject: "영어",
    intro: "고1 영어 내신 과외",
    sex: "여",
    age: "50대 중반",
    grade: "고등학생",
    relation: "자녀",
    address: "경기도 안양시 동안구 거주",
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
            <p>
              {post.grade}/{post.relation}
            </p>
            <p>{post.address}</p>
            <p>
              {post.name}/{post.sex}/{post.age}
            </p>
          </div>
        </Profile>
        <SCategory selected={selected} changeSelected={changeSelected} />
        <SectionContainer>
          <Section id="request">
            <div>영어 문법,독해,내신 수업</div>
          </Section>
          <Section id="info">
            <div className="border">
              <div>
                <span>교습과목</span>
                <span>영어</span>
              </div>
              <div>
                <span>교습수단</span>
                <span>오프라인 교습만 가능해요</span>
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
                <span>희망선생님</span>
                <span>전문교습선생님</span>
              </div>
            </div>
          </Section>
          <Section id="studentInfo">
            <div className="border">
              <div>
                <span>사용자 NO / 닉네임</span>
                <span>1087400 / 윤스맘</span>
              </div>
              <div>
                <span>이름/성별/연령대</span>
                <span>이 ✱✱ 님 / 여 / 50대 초반</span>
              </div>
              <div>
                <span>교습 수강자 구분</span>
                <span>고등학생 / 자녀</span>
              </div>
              <div>
                <span>거주지</span>
                <span>경기도 안양시 동안구</span>
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
  &#studentInfo {
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

  &#request {
    padding-inline: 1rem;
    div {
      line-height: 2rem;
    }
  }
`;

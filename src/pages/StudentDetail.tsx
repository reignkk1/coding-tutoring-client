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
    userNum: 1087400,
    nickName: "윤스맘",
    name: "이윤화",
    img: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    sex: "여",
    age: "50대 중반",
    grade: "고등학생",
    relation: "자녀",
    address: "경기도 안양시 동안구 거주",

    category: "students",
    subject: "영어",
    request: "고1 영어 내신 과외",
    how: "오프라인",
    times: "주당 1회",
    cost: "비용 협의",
    hopeTeacher: "전문교습선생님",
    hopeTeacherSex: "남",
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
            <p>
              {post.grade} / {post.relation}
            </p>
            <p>{post.address}</p>
            <p>
              {post.name} 님 / {post.sex} / {post.age}
            </p>
          </div>
        </Profile>
        <SCategory selected={selected} changeSelected={changeSelected} />
        <SectionContainer>
          <Section id="request">
            <h3>교습 요청</h3>
            <div>{post.request}</div>
          </Section>
          <Section id="info">
            <div className="border">
              <h3>교습 희망 정보</h3>
              <div>
                <span>교습 과목</span>
                <span>{post.subject}</span>
              </div>
              <div>
                <span>교습 수단</span>
                <span>{post.how}</span>
              </div>
              <div>
                <span>교습 횟수</span>
                <span>{post.times}</span>
              </div>
              <div>
                <span>교습 비용</span>
                <span>{post.cost}</span>
              </div>
              <div>
                <span>희망 선생님</span>
                <span>{post.hopeTeacher}</span>
              </div>
              <div>
                <span>희망 선생님 성별</span>
                <span>{post.hopeTeacherSex}</span>
              </div>
            </div>
          </Section>
          <Section id="studentInfo">
            <div className="border">
              <h3>수강생 정보</h3>
              <div>
                <span>사용자 NO / 닉네임</span>
                <span>
                  {post.userNum} / {post.nickName}
                </span>
              </div>
              <div>
                <span>이름/성별/연령대</span>
                <span>
                  {post.name} 님 / {post.sex} / {post.age}
                </span>
              </div>
              <div>
                <span>교습 수강자 구분</span>
                <span>
                  {post.grade} / {post.relation}
                </span>
              </div>
              <div>
                <span>거주지</span>
                <span>{post.address}</span>
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

  &#request {
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

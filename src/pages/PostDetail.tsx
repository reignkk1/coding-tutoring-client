import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Container, ImgContainer } from "./MyPage";
import Wrapper from "../components/common/Wrapper";
import Button from "../components/postPage/Button";
import { deletePost } from "../api/Post";

interface IPost {
  id: string;
  title: string;
  content: string;
  onOrOff: string;
  area: string;
  userId: string;
  subject: string;
}

export default function PostDetail({ category }: { category: string }) {
  const navigate = useNavigate();
  const post: IPost = useLocation().state;
  const content = post.content;

  return (
    <Wrapper>
      <Container>
        <Profile>
          <ImgContainer
            onClick={() => {
              navigate(`/view/hhhh`);
              // navigate(`/view/${post.userId}`);
            }}
          >
            <img
              src="https://i.pinimg.com/564x/92/32/a2/9232a2b8aba31dfe9a744fb232813f7f.jpg"
              alt="profile-img"
            />
          </ImgContainer>

          <div className="right">
            <p className="nickname">
              김성연&nbsp;
              {category === "teachers" ? "선생님" : "학생"}
            </p>
            <p className="career">3년차&nbsp;풀스택 개발자</p>
            <button>쪽지 보내기</button>
          </div>
        </Profile>
        <Buttons>
          <Button onClick={() => deletePost(post.id, category)}>삭제</Button>
        </Buttons>

        <Section id="intro">
          <p className="index">
            {category === "teachers" ? "교습 소개" : "교습 요청"}
          </p>
          <div className="detail">
            <h3>{post.title}</h3>
            <div
              className="description"
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>
          </div>
        </Section>
        <Section id="lesson-info">
          <p className="index">
            {category === "teachers" ? "교습 정보" : "교습 희망 정보"}
          </p>
          <div className="detail">
            <span>교습과목</span>
            <span>{post.subject.toLowerCase()}</span>
          </div>
          <div className="detail">
            <span>교습수단</span>
            <span>{post.onOrOff.toLowerCase()}</span>
          </div>
        </Section>
        <Section id="user-nfo">
          <p className="index">
            {category === "teachers" ? "선생님 정보" : "학생 정보"}
          </p>
          <div className="detail">
            <span>경력</span>
            <span>3년차</span>
          </div>
          <div className="detail">
            <span>성별/연령대</span>
            <span>남/20대</span>
          </div>
          <div className="detail">
            <span>거주지</span>
            <span>{post.area}</span>
          </div>
        </Section>
      </Container>
    </Wrapper>
  );
}

export const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  padding-block: 2rem;

  .right {
    p {
      margin-bottom: 1rem;

      &.nickname {
        font-size: 1.2rem;
        font-weight: 600;
      }
    }

    button {
      width: 8rem;
      padding-block: 0.5rem;

      background-color: green;
      border-radius: 0.5rem;

      font-size: 1rem;
      font-weight: 600;
      color: white;

      transition: all 0.1s ease-in-out;
    }
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;

  padding: 2rem 1rem;

  border-bottom: 1px solid #697a794d;

  .index {
    margin-bottom: 1rem;

    font-size: 1.2rem;
    font-weight: 600;
  }

  .detail {
    margin-top: 1rem;

    .description {
      margin-top: 1rem;
    }

    span {
      &:first-child {
        margin-right: 1rem;
      }
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
`;

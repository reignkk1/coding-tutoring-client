import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ImgContainer } from "./MyPage";
import Wrapper from "../components/common/Wrapper";
import Modal from "../components/common/Modal";
import MessageSendBox from "../components/notes/MessageSendBox";
import { ageFormat, careerFormat, genderFormat } from "../util/format";
import { AuthContext } from "../context/AuthContext";
import Button from "../components/common/Button";
import useModal from "../hooks/useModal";
import { ICategory } from "../types/category";
import { openModal } from "../store/modal";
import parse from "html-react-parser";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { deletePost } from "../store/post/postApiAction";

interface IPost {
  id: string;
  title: string;
  subject: string;
  content: string;
  onOrOff: string;
  area: string;
  member: {
    id: string;
    nickname: string;
    gender: string;
    ageGroup: string;
    userClassification: string;
    career: string;
  };
}

export default function PostDetail({ category }: ICategory) {
  const { user } = useContext(AuthContext);
  const dispatch = useDispatch<ThunkDispatch<any, void, any>>();

  const [, modalDispatch] = useModal();

  const navigate = useNavigate();
  const post: IPost = useLocation().state;

  const { title, content, subject, onOrOff, area, member } = post;

  const handleDelete = () => {
    if (window.confirm("정말로 삭제하겠습니까?")) {
      dispatch(deletePost({ category, id: post.id }));
    }
  };

  const handleModify = () => navigate("edit", { state: post });

  return (
    <Wrapper>
      <Container>
        <Profile>
          <ImgContainer
            onClick={() => {
              navigate(`/view/${member.id}`);
            }}
          >
            <img
              src={`${
                post.member.gender === "MALE"
                  ? "https://i.pinimg.com/564x/40/98/2a/40982a8167f0a53dedce3731178f2ef5.jpg"
                  : "https://i.pinimg.com/236x/11/27/98/11279881d6995a0aef4915b3906aae3f.jpg"
              }`}
              alt="profile-img"
            />
          </ImgContainer>

          <div className="right">
            <p className="nickname">
              {member.nickname}&nbsp;
              {category === "teacher" ? "선생님" : "학생"}
            </p>
            <p className="career">{careerFormat(`${member.career}`)}</p>

            {!(user && user.id === member.id) && (
              <Button
                onClick={() => {
                  if (!user) {
                    alert("로그인이 필요한 서비스 입니다.");
                  } else if (user && !user.nickname) {
                    navigate("/profile/update");
                  } else if (user && user.nickname) {
                    modalDispatch(openModal());
                  }
                }}
              >
                쪽지 보내기
              </Button>
            )}

            {user && user.nickname && (
              <Modal>
                <MessageSendBox
                  receiverId={member.id}
                  receiverNickname={member.nickname}
                />
              </Modal>
            )}
          </div>
        </Profile>
        {user && user.nickcname && user.id === member.id && (
          <Buttons>
            <Button onClick={handleDelete}>삭제</Button>
            <Button onClick={handleModify}>수정</Button>
          </Buttons>
        )}

        <Section id="intro">
          <p className="index">
            {category === "teacher" ? "교습 소개" : "학생 소개"} *
          </p>
          <div className="detail">
            <h3>{title}</h3>
            <div>{parse(content)}</div>
          </div>
        </Section>
        <Section id="lesson-info">
          <p className="index">
            {category === "teacher" ? "교습 정보" : "교습 희망 정보"} *
          </p>
          <div className="detail">
            <span>교습과목</span>
            <span>{subject.toLowerCase()}</span>
          </div>
          <div className="detail">
            <span>교습수단</span>
            <span>{onOrOff.toLowerCase()}</span>
          </div>
        </Section>
        <Section id="user-nfo">
          <p className="index">
            {category === "teacher" ? "선생님 정보" : "학생 정보"} *
          </p>
          <div className="detail">
            <span>경력</span>
            <span>{careerFormat(`${member.career}`)}</span>
          </div>
          <div className="detail">
            <span>성별/연령대</span>
            <span>
              {genderFormat(`${member.gender}`)} /&nbsp;
              {ageFormat(`${member.ageGroup}`)}
            </span>
          </div>
          <div className="detail">
            <span>거주지</span>
            <span>{area}</span>
          </div>
        </Section>
      </Container>
    </Wrapper>
  );
}

export const Profile = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  gap: 1.5rem;

  padding-block: 2rem;

  .right {
    p {
      margin-bottom: 1rem;

      &.nickname {
        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }
        font-size: 1.2rem;
        line-height: 1.3;
        font-family: regular;
      }
    }
  }

  @media (max-width: 650px) {
    width: 80%;
  }
`;

export const Container = styled.div`
  width: 70%;
  margin-inline: auto;
  padding-block: 4rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 650px) {
    width: 80%;
  }

  @media (max-width: 450px) {
    width: 90%;
    padding-block: 2rem;
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
    font-family: regular;
    color: #c9fd35;
  }

  .detail {
    margin-top: 1rem;
    line-height: 2;
    h3 {
      font-family: regular;
      font-size: 1.2rem;
      margin-bottom: 1.3rem;
    }
    .description {
      margin-top: 1rem;
    }

    span {
      &:first-child {
        margin-right: 1rem;
        font-family: regular;
      }
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.8rem;
`;

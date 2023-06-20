import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ImgContainer } from "./MyPage";
import Wrapper from "../components/common/Wrapper";
import Button from "../components/postPage/Button";
import { deletePost } from "../api/Post";
import { useState } from "react";
import Modal from "../components/common/Modal";
import MessageSendBox from "./../components/detail/MessageSendBox";
import { ageFormat, careerFormat, genderFormat } from "../util/format";
import { AuthContext } from "../context/AuthContext";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { IModalAction } from "../reducers/modal";

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

export default function PostDetail({ category }: { category: string }) {
  const { user } = useContext(AuthContext);

  const dispatch = useDispatch<Dispatch<IModalAction>>();

  const navigate = useNavigate();
  const post: IPost = useLocation().state;

  const { title, content, subject, onOrOff, area, member } = post;

  const handleDelete = () => {
    if (window.confirm("정말로 삭제하겠습니까?")) {
      deletePost(post.id, category);
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
              {category === "teachers" ? "선생님" : "학생"}
            </p>
            <p className="career">{careerFormat(`${member.career}`)}</p>
            {user.id !== member.id && (
              <button onClick={() => dispatch({ type: "MODAL_OPEN" })}>
                쪽지 보내기
              </button>
            )}
            <Modal>
              <MessageSendBox post={post} />
            </Modal>
          </div>
        </Profile>
        {user.id === member.id && (
          <Buttons>
            <Button onClick={handleDelete}>삭제</Button>
            <Button onClick={handleModify}>수정</Button>
          </Buttons>
        )}

        <Section id="intro">
          <p className="index">
            {category === "teachers" ? "교습 소개" : "교습 요청"}
          </p>
          <div className="detail">
            <h3>{title}</h3>
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
            <span>{subject.toLowerCase()}</span>
          </div>
          <div className="detail">
            <span>교습수단</span>
            <span>{onOrOff.toLowerCase()}</span>
          </div>
        </Section>
        <Section id="user-nfo">
          <p className="index">
            {category === "teachers" ? "선생님 정보" : "학생 정보"}
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
      padding: 0.5rem 0.8rem;

      background-color: #c9fd35;
      border-radius: 5px;

      font-size: 1rem;
      font-family: regular;
      color: #0e1620;

      &:hover {
        background-color: #93ba27;
      }
      transition: all 0.1s ease-in-out;
    }
  }
`;

export const Container = styled.div`
  width: 70%;
  margin-inline: auto;
  padding-block: 4rem;
  display: flex;
  flex-direction: column;
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
  button {
    margin-right: 10px;
  }
`;

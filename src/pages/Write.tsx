import styled from "styled-components";
import Wrapper from "../components/common/Wrapper";
import { useContext } from "react";
import { createPost } from "../api/Post";
import { AuthContext } from "../context/AuthContext";
import { useRouteLoaderData } from "react-router-dom";
import useWriteEditForm from "../hooks/useWriteEditForm";
import UserInfo from "../components/write/UserInfo";
import WriteFormList from "../components/write/WriteEditFormList";
import Button from "../components/common/Button";

const Container = styled.div`
  height: 200vh;
  max-width: 900px;
  margin: 0 auto;
  padding-top: 50px;
  padding-inline: 2rem;
  button {
    margin-left: 5px;
  }

  transition: all 0.3s ease-in-out;

  @media (max-width: 450px) {
    font-size: 0.9rem;
  }
`;

const Required = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 50px;
`;

const ButtonBox = styled.div`
  text-align: center;
`;

export default function Write() {
  const token = useRouteLoaderData("root");
  const { user } = useContext(AuthContext);

  const [state] = useWriteEditForm();

  const { area, content, onOrOff, desiredSubjects, title } = state;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (content.length > 255) return alert("255자 이하로 입력해주세요.");
    if (
      area === "" ||
      content === "" ||
      (desiredSubjects?.length || 0) < 1 ||
      title === ""
    )
      return alert("모두 입력해주세요.");
    const data = {
      area,
      content,
      onOrOff,
      subject: desiredSubjects?.join(""),
      title,
    };
    createPost(data, user.userClassification, token as string);
  };

  return (
    <Wrapper>
      <Container>
        <UserInfo userData={user} />
        <Required>필수 *</Required>
        <form onSubmit={handleSubmit}>
          <WriteFormList />
          <ButtonBox>
            <Button type="submit">작성하기</Button>
          </ButtonBox>
        </form>
      </Container>
    </Wrapper>
  );
}

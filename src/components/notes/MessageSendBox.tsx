import styled from "styled-components";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import { useNote } from "../../hooks/useNote";
import { addNewNote } from "../../store/note";

const Container = styled.div`
  width: 300px;
  height: 500px;

  color: #ffffff;
  background-color: #1760fa;

  overflow: hidden;
  clip-path: polygon(
    23px 0,
    calc(100% - 23px) 0,
    100% 0,
    100% calc(100% - 23px),
    calc(100% - 23px) 100%,
    23px 100%,
    0 100%,
    0 23px
  );

  @media (max-width: 450px) {
    height: 450px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
  padding: 2rem 1.5rem;

  font-family: light;

  input {
    background-color: transparent;
    padding: 0.5rem 0.8rem;
    border: 1px solid #c9fd35;
    color: #ffffff;

    &::placeholder {
      color: #ffffff;
    }

    border-radius: 5px;
  }
  textarea {
    height: 200px;
    padding: 0.5rem;
    border: 1px solid #c9fd35;
    background-color: transparent;
    outline: none;
    resize: none;

    border-radius: 5px;
    font-family: light;
    line-height: 1.5;
    color: #ffffff;

    @media (max-width: 450px) {
      height: 160px;
      padding: 0.5rem 0.8rem;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    label {
      margin-bottom: 10px;
    }
  }

  .submitBtn {
    width: 100%;
    padding: 0.5rem 0.8rem;
    margin-left: 0;

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
`;

const Sender = styled.div`
  text-align: start;
  div {
    margin-bottom: 5px;
  }
`;

export default function MessageSendBox({
  receiverId,
  receiverNickname,
}: {
  receiverId: any;
  receiverNickname: any;
}) {
  const {
    user: { nickname, id },
  } = useContext(AuthContext);
  const [, , , dispatch] = useNote();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title === "" || content === "") return alert("모두 입력해주세요.");

    const data = {
      title,
      content: content.replaceAll("\n", "<br/>"),
      receiverId: receiverId,
      receiverNickname: receiverNickname,
      senderId: id,
      senderNickname: nickname,
    };

    dispatch(addNewNote("sent", data));
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Sender>
          <div>보내는 사람 : {nickname}</div>
          <div>받는 사람 : {receiverNickname}</div>
        </Sender>
        <div>
          <label htmlFor="title">제목</label>
          <input
            id="title"
            value={title}
            placeholder="제목을 입력해주세요"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="content">내용</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button className="submitBtn">전송</button>
      </Form>
    </Container>
  );
}

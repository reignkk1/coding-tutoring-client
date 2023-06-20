import styled from "styled-components";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { INote, sendNotePost } from "../../api/note";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { IModalAction } from "../../reducers/modal";

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
    outline: none;
    font-family: light;
    line-height: 1.7;
    color: #ffffff;

    &::placeholder {
      font-family: light;
      color: #ffffff;
    }

    border-radius: 5px;
  }
  textarea {
    height: 200px;
    padding: 10px;
    border: 1px solid #c9fd35;
    background-color: transparent;
    outline: none;
    resize: none;

    border-radius: 5px;
    font-family: light;
    line-height: 1.5;
    color: #ffffff;
  }

  div {
    display: flex;
    flex-direction: column;
    label {
      margin-bottom: 10px;
    }
  }
`;

const Sender = styled.div`
  text-align: start;
  div {
    margin-bottom: 5px;
  }
`;

export default function MessageSendBox({
  note,
  setModal,
}: {
  note: INote;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const {
    user: { nickname, id },
  } = useContext(AuthContext);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch<Dispatch<IModalAction>>();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { senderId, senderNickname } = note;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      title,
      content: content.replaceAll("\n", "<br/>"),
      receiverId: senderId,
      receiverNickname: senderNickname,
      senderId: id,
      senderNickname: nickname,
    };

    sendNotePost(token, data, dispatch);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Sender>
          <div>보내는 사람 : {nickname}</div>
          <div>받는 사람 : {senderNickname}</div>
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
        <button>전송</button>
      </Form>
    </Container>
  );
}

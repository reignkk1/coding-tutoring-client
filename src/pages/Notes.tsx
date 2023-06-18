import { useState } from "react";
import styled from "styled-components";
import { useRouteLoaderData, useNavigate } from "react-router-dom";
import { useGetNotes } from "../api/note";
import Wrapper from "../components/common/Wrapper";
import Category from "../components/notes/Category";
import Modal from "../components/common/Modal";
export default function Notes() {
  const token = useRouteLoaderData("root");
  const [selected, setSelected] = useState("received");
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const changeSelected = (category: string) => {
    setSelected(category);
  };

  const notes = useGetNotes(token as string, selected);
  console.log(notes);

  return (
    <Wrapper>
      <Container>
        <Category selected={selected} changeSelected={changeSelected} />
        <MsgBox className={`${selected === "sent" && "sent"}`}>
          {notes?.map((note) => (
            <li>
              <span
                onClick={() => {
                  navigate(`/view/${note.senderId}`);
                }}
              >{`${
                selected === "sent"
                  ? "to. " + note.receiverNickname
                  : "from. " + note.senderNickname
              }`}</span>
              <button onClick={() => setModal(true)}>삭제</button>
              <p>{note.title}</p>
              <p>{note.content}</p>
            </li>
          ))}
        </MsgBox>
      </Container>
    </Wrapper>
  );
}

const Container = styled.div`
  width: 50%;
  margin-inline: auto;
  margin-block: 8rem;
`;

const MsgBox = styled.ul`
  height: 500px;
  padding: 2rem;
  display: flex;
  flex-direction: column;

  overflow-y: scroll;

  background-color: #c9fd35;
  color: #0e1620;

  transition: all 0.1s ease-out;

  &.sent {
    background-color: #1760fa;
    color: #ffffff;

    li {
      border-bottom: 1px solid #c9fd35;
    }
  }

  li {
    line-height: 1.7;
    padding: 1rem;
    border-bottom: 1px solid #1760fa;

    span {
      width: fit-content;
      border-radius: 5px;
      padding: 0.3rem 0.5rem;
      background-color: #0e1620;
      margin-bottom: 1rem;

      font-family: light;
      font-size: 14px;
      color: #c9fd35;

      cursor: pointer;
    }

    button {
      width: fit-content;
      border-radius: 5px;
      padding: 0.3rem 0.5rem;
      background-color: #0e1620;
      margin-left: 1rem;

      font-family: light;
      color: #c9fd35;
    }
  }
`;

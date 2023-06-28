import { useState, useEffect } from "react";
import styled from "styled-components";
import Wrapper from "../components/common/Wrapper";
import Category from "../components/notes/Category";
import Note from "../components/notes/Note";
import { useNote } from "../hooks/useNote";
import { loadNotes } from "../store/note";

export default function Notes() {
  const [selected, setSelected] = useState("received");
  //메세지를 보낼 사람을 정해줘야 모달창이 모두 뜨지 않음
  const [sender, setSender] = useState("");
  const changeSelected = (category: string) => {
    setSelected(category);
  };

  const [notes, loading, , dispatch] = useNote();
  let reversedNotes = [...notes[selected]].reverse();

  useEffect(() => {
    dispatch(loadNotes(selected));
  }, [selected]);

  return (
    <Wrapper>
      <Container>
        <Category selected={selected} changeSelected={changeSelected} />
        <MsgBox className={`${selected === "sent" && "sent"}`}>
          {loading ? (
            <p>loading...</p>
          ) : (
            <>
              {reversedNotes.map((note: any) => (
                <Note
                  note={note}
                  selected={selected}
                  sender={sender}
                  setSender={setSender}
                />
              ))}
            </>
          )}
        </MsgBox>
      </Container>
    </Wrapper>
  );
}

const Container = styled.div`
  width: 60%;

  margin-inline: auto;
  margin-block: 4rem;
  transition: all 0.4s ease-in-out;

  @media (max-width: 850px) {
    padding-inline: 4rem;
    width: 80%;
  }
  @media (max-width: 640px) {
    padding-inline: 1rem;
  }
  @media (max-width: 450px) {
    width: 100%;
    height: 400px;
    overflow-y: scroll;
    margin-block: 2rem;
    padding-inline: 1rem;
  }
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
      margin-left: 0.8rem;

      font-family: light;
      color: #c9fd35;
    }
  }

  @media (max-width: 450px) {
    overflow-y: scroll;
    height: 400px;
    padding: 1rem;
  }
`;

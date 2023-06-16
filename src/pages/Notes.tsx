import { useState } from "react";
import styled from "styled-components";
import { useRouteLoaderData } from "react-router-dom";
import { useGetNotes } from "../api/note";
import Wrapper from "../components/common/Wrapper";
import Category from "../components/notes/Category";

export default function Notes() {
  const token = useRouteLoaderData("root");
  const [selected, setSelected] = useState("received");
  const changeSelected = (category: string) => {
    setSelected(category);
  };

  // const notes = useGetNotes(token as string, selected);
  // console.log(notes);
  const notes = [1, 2, 3, 4, 5];

  return (
    <Wrapper>
      <Container>
        <Category selected={selected} changeSelected={changeSelected} />
        <MsgBox className={`${selected === "sent" && "sent"}`}>
          {notes?.map((note) => (
            <li>
              <span>닉네임</span>
              <button>답장</button>
              <p>
                자바스크립트 수강생 모집 보고 연락드려요. 혹시 연락처 알려주실
                수 있나요?
              </p>
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

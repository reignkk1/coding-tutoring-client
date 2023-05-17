import styled from "styled-components";
import Wrapper from "../components/common/Wrapper";
import Editor from "../components/write/Editor";
import Button from "../components/postPage/Button";
import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const Container = styled.div`
  height: 120vh;
  width: 900px;
  margin: 0 auto;
  padding-top: 50px;
`;

const TitleInput = styled.input`
  width: 100%;
  padding: 8px 10px;

  border: 1px solid rgba(0, 0, 0, 0.4);
  outline: none;
  border-radius: 5px;
  margin-bottom: 20px;
  &:focus {
    border-color: black;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const ButtonBox = styled.div`
  text-align: center;
`;

const SelectBox = styled.div`
  margin-bottom: 10px;
  select {
    width: 100%;
    padding: 8px 10px;
    outline: none;
    cursor: pointer;
    border-radius: 5px;
  }
`;

export default function Write() {
  const [selectValue, setSelectValue] = useState<string | null>("");

  const selectRef = useRef<HTMLSelectElement>(null);
  const location = useLocation();

  useEffect(() => {
    setSelectValue(selectRef.current && selectRef.current.value);
  }, []);

  const options = [
    { name: "공지사항", value: "notice" },
    { name: "선생님 찾기", value: "teachers" },
    { name: "학생 찾기", value: "students" },
  ];

  return (
    <Wrapper>
      <Container>
        <Label>Topic</Label>
        <SelectBox>
          <select
            ref={selectRef}
            onChange={(event) => setSelectValue(event.currentTarget.value)}
          >
            {options.map((option) => (
              <option
                value={option.value}
                selected={location.pathname.includes(option.value)}
              >
                {option.name}
              </option>
            ))}
          </select>
        </SelectBox>
        <Label htmlFor="title">제목</Label>
        <TitleInput id="title" placeholder="제목을 입력해주세요." />
        <Label>내용</Label>
        <Editor />
        <ButtonBox>
          <Button>작성하기</Button>
        </ButtonBox>
      </Container>
    </Wrapper>
  );
}

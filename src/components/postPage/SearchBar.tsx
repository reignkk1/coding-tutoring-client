import styled from "styled-components";
import Button from "../common/Button";
import { searchSubject, searchTitle } from "../../api/Post";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const Input = styled.input`
  width: fit-content;
  background-color: transparent;
  padding: 0.5rem 0.7rem;

  outline: none;
  border: 0.1px solid #c9fd35;
  border-radius: 5px;

  font-size: 1rem;
  color: #ffffff;

  &::placeholder {
    font-size: 1rem;
    font-family: light;
    color: #ffffff;
    opacity: 0.7;
  }
`;

interface ISearchBar {
  placeholder: string;
  category: "teachers" | "students" | "notice";
}

export default function SearchBar({ placeholder, category }: ISearchBar) {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    searchTitle(value, dispatch, category);
    setValue("");
  };

  const handleAllSubject = () => searchSubject("", category, dispatch);

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button type="submit">검색</Button>
      <Button onClick={handleAllSubject}>모두보기</Button>
    </Form>
  );
}

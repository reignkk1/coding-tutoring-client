import styled from "styled-components";
import Button from "./Button";

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
}

export default function SearchBar({ placeholder }: ISearchBar) {
  return (
    <Form>
      <Button>카테고리</Button>
      <Input placeholder={placeholder} />
      <Button>검색</Button>
    </Form>
  );
}

import styled from "styled-components";
import Button from "./Button";

const Form = styled.form`
  margin-left: 10px;
`;
const Input = styled.input`
  background-color: transparent;
  margin-right: 10px;

  outline: none;
  padding: 8px;
  font-size: 20px;

  &::placeholder {
    font-family: regular;
    color: #ffffff;
  }
`;

interface ISearchBar {
  placeholder: string;
}

export default function SearchBar({ placeholder }: ISearchBar) {
  return (
    <Form>
      <Input placeholder={placeholder} />
      <Button>검색</Button>
    </Form>
  );
}

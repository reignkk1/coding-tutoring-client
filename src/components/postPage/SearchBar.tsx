import styled from "styled-components";
import Button from "./Button";

import { GoSearch } from "react-icons/go";

const Form = styled.form`
  margin-left: 10px;
`;
const Input = styled.input`
  margin-right: 10px;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  padding: 8px;
  font-size: 20px;
`;

interface ISearchBar {
  placeholder: string;
}

export default function SearchBar({ placeholder }: ISearchBar) {
  return (
    <Form>
      <Input placeholder={placeholder} />
      <Button>
        <GoSearch />
        검색
      </Button>
    </Form>
  );
}

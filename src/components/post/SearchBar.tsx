import styled from "styled-components";
import Button from "../common/Button";
import { useDispatch } from "react-redux";
import { useState } from "react";
import useCategory from "../../hooks/useCategory";
import { ThunkDispatch } from "redux-thunk";
import { getPost, searchTitlePosts } from "../../store/post/postApiAction";

const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const Input = styled.input`
  width: fit-content;
  height: 2rem;
  background-color: transparent;
  padding: 0.5rem 0.7rem;

  outline: none;
  border: 0.1px solid #c9fd35;
  border-radius: 5px;

  color: #ffffff;

  &::placeholder {
    color: #ffffff;
    opacity: 0.7;
  }
`;

export default function SearchBar() {
  const dispatch = useDispatch<ThunkDispatch<any, void, any>>();
  const [category] = useCategory();
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(searchTitlePosts({ category, title: value }));

    setValue("");
  };

  const handleReset = () => {
    setValue("");
    dispatch(getPost({ category, page: 0 }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="제목을 입력해주세요"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button type="submit">검색</Button>
      <Button onClick={handleReset}>리셋</Button>
    </Form>
  );
}

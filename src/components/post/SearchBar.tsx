import styled from "styled-components";
import Button from "../common/Button";
import { useDispatch } from "react-redux";
import { useState } from "react";
import useCategory from "../../hooks/useCategory";
import { ThunkDispatch } from "redux-thunk";
import {
  getStudentsPost,
  getTeachersPost,
  searchTitleStudentPosts,
  searchTitleTeacherPosts,
} from "../../store/post/api/PostReadThunk";

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

interface ISearchBar {
  placeholder: string;
}

export default function SearchBar({ placeholder }: ISearchBar) {
  const dispatch = useDispatch<ThunkDispatch<any, void, any>>();
  const [category] = useCategory();
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (category === "teachers")
      return dispatch(searchTitleTeacherPosts(value));
    if (category === "students")
      return dispatch(searchTitleStudentPosts(value));
    setValue("");
  };

  const handleAllSubject = () => {
    setValue("");
    if (category === "teachers") return dispatch(getTeachersPost(0));
    if (category === "students") return dispatch(getStudentsPost(0));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button type="submit">검색</Button>
      <Button onClick={handleAllSubject}>리셋</Button>
    </Form>
  );
}

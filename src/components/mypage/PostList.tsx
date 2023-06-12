import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface PostListProps {
  post: {
    id: number;
    title: string;
    content: any;
    subject: string;
    area: string;
    onOrOff: string;
  };
}

export default function PostList({ post }: PostListProps) {
  const { id, title, subject, area, onOrOff } = post;
  const navigate = useNavigate();

  return (
    <PostListContainer>
      <p>{title}</p>
      <p>{subject}</p>
      <p>{area}</p>
      <p>{onOrOff}</p>
    </PostListContainer>
  );
}

const PostListContainer = styled.li`
  display: flex;
  flex-direction: column;
  background-color: #fff;

  border: 1px solid rgb(203, 213, 225);
  padding: 1rem;

  p {
    margin-top: 0.8rem;

    &:first-child {
      margin-top: 0;
      margin-bottom: 1rem;
    }
  }

  .subject {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .intro {
    font-weight: bold;
  }
`;

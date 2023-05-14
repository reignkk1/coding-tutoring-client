import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface PostListProps {
  post: {
    id: number;
    category: string;
    subject: string;
    intro: string;
    education?: string;
    sex?: string;
    age?: string;
    grade?: string;
    relation?: string;
    address?: string;
  };
}

export default function PostList({ post }: PostListProps) {
  const {
    id,
    category,
    subject,
    intro,
    education,
    sex,
    age,
    grade,
    relation,
    address,
  } = post;
  const navigate = useNavigate();

  return (
    <PostListContainer onClick={() => navigate(`/view/${category}/${id}`)}>
      <p className="subject">{subject}</p>
      <p className="intro">{intro}</p>
      {category === "teachers" && <p>{education}</p>}
      {category === "students" && (
        <p>
          {sex}/{age}/{grade}/{relation}
        </p>
      )}
      <p>{address}</p>
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

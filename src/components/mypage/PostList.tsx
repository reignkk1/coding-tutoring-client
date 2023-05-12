import styled from "styled-components";

interface PostListProps {
  post: {
    id: number;
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
  const { id, subject, intro, education, sex, age, grade, relation, address } =
    post;
  return (
    <PostListContainer>
      <p className="subject">{subject}</p>
      <p className="intro">{intro}</p>
      <p>{education}</p>
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

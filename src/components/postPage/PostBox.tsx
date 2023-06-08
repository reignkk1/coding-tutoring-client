import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getPosts } from "../../api/Post";
import { useEffect, useState } from "react";

const Container = styled.section`
  width: 100%;
  margin-top: 100px;
  margin-bottom: 100px;
  div {
    display: flex;
    flex-direction: column;
  }
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  li {
    display: flex;
    margin-bottom: 45px;
  }
`;

const ImgBox = styled.div`
  text-align: center;
  margin-right: 50px;
  img {
    margin-bottom: 10px;
  }
  span {
    font-size: 14px;
  }
`;
const InfoBox = styled.div`
  font-size: 18px;
  line-height: 1.7;
  h2 {
    font-weight: bold;
    font-size: 24px;
    cursor: pointer;
  }
  span {
    color: blue;
  }
`;

interface IGetPost {
  id: number;
  area: string;
  content: string;
  onOrOff: string;
  subject: string;
  title: string;
}

export default function PostBox({ category }: { category?: string }) {
  const navigate = useNavigate();

  const [posts, setPosts] = useState<IGetPost[]>();

  useEffect(() => {
    getPosts(setPosts);
  }, []);

  return (
    <Container>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>
            <ImgBox>
              <img
                src={`https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`}
                alt="프로필 사진"
              />
              <span>{}</span>
            </ImgBox>
            <InfoBox>
              <h2
                onClick={() =>
                  navigate(`/${category}/post/${post.id}`, {
                    state: post,
                  })
                }
              >
                {post.title}
              </h2>

              <span>{post.subject}</span>
              <p>{post.onOrOff}</p>
              <p>{post.area}</p>
            </InfoBox>
          </li>
        ))}
      </ul>
    </Container>
  );
}

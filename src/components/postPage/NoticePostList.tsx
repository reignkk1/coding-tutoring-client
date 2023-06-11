import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
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

interface INoticePost {
  id: number;
  content: string;
  title: string;
}

interface INoticePostList {
  posts: INoticePost[] | undefined;
}
export default function NoticePostList({ posts }: INoticePostList) {
  const navigate = useNavigate();
  return (
    <Container>
      <ul>
        {posts?.map((post, index) => (
          <li key={index}>
            <ImgBox>
              <img
                src={`https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`}
                alt="프로필 사진"
              />
              <span>운영자</span>
            </ImgBox>
            <InfoBox>
              <h2
                onClick={() =>
                  navigate(`/notice/post/${post.id}`, {
                    state: post,
                  })
                }
              >
                {post.title}
              </h2>
            </InfoBox>
          </li>
        ))}
      </ul>
    </Container>
  );
}

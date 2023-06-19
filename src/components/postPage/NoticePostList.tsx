import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useGetPosts } from "./../../api/Post";

const Container = styled.div`
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

export default function NoticePostList() {
  const [posts] = useGetPosts("notice");
  const navigate = useNavigate();

  return (
    <Container>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>
            <ImgBox>
              <img
                src={`https://play-lh.googleusercontent.com/EmoxV_AVHYYitg8ELxYDRA47LC09BsDVqOpd2wrBPm4P4jB1rI6-muHJ_Ij9OM_RGw=w240-h480-rw`}
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

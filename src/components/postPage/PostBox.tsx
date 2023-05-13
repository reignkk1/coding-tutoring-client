import { styled } from "styled-components";

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
  }
  span {
    color: blue;
  }
`;

interface IPost {
  id: number;
  img: string;
  name: string;
  category: string;
  subject: string;
  intro: string;
  education: string;
  address: string;
}

export default function PostBox({ posts }: { posts: IPost[] }) {
  return (
    <Container>
      <ul>
        {posts.map((post) => (
          <li>
            <ImgBox>
              <img src={post.img} alt="프로필 사진" />
              <span>{post.name}</span>
            </ImgBox>
            <InfoBox>
              <h2>{post.subject}</h2>
              <span>{post.intro}</span>
              <p>{post.education}</p>
              <p>{post.address}</p>
            </InfoBox>
          </li>
        ))}
      </ul>
    </Container>
  );
}

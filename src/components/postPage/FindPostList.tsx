import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useGetPosts } from "../../api/Post";
import { howFormat, firstToUpper } from "../../util/format";
import { MdLocationOn } from "react-icons/md";

const Container = styled.div`
  width: 70%;
  margin-inline: auto;
  margin-block: 6rem;
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
    margin-bottom: 2.5rem;
    padding: 1rem 1.5rem;

    overflow: hidden;
    clip-path: polygon(
      0 0,
      calc(100% - 16px) 0,
      100% 16px,
      100% 100%,
      100% 100%,
      0 100%,
      0 100%,
      0 0
    );
    background-color: #c9fd35;

    display: flex;
    align-items: center;

    color: #0e1620;

    transition: all 0.1s ease-out;

    &:hover {
      transform: translateY(-0.5rem);
    }
  }
`;

const ImgBox = styled.div`
  margin-right: 3rem;
  text-align: center;
  img {
    margin-bottom: 0.5rem;
  }
  span {
    font-family: regular;
    font-size: 14px;
  }
`;
const InfoBox = styled.div`
  line-height: 1.7;
  h2 {
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
  span {
    width: fit-content;
    border-radius: 5px;
    padding: 0.1rem 0.5rem;
    background-color: #0e1620;

    font-family: regular;
    line-height: 1.5;
    color: #c9fd35;
  }

  .area {
    display: flex;
    align-items: center;

    .icon {
      font-size: 1.2rem;
    }
  }
`;

export default function FindPostList({ category }: { category: string }) {
  const navigate = useNavigate();

  const posts = useGetPosts(category);
  console.log(posts);
  return (
    <Container>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>
            <ImgBox>
              <img
                src={`https://i.pinimg.com/564x/40/98/2a/40982a8167f0a53dedce3731178f2ef5.jpg`}
                //  src={`https://i.pinimg.com/236x/11/27/98/11279881d6995a0aef4915b3906aae3f.jpg`}
                alt="프로필 사진"
              />
              <span>닉네임</span>
              <span>남 / 7년차</span>
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

              <span>{firstToUpper(`${post.subject}`)}</span>
              <p>{howFormat(`${post.onOrOff}`)}</p>
              <p className="area">
                <MdLocationOn className="icon" />
                &nbsp;
                {post.area}
              </p>
            </InfoBox>
          </li>
        ))}
      </ul>
    </Container>
  );
}

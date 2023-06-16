import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useGetPosts } from "../../api/Post";

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
    padding: 0.3rem 0.5rem;
    background-color: #0e1620;

    font-family: regular;
    color: #c9fd35;
  }
`;

export default function FindPostList({ category }: { category: string }) {
  const navigate = useNavigate();

  // const posts = useGetPosts(category);
  const posts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    // <Container>
    //   <ul>
    //     {posts?.map((post) => (
    //       <li key={post.id}>
    //         <ImgBox>
    //           <img
    //             src={`https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`}
    //             alt="프로필 사진"
    //           />
    //           <span>{}</span>
    //         </ImgBox>
    //         <InfoBox>
    //           <h2
    //             onClick={() =>
    //               navigate(`/${category}/post/${post.id}`, {
    //                 state: post,
    //               })
    //             }
    //           >
    //             {post.title}
    //           </h2>

    //           <span>{post.subject}</span>
    //           <p>{post.onOrOff}</p>
    //           <p>{post.area}</p>
    //         </InfoBox>
    //       </li>
    //     ))}
    //   </ul>
    // </Container>

    //목데이터로 스타일 작업
    <Container>
      <ul>
        {posts?.map((post) => (
          <li key={post}>
            <ImgBox>
              <img
                // src={`https://i.pinimg.com/564x/40/98/2a/40982a8167f0a53dedce3731178f2ef5.jpg`}
                src={`https://i.pinimg.com/236x/11/27/98/11279881d6995a0aef4915b3906aae3f.jpg`}
                alt="프로필 사진"
              />
              <span>인지상정님</span>
              <span>여 / 7년차</span>
            </ImgBox>
            <InfoBox>
              <h2
                onClick={() =>
                  navigate(`/${category}/post/${post}`, {
                    state: post,
                  })
                }
              >
                자바스크립트 학생 구해요
              </h2>

              <span>자바스크립트</span>
              <p>오프라인</p>
              <p>성남시 판교동</p>
            </InfoBox>
          </li>
        ))}
      </ul>
    </Container>
  );
}

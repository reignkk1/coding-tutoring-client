import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {
  genderFormat,
  careerFormat,
  firstToUpper,
  howFormat,
} from "../../util/format";

interface PostListProps {
  post: {
    id: number;
    title: string;
    content: any;
    subject: string;
    area: string;
    onOrOff: string;
    member: any;
  };
  category: string;
}

export default function PostList({ post, category }: PostListProps) {
  const { id, title, subject, area, onOrOff, member } = post;
  const navigate = useNavigate();

  return (
    <li key={id}>
      <ImgBox>
        <img
          src={`${
            member!.gender === "MALE"
              ? "https://i.pinimg.com/564x/40/98/2a/40982a8167f0a53dedce3731178f2ef5.jpg"
              : "https://i.pinimg.com/236x/11/27/98/11279881d6995a0aef4915b3906aae3f.jpg"
          }`}
          alt="프로필 사진"
        />
        <span>{member!.nickname}</span>
      </ImgBox>
      <InfoBox>
        <h2
          onClick={() =>
            navigate(`/${category}/post/${id}`, {
              state: post,
            })
          }
        >
          {title}
        </h2>

        <span>{firstToUpper(`${subject}`)}</span>
        <p>{howFormat(`${onOrOff}`)}</p>
        <p>
          {genderFormat(`${member!.gender}`)} /&nbsp;
          {careerFormat(`${member!.career}`)}
        </p>
        <p className="area">{area} 거주</p>
      </InfoBox>
    </li>
  );
}

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

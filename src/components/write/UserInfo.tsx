import styled from "styled-components";
import { ageFormat, genderFormat, jobFormat } from "../../util/format";

const Container = styled.div`
  text-align: center;
  margin-bottom: 50px;
  transition: all 0.3s ease-in-out;

  @media (max-width: 450px) {
    margin-bottom: 1.5rem;
  }
`;
const User = styled.div`
  font-weight: bold;
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 10px;
  }
  div {
    margin-bottom: 5px;
  }

  transition: all 0.3s ease-in-out;

  @media (max-width: 450px) {
    img {
      width: 100px;
      height: 100px;
    }

    div {
      font-size: 0.9rem;
    }
  }
`;

interface IUserData {
  nickname: string;
  ageGroup: string;
  gender: string;
  img: string;
  userClassification: string;
}

export default function UserInfo({ userData }: { userData: IUserData }) {
  const { img, nickname, userClassification, gender, ageGroup } =
    userData || {};

  return (
    <Container>
      <User>
        <img src={img} alt="profile-img" />
        <div>
          {nickname}
          {jobFormat(userClassification)}
        </div>
        <div>
          {genderFormat(`${gender}`)} /&nbsp;
          {ageFormat(`${ageGroup}`)}
        </div>
      </User>
    </Container>
  );
}

import { Link } from "react-router-dom";
import styled from "styled-components";

export default function SignUp(): JSX.Element {
  return (
    <Container>
      <Form>
        <h3>회원가입</h3>
        <div className="social">
          {/*아이콘을 추가 예정*/}
          <div>구글</div>
          <div>카카오</div>
        </div>
        <p>이메일을 사용해 회원가입하기</p>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button>회원가입</button>
      </Form>

      <p className="aboutSign">
        계정이 있으신가요? <Link to="/signin">로그인</Link>
      </p>
    </Container>
  );
}

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #697a79;

  h3 {
    font-size: 2rem;
  }

  .social {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  p {
    font-size: 1rem;
    margin-bottom: 0; //border-box가 아니라 그런듯 추후 삭제
  }

  input {
    width: 250px;
    background-color: #f0f4f3;
    border: none;
    margin-top: 1rem;
    padding: 0.8rem 1rem;
    color: #697a79;

    &::placeholder {
      opacity: 0.8;
    }
  }

  button {
    border-radius: 1.2rem;
    border: none;
    background-color: #3ab19b;
    color: #ffffff;
    padding: 0.8rem 3rem;
    margin-top: 1.5rem;
    transition: transform 0.1s ease-in;

    &:hover {
      transform: scale(0.95);
    }
  }
`;

const Container = styled.div`
  min-width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;

  .aboutSign {
    font-size: 0.8rem;
    color: #697a79;
    margin-top: 1.5rem;

    a {
      color: inherit;
      text-decoration: none;
    }
  }
`;

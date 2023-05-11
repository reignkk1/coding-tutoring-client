import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Wrapper from "../components/common/Wrapper";

interface Inputs {
  email: string;
  password: string;
}

interface Valid {
  email: boolean;
  password: boolean;
}

export default function SignIn(): JSX.Element {
  const [inputs, setInputs] = useState<Inputs>({
    email: "",
    password: "",
  });

  const [valid, setValid] = useState<Valid>({
    email: false,
    password: false,
  });

  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("유효성 검사중");
      setFormIsValid(inputs.email.includes("@") && inputs.password.length >= 8);
    }, 500);

    return () => {
      console.log("클린업");
      clearTimeout(identifier);
    };
  }, [inputs.email, inputs.password]);

  const changeHandler = (e: React.FormEvent<HTMLInputElement>): void => {
    const { name, value } = e.target as HTMLInputElement;
    setInputs({ ...inputs, [name]: value });
  };

  const validHandler = (e: React.FormEvent<HTMLInputElement>): void => {
    const { name } = e.target as HTMLInputElement;
    if (name === "email") {
      setValid({ ...valid, [name]: inputs.email.includes("@") });
    } else {
      setValid({ ...valid, [name]: inputs.password.length >= 8 });
    }
  };

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <FormContainer>
        <Form onSubmit={submitHandler}>
          <h3>로그인</h3>
          <div className="social">
            {/*아이콘을 추가 예정*/}
            <div>구글</div>
            <div>카카오</div>
          </div>
          <p>과외플랫폼 계정으로 로그인</p>
          <input
            type="email"
            name="email"
            value={inputs.email}
            onChange={changeHandler}
            onBlur={validHandler}
            placeholder="이메일을 입력해주세요."
          />
          {!valid.email && <p className="warn">이메일 형식을 맞춰주세요.</p>}
          <input
            type="password"
            name="password"
            value={inputs.password}
            onChange={changeHandler}
            onBlur={validHandler}
            placeholder="비밀번호를 입력해주세요. (8자 이상)"
          />
          {!valid.password && <p className="warn">8자리 이상 입력해주세요.</p>}
          <button
            type="submit"
            disabled={!formIsValid}
            className={`${!formIsValid && "disabled"}`}
          >
            로그인
          </button>
        </Form>
        <div className="aboutSign">
          <Link to="#">비밀번호 찾기</Link>
          <Link to="/signup">회원가입</Link>
        </div>
      </FormContainer>
    </Wrapper>
  );
}

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #697a79;

  h3 {
    font-size: 2rem;
    font-weight: 600;
  }

  .social {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    margin-top: 2rem;
  }

  p {
    margin-top: 2rem;
  }

  .warn {
    margin-top: 0.5rem;
    color: #de3730ff;
    font-size: 0.8rem;
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

    &.disabled {
      background-color: #de3730ff;
    }

    &:hover {
      transform: scale(0.95);
    }
  }
`;

export const FormContainer = styled.div`
  max-width: 400px;
  margin-inline: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .aboutSign {
    display: flex;
    gap: 0.5rem;
    color: #697a79;
    margin-top: 1.5rem;
    font-size: 0.8rem;

    a {
      color: inherit;
      text-decoration: none;
    }
  }
`;

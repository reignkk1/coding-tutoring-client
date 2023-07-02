import React, { useState } from "react";
import FormInput from "../components/sign/FormInput";
import { signin } from "../api/auth";
import SocialKakao from "../components/sign/SocialKakao";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Login() {
  type ObjType = {
    [index: string]: any;
    id: string;
    password: string;
  };

  const [values, setValues] = useState<ObjType>({
    id: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "id",
      type: "text",
      placeholder: "아이디",
      errorMessage:
        "숫자, 영문소문자, 언더바/하이픈 조합으로 4자 이상 입력해주세요",
      label: "아이디",
      pattern: "^[a-z0-9]{4,20}$",
      required: true,
    },

    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "비밀번호",
      errorMessage: "숫자, 영문자, 특수문자 조합으로 8자리 이상 입력해주세요",
      label: "비밀번호",
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      required: true,
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signin(values);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <h1>로그인</h1>
        {inputs.map((input) => {
          return (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          );
        })}

        <Button className="submit">로그인</Button>
      </form>
      <p>또는</p>
      <SocialKakao />
      <HelpSign>
        <Link to="/help/user">비밀번호 찾기</Link>
        <Link to="/signup">회원가입</Link>
      </HelpSign>
    </FormContainer>
  );
}

export const FormContainer = styled.div`
  max-width: 400px;
  min-height: calc(100vh - 200px);
  margin-inline: auto;
  padding-top: 8rem;
  padding-bottom: 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  h1 {
    width: fit-content;
    margin-inline: auto;
    font-family: regular;
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }

  form {
    &:invalid .submit {
      background-color: #86ab20;
      cursor: not-allowed;
    }
  }
`;

const HelpSign = styled.div`
  display: flex;
  gap: 0.5rem;
  color: #ffffff;
`;

export const Button = styled.button`
  width: 222px;
  padding-block: 0.8rem;
  border-radius: 3px;
  margin-block: 0.5rem;

  background-color: #c9fd35;
  color: #0e1620;

  font-size: 1rem;

  &:active {
    background-color: #c9fd35;
    color: #0e1620;
  }

  &:disabled,
  :disabled:hover,
  :disabled:active {
    background-color: #86ab20;
    cursor: not-allowed;
  }

  &.signup {
    margin-top: 1rem;
  }
`;

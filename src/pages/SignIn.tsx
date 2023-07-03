import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormInput from "../components/sign/FormInput";
import SocialKakao from "../components/sign/SocialKakao";
import { signin } from "../api/auth";
import { FormContainer, HelpSign, Button } from "../styles/Form";

export default function SignIn() {
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

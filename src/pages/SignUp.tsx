import React, { useState, useEffect } from "react";
import FormInput from "../components/sign/FormInput";
import { signup } from "../api/auth";
import RadioInput from "../components/sign/RadioInput";
import Select from "../components/sign/Select";
import { FormContainer, Button } from "../styles/Form";
import { useAuth } from "../hooks/useAuth";
import { toggleAuth } from "../store/auth";

export default function SignUp() {
  const [authEmail, dispatch] = useAuth();
  useEffect(() => {
    dispatch(toggleAuth(false));
  }, [dispatch]);

  type ObjType = {
    [index: string]: any;
    email: string;
    id: string;
    password: string;
    nickname: string;
    userClassification: string;
    gender: string;
    ageGroup: string;
    career: string;
  };

  const [values, setValues] = useState<ObjType>({
    email: "",
    id: "",
    password: "",
    nickname: "",
    userClassification: "",
    gender: "",
    ageGroup: "",
    career: "",
  });

  const inputs = [
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "이메일",
      errorMessage: "올바른 이메일 형식이 아니에요",
      label: "이메일",
      pattern:
        "^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$",
      required: true,
    },
    {
      id: 3,
      name: "nickname",
      type: "text",
      placeholder: "닉네임",
      errorMessage: "영문 또는 한글, 숫자 조합으로 2자 이상 입력해주세요",
      label: "닉네임",
      pattern: "^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,16}$",
      required: true,
    },
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
      id: 5,
      name: "password",
      type: "password",
      placeholder: "비밀번호",
      errorMessage: "숫자, 영문자, 특수문자 조합으로 8자리 이상 입력해주세요",
      label: "비밀번호",
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      required: true,
    },
    {
      id: 4,
      name: "userClassification",
      type: "radio",
      errorMessage: "역할을 선택해주세요.",
      label: "역할",
      options: [
        { label: "학생", value: "STUDENT" },
        { label: "선생님", value: "TEACHER" },
      ],
      required: true,
    },
    {
      id: 6,
      name: "gender",
      type: "radio",
      errorMessage: "성별을 선택해주세요.",
      label: "성별",
      options: [
        { label: "여성", value: "FEMALE" },
        { label: "남성", value: "MALE" },
      ],
      required: true,
    },
    {
      id: 7,
      name: "ageGroup",
      type: "select",
      errorMessage: "연력대를 선택해주세요.",
      label: "연령대",
      options: [
        { name: "--연령대--", value: "" },
        { name: "20대", value: "TWENTIES" },
        { name: "30대", value: "THIRTIES" },
        { name: "40대", value: "FORTIES" },
        { name: "50대", value: "FIFTIES" },
      ],
      required: true,
    },
    {
      id: 8,
      name: "career",
      type: "select",
      errorMessage: "경력을 선택해주세요.",
      label: "경력",
      options: [
        { name: "--경력--", value: "" },
        { name: "취준생", value: "NO_EXPERIENCE" },
        { name: "1-3년", value: "FIRST_TO_THIRD_GRADE" },
        { name: "3-5년", value: "THIRD_TO_FIFTH_GRADE" },
        { name: "5-7년", value: "FIFTH_TO_SEVENTH_GRADE" },
        { name: "7년 이상", value: "OVER_SEVENTH_GRADE" },
      ],
      required: true,
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signup(values);
  };
  const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <h1>회원가입</h1>
        {inputs.map((input) => {
          if (input.type === "radio") {
            return (
              <RadioInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChangeInput}
              />
            );
          } else if (input.type === "select") {
            return (
              <Select key={input.id} {...input} onChange={onChangeSelect} />
            );
          } else {
            return (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChangeInput}
              />
            );
          }
        })}
        <Button disabled={!authEmail} className="signup submit">
          회원가입
        </Button>
      </form>
    </FormContainer>
  );
}

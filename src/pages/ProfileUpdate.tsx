import { useLocation, useRouteLoaderData } from "react-router";
import { useState } from "react";
import { updateProfile } from "../api/auth";
import RadioInput from "../components/sign/RadioInput";
import Select from "../components/sign/Select";
import FormInput from "../components/sign/FormInput";
import { FormContainer, Button } from "../styles/Form";
import { IGetUser } from "../api/auth";

export default function ProfileUpdate() {
  const user: IGetUser = useLocation().state;
  console.log(user);
  type ObjType = {
    [index: string]: any;

    nickname: string;
    userClassification: string;
    gender: string;
    ageGroup: string;
    career: string;
  };
  const [values, setValues] = useState<ObjType>({
    nickname: user?.nickname,
    userClassification: user?.userClassification,
    gender: user?.gender,
    ageGroup: user?.ageGroup,
    career: user?.career,
  });
  const inputs = [
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

  const token = useRouteLoaderData("root");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateProfile(values, token as string);
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
        <h1>회원 정보 수정</h1>
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
              <Select
                key={input.id}
                {...input}
                onChange={onChangeSelect}
                value={values[input.name]}
              />
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
        <Button className="signup submit">수정</Button>
      </form>
    </FormContainer>
  );
}

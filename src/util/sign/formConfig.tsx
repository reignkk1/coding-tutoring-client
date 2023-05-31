import InputField from "../../components/sign/InputField";

import {
  requiredRule,
  userIdRule,
  emailRule,
  pwdRule,
  nicknameRule,
} from "./validationRules";

function createFormFieldConfig(
  label: string,
  name: string,
  type: string,
  defaultValue: "",
  options?: any[]
) {
  return {
    renderInput: (
      handleChange: () => void,
      value: string,
      isValid: boolean,
      error: string
    ) => {
      return (
        <InputField
          name={name}
          type={type}
          label={label}
          isValid={isValid}
          value={value}
          options={options}
          handleChange={handleChange}
          errorMessage={error}
        />
      );
    },
    label,
    value: defaultValue,
    valid: false,
    errorMessage: "",
    touched: false,
  };
}

export interface sign {
  [key: string]: {
    label: string;
    value: string;
    options?: any[];
    valid: boolean;
    errorMessage: string;
    touched: boolean;
    validationRules: any;
    renderInput: any;
  };
}

// object representation of signup form
export const signupForm: sign = {
  id: {
    ...createFormFieldConfig("아이디", "id", "text", ""),
    validationRules: userIdRule(),
  },
  email: {
    ...createFormFieldConfig("이메일", "email", "email", ""),
    validationRules: emailRule(),
  },
  password: {
    ...createFormFieldConfig("비밀번호", "password", "password", ""),
    validationRules: pwdRule(),
  },
  nickname: {
    ...createFormFieldConfig("닉네임", "nickname", "text", ""),
    validationRules: nicknameRule(),
  },
  userClassification: {
    ...createFormFieldConfig("역할", "userClassification", "radio", "", [
      { label: "학생", value: "STUDENT" },
      { label: "선생님", value: "TEACHER" },
    ]),
    validationRules: requiredRule("역할"),
  },
  gender: {
    ...createFormFieldConfig("성별", "gender", "radio", "", [
      { label: "여성", value: "FEMALE" },
      { label: "남성", value: "MALE" },
    ]),
    validationRules: requiredRule("성별"),
  },
  ageGroup: {
    ...createFormFieldConfig("연령대", "ageGroup", "radio", "", [
      { label: "10대", value: "TEENS" },
      { label: "20대", value: "TWENTIES" },
      { label: "30대", value: "THIRTIES" },
      { label: "40대", value: "FORTIES" },
      { label: "50대", value: "FIFTIES" },
      { label: "60대", value: "SIXTIES" },
    ]),
    validationRules: requiredRule("연령대"),
  },
};

export const signinForm: sign = {
  id: {
    ...createFormFieldConfig("아이디", "id", "text", ""),
    validationRules: userIdRule(),
  },
  password: {
    ...createFormFieldConfig("비밀번호", "password", "password", ""),
    validationRules: pwdRule(),
  },
};

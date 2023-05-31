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
  role: {
    ...createFormFieldConfig("역할", "role", "radio", "", [
      { label: "학생", value: "student" },
      { label: "선생님", value: "teacher" },
    ]),
    validationRules: requiredRule("역할"),
  },
  gender: {
    ...createFormFieldConfig("성별", "gender", "radio", "", [
      { label: "여성", value: "female" },
      { label: "남성", value: "male" },
    ]),
    validationRules: requiredRule("성별"),
  },
  level: {
    ...createFormFieldConfig("레벨", "level", "radio", "", [
      { label: "취준생", value: "seeker" },
      { label: "주니어", value: "junior" },
      { label: "미드", value: "mid" },
      { label: "시니어", value: "senior" },
    ]),
    validationRules: requiredRule("레벨"),
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

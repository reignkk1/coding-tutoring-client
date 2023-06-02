import React from "react";
import { Link } from "react-router-dom";
import useSign from "../hooks/useSign";
import { signupForm } from "../util/sign/formConfig";
import { signup } from "../api/auth";

import Wrapper from "../components/common/Wrapper";
import { FormContainer, Form } from "../styles/Form";

export default function Signup() {
  const { form, renderFormInputs, isFormValid } = useSign(signupForm);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    signup({
      ageGroup: form["ageGroup"].value,
      email: form["email"].value,
      gender: form["gender"].value,
      id: form["id"].value,
      nickname: form["nickname"].value,
      password: form["password"].value,
      userClassification: form["userClassification"].value,
    });
  };
  return (
    <Wrapper>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <h1>회원가입</h1>
          {renderFormInputs()}
          <button type="submit" disabled={!isFormValid()}>
            회원가입
          </button>
        </Form>
        <p className="aboutSign">
          계정이 있으신가요? <Link to="/signin">로그인</Link>
        </p>
      </FormContainer>
    </Wrapper>
  );
}

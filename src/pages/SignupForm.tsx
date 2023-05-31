import React from "react";
import { Link } from "react-router-dom";
import useSign from "../hooks/useSign";
import { signupForm } from "../util/sign/formConfig";
import Wrapper from "../components/common/Wrapper";
import { FormContainer, Form } from "../styles/Form";

export default function SignupForm() {
  const { renderFormInputs, isFormValid } = useSign(signupForm);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //백엔드와 통신
  };

  return (
    <Wrapper>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <h1>회원가입</h1>
          {renderFormInputs()}
          <button type="submit" disabled={!isFormValid()}>
            Submit
          </button>
        </Form>
        <p className="aboutSign">
          계정이 있으신가요? <Link to="/signin">로그인</Link>
        </p>
      </FormContainer>
    </Wrapper>
  );
}

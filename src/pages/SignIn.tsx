import useSign from "../hooks/useSign";
import { Link } from "react-router-dom";
import { signinForm } from "../util/sign/formConfig";
import { Container, FormContainer, Form } from "../styles/Form";
import { signin } from "../api/auth";

export default function Signin() {
  const { form, renderFormInputs, isFormValid } = useSign(signinForm);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    signin({
      id: form["id"].value,
      password: form["password"].value,
    });
  };

  return (
    <Container>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <h1>로그인</h1>
          {renderFormInputs()}
          <button type="submit" disabled={!isFormValid()}>
            로그인
          </button>
        </Form>
        <div className="aboutSign">
          <Link to="/help/user">비밀번호 찾기</Link>
          <Link to="/signup">회원가입</Link>
        </div>
      </FormContainer>
    </Container>
  );
}

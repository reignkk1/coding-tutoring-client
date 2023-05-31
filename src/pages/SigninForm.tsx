import useSign from "../hooks/useSign";
import { Link } from "react-router-dom";
import { signinForm } from "../util/sign/formConfig";
import Wrapper from "../components/common/Wrapper";
import { FormContainer, Form } from "../styles/Form";

export default function SigninForm() {
  const { renderFormInputs, isFormValid } = useSign(signinForm);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //백엔드와 통신
  };

  return (
    <Wrapper>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <h1>로그인</h1>
          {renderFormInputs()}
          <button type="submit" disabled={!isFormValid()}>
            Submit
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

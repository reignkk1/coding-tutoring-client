import useSign from "../hooks/useSign";
import { findPwdForm } from "../util/sign/formConfig";
import { findPwd } from "../api/auth";

import Wrapper from "../components/common/Wrapper";
import { FormContainer, Form } from "../styles/Form";

export default function FindPwd() {
  const { form, renderFormInputs, isFormValid } = useSign(findPwdForm);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    findPwd({ id: form["id"].value, password: form["password"].value });
  };

  return (
    <Wrapper>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <h1>비밀번호 찾기</h1>
          {renderFormInputs()}
          <button type="submit" disabled={!isFormValid()}>
            변경하기
          </button>
        </Form>
      </FormContainer>
    </Wrapper>
  );
}

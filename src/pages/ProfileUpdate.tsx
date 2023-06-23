import { useLocation, useRouteLoaderData } from "react-router";
// import { IGetUser } from "../api/auth";
import Wrapper from "../components/common/Wrapper";
import useSign from "../hooks/useSign";
import { updateProfileForm } from "../util/sign/formConfig";
import { Form, FormContainer } from "../styles/Form";
import { updateProfile } from "../api/auth";

export default function ProfileUpdate() {
  //   const user: IGetUser = useLocation().state;
  //   const { nickname, gender, career, role } = user;
  const token = useRouteLoaderData("root");
  const { form, renderFormInputs, isFormValid } = useSign(updateProfileForm);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateProfile(
      {
        nickname: form["nickname"].value,
        userClassification: form["userClassification"].value,
        gender: form["gender"].value,
        ageGroup: form["ageGroup"].value,
        career: form["career"].value,
      },
      token as string
    );
  };

  return (
    <Wrapper>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          {renderFormInputs()}
          <button type="submit" disabled={!isFormValid()}>
            완료
          </button>
        </Form>
      </FormContainer>
    </Wrapper>
  );
}

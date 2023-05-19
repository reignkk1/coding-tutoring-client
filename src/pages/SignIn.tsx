import { Link } from "react-router-dom";
import Wrapper from "../components/common/Wrapper";
import useForm from "../hooks/useForm";
import { Form, FormContainer } from "../styles/Form";

export default function SignIn(): JSX.Element {
  const isUserId = (userId: string): boolean => {
    const userIdRegex = /^[a-z0-9_-]{4,20}$/;
    return userIdRegex.test(userId);
  };
  const isPwd = (pwd: string): boolean => {
    const pwdRegex = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    return pwdRegex.test(pwd);
  };

  const {
    value: userId,
    isValid: userIdIsValid,
    hasError: userIdHasError,
    handleChange: handleUserIdChange,
    handleBlur: handleUserIdBlur,
    reset: resetUserId,
  } = useForm(isUserId);

  const {
    value: pwd,
    isValid: pwdIsValid,
    hasError: pwdHasError,
    handleChange: handlePwdChange,
    handleBlur: handlePwdBlur,
    reset: resetPwd,
  } = useForm(isPwd);

  let formIsValid = false;

  if (userIdIsValid && pwdIsValid) {
    formIsValid = true;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!userIdIsValid || !pwdIsValid) {
      return;
    }

    console.log("백엔드와 통신합니다.");

    resetUserId();
    resetPwd();
  };

  return (
    <Wrapper>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <h3>로그인</h3>
          <div className="social">
            {/*아이콘을 추가 예정*/}
            <div>구글</div>
            <div>카카오</div>
          </div>
          <p>과외플랫폼 계정으로 로그인</p>
          <div className="control">
            <input
              type="text"
              id="userId"
              value={userId}
              onChange={handleUserIdChange}
              onBlur={handleUserIdBlur}
              className={`${userIdHasError && "invalid"}`}
            />

            {userIdHasError && (
              <p className="error">
                숫자, 영문소문자, 언더바/하이픈 조합으로 4자 이상 입력해주세요!
              </p>
            )}
          </div>
          <div className="control">
            <input
              type="password"
              id="pwd"
              value={pwd}
              onChange={handlePwdChange}
              onBlur={handlePwdBlur}
              className={`${pwdHasError && "invalid"}`}
            />
            {pwdHasError && (
              <p className="error">
                숫자, 영문자, 특수문자 조합으로 8자리 이상 입력해주세요!
              </p>
            )}
          </div>

          <button disabled={!formIsValid}>로그인</button>
        </Form>
        <div className="aboutSign">
          <Link to="#">비밀번호 찾기</Link>
          <Link to="/signup">회원가입</Link>
        </div>
      </FormContainer>
    </Wrapper>
  );
}

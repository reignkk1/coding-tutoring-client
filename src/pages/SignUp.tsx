import { useState } from "react";
import { Link } from "react-router-dom";
import useForm from "../hooks/useForm";
import { checkCode, sendCode } from "../api/auth";
import Wrapper from "../components/common/Wrapper";
import { Form, FormContainer } from "../styles/Form";

export default function SignUp(): JSX.Element {
  const isEmail = (email: string): boolean => {
    const emailRegex =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    return emailRegex.test(email);
  };
  const isUserId = (userId: string): boolean => {
    const userIdRegex = /^[a-z0-9_-]{4,20}$/;
    return userIdRegex.test(userId);
  };
  const isPwd = (pwd: string): boolean => {
    const pwdRegex = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    return pwdRegex.test(pwd);
  };
  const isNickname = (nickname: string): boolean => {
    const nicknameRegex = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,16}$/;
    return nicknameRegex.test(nickname);
  };
  const [sendEmail, setSendEmail] = useState(false);
  const [code, setCode] = useState("");
  const [inputCode, setInputCode] = useState("");
  const [authEmail, setAuthEmail] = useState(false);

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
  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    handleChange: handleEmailChange,
    handleBlur: handleEmailBlur,
    reset: resetEmail,
  } = useForm(isEmail);
  const {
    value: nickname,
    isValid: nicknameIsValid,
    hasError: nicknameHasError,
    handleChange: handleNicknameChange,
    handleBlur: handleNicknameBlur,
    reset: resetNickname,
  } = useForm(isNickname);

  let formIsValid = false;

  if (userIdIsValid && pwdIsValid && emailIsValid && nicknameIsValid) {
    formIsValid = true;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!userIdIsValid || !emailIsValid || !pwdIsValid || !nicknameIsValid) {
      return;
    }

    console.log("백엔드와 통신합니다.");

    resetUserId();
    resetPwd();
    resetEmail();
    resetNickname();
  };

  return (
    <Wrapper>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <h3>회원가입</h3>
          <div className="social">
            {/*아이콘을 추가 예정*/}
            <div>구글</div>
            <div>카카오</div>
          </div>
          <p>이메일을 사용해 회원가입하기</p>
          <div className="control">
            <input
              placeholder="이메일"
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
            />
            {emailHasError && (
              <p className="error">올바른 이메일 형식이 아니에요</p>
            )}
            <input
              placeholder="인증코드"
              type="text"
              id="inputCode"
              value={inputCode}
              onChange={(e) => setInputCode(e.target.value)}
              className={`${sendEmail ? "emailCode show" : "emailCode"}`}
            />
          </div>
          <button
            disabled={!emailIsValid}
            onClick={() => {
              if (!sendEmail) {
                sendCode(email).then((res) => setCode(res));
                setSendEmail(true);
              } else {
                setAuthEmail(checkCode(code, inputCode));
              }
            }}
          >
            {sendEmail ? "인증코드 확인" : "인증코드 보내기"}
          </button>

          <p className={`${inputCode ? "auth show" : "auth"} `}>
            {authEmail ? "인증 성공" : "인증 실패"}
          </p>

          <div className="control">
            <input
              placeholder="아이디"
              type="text"
              id="userId"
              value={userId}
              onChange={handleUserIdChange}
              onBlur={handleUserIdBlur}
              className={`${userIdHasError && "invalid"}`}
            />

            {userIdHasError && (
              <p className="error">
                숫자, 영문소문자, 언더바/하이픈 조합으로 4자 이상 입력해주세요
              </p>
            )}
          </div>
          <div className="control">
            <input
              placeholder="비밀번호"
              type="password"
              id="pwd"
              value={pwd}
              onChange={handlePwdChange}
              onBlur={handlePwdBlur}
              className={`${pwdHasError && "invalid"}`}
            />
            {pwdHasError && (
              <p className="error">
                숫자, 영문자, 특수문자 조합으로 8자리 이상 입력해주세요
              </p>
            )}
          </div>
          <div className="control">
            <input
              placeholder="닉네임"
              type="text"
              id="nickname"
              value={nickname}
              onChange={handleNicknameChange}
              onBlur={handleNicknameBlur}
              className={`${nicknameHasError && "invalid"}`}
            />
            {nicknameHasError && (
              <p className="error">
                영문 또는 한글, 숫자 조합으로 2자 이상 입력해주세요
              </p>
            )}
          </div>
          {/* <fieldset>
            <legend>학생이신가요?</legend>
            <div>
              <input
                type="radio"
                id="student"
                name="role"
                value="student"
                onChange={handleRadio}
              />
              <label htmlFor="student">학생입니다</label>
            </div>
            <div>
              <input
                type="radio"
                id="teacher"
                name="role"
                value="teacher"
                onChange={handleRadio}
              />
              <label htmlFor="teacher">선생님입니다</label>
            </div>
            <legend>성별을 선택해주세요</legend>
            <div>
              <input
                type="radio"
                id="female"
                name="sex"
                value="female"
                onChange={handleRadio}
              />
              <label htmlFor="female">여성</label>
            </div>
            <div>
              <input
                type="radio"
                id="male"
                name="sex"
                value="male"
                onChange={handleRadio}
              />
              <label htmlFor="male">남성</label>
            </div>
          </fieldset> */}
          <div className="form-actions">
            <button disabled={!formIsValid}>Submit</button>
          </div>
        </Form>

        <p className="aboutSign">
          계정이 있으신가요? <Link to="/signin">로그인</Link>
        </p>
      </FormContainer>
    </Wrapper>
  );
}

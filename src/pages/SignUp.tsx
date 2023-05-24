import { useState } from "react";
import { Link } from "react-router-dom";
import useForm from "../hooks/useForm";
import { sendCode } from "../api/auth";
import {
  isEmail,
  isUserId,
  isPwd,
  isNickname,
  isRadio,
  ageOptions,
} from "../util/authRegex";
import Wrapper from "../components/common/Wrapper";
import {
  Form,
  FormContainer,
  RadioContainer,
  SelectContainer,
} from "../styles/Form";

export default function SignUp(): JSX.Element {
  const [requestCode, setRequestCode] = useState(false);
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
  const { isValid: roleIsValid, handleChange: handleRoleChange } =
    useForm(isRadio);
  const { isValid: sexIsValid, handleChange: handleSexChange } =
    useForm(isRadio);
  const {
    value: age,
    isValid: ageIsValid,
    hasError: ageHasError,
    handleSelect: handleAgeChange,
    handleBlur: handleAgeBlur,
    reset: resetAge,
  } = useForm(isRadio);

  let formIsValid = false;

  if (
    userIdIsValid &&
    pwdIsValid &&
    authEmail &&
    nicknameIsValid &&
    roleIsValid &&
    sexIsValid &&
    ageIsValid
  ) {
    formIsValid = true;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !userIdIsValid ||
      !emailIsValid ||
      !pwdIsValid ||
      !nicknameIsValid ||
      !roleIsValid ||
      !sexIsValid ||
      !ageIsValid
    ) {
      return;
    }

    console.log("백엔드와 통신합니다.");

    resetUserId();
    resetPwd();
    resetEmail();
    resetNickname();
    resetAge();
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
          </div>
          <button
            disabled={!emailIsValid}
            onClick={() => {
              sendCode(email).then((res) => setCode(res));
              setRequestCode(true);
            }}
          >
            인증코드 요청
          </button>
          {requestCode && (
            <div className="control">
              <input
                placeholder="인증코드 입력"
                type="text"
                id="inputCode"
                value={inputCode}
                onChange={(e) => setInputCode(e.target.value)}
              />
              <button
                disabled={authEmail}
                onClick={() => {
                  if (inputCode === code) {
                    setAuthEmail(true);
                    alert("이메일 인증을 성공했습니다.");
                  } else {
                    alert("인증코드가 다릅니다.");
                  }
                }}
              >
                인증
              </button>
            </div>
          )}

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
          <RadioContainer>
            <legend>학생이신가요?</legend>
            <div className="radioControl">
              <input
                type="radio"
                id="student"
                name="role"
                value="학생"
                onChange={handleRoleChange}
              />
              <label htmlFor="student">학생입니다</label>
            </div>
            <div className="radioControl">
              <input
                type="radio"
                id="teacher"
                name="role"
                value="선생님"
                onChange={handleRoleChange}
              />
              <label htmlFor="teacher">선생님입니다.</label>
            </div>

            <legend>성별을 선택해주세요</legend>
            <div className="radioControl">
              <input
                type="radio"
                id="female"
                name="sex"
                value="여성"
                onChange={handleSexChange}
              />
              <label htmlFor="female">여성</label>
            </div>
            <div className="radioControl">
              <input
                type="radio"
                id="male"
                name="sex"
                value="남성"
                onChange={handleSexChange}
              />
              <label htmlFor="female">남성</label>
            </div>
          </RadioContainer>

          <SelectContainer>
            <select
              name="age"
              id="age"
              value={age}
              onBlur={handleAgeBlur}
              onChange={handleAgeChange}
            >
              {ageOptions.map((age) => (
                <option key={age.value} value={age.value}>
                  {age.label}
                </option>
              ))}
            </select>
            {ageHasError && <p className="error">!필수 항목입니다</p>}
          </SelectContainer>
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

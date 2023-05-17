import { Link } from "react-router-dom";
import Wrapper from "../components/common/Wrapper";
import useForm from "../hooks/useForm";
import { Form, FormContainer } from "../styles/Form";

export default function SignIn(): JSX.Element {
  const {
    inputs,
    valid,
    validMsg,
    validateEmail,
    validatePwd,
    validateUserId,
    validNickname,
    onSubmit,
  } = useForm({
    userId: "",
    pwd: "",
    email: "",
    nickname: "",
  });
  return (
    <Wrapper>
      <FormContainer>
        <Form onSubmit={onSubmit}>
          <h3>로그인</h3>
          <div className="social">
            {/*아이콘을 추가 예정*/}
            <div>구글</div>
            <div>카카오</div>
          </div>
          <p>과외플랫폼 계정으로 로그인</p>
          <input
            type="email"
            name="email"
            value={inputs.email}
            onChange={validateEmail}
            placeholder="이메일을 입력해주세요."
          />
          {!valid.email && <p className="warn">{validMsg.email}</p>}
          <input
            type="text"
            name="userId"
            value={inputs.userId}
            onChange={validateUserId}
            placeholder="아이디를 입력해주세요."
          />
          {!valid.userId && <p className="warn">{validMsg.userId}</p>}
          <input
            type="password"
            name="pwd"
            value={inputs.pwd}
            onChange={validatePwd}
            placeholder="비밀번호를 입력해주세요."
          />
          {!valid.pwd && <p className="warn">{validMsg.pwd}</p>}
          <input
            type="text"
            name="nickname"
            value={inputs.nickname}
            onChange={validNickname}
            placeholder="닉네임을 입력해주세요."
          />
          {!valid.nickname && <p className="warn">{validMsg.nickname}</p>}
          <button
            type="submit"
            disabled={
              !(valid.email && valid.pwd && valid.userId && valid.nickname)
            }
            className={`${
              !(valid.email && valid.pwd && valid.userId && valid.nickname) &&
              "disabled"
            }`}
          >
            로그인
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

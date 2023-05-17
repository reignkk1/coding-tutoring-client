import { Link } from "react-router-dom";
import Wrapper from "../components/common/Wrapper";
import useForm from "../hooks/useForm";
import { Form, FormContainer } from "../styles/Form";

export default function SignUp(): JSX.Element {
  const {
    inputs,
    valid,
    validMsg,
    validateEmail,
    certificateEmail,
    validatePwd,
    validateUserId,
    validNickname,
    onSubmit,
  } = useForm({
    userId: "",
    pwd: "",
    email: "",
    nickname: "",
    role: "",
    sex: "",
    age: "",
  });

  return (
    <Wrapper>
      <FormContainer>
        <Form onSubmit={onSubmit}>
          <h3>회원가입</h3>
          <div className="social">
            {/*아이콘을 추가 예정*/}
            <div>구글</div>
            <div>카카오</div>
          </div>
          <p>이메일을 사용해 회원가입하기</p>
          <input
            type="email"
            name="email"
            value={inputs.email}
            onChange={validateEmail}
            placeholder="이메일을 입력해주세요."
          />
          {!valid.email && <p className="warn">{validMsg.email}</p>}
          <button
            disabled={!valid.email}
            onClick={() => certificateEmail(inputs.email!)}
          >
            이메일 인증
          </button>
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
          {/* <fieldset>
            <legend>Choose your monster's features:</legend>

            <div>
              <input type="checkbox" id="role" name="role" />
              <label htmlFor="role">선생님</label>
            </div>
            <div>
              <input type="checkbox" id="horns" name="horns" />
              <label htmlFor="horns">학생</label>
            </div>
          </fieldset>
          <input type="checkbox" name="sex" value={inputs.sex} />
          <input type="checkbox" name="age" value={inputs.age} /> */}
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

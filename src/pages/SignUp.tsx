import { Link } from "react-router-dom";
import Wrapper from "../components/common/Wrapper";
import useForm from "../hooks/useForm";
import { Form, FormContainer } from "../styles/Form";

export default function SignUp(): JSX.Element {
  const {
    submitHandler,
    changeHandler,
    validHandler,
    inputs,
    valid,
    formIsValid,
  } = useForm({
    nickname: "",
    email: "",
    password: "",
  });

  return (
    <Wrapper>
      <FormContainer>
        <Form onSubmit={submitHandler}>
          <h3>회원가입</h3>
          <div className="social">
            {/*아이콘을 추가 예정*/}
            <div>구글</div>
            <div>카카오</div>
          </div>
          <p>이메일을 사용해 회원가입하기</p>
          <input
            type="text"
            name="nickname"
            value={inputs.nickname}
            onChange={changeHandler}
            placeholder="닉네임을 입력해주세요."
          />
          <input
            type="email"
            name="email"
            value={inputs.email}
            onChange={changeHandler}
            onBlur={validHandler}
            placeholder="이메일을 입력해주세요."
          />
          {!valid.email && <p className="warn">이메일 형식을 맞춰주세요.</p>}
          <input
            type="password"
            name="password"
            value={inputs.password}
            onChange={changeHandler}
            onBlur={validHandler}
            placeholder="비밀번호를 입력해주세요. (8자 이상)"
          />
          {!valid.password && <p className="warn">8자리 이상 입력해주세요.</p>}

          <button
            type="submit"
            disabled={!formIsValid}
            className={`${!formIsValid && "disabled"}`}
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

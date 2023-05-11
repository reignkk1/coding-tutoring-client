import { Link } from "react-router-dom";
import Wrapper from "../components/common/Wrapper";
import useForm from "../hooks/useForm";
import { Form, FormContainer } from "../styles/Form";

export default function SignIn(): JSX.Element {
  const {
    submitHandler,
    changeHandler,
    validHandler,
    inputs,
    valid,
    formIsValid,
  } = useForm({
    email: "",
    password: "",
  });

  return (
    <Wrapper>
      <FormContainer>
        <Form onSubmit={submitHandler}>
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

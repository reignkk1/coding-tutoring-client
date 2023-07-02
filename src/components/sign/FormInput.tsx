import { useState } from "react";
import styled from "styled-components";
import { sendCode } from "../../api/auth";
import { Button } from "../../styles/Form";

const FormInput = (props: any) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const [requestCode, setRequestCode] = useState(false);
  const [code, setCode] = useState("");
  const [inputCode, setInputCode] = useState("");
  const [authEmail, setAuthEmail] = useState(false);
  const handleFocus = () => {
    setFocused(true);
  };

  if (inputProps.type === "email") {
    return (
      <InputContainer>
        <input
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          focused={focused.toString()}
        />
        <span>{errorMessage}</span>
        <Button
          type="button"
          onClick={() => {
            sendCode(inputProps.value).then((res) => setCode(res));
            setRequestCode(true);
          }}
        >
          인증코드 요청
        </Button>
        {requestCode && (
          <AuthEmailContainer>
            <input
              placeholder="인증코드 입력"
              type="text"
              id="inputCode"
              value={inputCode}
              onChange={(e) => setInputCode(e.target.value)}
            />
            <Button
              type="button"
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
              {authEmail ? "인증 완료" : "인증"}
            </Button>
          </AuthEmailContainer>
        )}
      </InputContainer>
    );
  } else {
    return (
      <InputContainer>
        <input
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          focused={focused.toString()}
          onClick={(e) => console.dir(e.target)}
        />
        <span>{errorMessage}</span>
      </InputContainer>
    );
  }
};

export default FormInput;

export const InputContainer = styled.div`
  width: 222px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  input {
    padding: 0.8rem 1rem;
    border-radius: 3px;
    margin: 0.5rem 0;

    background-color: #ffffff;

    &:invalid[focused="true"] ~ span {
      display: block;
    }

    &:invalid ~ button {
      background-color: #86ab20;
      cursor: not-allowed;
    }
  }
  span {
    padding-inline: 3px;
    font-size: 0.8rem;
    line-height: 1.5;
    color: #c9fd35;
    display: none;
  }
`;

const AuthEmailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

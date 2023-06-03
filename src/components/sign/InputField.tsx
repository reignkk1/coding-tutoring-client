import React, { useState } from "react";
import { sendCode } from "../../api/auth";
import { RadioContainer } from "../../styles/Form";

export interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  handleChange: () => void;
  errorMessage: string;
  isValid: boolean;
  value: string;
  options?: any[];
}

function InputField({
  label,
  type,
  name,
  handleChange,
  errorMessage,
  isValid,
  value,
  options,
}: InputFieldProps) {
  const [requestCode, setRequestCode] = useState(false);
  const [code, setCode] = useState("");
  const [inputCode, setInputCode] = useState("");
  const [authEmail, setAuthEmail] = useState(false);

  if (type === "radio") {
    return (
      <RadioContainer>
        <legend>{label}을 선택해주세요</legend>
        {options?.map((option) => (
          <div className="radioControl">
            <input
              type={type}
              id={option.value}
              name={name}
              value={option.value}
              onChange={handleChange}
            />
            <label htmlFor={option.value}>{option.label}</label>
          </div>
        ))}
      </RadioContainer>
    );
  } else {
    if (name === "email") {
      return (
        <div className="control">
          <input
            type={type}
            name={name}
            value={value}
            onChange={handleChange}
            placeholder={label}
          />
          {errorMessage && !isValid && (
            <span className="error">{errorMessage}</span>
          )}
          <button
            type="button"
            disabled={!isValid}
            onClick={() => {
              sendCode(value).then((res) => setCode(res));
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
                인증
              </button>
            </div>
          )}
        </div>
      );
    }
    return (
      <div className="control">
        <input
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={label}
        />
        {errorMessage && !isValid && (
          <span className="error">{errorMessage}</span>
        )}
      </div>
    );
  }
}

export default React.memo(InputField);

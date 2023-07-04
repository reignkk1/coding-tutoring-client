import React, { useState } from "react";
import styled from "styled-components";

export default function RadioInput(props: any) {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;
  const handleFocus = () => {
    setFocused(true);
  };
  // console.log(inputProps);
  return (
    <RadioContainer>
      <legend>{label}을 선택해주세요*</legend>
      {inputProps.options?.map((option: { label: string; value: string }) => (
        <Radio key={option.value}>
          <input
            {...inputProps}
            onChange={onChange}
            id={option.value}
            value={option.value}
            onBlur={handleFocus}
            focused={focused.toString()}
            checked={option.value === inputProps.value && "checked"}
          />
          <label htmlFor={option.value}>{option.label}</label>
        </Radio>
      ))}
    </RadioContainer>
  );
}

const RadioContainer = styled.div`
  width: 222px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;

  legend {
    font-size: regular;
    line-height: 1.5;
    color: #c9fd35;
  }
`;

const Radio = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

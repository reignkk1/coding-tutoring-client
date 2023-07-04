import React from "react";
import styled from "styled-components";

export default function Select(props: any) {
  const { label, errorMessage, onChange, id, ...inputProps } = props;
  // console.log(inputProps);
  return (
    <SelectContainer>
      <label htmlFor={`${label}`}>{label}을 선택해주세요*</label>
      <select
        id={label}
        {...inputProps}
        onChange={onChange}
        value={inputProps.value}
      >
        {inputProps.options?.map((option: any) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </SelectContainer>
  );
}

const SelectContainer = styled.div`
  width: 222px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;

  label {
    font-size: regular;
    line-height: 1.5;
    color: #c9fd35;
  }

  select {
    padding: 0.8rem 1rem;
    border-radius: 3px;
  }
`;

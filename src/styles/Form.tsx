import styled from "styled-components";

export const FormContainer = styled.div`
  max-width: 400px;
  min-height: calc(100vh - 200px);
  margin-inline: auto;
  padding-top: 8rem;
  padding-bottom: 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  h1 {
    width: fit-content;
    margin-inline: auto;
    font-family: regular;
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }

  form {
    &:invalid .submit {
      background-color: #86ab20;
      cursor: not-allowed;
    }
  }
`;

export const HelpSign = styled.div`
  display: flex;
  gap: 0.5rem;
  color: #ffffff;
`;

export const Button = styled.button`
  width: 222px;
  padding-block: 0.8rem;
  border-radius: 3px;
  margin-block: 0.5rem;

  background-color: #c9fd35;
  color: #0e1620;

  font-size: 1rem;

  &:active {
    background-color: #c9fd35;
    color: #0e1620;
  }

  &:disabled,
  :disabled:hover,
  :disabled:active {
    background-color: #86ab20;
    cursor: not-allowed;
  }

  &.signup {
    margin-top: 1rem;
  }
`;

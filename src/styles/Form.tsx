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

  .moreInfo {
    width: 222px;
    margin: 1rem 0 0.8rem 0;
    font-size: 0.9rem;
    line-height: 1.5;
    color: #c9fd35;
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

  font-size: 1rem;

  @media (max-width: 650px) {
    font-size: 0.8rem;
  }

  background-color: #c9fd35;
  color: #0e1620;

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

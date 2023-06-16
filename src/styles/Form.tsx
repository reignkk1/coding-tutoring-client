import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;

  h1 {
    font-family: regular;
    font-size: 1.5rem;
    color: #c9fd35;
  }

  span {
    margin-top: 2rem;
  }

  .auth {
    display: none;
    width: 250px;
    margin-top: 0.5rem;
    color: #ffffff;
    font-size: 0.8rem;
    line-height: 1.2rem;

    &.show {
      display: block;
    }
  }

  .control {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;

    input {
      width: 250px;
      padding: 0.8rem 1rem;
      border: none;
      border-radius: 0.5rem;

      background-color: #ffffff;
      font-family: regular;
      font-size: 1rem;

      &::placeholder {
        font-family: regular;
      }

      &.emailCode {
        display: none;
        &.show {
          display: block;
          margin-top: 1rem;
        }
      }

      &:focus {
        outline: none;
      }
    }

    .error {
      width: 250px;
      margin-top: 0.5rem;
      color: #ffffff;
      font-size: 0.8rem;
      line-height: 1.2rem;

      &.show {
        display: block;
      }
    }
  }

  button {
    width: 250px;
    margin-top: 1rem;
    padding-block: 0.8rem;
    border-radius: 0.5rem;

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
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-inline: auto;
  padding-block: 10rem;
  min-height: calc(100vh - 200px);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.div`
  max-width: 400px;
  height: 100%;
  margin-inline: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  .aboutSign {
    display: flex;
    gap: 0.5rem;
    color: #c9fd35;
  }
`;

export const RadioContainer = styled.fieldset`
  width: 250px;
  margin-top: 2rem;

  legend {
    font-family: regular;
  }

  .radioControl {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
  }
`;

export const SelectContainer = styled.div`
  padding-top: 1.5rem;
  width: 250px;

  select {
    width: 100%;
    border: 1px solid #eaeaea;
    padding: 1rem;
    font-size: inherit;
    color: inherit;
    outline: none;

    &:focus {
      border: 1px solid #5ec8d9;
      box-shadow: 0 1px 6px 0 rgba(94, 200, 217, 0.36);
    }

    option {
    }
  }
`;

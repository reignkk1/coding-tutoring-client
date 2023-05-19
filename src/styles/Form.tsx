import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #697a79;

  h3 {
    font-size: 2rem;
    font-weight: 600;
  }

  .social {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    margin-top: 2rem;
  }

  p {
    margin-top: 2rem;
  }

  .auth {
    display: none;
    width: 250px;
    margin-top: 0.5rem;
    color: #b40e0e;
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
      background-color: #f0f4f3;
      border: none;
      padding: 0.8rem 1rem;
      font: inherit;
      border-radius: 0.5rem;

      &.emailCode {
        display: none;
        &.show {
          display: block;
          margin-top: 1rem;
        }
      }

      &:focus {
        outline: none;
        border: 1px solid #697a79;
      }

      &.invalid {
        border: 1px solid #b40e0e;
      }
    }

    .error {
      width: 250px;
      margin-top: 0.5rem;
      color: #b40e0e;
      font-size: 0.8rem;
      line-height: 1.2rem;

      &.show {
        display: block;
      }
    }
  }

  button {
    margin-top: 1rem;
    background-color: green;
    color: #fff;
    width: 250px;
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    cursor: pointer;

    &:hover,
    :active {
      background-color: #005b00;
    }

    &:disabled,
    :disabled:hover,
    :disabled:active {
      background-color: #ccc;
      color: #fff;
      border-color: #ccc;
      cursor: not-allowed;
    }
  }
`;

export const FormContainer = styled.div`
  max-width: 400px;
  margin-inline: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 0px;

  .aboutSign {
    display: flex;
    gap: 0.5rem;
    color: #697a79;
    margin-top: 1.5rem;
    font-size: 0.8rem;

    a {
      color: inherit;
      text-decoration: none;
    }
  }
`;

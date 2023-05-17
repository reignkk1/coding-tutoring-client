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

  .warn {
    margin-top: 0.5rem;
    color: #de3730ff;
    font-size: 0.8rem;
  }

  input {
    width: 250px;
    background-color: #f0f4f3;
    border: none;
    margin-top: 1rem;
    padding: 0.8rem 1rem;
    color: #697a79;

    &::placeholder {
      opacity: 0.8;
    }
  }

  button {
    border-radius: 1.2rem;
    border: none;
    background-color: #3ab19b;
    color: #ffffff;
    padding: 0.8rem 3rem;
    margin-top: 1.5rem;
    transition: transform 0.1s ease-in;

    &.disabled {
      background-color: #de3730ff;
    }

    &:hover {
      transform: scale(0.95);
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

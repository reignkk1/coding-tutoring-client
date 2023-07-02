import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  height: 2rem;
  padding: 0.5rem 0.7rem;
  border-radius: 5px;
  flex-shrink: 0;

  background-color: #c9fd35;
  color: #0e1620;

  .hide {
    @media (max-width: 450px) {
      dispaly: none;
    }
  }

  &:hover {
    background-color: #b2e22d;
  }
`;

interface IButton {
  children: React.ReactNode;
  onClick?(): void;
  type?: "submit" | "reset" | "button";
  className?: string;
}

function Button({ children, onClick, type = "button", className }: IButton) {
  return (
    <Btn type={type} onClick={onClick} className={className}>
      {children}
    </Btn>
  );
}

export default React.memo(Button);

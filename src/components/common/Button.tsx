import styled from "styled-components";

const Btn = styled.button`
  height: 35px;
  padding: 6px 12px;
  border-radius: 5px;

  background-color: #c9fd35;
  color: #0e1620;

  &:hover {
    background-color: #b2e22d;
  }
`;

interface IButton {
  children: React.ReactNode;
  onClick?(): void;
  type?: "submit" | "reset" | "button";
}

export default function Button({
  children,
  onClick,
  type = "button",
}: IButton) {
  return (
    <Btn type={type} onClick={onClick}>
      {children}
    </Btn>
  );
}

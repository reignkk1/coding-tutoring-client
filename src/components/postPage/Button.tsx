import styled from "styled-components";

const Btn = styled.button`
  background-color: #f3f4f6;
  padding: 6px 12px;
  border-radius: 5px;
  font-weight: bold;
  height: 35px;
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

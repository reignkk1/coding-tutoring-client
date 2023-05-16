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
}

export default function Button({ children, onClick }: IButton) {
  return <Btn onClick={onClick}>{children}</Btn>;
}

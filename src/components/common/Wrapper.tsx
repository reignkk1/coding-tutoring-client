import { styled } from "styled-components";

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding-top: 65px;
  height: 100vh;
`;

// main 콘텐츠 Wrapper

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>;
}

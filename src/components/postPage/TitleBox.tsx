import { styled } from "styled-components";

const Container = styled.div`
  h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  div {
    margin-bottom: 5px;
  }
`;

interface ITitleBox {
  title: string;
  firstExplain: string;
  secondExplain?: string;
}

export default function TitleBox({
  title,
  firstExplain,
  secondExplain,
}: ITitleBox) {
  return (
    <Container>
      <h2>{title}</h2>
      <div>{firstExplain}</div>
      <div>{secondExplain}</div>
    </Container>
  );
}

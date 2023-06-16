import styled from "styled-components";

const Container = styled.div`
  line-height: 1.7;

  h2 {
    font-family: regular;
    font-size: 1.5rem;
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

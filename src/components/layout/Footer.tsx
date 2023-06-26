import styled from "styled-components";

const Container = styled.footer`
  width: 100%;
  height: 200px;
  max-width: 1200px;
  margin-inline: auto;

  display: flex;
  align-items: center;
  justify-content: center;
  padding-inline: 4rem;

  background-color: #252c35;

  border-radius: 1rem;
`;

const Info = styled.p`
  line-height: 2;
  font-size: 1rem;
  color: #b5b5b5;
`;

export default function Footer() {
  return (
    <Container>
      <Info>
        코딩바다 M 이메일: codingbada@gmail.com
        <br /> 코딩바다는 통신판매중개자로서 통신판매의 당사자가 아니며 개별
        판매자가 제공하는 서비스에 대한 이행, 계약사항 등과 관련한 의무와 책임은
        거래당사자에게 있습니다.
      </Info>
    </Container>
  );
}

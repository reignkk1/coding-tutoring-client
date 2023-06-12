import styled from "styled-components";

const Container = styled.footer`
  display: flex;
  align-items: center;
  width: 100%;
  height: 200px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

const Info = styled.p`
  line-height: 2;
  font-size: 13px;
  opacity: 0.5;
`;

export default function Footer() {
  return (
    <Container>
      <Wrapper>
        <Info>
          채리 M 이메일 : 01.staff.gawebada@gmail.com
          <br /> 사업자 등록번호 : 128-38-04461 직업정보제공사업 신고번호 :
          서울청 제2017 -25호 통신판매업신고번호 : 제 2019-용인수지-1070호{" "}
          <br /> 회원 이용약관 | 개인정보처리방침
          <br /> 개발바다는 통신판매중개자로서 통신판매의 당사자가 아니며 개별
          판매자가 제공하는 서비스에 대한 이행, 계약사항 등과 관련한 의무와
          책임은 거래당사자에게 있습니다.
        </Info>
      </Wrapper>
    </Container>
  );
}

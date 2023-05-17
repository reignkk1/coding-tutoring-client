import styled from "styled-components";
import Wrapper from "../components/common/Wrapper";

const Banner = styled.div`
  background-color: #edfaf7;
  height: 350px;
  padding-top: 65px;
`;

const BannerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 1200px;
  height: 100%;
  margin: 0 auto;
`;

const BannerImg = styled.img`
  height: 255px;
  width: 334px;
`;

const BannerTitle = styled.div`
  h2 {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 15px;
  }
  span {
    font-size: 21px;
  }
`;

const Container = styled.div`
  text-align: center;
  margin-top: 100px;
  margin-bottom: 200px;
`;

const FirstBox = styled.div`
  p:first-child {
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 24px;
  }
  p:last-child {
    font-size: 20px;
  }
`;
const SecondBox = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 100px;
`;

const Box = styled.div`
  width: 400px;
  height: 400px;
  background-color: #f0f6f9;
  border-radius: 20px;
  padding: 50px 20px;

  div {
    font-weight: bold;
    font-size: 34px;
    margin-bottom: 20px;
  }
  span {
    font-weight: bold;
    font-size: 20px;
  }
  p {
    line-height: 1.5;
    margin-top: 20px;
    text-align: start;
  }
`;

export default function Home() {
  return (
    <>
      <Banner>
        <BannerContainer>
          <BannerTitle>
            <h2>선생님과 학생을 가장 찾기 쉬운 방법!</h2>
            <span>과외바다에서 함께 할 사람들을 찾으세요 🔍</span>
          </BannerTitle>
          <BannerImg src="/banner.png" />
        </BannerContainer>
      </Banner>
      <Wrapper>
        <Container>
          <FirstBox>
            <p>20만 과외 플랫폼</p>
            <p>모두를 위한, 새로운 매칭을 만들어 갑니다</p>
          </FirstBox>
          <SecondBox>
            <Box>
              <div>중개 수수료 0%</div>
              <span>과외바다는 연결 성사 수수료가 없어요</span>
              <p>
                선생님 및 학생 모두 연락 요청이나 유선 연락을 받은 경우 별다른
                수수료가 발생하지 않아요. 선생님의 경우 큰 노력 없이도 리스트
                상위 노출이 용이해요.
              </p>
            </Box>
            <Box>
              <div>컨택 이용권 제공</div>
              <span>수강생에게는 매월 컨택 이용권이 제공돼요</span>
              <p>
                수강생에게는 연락 요청은 5건, 유선 연락은 3건까지 매월 이용권이
                제공 되고 있어요. 내게 맞는 선생님을 직접 찾아 과외를 구하면
                선생님의 부담을 덜어드릴 수 있어요.
              </p>
            </Box>
          </SecondBox>
        </Container>
      </Wrapper>
    </>
  );
}

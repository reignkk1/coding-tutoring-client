import styled from "styled-components";
import Wrapper from "../components/common/Wrapper";

const Banner = styled.div`
  width: 100%;
  height: 350px;

  padding-inline: 6rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #c9fd35;
  transition: all 0.3s ease-out;

  @media (max-width: 850px) {
    width: 100%;
    padding-inline: 2rem;
  }
`;

const BannerImg = styled.img`
  height: 255px;
  width: 334px;

  @media (max-width: 850px) {
    display: none;
  }
`;

const BannerTitle = styled.div`
  color: #0e1620;
  line-height: 1.5;

  h2 {
    font-size: 2rem;
    font-family: medium;
    margin-bottom: 1rem;
  }
  span {
    font-size: 21px;
  }

  @media (max-width: 650px) {
    h2 {
      font-size: 1.7rem;
    }
    span {
      font-size: 1.2rem;
    }
  }
`;

const Intro = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-block: 6rem;
  padding-inline: 2rem;
  line-height: 1.3;

  @media (max-width: 650px) {
    margin-block: 4rem;
  }
`;

const FirstBox = styled.div`
  text-align: center;
  p {
    font-size: 1.3rem;

    &:first-child {
      font-family: regular;
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
    }
  }

  @media (max-width: 650px) {
    p:first-child {
      font-size: 1.5rem;
    }
  }
`;

const SecondBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 4rem;
  transition: all 0.3s ease-out;

  @media (max-width: 640px) {
    flex-direction: column;
    margin-top: 2rem;
  }
`;

const Box = styled.div`
  width: 400px;
  min-height: 250px;
  padding: 2rem;

  flex-shrink: 0;

  background-color: #1760fa;
  color: #ffffff;

  overflow: hidden;
  clip-path: polygon(
    22px 0,
    100% 0,
    100% calc(100% - 22px),
    calc(100% - 22px) 100%,
    0 100%,
    0 22px
  );

  div {
    font-family: regular;
    font-size: 1.5rem;
    color: #c9fd35;
    margin-bottom: 1.5rem;
  }

  p {
    &.sub-title {
      font-size: 1.2rem;
      font-family: regular;
    }
    line-height: 2;
    margin-top: 1rem;
    text-align: start;
  }

  @media (max-width: 850px) {
    width: 300px;
  }

  @media (max-width: 640px) {
    width: 100%;
    text-align: center;
  }
`;

export default function Home() {
  return (
    <Wrapper>
      <Banner>
        <BannerTitle>
          <h2>코딩 선생님과 학생을 가장 찾기 쉬운 방법!</h2>
          <span>코딩바다에서 함께 할 사람들을 찾으세요</span>
        </BannerTitle>
        <BannerImg src="/banner.png" />
      </Banner>

      <Intro>
        <FirstBox>
          <p>코딩 과외 플랫폼</p>
          <p>모두를 위한, 새로운 매칭을 만들어 갑니다</p>
        </FirstBox>
        <SecondBox>
          <Box>
            <div>중개 수수료 0%</div>
            <p className="sub-title">코딩바다는 연결 성사 수수료가 없어요</p>
            <p>
              선생님 및 학생 모두 연락 요청이나 유선 연락을 받은 경우 별다른
              수수료가 발생하지 않아요. 선생님의 경우 큰 노력 없이도 리스트 상위
              노출이 용이해요.
            </p>
          </Box>
          <Box>
            <div>컨택 이용권 제공</div>
            <p className="sub-title">
              수강생에게는 매월 컨택 이용권이 제공돼요
            </p>
            <p>
              수강생에게는 연락 요청은 5건, 유선 연락은 3건까지 매월 이용권이
              제공 되고 있어요. 내게 맞는 선생님을 직접 찾아 과외를 구하면
              선생님의 부담을 덜어드릴 수 있어요.
            </p>
          </Box>
        </SecondBox>
      </Intro>
    </Wrapper>
  );
}

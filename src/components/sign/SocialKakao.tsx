import KakaoLogin from "react-kakao-login";
import { kakaoSignin } from "../../api/auth";

const SocialKakao = () => {
  const kakaoClientId = process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY;

  const kakaoOnSuccess = async (data: any) => {
    // console.log(data);
    const idToken = data.response.access_token;
    // 엑세스 토큰 백엔드로 전달
    kakaoSignin(idToken);
  };
  const kakaoOnFailure = (error: any) => {
    console.log(error);
  };
  return (
    <KakaoLogin
      className="kakao"
      token={kakaoClientId!}
      onSuccess={kakaoOnSuccess}
      onFail={kakaoOnFailure}
    />
  );
};

export default SocialKakao;

import KakaoLogin from "react-kakao-login";
import { kakaoSignin } from "../../api/auth";

const SocialKakao = () => {
  const kakaoClientId = "33ab9bd4cd0df2fd7fa78884f4b62f2e";
  const kakaoOnSuccess = async (data: any) => {
    console.log(data);
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
      token={kakaoClientId}
      onSuccess={kakaoOnSuccess}
      onFail={kakaoOnFailure}
    />
  );
};

export default SocialKakao;

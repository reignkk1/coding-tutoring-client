import axios from "axios";

const baseUrl =
  "http://ec2-52-79-63-208.ap-northeast-2.compute.amazonaws.com:8080";

//이메일 코드 인증
export const sendCode = async (email: string) => {
  try {
    const res = await axios({
      url: `${baseUrl}/auth/mail?email=${email}`,
      method: "get",
    });
    console.log(res);
    if (res.status === 200) {
      alert("이메일 인증코드를 보냈습니다.");
      return res.data.certificationCode;
    }
  } catch (error) {
    alert("인증 과정에 문제가 생겼습니다.");
  }
};

//위의 sendCode와 동일한 역할(서버에 문제가 있을 떄)
// export const sendCode = async (email: string) => {
//   if (true) {
//     alert("이메일 인증코드를 보냈습니다.");
//     return "CODE";
//   }
// };

export const checkCode = (code: string, inputCode: string) => {
  return code === inputCode ? true : false;
};

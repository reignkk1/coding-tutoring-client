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

export const checkCode = (code: string, inputCode: string) => {
  return code === inputCode ? true : false;
};

//회원가입
export const signup = async (userData: any) => {
  try {
    const res = await axios({
      url: `${baseUrl}/member/join`,
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: userData,
    });
    if (res.status === 200) {
      alert("회원가입 성공하셨습니다!");
      window.location.replace("/signin");
    }
  } catch (error) {
    alert("회원가입에 실패했습니다");
  }
};

//비밀 번호 찾기
export const findPwd = async (userData: any) => {
  const { id, password } = userData;

  try {
    const res = await axios({
      url: `${baseUrl}/member/modify-password/${id}`,
      data: { password: password },
      method: "put",
      headers: {
        "Content-Type": "application/json",
        // "Content-Type": "text/plain;charset-UTF-8",
      },
    });
    if (res.status === 200) {
      alert("비밀번호가 바뀌었습니다.");
      window.location.replace("/signin");
    }
  } catch (error) {
    alert("비밀번호 변경에 실패했습니다.");
  }
};

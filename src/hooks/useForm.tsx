import { useState, useCallback } from "react";
import axios from "axios";

interface Inputs {
  userId: string;
  pwd: string;
  email?: string;
  nickname?: string;
  role?: string;
  sex?: string;
  age?: string;
}

interface Valid {
  userId: boolean;
  pwd: boolean;
  email?: boolean;
  nickname?: boolean;
}

interface ValidMsg {
  userId: string;
  pwd: string;
  email?: string;
  nickname?: string;
}

export default function useForm(initialState: Inputs) {
  const [inputs, setInputs] = useState<Inputs>(initialState);

  const [valid, setValid] = useState<Valid>({
    userId: true,
    pwd: true,
    email: true,
    nickname: true,
  });

  const [validMsg, setValidMsg] = useState<ValidMsg>({
    userId: "",
    pwd: "",
    email: "",
    nickname: "",
  });

  const handleRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setInputs({ ...inputs, [name]: value });
  };

  // 이메일
  const validateEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const emailRegex =
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
      const email = e.target.value;
      setInputs({ ...inputs, email });

      if (!emailRegex.test(email)) {
        setValidMsg({ ...validMsg, email: "이메일 형식이 아니에요." });
        setValid({ ...valid, email: false });
      } else {
        setValidMsg({ ...validMsg, email: "올바른 이메일 형식이에요 : )" });
        setValid({ ...valid, email: true });
      }
    },
    [inputs, valid, validMsg]
  );

  //이메일 코드 인증
  const certificateEmail = async (email: string) => {
    try {
      const res = await axios({
        url: "http://ec2-52-79-63-208.ap-northeast-2.compute.amazonaws.com:8080/auth/mail",
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        data: email,
      });
      if (res.status === 200) {
        alert("이메일 인증코드를 보냈습니다.");
      }
    } catch (error) {
      alert("인증 과정에 문제가 생겼습니다.");
    }
  };

  // 비밀번호
  const validatePwd = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const pwdRegex = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
      const pwd = e.target.value;
      setInputs({ ...inputs, pwd });

      if (!pwdRegex.test(pwd)) {
        setValidMsg({
          ...validMsg,
          pwd: "숫자, 영문자, 특수문자 조합으로 8자리 이상 입력해주세요!",
        });
        setValid({ ...valid, pwd: false });
      } else {
        setValidMsg({ ...validMsg, pwd: "안전한 비밀번호에요 : )" });
        setValid({ ...valid, pwd: true });
      }
    },
    [inputs, valid, validMsg]
  );

  //아이디
  const validateUserId = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const userIdRegex = /^[a-z0-9_-]{4,20}$/;
      const userId = e.target.value;
      setInputs({ ...inputs, userId });

      if (!userIdRegex.test(userId)) {
        setValidMsg({
          ...validMsg,
          userId:
            "숫자, 영문소문자, 언더바/하이픈 조합으로 4자 이상 입력해주세요!",
        });
        setValid({ ...valid, userId: false });
      } else {
        setValidMsg({ ...validMsg, userId: "좋은 아이디에요 : )" });
        setValid({ ...valid, userId: true });
      }
    },
    [inputs, valid, validMsg]
  );

  //닉네임
  const validNickname = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const nicknameRegex = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,16}$/;
      const nickname = e.target.value;
      setInputs({ ...inputs, nickname });

      if (!nicknameRegex.test(nickname)) {
        setValidMsg({
          ...validMsg,
          nickname: "영문 또는 한글, 숫자 조합으로 2자 이상 입력해주세요!",
        });
        setValid({ ...valid, nickname: false });
      } else {
        setValidMsg({ ...validMsg, nickname: "좋은 닉네임이에요 : )" });
        setValid({ ...valid, nickname: true });
      }
    },
    [inputs, valid, validMsg]
  );

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return {
    inputs,
    handleChange,
    handleRadio,
    valid,
    validMsg,
    validateEmail,
    certificateEmail,
    validatePwd,
    validateUserId,
    validNickname,
    onSubmit,
  };
}

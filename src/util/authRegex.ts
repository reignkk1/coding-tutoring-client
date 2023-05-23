export const isEmail = (email: string): boolean => {
  const emailRegex =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  return emailRegex.test(email);
};
export const isUserId = (userId: string): boolean => {
  const userIdRegex = /^[a-z0-9_-]{4,20}$/;
  return userIdRegex.test(userId);
};
export const isPwd = (pwd: string): boolean => {
  const pwdRegex = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  return pwdRegex.test(pwd);
};
export const isNickname = (nickname: string): boolean => {
  const nicknameRegex = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,16}$/;
  return nicknameRegex.test(nickname);
};

export const isRadio = (radio: string): boolean => {
  if (radio !== "") {
    return true;
  } else {
    return false;
  }
};

export const ageOptions = [
  { value: "", label: "선택해주세요" },
  { value: "초등학생", label: "초등학생" },
  { value: "중학생", label: "중학생" },
  { value: "고등학생", label: "고등학생" },
  { value: "대학생", label: "대학생" },
  { value: "20대", label: "20대" },
  { value: "30대", label: "30대" },
  { value: "40대", label: "40대" },
  { value: "50대", label: "50대" },
];

function createValidationRule(
  ruleName: string,
  errorMessage: string,
  validateFunc: (inputValue: string) => boolean
) {
  return {
    name: ruleName,
    message: errorMessage,
    validate: validateFunc,
  };
}

export function requiredRule(inputName: string) {
  return createValidationRule(
    "required",
    `${inputName} 필수 입력 항목입니다`,
    (inputValue) => inputValue.length !== 0
  );
}

export function emailRule() {
  return createValidationRule(
    "email",
    "올바른 이메일 형식이 아니에요",
    (inputValue) => emailRegex.test(inputValue)
  );
}

export function userIdRule() {
  return createValidationRule(
    "id",
    "숫자, 영문소문자, 언더바/하이픈 조합으로 4자 이상 입력해주세요",
    (inputValue) => userIdRegex.test(inputValue)
  );
}

export function pwdRule() {
  return createValidationRule(
    "pwd",
    "숫자, 영문자, 특수문자 조합으로 8자리 이상 입력해주세요",
    (inputValue) => pwdRegex.test(inputValue)
  );
}

export function nicknameRule() {
  return createValidationRule(
    "nickname",
    "영문 또는 한글, 숫자 조합으로 2자 이상 입력해주세요",
    (inputValue) => nicknameRegex.test(inputValue)
  );
}

const emailRegex =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
const userIdRegex = /^[a-z0-9_-]{4,20}$/;
const pwdRegex = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
const nicknameRegex = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,16}$/;

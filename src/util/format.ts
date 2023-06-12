//받아온 데이터를 보여주기 좋은 형태로 포맷해주는 함수 모음

export const careerFormat = (career: string) => {
  switch (career) {
    case "NO_EXPERIENCE":
      return "1년 이하";
    case "FIRST_TO_THIRD_GRADE":
      return "1-3년차";
    case "THIRD_TO_FIFTH_GRADE":
      return "3-5년차";
    case "FIFTH_TO_SEVENTH_GRADE":
      return "5-7년차";
    case "OVER_SEVENTH_GRADE":
      return "7년차 이상";
  }
};

export const genderFormat = (gender: string) => {
  switch (gender) {
    case "FEMALE":
      return "여";
    case "MALE":
      return "남";
  }
};

export const ageFormat = (age: string) => {
  switch (age) {
    case "TWENTIES":
      return "20대";
    case "THIRTIES":
      return "30대";
    case "FORTIES":
      return "40대";
    case "FIFTIES":
      return "50대";
  }
};

export const jobFormat = (userClassification: string) => {
  switch (userClassification) {
    case "STUDENT":
      return " 학생";
    case "TEACHER":
      return " 선생님";
  }
};

import { createContext, useState, useEffect } from "react";
import { getAuthToken } from "../util/sign/auth";
import { getMyData } from "../api/auth";

// type AuthContextType = {
//   ageGroup: string;
//   career: string;
//   email: string;
//   gender: string;
//   id: string;
//   nickname: string;
//   userClassification: string;
//   studentPostResponseDtos: any;
//   teacherPostResponseDtos: any;
// };

export const AuthContext = createContext<any | null>(null);

export function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [user, setUser] = useState();

  const token = getAuthToken();

  useEffect(() => {
    getMyData(token!).then((res) => setUser(res));
  }, [token]);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

// export function useAuthContext() {
//   useContext(AuthContext);
// }

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function useIsAdmin() {
  const [isAdmin, setIsAdmin] = useState(false);
  const { role } = useContext(AuthContext).user || {};

  useEffect(() => {
    role === "ROLE_ADMIN" && setIsAdmin(true);
  }, [role]);

  return isAdmin;
}

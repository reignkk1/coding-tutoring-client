import { RootState } from "../store/configureStore";
import { useAppDispatch, useAppSelector } from "../reduxHooks";

export function useAuth() {
  const dispatch = useAppDispatch();

  const { authEmail } = useAppSelector((state: RootState) => state.auth);

  return [authEmail, dispatch] as const;
}

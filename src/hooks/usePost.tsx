import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/configureStore";
import { useAppDispatch, useAppSelector } from "../reduxHooks";

export function usePost() {
  const dispatch = useAppDispatch();

  const { value } = useAppSelector((state: RootState) => state.post);

  return [value, dispatch] as const;
}

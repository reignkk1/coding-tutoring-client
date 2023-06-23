import { useAppSelector, useAppDispatch } from "../reduxHooks";
import { RootState } from "../store/configureStore";

export default function useModal() {
  const dispatch = useAppDispatch();
  const { value } = useAppSelector((state: RootState) => state.modal);

  return [value, dispatch] as const;
}

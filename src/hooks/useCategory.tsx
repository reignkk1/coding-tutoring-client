import { useAppDispatch, useAppSelector } from "../reduxHooks";

export default function useCategory() {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.category);

  return [state, dispatch] as const;
}

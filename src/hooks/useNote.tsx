import { RootState } from "../store/configureStore";
import { useAppDispatch, useAppSelector } from "../reduxHooks";

export function useNote() {
  const dispatch = useAppDispatch();

  const { notes, loading, error } = useAppSelector(
    (state: RootState) => state.note
  );

  return [notes, loading, error, dispatch] as const;
}

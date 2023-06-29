import { RootState } from "../store/configureStore";
import { useAppSelector } from "../reduxHooks";

export function usePost() {
  const { posts, isLoading, isError } = useAppSelector(
    (state: RootState) => state.post
  );

  return { posts, isLoading, isError };
}

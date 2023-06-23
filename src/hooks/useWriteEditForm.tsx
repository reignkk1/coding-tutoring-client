import { useAppDispatch, useAppSelector } from "../reduxHooks";

// import { useAppSelector, useAppDispatch } from "../reduxHooks";

export default function useWriteEditForm() {
  const edit = useAppSelector((state) => state.editPost);
  const dispatch = useAppDispatch();

  return [edit, dispatch] as const;
}

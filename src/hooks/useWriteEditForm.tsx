import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { IWriteEditAction } from "../reducers/writeEdit";
import { ReducerState } from "../reducers/rootReducer";

// import { useAppSelector, useAppDispatch } from "../reduxHooks";

export default function useWriteEditForm() {
  const dispatch = useDispatch<Dispatch<IWriteEditAction>>();
  const state = useSelector((state: ReducerState) => state.writeEdit);
  // const edit = useAppSelector((state) => state.editPost);
  // const dispatch = useAppDispatch();

  return [state, dispatch] as const;
}

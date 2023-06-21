import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { IWriteEditAction } from "../reducers/writeEdit";
import { ReducerState } from "../reducers/rootReducer";

export default function useWriteEditForm() {
  const dispatch = useDispatch<Dispatch<IWriteEditAction>>();
  const state = useSelector((state: ReducerState) => state.writeEdit);

  return [state, dispatch] as const;
}

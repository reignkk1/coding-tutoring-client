import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { IPostAction } from "../reducers/post";
import { ReducerState } from "../reducers/rootReducer";

export function usePost() {
  const dispatch = useDispatch<Dispatch<IPostAction>>();

  const state = useSelector((state: ReducerState) => state.post);

  return [state, dispatch] as const;
}

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { IModalAction } from "../reducers/modal";
import { ReducerState } from "../reducers/rootReducer";

export default function useModal() {
  const dispatch = useDispatch<Dispatch<IModalAction>>();
  const state = useSelector((state: ReducerState) => state.modal);

  return [state, dispatch] as const;
}

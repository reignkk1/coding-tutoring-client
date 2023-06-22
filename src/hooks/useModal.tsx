import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { IModalAction } from "../reducers/modal";
import { ReducerState } from "../reducers/rootReducer";

// import { useAppSelector, useAppDispatch } from "../reduxHooks";

export default function useModal() {
  const dispatch = useDispatch<Dispatch<IModalAction>>();
  const state = useSelector((state: ReducerState) => state.modal);
  // const modal = useAppSelector((state: RootState) => state.modal.value);
  // const dispatch = useAppDispatch();

  return [state, dispatch] as const;
}

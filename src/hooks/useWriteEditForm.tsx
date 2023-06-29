import { useDispatch } from "react-redux";
import { useAppSelector } from "../reduxHooks";
import { ThunkDispatch } from "@reduxjs/toolkit";

export default function useWriteEditForm() {
  const edit = useAppSelector((state) => state.writeEditForm);
  const dispatch = useDispatch<ThunkDispatch<any, void, any>>();

  return [edit, dispatch] as const;
}

import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ReducerState } from "../../reducers/rootReducer";

const ModalConatiner = styled.div`
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

interface IModal {
  children: React.ReactNode;
}

export default function Modal({ children }: IModal) {
  const dispatch = useDispatch();

  const { modal } = useSelector((state: ReducerState) => state);

  return modal ? (
    <ModalConatiner
      onMouseDown={() => dispatch({ type: "MODAL_CLOSE", value: false })}
    >
      <div onMouseDown={(e) => e.stopPropagation()}>{children}</div>
    </ModalConatiner>
  ) : null;
}

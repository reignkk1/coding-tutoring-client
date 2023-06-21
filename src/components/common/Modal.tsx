import styled from "styled-components";
import useModal from "../../hooks/useModal";

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
  const [modal, dispatch] = useModal();

  return modal ? (
    <ModalConatiner onMouseDown={() => dispatch({ type: "MODAL_CLOSE" })}>
      <div onMouseDown={(e) => e.stopPropagation()}>{children}</div>
    </ModalConatiner>
  ) : null;
}

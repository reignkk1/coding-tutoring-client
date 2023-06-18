import styled from "styled-components";

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
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Modal({ children, modal, setModal }: IModal) {
  return modal ? (
    <ModalConatiner onMouseDown={() => setModal(false)}>
      <div onMouseDown={(e) => e.stopPropagation()}>{children}</div>
    </ModalConatiner>
  ) : null;
}

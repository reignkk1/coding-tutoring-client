import DaumPostCode, { Address } from "react-daum-postcode";
import styled from "styled-components";

const Modal = styled.div`
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

interface IAddressSearch {
  modal: boolean;
  modalhandle: React.Dispatch<React.SetStateAction<boolean>>;
  setAddressValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function AddressSearch({
  modal,
  modalhandle,
  setAddressValue,
}: IAddressSearch) {
  const handleComplete = (data: Address) => setAddressValue(data.address);
  const handleModalClose = () => modalhandle(false);

  return modal ? (
    <Modal onClick={handleModalClose}>
      <DaumPostCode
        style={{
          width: "400px",
          height: "500px",
        }}
        onComplete={handleComplete}
        onClose={handleModalClose}
      />
    </Modal>
  ) : null;
}

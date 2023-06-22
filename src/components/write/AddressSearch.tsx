import DaumPostCode, { Address } from "react-daum-postcode";
import useWriteEditForm from "../../hooks/useWriteEditForm";
import useModal from "../../hooks/useModal";
import { editArea } from "../../store/editPost";
import { closeModal } from "../../store/modal";

export default function AddressSearch() {
  const [, dispatch] = useWriteEditForm();
  const [, modalDispatch] = useModal();

  const handleComplete = (data: Address) => dispatch(editArea(data.address));
  return (
    <DaumPostCode
      style={{
        width: "400px",
        height: "500px",
      }}
      onComplete={handleComplete}
      onClose={() => modalDispatch(closeModal())}
    />
  );
}

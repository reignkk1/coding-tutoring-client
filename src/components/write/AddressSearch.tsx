import DaumPostCode, { Address } from "react-daum-postcode";
import useWriteEditForm from "../../hooks/useWriteEditForm";
import useModal from "../../hooks/useModal";

export default function AddressSearch() {
  const [, dispatch] = useWriteEditForm();
  const [, modalDispatch] = useModal();

  const handleComplete = (data: Address) =>
    dispatch({ type: "SET_AREA", value: data.address });

  return (
    <DaumPostCode
      style={{
        width: "400px",
        height: "500px",
      }}
      onComplete={handleComplete}
      onClose={() => modalDispatch({ type: "MODAL_CLOSE" })}
    />
  );
}

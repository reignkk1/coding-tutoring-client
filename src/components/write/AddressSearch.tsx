import DaumPostCode, { Address } from "react-daum-postcode";

import { useDispatch } from "react-redux";

export default function AddressSearch() {
  const dispatch = useDispatch();

  const handleComplete = (data: Address) =>
    dispatch({ type: "SET_AREA", value: data.address });

  return (
    <DaumPostCode
      style={{
        width: "400px",
        height: "500px",
      }}
      onComplete={handleComplete}
      onClose={() => dispatch({ type: "MODAL_CLOSE" })}
    />
  );
}

import DaumPostCode, { Address } from "react-daum-postcode";

interface IAddressSearch {
  setAddressValue: React.Dispatch<React.SetStateAction<string>>;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AddressSearch({
  setAddressValue,
  setModal,
}: IAddressSearch) {
  const handleComplete = (data: Address) => setAddressValue(data.address);

  return (
    <DaumPostCode
      style={{
        width: "400px",
        height: "500px",
      }}
      onComplete={handleComplete}
      onClose={() => setModal(false)}
    />
  );
}

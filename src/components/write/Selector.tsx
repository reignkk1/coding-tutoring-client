import styled from "styled-components";

const Select = styled.select`
  padding: 8px;
  outline: none;
  margin-bottom: 20px;
`;

class SeletItem {
  name;
  value;
  constructor(name: string, value: string) {
    this.name = name;
    this.value = value;
  }
}

interface ISelector {
  setValue: React.Dispatch<React.SetStateAction<string>>;
  data: SeletItem[];
  value?: string;
}

export default function Selector({ setValue, data }: ISelector) {
  return (
    <Select
      onChange={(e) => {
        setValue(e.target.value);
      }}
    >
      {data.map((item, index) => (
        <option key={index} value={item.value}>
          {item.name}
        </option>
      ))}
    </Select>
  );
}

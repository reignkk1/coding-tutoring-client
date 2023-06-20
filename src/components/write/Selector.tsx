import styled from "styled-components";

const Select = styled.select`
  padding: 8px;
  outline: none;
  margin-bottom: 20px;
  border-radius: 5px;
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
  data: SeletItem[];
  value?: string;
  onChange(e: React.ChangeEvent<HTMLSelectElement>): void;
}

export default function Selector({ data, onChange }: ISelector) {
  return (
    <Select onChange={onChange} defaultValue={"OFFLINE"}>
      {data.map((item, index) => (
        <option key={index} value={item.value}>
          {item.name}
        </option>
      ))}
    </Select>
  );
}

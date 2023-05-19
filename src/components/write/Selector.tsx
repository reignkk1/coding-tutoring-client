import styled from "styled-components";

const Select = styled.select`
  padding: 10px;
  outline: none;
  margin-bottom: 20px;
`;

interface ISelector {
  setSubjectValue: React.Dispatch<React.SetStateAction<string>>;
  data: { name: String; value: string }[];
  value: string;
}

export default function Selector({ setSubjectValue, data, value }: ISelector) {
  return (
    <Select onChange={(e) => setSubjectValue(e.target.value)} value={value}>
      {data.map((item) => (
        <option key={item.value} value={item.value}>
          {item.name}
        </option>
      ))}
    </Select>
  );
}

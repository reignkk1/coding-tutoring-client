import styled from "styled-components";

const Select = styled.select`
  padding: 8px;
  outline: none;
  margin-bottom: 20px;
`;

interface ISelector {
  setSubjectValue: React.Dispatch<React.SetStateAction<string>>;
  data: string[];
  value: string;
}

export default function Selector({ setSubjectValue, data, value }: ISelector) {
  return (
    <Select onChange={(e) => setSubjectValue(e.target.value)} value={value}>
      {data.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </Select>
  );
}

import styled from "styled-components";

interface CategoryProps {
  selected: string;
  changeSelected: (value: string) => void;
}
export default function Category({ selected, changeSelected }: CategoryProps) {
  const categories = [
    { value: "received", text: "받은쪽지" },
    { value: "sent", text: "보낸쪽지" },
  ];

  return (
    <CategoryContianer>
      {categories.map((c) => (
        <CategoryItem
          onClick={() => {
            changeSelected(c.value);
          }}
          key={c.value}
          className={c.value}
        >
          {c.text}
        </CategoryItem>
      ))}
    </CategoryContianer>
  );
}

const CategoryContianer = styled.ul`
  display: flex;
  justify-content: space-between;

  color: black;
`;

const CategoryItem = styled.li`
  width: 50%;
  height: 4rem;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #c9fd35;
  color: #1760fa;
  font-family: regular;

  cursor: pointer;

  &.sent {
    background-color: #1760fa;
    color: #c9fd35;
  }
  clip-path: polygon(
    0 0,
    calc(100% - 16px) 0,
    100% 16px,
    100% 100%,
    100% 100%,
    0 100%,
    0 100%,
    0 0
  );
`;

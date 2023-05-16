import styled from "styled-components";

interface CategoryProps {
  selected: string;
  changeSelected: (categoryName: string) => void;
}
export default function Category({ selected, changeSelected }: CategoryProps) {
  const categories = [
    { name: "teachers", text: "선생님을 찾아요 게시판" },
    { name: "students", text: "학생을 찾아요 게시판" },
  ];

  return (
    <CategoryContianer>
      {categories.map((c) => (
        <li onClick={() => changeSelected(c.name)}>
          <button className={`${selected === c.name && "selected"}`}>
            {c.text}
          </button>
        </li>
      ))}
    </CategoryContianer>
  );
}

const CategoryContianer = styled.ul`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #00000014;

  li {
    width: 50%;
    text-align: center;

    button {
      position: relative;
      width: 100%;
      padding: 1rem;
      font-size: 1rem;
      font-weight: 700;

      &.selected {
        &::after {
          content: "";
          position: absolute;
          right: 0;
          bottom: -3px;
          height: 3px;
          width: 100%;
          background: black;
        }
      }
    }
  }
`;

import styled from "styled-components";
import { GrFormClose } from "react-icons/gr";

const Container = styled.div`
  margin-bottom: 20px;
`;

const Subjects = styled.ul`
  display: flex;
`;

const Subject = styled.li`
  background-color: #1760fa;
  padding: 0.5rem 0.7rem;
  border-radius: 5px;
  margin-right: 30px;
  position: relative;
  color: #ffffff;
  font-family: regular;
  font-size: 0.9rem;
`;

const Cancle = styled.button`
  position: absolute;
  top: -5px;

  .icon {
    background-color: #ffffff;
    font-size: 1rem;
    font-family: regular;
  }
`;

interface IdesiredSubjects {
  desiredSubjects: string[];
  setDesiredSubjects: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function DesitredSubjectsList({
  desiredSubjects,
  setDesiredSubjects,
}: IdesiredSubjects) {
  const handleCancleClick = (subject: string) => {
    setDesiredSubjects((prev) => prev.filter((cur) => cur !== subject));
  };

  return (
    <Container>
      <Subjects>
        {desiredSubjects.map((subject, index) => (
          <Subject key={index}>
            {subject.toLowerCase()}
            <Cancle onClick={() => handleCancleClick(subject)}>
              <GrFormClose className="icon" />
            </Cancle>
          </Subject>
        ))}
      </Subjects>
    </Container>
  );
}

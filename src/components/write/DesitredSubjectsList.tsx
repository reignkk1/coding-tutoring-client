import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 20px;
`;

const Subjects = styled.ul`
  display: flex;
`;

const Subject = styled.li`
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 6px 10px;
  border-radius: 10px;
  margin-right: 30px;
  position: relative;
`;

const Cancle = styled.button`
  position: absolute;
  top: -5px;
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
            {subject}
            <Cancle onClick={() => handleCancleClick(subject)}>❌</Cancle>
          </Subject>
        ))}
      </Subjects>
    </Container>
  );
}

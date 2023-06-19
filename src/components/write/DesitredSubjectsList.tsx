import styled from "styled-components";
import { useDispatch } from "react-redux";

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
}

export default function DesitredSubjectsList({
  desiredSubjects,
}: IdesiredSubjects) {
  const dispatch = useDispatch();

  const handleCancleClick = (subject: string) => {
    dispatch({
      type: "SET_Desitred_Subjects",
      value: desiredSubjects.filter(
        (desiredSubject) => desiredSubject !== subject
      ),
    });
  };

  console.log(desiredSubjects);

  return (
    <Container>
      <Subjects>
        {desiredSubjects.map((subject, index) => (
          <Subject key={index}>
            {subject.toLowerCase()}
            <Cancle onClick={() => handleCancleClick(subject)}>❌</Cancle>
          </Subject>
        ))}
      </Subjects>
    </Container>
  );
}

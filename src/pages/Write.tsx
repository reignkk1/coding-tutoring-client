import styled from "styled-components";
import Wrapper from "../components/common/Wrapper";
import Editor from "../components/write/Editor";
import Button from "../components/postPage/Button";
import { useState, useContext } from "react";
import AddressSearch from "../components/write/AddressSearch";
import Selector from "../components/write/Selector";
import DesitredSubjectsList from "./../components/write/DesitredSubjectsList";
import { on_off, subjects } from "../components/write/SelectData";
import { createPost } from "../api/Post";
import { AuthContext } from "../context/AuthContext";
import { genderFormat, ageFormat, jobFormat } from "../util/format";
import Modal from "../components/common/Modal";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../reducers/rootReducer";
import { Dispatch } from "redux";
import { IModalAction } from "../reducers/modal";
import { IWriteAction } from "../reducers/write";

const Container = styled.div`
  height: 200vh;
  width: 900px;
  margin: 0 auto;
  padding-top: 50px;
  button {
    margin-left: 5px;
  }
`;

const TitleInput = styled.input`
  width: 100%;
  padding: 8px 10px;

  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  margin-bottom: 20px;

  &:focus {
    border-color: black;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-family: medium;
`;

const ButtonBox = styled.div`
  text-align: center;
`;

const UserInfoBox = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;
const UserInfo = styled.div`
  font-weight: bold;
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 10px;
  }
  div {
    margin-bottom: 5px;
  }
`;

const Required = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 50px;
`;

export default function Write() {
  const {
    user: { nickname, ageGroup, gender, img, userClassification },
  } = useContext(AuthContext);

  const [editorText, setEditorText] = useState("");

  const dispatch = useDispatch();

  const {
    write: { onOrOff, subject, desiredSubjects, title, area },
  } = useSelector((state: ReducerState) => state);

  const handleClick = () => {
    if (desiredSubjects.includes(subject))
      return alert("이미 추가 되었습니다.");
    if (desiredSubjects.length >= 1)
      return alert("기술스택은 최대 1개까지 선택 가능합니다.");
    dispatch({ type: "SET_Desitred_Subjects", value: [subject] });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      area,
      content: editorText,
      onOrOff,
      subject: desiredSubjects.join(""),
      title,
    };

    createPost(data, userClassification);
  };

  return (
    <Wrapper>
      <Container>
        <UserInfoBox>
          <UserInfo>
            <img src={img} alt="profile-img" />
            <div>
              {nickname}
              {jobFormat(userClassification)}
            </div>
            <div>
              {genderFormat(`${gender}`)} /&nbsp;
              {ageFormat(`${ageGroup}`)}
            </div>
          </UserInfo>
        </UserInfoBox>

        <Required>필수 *</Required>
        <form onSubmit={handleSubmit}>
          <Label>사는 곳 *</Label>
          <TitleInput
            name="address"
            style={{ width: "300px" }}
            defaultValue={area}
            readOnly
          />
          <Button onClick={() => dispatch({ type: "MODAL_OPEN" })}>검색</Button>
          <Modal>
            <AddressSearch />
          </Modal>

          <Label>희망 과목 *</Label>
          <Selector
            onChange={(e) =>
              dispatch({ type: "SET_SUBJECT", value: e.target.value })
            }
            data={subjects}
          />
          <Button onClick={handleClick}>추가</Button>
          <DesitredSubjectsList desiredSubjects={desiredSubjects} />

          <Label>온/오프라인 여부 *</Label>
          <Selector
            onChange={(e) =>
              dispatch({ type: "SET_ONOFF", value: e.target.value })
            }
            data={on_off}
          />

          <Label htmlFor="title">제목 *</Label>
          <TitleInput
            id="title"
            placeholder="제목을 입력해주세요."
            onChange={(e) =>
              dispatch({ type: "SET_TITLE", value: e.target.value })
            }
            value={title}
            maxLength={50}
          />

          <Label>{jobFormat(userClassification) + " 소개 *"}</Label>
          <Editor
            placeholder="자신을 소개해주세요."
            setEditorText={setEditorText}
            editorValue={editorText}
          />

          <ButtonBox>
            <Button type="submit">작성하기</Button>
          </ButtonBox>
        </form>
      </Container>
    </Wrapper>
  );
}

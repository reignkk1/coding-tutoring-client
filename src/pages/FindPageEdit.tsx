import styled from "styled-components";
import Wrapper from "../components/common/Wrapper";
import { ageFormat, genderFormat, jobFormat } from "../util/format";
import Button from "../components/postPage/Button";
import Editor from "../components/write/Editor";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import AddressSearch from "../components/write/AddressSearch";
import Selector from "../components/write/Selector";
import DesitredSubjectsList from "../components/write/DesitredSubjectsList";
import { on_off, subjects } from "../components/write/SelectData";
import { useLocation } from "react-router-dom";
import { modifyPost } from "../api/Post";
import Modal from "../components/common/Modal";

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

interface IFindPageEdit {
  id: number;
  title: string;
  area: string;
  content: string;
  onOrOff: string;
  subject: string;
}

export default function FindPageEdit({ category }: { category: string }) {
  const {
    user: { nickname, img, ageGroup, gender, userClassification },
  } = useContext(AuthContext);

  const post: IFindPageEdit = useLocation().state;

  const [onOffValue, setOnOffValue] = useState(post.onOrOff);
  const [subjectValue, setSubjectValue] = useState(post.subject);
  const [addressValue, setAddressValue] = useState(post.area);
  const [titleValue, setTitleValue] = useState(post.title);
  const [editorValue, setEditorValue] = useState(post.content);

  const [addressModal, setAddressModal] = useState(false);
  const [desiredSubjects, setDesiredSubjects] = useState<string[]>([
    post.subject,
  ]);

  const handleClick = () => {
    if (desiredSubjects.includes(subjectValue))
      return alert("이미 추가 되었습니다.");
    if (desiredSubjects.length >= 1)
      return alert("기술스택은 최대 1개까지 선택 가능합니다.");
    setDesiredSubjects([...desiredSubjects, subjectValue]);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      id: post.id,
      area: addressValue,
      content: editorValue,
      onOrOff: onOffValue,
      subject: desiredSubjects.join(""),
      title: titleValue,
    };
    modifyPost(data, category);
  };

  return (
    <Wrapper>
      <Container>
        <UserInfoBox>
          <UserInfo>
            <img src={img} alt="avatar-img" />
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
            value={addressValue}
            readOnly
          />
          <Button onClick={() => setAddressModal(true)}>검색</Button>
          <Modal modal={addressModal} setModal={setAddressModal}>
            <AddressSearch
              setAddressValue={setAddressValue}
              setModal={setAddressModal}
            />
          </Modal>

          <Label>희망 과목 *</Label>
          <Selector setValue={setSubjectValue} data={subjects} />
          <Button onClick={handleClick}>추가</Button>
          <DesitredSubjectsList
            desiredSubjects={desiredSubjects}
            setDesiredSubjects={setDesiredSubjects}
          />

          <Label>온/오프라인 여부 *</Label>
          <Selector setValue={setOnOffValue} data={on_off} />

          <Label htmlFor="title">제목 *</Label>
          <TitleInput
            id="title"
            placeholder="제목을 입력해주세요."
            onChange={(e) => setTitleValue(e.target.value)}
            value={titleValue}
            maxLength={50}
          />

          <Label>{jobFormat(userClassification) + " 소개 *"}</Label>
          <Editor
            placeholder="자신을 소개해주세요."
            editorValue={editorValue}
            setEditorValue={setEditorValue}
          />

          <ButtonBox>
            <Button type="submit">수정하기</Button>
          </ButtonBox>
        </form>
      </Container>
    </Wrapper>
  );
}

import styled from "styled-components";
import Button from "../common/Button";
import Modal from "../common/Modal";
import AddressSearch from "./AddressSearch";
import Selector from "./Selector";
import DesitredSubjectsList from "./DesitredSubjectsList";
import { on_off, subjects } from "./SelectData";
import Editor from "./Editor";
import useModal from "../../hooks/useModal";
import useWriteEditForm from "../../hooks/useWriteEditForm";

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

export default function WriteEditFormList() {
  const [state, dispatch] = useWriteEditForm();
  const [, modalDispatch] = useModal();

  const { subject, area, desiredSubjects, title } = state;

  const handleClick = () => {
    if (desiredSubjects?.includes(subject || ""))
      return alert("이미 추가 되었습니다.");
    if (desiredSubjects?.length || 0 >= 1)
      return alert("기술스택은 최대 1개까지 선택 가능합니다.");
    dispatch({ type: "SET_Desitred_Subjects", value: [subject || ""] });
  };

  return (
    <>
      <Label>사는 곳 *</Label>
      <TitleInput
        name="address"
        style={{ width: "300px" }}
        defaultValue={area}
        readOnly
      />
      <Button onClick={() => modalDispatch({ type: "MODAL_OPEN" })}>
        검색
      </Button>

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
      <DesitredSubjectsList desiredSubjects={desiredSubjects || []} />

      <Label>온/오프라인 여부 *</Label>
      <Selector
        onChange={(e) => dispatch({ type: "SET_ONOFF", value: e.target.value })}
        data={on_off}
      />

      <Label htmlFor="title">제목 *</Label>
      <TitleInput
        id="title"
        placeholder="제목을 입력해주세요."
        onChange={(e) => dispatch({ type: "SET_TITLE", value: e.target.value })}
        value={title}
        maxLength={50}
      />

      <Label>본인 소개 *</Label>
      <Editor placeholder="자신을 소개해주세요." />
    </>
  );
}

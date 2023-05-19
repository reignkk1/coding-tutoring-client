import styled from "styled-components";
import Wrapper from "../components/common/Wrapper";
import Editor from "../components/write/Editor";
import Button from "../components/postPage/Button";
import { useState } from "react";
import { user } from "../UserData";
import AddressSearch from "../components/write/AddressSearch";
import Selector from "../components/write/Selector";

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
  font-size: 16px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  outline: none;
  border-radius: 5px;
  margin-bottom: 20px;
  &:focus {
    border-color: black;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
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

class SelectItem {
  name;
  value;
  constructor(name: string, value: string) {
    this.name = name;
    this.value = value;
  }
}

export default function Write() {
  const [onOffValue, setOnOffValue] = useState("all_possibility");
  const [subjectValue, setSubjectValue] = useState("entire");
  const [addressValue, setAddressValue] = useState("");
  const [addressModal, setAddressModal] = useState(false);

  const on_off = [
    new SelectItem("모두 가능", "all_possibility"),
    new SelectItem("온라인", "online"),
    new SelectItem("오프라인", "offline"),
  ];

  const subjects = [
    new SelectItem("전체", "entire"),
    new SelectItem("국어", "korean"),
    new SelectItem("수학", "math"),
    new SelectItem("사회", "society"),
    new SelectItem("과학", "science"),
    new SelectItem("물리", "physics"),
    new SelectItem("화학", "chemistry"),
    new SelectItem("생물", "biology"),
    new SelectItem("영어", "english"),
    new SelectItem("일본어", "japanese"),
    new SelectItem("중국어", "chinese"),
  ];
  console.log(onOffValue, subjectValue, addressValue);
  return (
    <>
      <Wrapper>
        <Container>
          <UserInfoBox>
            <UserInfo>
              <img src={user.avartarImg} />
              <div>
                {user.name}
                {user.isStudent ? " 학생" : " 선생님"}
              </div>
              <div>
                ({user.gender} / {user.age})
              </div>
            </UserInfo>
          </UserInfoBox>

          <Label>사는 곳</Label>
          <TitleInput style={{ width: "300px" }} value={addressValue} />
          <Button onClick={() => setAddressModal(true)}>검색</Button>
          <AddressSearch
            modal={addressModal}
            modalhandle={setAddressModal}
            setAddressValue={setAddressValue}
          />

          <Label>희망 과목</Label>
          <Selector
            value={subjectValue}
            setSubjectValue={setSubjectValue}
            data={subjects}
          />

          <Label>온/오프라인 여부</Label>
          <Selector
            value={onOffValue}
            setSubjectValue={setOnOffValue}
            data={on_off}
          />

          <Label htmlFor="title">제목</Label>
          <TitleInput id="title" placeholder="제목을 입력해주세요." />

          <Label>{user.isStudent ? "학생 소개" : "선생님 소개"}</Label>
          <Editor />

          <ButtonBox>
            <Button>작성하기</Button>
          </ButtonBox>
        </Container>
      </Wrapper>
    </>
  );
}

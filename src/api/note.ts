import axios from "axios";
import { useState, useEffect } from "react";

const baseUrl =
  "http://ec2-52-79-63-208.ap-northeast-2.compute.amazonaws.com:8080";

export interface INote {
  title: string;
  content: string;
  messageId?: string;
  receiverId: string;
  receiverNickname: string;
  senderId: string;
  senderNickname: string;
}

// 메세지 보내기

export function sendNotePost(
  token: string | null,
  data: INote,
  setModal: React.Dispatch<React.SetStateAction<boolean>>
) {
  axios({
    url: `${baseUrl}/v1/message`,
    method: "post",
    headers: {
      Authorization: `${token}`,
    },
    data,
  })
    .then((res) => {
      if (res.status === 200) {
        setModal(false);
        alert("보내기 완료!");
      }
    })
    .catch((error) => {
      console.log(error);
      alert("보내기 실패!");
    });
}

// 메세지 불러오기
export function useGetNotes(token: string, category: string) {
  const [notes, setNotes] = useState<INote[]>();

  useEffect(() => {
    axios({
      url: `${baseUrl}/v1/messages/${category}`,
      method: "get",
      headers: {
        Authorization: `${token}`,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          setNotes(res.data);
        }
      })
      .catch((error) => console.log(error));
  }, [token, category]);

  return notes;
}

//메세지 삭제
export function deleteNote(token: string, noteId: string, category: string) {
  axios
    .delete(`${baseUrl}/v1/message/${category}/${noteId}`)
    .then((response) => {
      if (response.status === 200) {
        window.location.replace("/notes");
      }
    })
    .catch((error) => console.log(error));
}

import axios from "axios";
import { useState, useEffect } from "react";
import { AnyAction, Dispatch } from "redux";
import { closeModal } from "../store/modal";

const token = localStorage.getItem("token");

const baseURL =
  "http://ec2-52-79-63-208.ap-northeast-2.compute.amazonaws.com:8080";

axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

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

  dispatch: Dispatch<AnyAction>
) {
  axios({
    url: `${baseURL}/v1/message`,
    method: "post",
    data,
  })
    .then((res) => {
      if (res.status === 200) {
        dispatch(closeModal());
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
      url: `${baseURL}/v1/messages/${category}`,
      method: "get",
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
    .delete(`${baseURL}/v1/message/${category}/${noteId}`)
    .then((response) => {
      if (response.status === 200) {
        window.location.replace("/notes");
      }
    })
    .catch((error) => console.log(error));
}

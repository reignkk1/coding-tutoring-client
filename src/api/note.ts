import axios from "axios";
import { useState, useEffect } from "react";
import { Dispatch } from "redux";
import { IModalAction } from "../reducers/modal";

const baseUrl =
  "http://ec2-52-79-63-208.ap-northeast-2.compute.amazonaws.com:8080";

interface INote {
  title: string;
  content: string;
  receiverId: string;
  receiverNickname: string;
  senderId: string;
  senderNickname: string;
}

// 메세지 보내기

export function sendNotePost(
  token: string | null,
  data: INote,
  dispatch: Dispatch<IModalAction>
) {
  axios({
    url: `${baseUrl}/v1/message`,
    method: "post",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data,
  })
    .then((res) => {
      if (res.status === 200) {
        dispatch({ type: "MODAL_CLOSE" });
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

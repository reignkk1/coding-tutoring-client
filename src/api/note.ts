import axios from "axios";
import { useState, useEffect } from "react";

const baseUrl =
  "http://ec2-52-79-63-208.ap-northeast-2.compute.amazonaws.com:8080";

interface INote {
  content: string;
  receiverName: string;
  setderName: string;
  title: string;
}

interface INotePost {
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
  data: INotePost,
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
        Authorization: `Bearer ${token}`,
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

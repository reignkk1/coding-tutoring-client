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

// 받은 메세지 불러오기
export function useGetReceivedNotes(token?: string) {
  const [notes, setNotes] = useState<INote[]>();

  useEffect(() => {
    axios({
      url: `${baseUrl}/v1/messages/received`,
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
  }, [token]);

  return notes;
}

// 보낸 메세지 불러오기
export function useGetSentNotes(token?: string) {
  const [notes, setNotes] = useState<INote[]>();

  useEffect(() => {
    axios({
      url: `${baseUrl}/v1/messages/sent`,
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
  }, [token]);

  return notes;
}

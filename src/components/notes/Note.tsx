import { useNavigate } from "react-router-dom";
import Modal from "../common/Modal";
import MessageSendBox from "./MessageSendBox";
import { INote } from "../../api/note";

import useModal from "../../hooks/useModal";

export default function Note({
  note,
  selected,
  handleDelete,
  sender,
  setSender,
}: {
  note: INote;
  selected: string;
  handleDelete: any;
  sender: string;
  setSender: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [, dispatch] = useModal();
  const navigate = useNavigate();

  return (
    <li key={note.messageId}>
      <span
        onClick={() => {
          if (selected === "sent") {
            navigate(`/view/${note.receiverId}`);
          } else {
            navigate(`/view/${note.senderId}`);
          }
        }}
      >{`${
        selected === "sent"
          ? "to. " + note.receiverNickname
          : "from. " + note.senderNickname
      }`}</span>
      {selected === "received" && (
        <button
          onClick={() => {
            dispatch({ type: "MODAL_OPEN" });
            // 답장할 사람을 set함
            setSender(note.senderId);
          }}
        >
          답장
        </button>
      )}
      <button onClick={() => handleDelete(note.messageId)}>삭제</button>

      <p>{note.title}</p>
      <p>{note.content}</p>
      {/* 답장할 사람의 id랑 현재 쪽지의 보낸 사람이 같은 경우만 모달창을 띄움  */}
      {sender === note.senderId && (
        <Modal>
          <MessageSendBox
            receiverId={note.senderId}
            receiverNickname={note.senderNickname}
          />
        </Modal>
      )}
    </li>
  );
}

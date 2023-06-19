import { useNavigate } from "react-router-dom";
import Modal from "../common/Modal";
import MessageSendBox from "./MessageSendBox";

export default function Note({
  note,
  selected,
  handleDelete,
  modal,
  setModal,
}: any) {
  const navigate = useNavigate();
  console.log(note);
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
        <button onClick={() => setModal(true)}>답장</button>
      )}
      <button onClick={() => handleDelete(note)}>삭제</button>

      <p>{note.title}</p>
      <p>{note.content}</p>
      <Modal modal={modal} setModal={setModal}>
        <MessageSendBox note={note} setModal={setModal} />
      </Modal>
    </li>
  );
}

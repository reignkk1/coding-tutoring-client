import { useNavigate } from "react-router-dom";
import Modal from "../common/Modal";
import MessageSendBox from "./MessageSendBox";
import { INote } from "../../api/note";

export default function Note({
  note,
  selected,
  handleDelete,
  modal,
  setModal,
}: {
  note: INote;
  selected: string;
  handleDelete: any;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
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
        <button onClick={() => setModal(true)}>답장</button>
      )}
      <button onClick={() => handleDelete(note.messageId)}>삭제</button>

      <p>{note.title}</p>
      <p>{note.content}</p>
      <Modal modal={modal} setModal={setModal}>
        <MessageSendBox note={note} setModal={setModal} />
      </Modal>
    </li>
  );
}

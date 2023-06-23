import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import useWriteEditForm from "../../hooks/useWriteEditForm";
import { editContent } from "../../store/editPost";

export default function Editor({ placeholder }: { placeholder?: string }) {
  const [state, dispatch] = useWriteEditForm();

  const handleChange = (value: string) => dispatch(editContent(value));

  return (
    <ReactQuill
      theme="snow"
      value={state.content}
      onChange={handleChange}
      style={{
        height: "300px",
        marginTop: "10px",
        marginBottom: "80px",
      }}
      placeholder={placeholder}
    />
  );
}

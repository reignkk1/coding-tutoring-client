import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface IEditor {
  editorValue: string;
  setEditorValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function Editor({ editorValue, setEditorValue }: IEditor) {
  return (
    <ReactQuill
      theme="snow"
      value={editorValue}
      onChange={(prev) => setEditorValue(prev)}
      style={{ height: "400px", marginTop: "10px", marginBottom: "80px" }}
    />
  );
}

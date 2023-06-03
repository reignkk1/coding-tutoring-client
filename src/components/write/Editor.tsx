import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface IEditor {
  editorValue: string;
  setEditorValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function Editor({ editorValue, setEditorValue }: IEditor) {
  const handleChange = (value: string) => {
    setEditorValue(value);
  };

  return (
    <ReactQuill
      theme="snow"
      value={editorValue}
      onChange={handleChange}
      style={{
        height: "300px",
        marginTop: "10px",
        marginBottom: "80px",
      }}
      placeholder="자신을 소개해주세요."
    />
  );
}

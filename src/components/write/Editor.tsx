import ReactQuill from "react-quill";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";

export default function Editor() {
  const [value, setValue] = useState("");

  console.log(value);

  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={(prev) => setValue(prev)}
      style={{ height: "500px", marginTop: "10px", marginBottom: "80px" }}
    />
  );
}

import React, { useRef } from "react";
import Editor from "@monaco-editor/react";
import handleEditorMount from "./Edit"

const MonacoEditor = () => {
  const editorRef = useRef(null);

  return (
    <Editor
      height="90vh"
      width="90vw"
      defaultLanguage="python"
      defaultValue="# hello world\n"
      theme="vs-dark"
      editorRef={editorRef}
      onMount={handleEditorMount}
    />
  );
};

export default MonacoEditor;
import React from "react";
import Editor from "@monaco-editor/react";

const MonacoEditor = () => {
    return (
        <Editor
            height="90vh"
            width="90vw"
            defaultLanguage="python"
            defaultValue="# hello world\n"
            theme="vs-dark"
        />
    );
};

export default MonacoEditor;
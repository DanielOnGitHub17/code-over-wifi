import * as monaco from "monaco-editor";

function handleEditorMount (editor) {
    // Access the editor instance and do something with it
    window.editor = editor;
    console.log(monaco);
    editor.setValue("Hello, world!");
};

export default handleEditorMount;

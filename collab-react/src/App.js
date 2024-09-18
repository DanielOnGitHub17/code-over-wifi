import React from "react";
import MonacoEditor from "./MonacoEditor";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="App-title">Collaborate over Wi-Fi</h2>
        <small>Edit this code box with others in real-time.</small>
      </header>
      <MonacoEditor />
    </div>
  );
}

// ed = monaco.editor.getEditors()[0]
// setInterval(()=>console.log(ed.getPosition()), 1000)

export default App;

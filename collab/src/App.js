import React from "react";
import MonacoEditor from "./MonacoEditor";
import './App.css';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/daniel")
    .then((res) => res.json())
    .then((data) => setTimeout(()=>setData(data.message)));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h2 className="App-title">Collaborate over Wi-Fi</h2>
        <small>Edit this code box with others in real-time. Message: {data}</small>
      </header>
      <MonacoEditor />
    </div>
  );
}

export default App;

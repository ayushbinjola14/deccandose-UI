import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>basic setup</div>
      {/* <h1>Vite + React</h1> */}
      <div className="card">basic setup using materialUI</div>
    </>
  );
}

export default App;

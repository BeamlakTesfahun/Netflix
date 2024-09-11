import { useState } from "react";
import React from "react";
import "./App.css";
import Home from "./Pages/Home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;

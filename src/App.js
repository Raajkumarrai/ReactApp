import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";

function App() {
  // const [mode, setMode] = useState("dark");
  const [mode, setMode] = useState("light");

  const toggleStyle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar title="React App" mode={mode} toggleStyle={toggleStyle} />
      <div className="container my-5">
        <TextForm heading="This is heading of text field" mode={mode} />
      </div>
      <About mode={mode} toggleStyle={toggleStyle} />
    </>
  );
}

export default App;

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
    } else {
      setMode("light");
    }
  };
  return (
    <>
      <Navbar title="React App" mode={mode} toggleStyle={toggleStyle} />
      <div className="container my-5">
        <TextForm heading="This is heading of text field" mode={mode} />
      </div>
      <About />
    </>
  );
}

export default App;

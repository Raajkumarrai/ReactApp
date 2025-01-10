import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Contact from "./components/Contact";
import Country from "./components/Country";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // const [mode, setMode] = useState("dark");
  const [mode, setMode] = useState("light");

  const toggleStyle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode is enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success");
    }
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1800);
  };
  return (
    <>
      <BrowserRouter>
        <Navbar title="Text Changer" mode={mode} toggleStyle={toggleStyle} />
        <Alert alert={alert} />
        <div className="container my-5">
          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  heading="This is heading of text field"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />

            <Route
              path="/country"
              element={<Country mode={mode} toggleStyle={toggleStyle} />}
            />
            <Route
              path="/about"
              element={<About mode={mode} toggleStyle={toggleStyle} />}
            />
            <Route
              path="/contact"
              element={<Contact mode={mode} toggleStyle={toggleStyle} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

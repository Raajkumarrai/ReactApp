import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
      <Router>
        <Navbar title="React App" mode={mode} toggleStyle={toggleStyle} />
        <Alert alert={alert} />
        <div className="container my-5">
          <Routes>
            <Route
              exact
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
              exact
              path="/about"
              element={<About mode={mode} toggleStyle={toggleStyle} />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

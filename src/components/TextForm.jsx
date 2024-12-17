import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text changed to Uppercase", "success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text changed to Lowercase", "success");
  };

  const handleClear = () => {
    let newText = "";
    props.showAlert("Text has been cleared", "success");
    setText(newText);
  };

  const handleEmailClick = () => {
    console.log("Extracting emails...");
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    const emails = text.match(emailRegex);
    if (emails) {
      setText("Extracted Emails: \n" + emails.join(", "));
      props.showAlert("Email has been extracted", "success");
    } else {
      setText("No emails found in the text.");
      props.showAlert("No emails found in the text", "warning");
    }
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div
      className="container"
      style={{
        color: props.mode === "dark" ? "white" : "black",
      }}
    >
      <h1>{props.heading}</h1>
      <div className="my-3">
        <textarea
          className="form-control my-3"
          style={{
            backgroundColor: props.mode === "dark" ? "#595c5df5" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
          value={text}
          onChange={handleOnChange}
          rows="4"
        ></textarea>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleEmailClick}>
          Extract Email
        </button>
        <button className="btn btn-danger mx-2" onClick={handleClear}>
          Clear
        </button>
      </div>
      <div>
        <h2>Word counter</h2>
        <p>
          The total word is{" "}
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          and total letters are {text.length}
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0 ? text : "Enter above something to preview here..."}
        </p>
      </div>
    </div>
  );
};

export default TextForm;

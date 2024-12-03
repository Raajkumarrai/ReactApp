import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClear = () => {
    let newText = "";
    setText(newText);
  };

  const handleEmailClick = () => {
    console.log("Extracting emails...");
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    const emails = text.match(emailRegex);
    if (emails) {
      setText("Extracted Emails: \n" + emails.join(", "));
    } else {
      setText("No emails found in the text.");
    }
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="my-3">
        <textarea
          className="form-control my-3"
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
          The total word is {text.split(" ").length - 1} and total letters are{" "}
          {text.length}
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default TextForm;

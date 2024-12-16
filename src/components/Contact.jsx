import React from "react";

const Contact = (props) => {
  return (
    <div
      className="container"
      style={{
        color: props.mode === "dark" ? "white" : "black",
        backgroundColor: props.mode === "dark" ? "grey" : "white",
      }}
    >
      <div>
        <h3>This is contact us page</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          earum quia, sed harum ipsum, fuga beatae odio nostrum, iste in totam.
          Incidunt quasi omnis quas dolorem velit accusamus at aliquam!
        </p>
      </div>
    </div>
  );
};

export default Contact;

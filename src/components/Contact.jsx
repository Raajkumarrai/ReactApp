import React from "react";

const Contact = (props) => {
  const myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "grey" : "white",
  };
  const fieldStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "#595c5df5" : "white",
  };
  return (
    <div className="container" style={myStyle}>
      <div>
        <h3>This is contact us page</h3>
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              style={fieldStyle}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text" style={myStyle}>
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <div className="form-floating">
              <textarea
                style={{
                  ...fieldStyle,
                  height: "150px",
                  width: "full",
                  resize: "none",
                }}
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea"
              ></textarea>
              <label htmlFor="floatingTextarea">Comments</label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

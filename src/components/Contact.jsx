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
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <div className="form-floating">
              <textarea
                className="form-control rows='5' "
                placeholder="Leave a comment here"
                id="floatingTextarea"
              ></textarea>
              <label for="floatingTextarea">Comments</label>
            </div>
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
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

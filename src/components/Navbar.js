import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar${props.mode} navbar-expand-lg bg-${props.mode}`}
    >
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li>
              <Link
                className="navbar-brand"
                style={{ color: props.mode === "dark" ? "white" : "black" }}
                to="/"
              >
                {props.title}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active "
                style={{ color: props.mode === "dark" ? "white" : "black" }}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                style={{ color: props.mode === "dark" ? "white" : "black" }}
                to="/About"
              >
                About
              </Link>
            </li>
          </ul>

          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleStyle}
            />
            <label className="form-check-label" for="flexSwitchCheckDefault">
              Enable
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "Set Title",
};

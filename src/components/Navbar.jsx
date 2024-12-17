import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar({ title = "Set Title", mode, toggleStyle }) {
  return (
    <nav
      className={`navbar navbar-${mode} navbar-expand-lg bg-${mode} `}
      style={{ position: "sticky", top: 0, zIndex: 10000 }}
    >
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="navbar-brand"
                style={{ color: mode === "dark" ? "white" : "black" }}
                to="/"
              >
                {title}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                style={{ color: mode === "dark" ? "white" : "black" }}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                style={{ color: mode === "dark" ? "white" : "black" }}
                to="/Country"
              >
                Country
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                style={{ color: mode === "dark" ? "white" : "black" }}
                to="/About"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                style={{ color: mode === "dark" ? "white" : "black" }}
                to="/Contact"
              >
                Contact Us
              </Link>
            </li>
          </ul>

          <div
            className={`form-check form-switch text-${
              mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={toggleStyle}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
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
  mode: PropTypes.string.isRequired,
  toggleStyle: PropTypes.func.isRequired,
};

import React from "react";
import { Link } from "react-router-dom";

export default function Navbar_1(props) {
  return (
    <div className="">
      <nav
        className="navbar  fixed-top navbar-expand-lg bg-body-tertiary"
        data-bs-theme={`${props.mode === "light" ? "dark" : "light"}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            News API
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${props.active === "Home" ? "text-success" : "active"
                    }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${props.active === "Business" ? "text-success" : "active"
                    }`}
                  aria-current="page"
                  to="/business"
                >
                  business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${props.active === "Entertainment" ? "text-success" : "active"
                    }`}
                  to="/entertainment"
                >
                  entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${props.active === "Health" ? "text-success" : "active"
                    }`}
                  to="/health"
                >
                  health
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${props.active === "Science" ? "text-success" : "active"
                    }`}
                  to="/science"
                >
                  science
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${props.active === "General" ? "text-success" : "active"
                    }`}
                  to="/general"
                >
                  general
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${props.active === "Sports" ? "text-success" : "active"
                    }`}
                  to="/sports"
                >
                  sports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${props.active === "Technology" ? "text-success" : "active"
                    }`}
                  to="technology"
                >
                  technology
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link  ${props.active === "About" ? "text-success" : "active"
                    }`}
                  to="/about"
                >
                  About Us
                </Link>
              </li>

              <li className="nav-item">

                <div className="dropdown " data-bs-theme={`${props.mode === "light" ? "light" : "dark"}`}>
                  <a
                    className={`btn dropdown `}
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ color: `${props.mode === "light" ? "white" : "black"}` }}
                  >
                    Bookmarks &nbsp;<i className="fa-regular fa-bookmark"></i></a>
                  <ul id="book" className="dropdown-menu">
                    <li id="nothing"><a className="dropdown-item">Saved Items list</a></li>
                    <li><hr className="dropdown-divider" /></li>
                  </ul>
                </div>

              </li>

            </ul>





            {/* dark mode changer */}

            <div className="form-check form-switch">
              <input
                onClick={props.theme}
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked" />

              <label
                className="form-check-label"
                style={{
                  color: `${props.mode === "light" ? "white" : "black"}`,
                }}
                data-bs-theme={`${props.mode === "light" ? "dark" : "light"}`}
                htmlFor="flexSwitchCheckChecked"
              >
                {`${props.mode === "light" ? "dark" : "light"}`} Mode
              </label>


            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

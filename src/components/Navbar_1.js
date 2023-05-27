import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div className="">
        <nav
          className="navbar  fixed-top navbar-expand-lg bg-body-tertiary"
          data-bs-theme={`${this.props.mode === "light" ? "dark" : "light"}`}
        >
          <div className="container-fluid">
            <Link className="navbar-brand" to="/home ">
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      this.props.active === "Home" ? "text-success" : "active"
                    }`}
                    aria-current="page"
                    to="/home"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      this.props.active === "Business"
                        ? "text-success"
                        : "active"
                    }`}
                    aria-current="page"
                    to="/business"
                  >
                    business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      this.props.active === "Entertainment"
                        ? "text-success"
                        : "active"
                    }`}
                    to="/entertainment"
                  >
                    entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      this.props.active === "Health" ? "text-success" : "active"
                    }`}
                    to="/health"
                  >
                    health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      this.props.active === "Science"
                        ? "text-success"
                        : "active"
                    }`}
                    to="/science"
                  >
                    science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      this.props.active === "General"
                        ? "text-success"
                        : "active"
                    }`}
                    to="/general"
                  >
                    general
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      this.props.active === "Sports" ? "text-success" : "active"
                    }`}
                    to="/sports"
                  >
                    sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      this.props.active === "Technology"
                        ? "text-success"
                        : "active"
                    }`}
                    to="technology"
                  >
                    technology
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link  ${
                      this.props.active === "About" ? "text-success" : "active"
                    }`}
                    to="/about"
                  >
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      this.props.active === "Contact Us"
                        ? "text-success"
                        : "active"
                    }`}
                    to="/contact "
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      this.props.active === "Vision" ? "text-success" : "active"
                    }`}
                    to="/vision"
                  >
                    Vision
                  </Link>
                </li>
              </ul>
              <div className="form-check form-switch">
                <input
                  onClick={this.props.theme}
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckChecked"
                />
                <label
                  className="form-check-label"
                  style={{
                    color: `${this.props.mode === "light" ? "white" : "black"}`,
                  }}
                  data-bs-theme={`${
                    this.props.mode === "light" ? "dark" : "light"
                  }`}
                  htmlFor="flexSwitchCheckChecked"
                >
                  {`${this.props.mode === "light" ? "dark" : "light"}`} Mode
                </label>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;

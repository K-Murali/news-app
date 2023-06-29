import "./App.css";
import "./Style.css";
import LoadingBar from 'react-top-loading-bar';
import React, { useState } from "react";
import Contentbar from "./components/Contentbar";
import PropTypes from "prop-types";
import Navbar from "./components/Navbar_1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aboutme from "./components/aboutme";

export default function App(props) {
  const [progress, setProgress] = useState(0);
  const [mode, setMode] = useState('light');

  const bookmark = (title, link, flag) => {
    let a = document.getElementById("book");
    if (flag) {
      a.innerHTML += `<li><a class="dropdown-item" target="_blank" href=${link}>${title}</a></li>`;
    } else {
      a.lastChild.remove();
    }
  };

  const updateProgress = (x) => {
    setProgress(x);
  };

  const theme = () => {
    let e = document.body;
    if (mode === "light") {
      e.setAttribute("data-bs-theme", "dark");
      setMode("dark");
    } else {
      e.setAttribute("data-bs-theme", "light");
      setMode("light");
    }
  };

  return (
    <Router>
      <>
        <Navbar active={document.title} mode={mode} theme={theme} />

        <LoadingBar
          color='#f11946'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />

        <div className="container">
          <div className="container mx-2">
            <Routes>
              <Route
                exact
                path="/about"
                element={<Aboutme title="About" mode={mode} key="about me" topic="about me" setprogress={updateProgress} />}
              />
              <Route
                exact
                path="/home"
                element={<Contentbar bk={bookmark} setprogress={updateProgress} mode={mode} key="Home" title="Home" topic="general" />}
              />
              <Route
                exact
                path="/news-app"
                element={<Contentbar bk={bookmark} setprogress={updateProgress} mode={mode} key="Navbar" title="Home" topic="general" />}
              />
              <Route
                exact
                path="/business"
                element={<Contentbar bk={bookmark} mode={mode} setprogress={updateProgress} title="Business" key="business" topic="business" />}
              />
              <Route
                exact
                path="/entertainment"
                element={<Contentbar bk={bookmark} mode={mode} setprogress={updateProgress} title="Entertainment" key="entertainment" topic="entertainment" />}
              />
              <Route
                exact
                path="/health"
                element={<Contentbar bk={bookmark} mode={mode} setprogress={updateProgress} title="Health" key="health" topic="health" />}
              />
              <Route
                exact
                path="/science"
                element={<Contentbar bk={bookmark} mode={mode} setprogress={updateProgress} title="Science" key="science" topic="science" />}
              />
              <Route
                exact
                path="/general"
                element={<Contentbar bk={bookmark} mode={mode} setprogress={updateProgress} title="General" key="general" topic="general" />}
              />
              <Route
                exact
                path="/sports"
                element={<Contentbar bk={bookmark} mode={mode} setprogress={updateProgress} title="Sports" key="sports" topic="sports" />}
              />
              <Route
                exact
                path="/technology"
                element={<Contentbar bk={bookmark}  mode={mode} setprogress={updateProgress} title="Technology" key="technology" topic="technology" />}
              />
            </Routes>
          </div>
        </div>
      </>
    </Router>
  );
}


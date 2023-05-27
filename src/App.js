import "./App.css";
import "./Style.css";

import LoadingBar from 'react-top-loading-bar'
import React, { Component } from "react";
import Contentbar  from "./components/Contentbar";
import { ReactPropTypes } from "react";
import Navbar from "./components/Navbar_1";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Aboutme from "./components/aboutme";
export default class App extends Component {
 state={
  progress:0,
  mode:"light",
 
 }
 setProgress=(x)=>{
 this.setState({progress:x})
 }
  theme = () => {

    let e = document.body;
    console.log("clicked")
    if(this.state.mode==="light"){
      e.setAttribute("data-bs-theme", "dark");

      console.log("clicked dark")

    this.setState({mode:"dark"})
  }
  else{
    e.setAttribute("data-bs-theme", "light");
      this.setState({mode:"light"})
  }
};

  render() {


    return (
      <Router>
        <>
        
        <Navbar active={document.title}  mode={this.state.mode}  theme={this.theme} />

        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        onLoaderFinished={() => this.setProgress(0)}
      />
          <div className="container">
          <div className="container mx-2">
            
          <Routes>
            <Route exact path="/about" element={  <Aboutme title="About" mode={this.state.mode}  key="about me" topic="about me"  setprogress={this.setProgress} />}/>
            <Route exact path="/home" element={   <Contentbar    setprogress={this.setProgress}   mode={this.state.mode} key="Home" title="Home" topic="general"  />} />
            <Route exact path="/" element={  <Contentbar  setprogress={this.setProgress}  mode={this.state.mode} key="Navbar"   title="Home"topic="general"  />} />
            <Route exact path="/business" element={  <Contentbar  mode={this.state.mode} setprogress={this.setProgress} title="Business" key="business" topic="business"   />} />
            <Route exact path="/entertainment" element={  <Contentbar   mode={this.state.mode}setprogress={this.setProgress}title="Entertainment "  key="entertainment " topic="entertainment"  />} />
            <Route exact path="/health" element={  <Contentbar  mode={this.state.mode} setprogress={this.setProgress}title="Health"  key="health" topic="health"  />} />
            <Route exact path="/science" element={  <Contentbar  mode={this.state.mode} setprogress={this.setProgress}title="Science"  key="science" topic="science"  />} />
            <Route exact path="/general" element={  <Contentbar  mode={this.state.mode} setprogress={this.setProgress}title="General"  key="general" topic="general"  />} />
            <Route exact path="/sports" element={  <Contentbar  mode={this.state.mode} setprogress={this.setProgress} title="Sports" key="sports" topic="sports"  />} />
            <Route exact path="/technology" element={  <Contentbar   mode={this.state.mode}setprogress={this.setProgress} title="Technology" key="technology" topic="technology"  />} />
        
        
          

            

          </Routes>

          
        </div>
        </div>
        
      </>
      </Router>
    );
  }
}

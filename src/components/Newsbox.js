import React, { Component } from "react";
import "./Box.css";
export default class Newsbox extends Component {
  render() {
   
    let { title, description, bookmark, readmore,author, date,day,url,year, source,time } = this.props;
    return (
      <div className=" container">
        <div className={`  shadow-lg p-2 mb-5 bg--${this.props.mode==="light"?"dark":"light"} rounded d-flex justify-content-around`}>
          <div
            className={`card border-${this.props.mode==="light"?"light":"dark"}-subtle   card1 `}
            style={{ height: "100%", width: "20.5rem" }}
          >
            <span
              style={{ height: "23.5px", width: "fit-content" }}
              className={` btn position-relative top-10px start-50 translate-middle badge rounded-pill  bg-${this.props.mode === "light" ? "danger" : "danger-subtle"
                } btn-${this.props.mode === "light" ? "danger" : "outline-danger"
                }`}
            >
              {source}
              <span className="visually-hidden">unread messages</span>
            </span>
            <div className="container text-center my-3">
              {{ url } && (
                <img
                  src={url}
                  className="card-img-top"
                  alt="load failed"
                  style={{ height: "22vh", width: "100%", overflow: "hidden" }}
                />
              )}

              <div className="card-body">
                <h6 className="card-title">{title}...</h6>
                {/* <div style={{height:'13vh'}}> */}
                <p className="card-text">{description}... 
                </p>
               <p className="card-text"><small className="text-body-secondary"> by {(author)?author:"unknown"}.on {date}-{day}-{year} .</small>
                </p>
                {/* </div> */}
              </div>

              <a
                href={readmore}
                target="_blank"
                className={`btn  btn1 float-start btn-sm me-2 btn-${this.props.mode === "light" ? "dark" : "outline-info"
                  }`}
              >
                Read more &#8594;
              </a>

            
            </div>
          </div>
        </div>
      </div>
    );
  }
}

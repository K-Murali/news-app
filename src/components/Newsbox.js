import React, { Component } from "react";
import "./Box.css";

export default function Newsbox(props) {
  return (
   <>
     
   <div className=" container">
        <div className={`  shadow-lg p-2 mb-5 bg--${props.mode==="light"?"dark":"light"} rounded d-justify-content-around`}>
      
         {/* css u have to adjust here if u want to look good in all mobiles  */}

          <div className={`card card1`}style={{ height: "100%", width: "20.5rem" }}>

            {/* red badge of source */}

            <span style={{ height: "23.5px", width: "fit-content" }} className={` btn position-relative top-10px start-50 translate-middle badge rounded-pill  bg-${props.mode === "light" ? "danger" : "danger-subtle" } btn-${props.mode === "light" ? "danger" : "outline-danger" }`}>
              {props.source}
              <span className="visually-hidden">unread messages</span>
            </span>

            {/*main  content  aftre badge*/}

            <div className="container text-center my-3">
                {/* image loading */}
                    {props.url && (
                      <img src={props.url} className="card-img-top"alt="load failed"style={{ height: "22vh", width: "100%", overflow: "hidden" }}/> )}

                {/*  body after card  {title ,description , author last updated, read more button}*/}

                    <div className="card-body">
                      <h6 className="card-title">{props.title}...</h6>
                      <p className="card-text">{props.description}...</p>
                      <p className="card-text"><small className="text-body-secondary"> by {(props.author)?props.author:"unknown"}.on {props.date}-{props.day}-{props.year}.</small></p>
                    </div>

                    <a
                      href={props.readmore}
                      target="_blank"
                      className={`btn  btn1 float-start btn-sm me-2 btn-${props.mode === "light" ? "dark" : "outline-info" }`}> Read more &#8594;
                    </a>
            </div>
          </div>
        </div>
      </div>
   </>
  )
}


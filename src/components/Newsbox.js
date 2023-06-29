import React, { Component } from "react";
import "./Box.css";
import { useState } from "react";
// import { Bookmark } from "react-bookmark";

export default function Newsbox(props) {
const [flag, setflag] = useState(true);
 
  const bookmark=()=>{
    if(flag){
      props.bks(props.title,props.readmore,flag)

      setflag(false)
    }
    else{
      props.bks(props.title,props.readmore,flag)
      setflag(true)
    }

  }
  return (
   <> 
     
   
        <div className=  {`container border border-2   shadow-lg p-2 mb-5 bg--${props.mode==="light"?"dark":"light"}  rounded d-flex justify-content-around`} style={{width:"fit-content"}} >
      
         {/* css u have to adjust here if u want to look good in all mobiles  */}

          <div className={`card card1`}style={{ height: "100%", width: "20.5rem" }}>

            {/* red badge of source */}

            <span style={{ height: "23.5px", width: "fit-content" }} className={` btn position-relative top-10px start-50 translate-middle badge rounded-pill  bg-${props.mode === "light" ? "danger" : "danger-subtle" } btn-${props.mode === "light" ? "danger" : "outline-danger" }`}>
              {props.source}
              <span className="visually-hidden">unread messages</span>
            </span>
            <span style={{ height: "fit-content", width: "fit-content" }} className={` btn rounded-6 position-absolute top-0px start-100 mx-1 translate-middle badge rounded-pill  btn-${props.mode === "light" ? "light" : "dark" }`}>
            <la type="" onClick={bookmark} className={`bookmark float-center  btn-sm  btn-`}><i  style={{color:`${props.mode === "light" ? '#000000': "#d3d3d3"  }`}} className={`${(flag)?'fa-sharp fs-4 fa-regular fa-fade':'fa-solid '} fs-4 fa-bookmark  `} ></i>
                    {/* {(flag)?'save':'saved'} */}
                </la>
              <span className="visually-hidden">unread messages</span>
            </span>

            {/*main  content  aftre badge*/}

            <div className="container text-center my-3">
                {/* image loading */}
                    {props.url && (
                      <img src={props.url} className=" rounded card-img-top"alt="load failed"style={{ height: "22vh", width: "100%", overflow: "hidden" }}/> )}

                {/*  body after card  {title ,description , author last updated, read more button}*/}

                    <div className="card-body">
                    <p class={`text-${props.mode === "light" ? "dark" : "info" } rounded bg-`}><h6 className="card-title">{props.title}...</h6></p> 
                      <p className="card-text">{props.description}...</p>
                      <p className="card-text"><small className="text-body-secondary"> by {(props.author)?props.author:"unknown"}.on {props.date}-{props.day}-{props.year}.</small></p>
                    </div>
                    
       
                    <a
                      href={props.readmore}
                      target="_blank"
                     style={{backgroundColor:`${props.mode === "light" ? '#354f60':''}`}}
                     className={`btn btn1 fs-6 rounded float-center btn-sm me-2 btn-${props.mode === "light" ? "dark" : "outline-info" }`}> &nbsp; Read more &#8594;
                    </a>
     
                                                                                                                                              
                
                     
            </div>
          </div>
        </div>
      
   </>
  )
}


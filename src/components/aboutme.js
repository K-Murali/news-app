

import React, { Component } from 'react'
 const aboutme=(props)=> {
 
    document.title = props.title
    return (
      <div className='container mb-5'>
         <div className="container-sm text-center   " style={{marginTop:'5rem'}}>
      <h2 className={`text-${!props.mode} mb-4 text-center bg-${!props.mode}`}>
                   {props.title}
                </h2>
      <div className="p-3 my-4 mb-2 bg-info-subtle text-emphasis-info">
        <div className="container-sm   text-center">
          <p>
            My Name is <b> Muralidhar</b> , Thank you for giving me this
            opportunity to introduce my self. I am from Andhra Pradesh I have
            done all my higher schooling in Kakinada currently, I am doing my
            Bachelors at NIT Durgapur in Electronics and communication
            engineering and my hobbies include fitness chess, and cricket.
          </p>
          <p>
            I am tech enthusiastic and have a deep interest in development. I am
            skilled in web technologies like{" "}
            <b>HTML CSS ,Bootstrap, JavaScript and React.js</b> and I also a
            have good knowledge in <b>C++ Ds-algo</b>. I have made 2 projects on
            APIs using react.js. currently I am a committee member of NSS Nit
            Durgapur.
          </p>
          <p>
            It will be a great platform to showcase my skills. I believe that I
            have a good skill set and experience which are necessary for this
            role. As I am fresher, I know the value of job, if you hired me, I
            will give all my potential and 100% of my effort to uplift your
            company
          </p>
        </div>
      </div>
    </div>
      </div>
    )
  
}

export default aboutme


   
  

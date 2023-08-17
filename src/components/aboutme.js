

import React, { Component } from 'react'
 const aboutme=(props)=> {
 
    document.title = props.title
    return (
      <div className='container  mb-5'>
         <div className="container-sm text-center   " style={{marginTop:'5rem'}}>
      <h2  className={`text-${!props.mode} fs-1 mb-4 text-center bg-${!props.mode}`}>
                   {props.title}
                </h2>
      <div className="p-3 my-4 mb-2 rounded-4 bg-info-subtle text-emphasis-info">
        <div className="container-sm   text-center">
          <p className="fs-4">
            My Name is <l className=' rounded-3 '>&nbsp;&nbsp;Muralidhar&nbsp; </l> , Thank you for giving me this
            opportunity to introduce my self. I am from Andhra Pradesh I have
            done all my higher schooling in Kakinada currently, I am doing my
            Bachelors at<l className=' rounded-3 '>&nbsp;NIT Durgapur&nbsp; </l>in&nbsp;<l className=' rounded-3 '>&nbsp;&nbsp;  Electronics and Communication
            Engineering&nbsp;&nbsp; </l> &nbsp;and my hobbies include Fitness,Chess, and Cricket.
          </p>
          <p className="fs-4">
            I am Tech enthusiastic and have a deep interest in Development. I am
            skilled in web technologies like
            <br/>&nbsp;<l className=' rounded-3 '>&nbsp;&nbsp;HTML CSS ,Bootstrap, JavaScript and React.js&nbsp;&nbsp;</l>&nbsp; and I also a
            have good knowledge in <l className=' rounded-3 '>&nbsp;&nbsp;C++ Ds-algo&nbsp;&nbsp;</l>&nbsp;. I have made 2 projects on
            APIs using react.js. currently I am a committee member of NSS NIT
            Durgapur.
          </p>
          <p className="fs-4">
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


   
  

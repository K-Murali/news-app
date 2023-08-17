import React, { Component } from "react";
import { useState } from "react";
import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";
import Newsbox from "./Newsbox";

const Contentbar = (props) => {
  const [count, setcount] = useState(null);
  const [page, setpage] = useState(1);
  const [array, setarray] = useState([]);
  const [topic, settopic] = useState(props.title);
  const [loading, setloading] = useState(true);

  const err = (ele) => {
    if (ele.urlToImage&& ele.title && ele.description) {
      return ele;
    }
   return null;
  };
  
 const  handelsearch = async () => {
    let city = document.getElementById("topic").value;
   if(city.length>0){
     newsupdate(city,true)
    }
  };
  
  
  const k=process.env.REACT_APP_API_KEY;
  let apikey="9e5c4d00ff5e4bc994bc5d3f23256c84"
  // 09bb51dd7f3d4a848db443c4982d14fa
  


 
 
  const newsupdate = async (topic = props.topic,flag=false) => {
    props.setprogress(20);
    let url=null;
    if(flag){url=`https://newsapi.org/v2/everything?q=${topic}&sortBy=publishedAt&apiKey=${apikey}`}
     else{url = `https://newsapi.org/v2/top-headlines?country=in&category=${topic}&apiKey=${apikey}&page=${page}`;}
     
    props.setprogress(62);
    let p = await fetch(url);
    props.setprogress(82);

    let data = await p.json();
    setarray(data.articles);
    settopic(topic);
    document.title=topic;
    setcount(data.totalResults);
    setloading(false);
    props.setprogress(100);
  };

  

  useEffect(() => {
    
    props.setprogress(7);
    newsupdate();
  }, []);

  const fetchMoreData = async () => {
    let pr = new Promise((resolve, reject) => {
      setpage(page + 1); 
      resolve(4);
    });
  
    pr.then(async () => {

      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${topic}&apiKey=${apikey}&page=${page}&pagesize=20`;

      let p = await fetch(url);
      let data = await p.json();
      setarray(array.concat(data.articles));
    });
  };


 
  return (
    <div className="container my-5">
      {/* heading */}

      <InfiniteScroll
        style={{ width: "100%" }}
        dataLength={array.length}
        next={fetchMoreData}
        hasMore={array.length % 20 != 0 ? false : true}
        loader={<Spinner />}
      >
        
            <h2
              className={` my-5 text-${(props.mode)==="light"?"dark":"light"} text-center bg-${!props.mode}`}>
              {(topic ==="general" &&props.title==="Home")
                ? "Top Headlines"
                : `Top Headlines - on ${document.title}`}
            </h2>
              <form className={`d-flex my-5 `} role="search">
                  <input
                    id="topic"
                    className={`form-control  bg-${(props.mode)==="light"?"secondary-subtle":"light-subtle"} me-2 ms-2`}
                    type="text"
                    placeholder="Search here...."
                    aria-label="Search"
                  />
                  <button
                    type="button"
                    onClick={handelsearch}
                    className={`btn  btn-md me-2 btn-${
                      props.mode === "light" ? "dark" : "outline-light"
                    }`}
                  >
                    search
                  </button>
                
                </form>
     

        <div className="container d-flex flex-wrap justify-content-center align-items-center">
          {/* mapping elements  */}
          {array.map((Element, i = 0) => {
            return (
              err(Element)&& Element.urlToImage && (
                  <Newsbox key={i++}
                    author={Element.author}
                    date={new Date(Element.publishedAt).getDate()}
                    day={new Date(Element.publishedAt).getDay()}
                    year={new Date(Element.publishedAt).getFullYear()}
                    mode={props.mode}
                    source={Element.source.name}
                    title={
                      Element.title
                        ? Element.title.slice(0, 28)
                        : "this is title"
                    }
                    description={
                      Element.description
                        ? Element.description.slice(0, 95)
                        : "description is empty"
                    }
                    url={
                      Element.urlToImage
                        ? Element.urlToImage
                        : "https://www.wallpapers13.com/wp-content/uploads/2016/01/Cool-and-Beautiful-Nature-desktop-wallpaper-image-2560X1600-1600x1200.jpg"
                    }
                    bks={props.bk}
                    loader={loading}
                    readmore={Element.url}
                  />
                
              )
            );
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Contentbar;

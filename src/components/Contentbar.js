import React, { Component } from "react";
import Newscmp from "./newscmp";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";
import Newsbox from "./Newsbox";

export class Contentbar extends Component {
  err = (ele) => {
    if (ele.urlToImage && ele.title && ele.description) {
      return ele;
    }
  };
  constructor() {
    super();
    this.state = {
      count: null,
      page: 1,
      coutntry: "in",
      status: "ok",
      topic: "general",
      array: [],
    };
  }

  newsupdate = async (topic = this.props.topic) => {
    document.title = this.props.title;
    this.props.setprogress(20);

    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${topic}&apiKey=3ad6c46c297c4a6d994a4fbd1ddff412&page=${this.state.page}`;

    this.props.setprogress(62);
    let p = await fetch(url);
    this.props.setprogress(82);

    let data = await p.json();

    this.setState({
      topic: topic,
      array: data.articles,
      count: data.totalResults,
    });
    this.props.setprogress(100);
  };

  handelsearch = async () => {
    this.setState({ loading: true });
    let p = new Promise((resolve, reject) => {
      let city = document.getElementById("topic").value;
      resolve(city);
    });
    p.then(async (res) => {
      this.setState({ topic: res });
      this.newsupdate(res);
      
    });
  };


  // handlenext = async () => {
  //   let p = new Promise((resolve, reject) => {
  //     this.setState({ loading: true ,page:this.state.page+1});  resolve(2)})

  //  p.then(()=>{
  //   this.newsupdate(this.state.topic)
  // })}
  // handleprev = async () => {
  //   let p = new Promise((resolve, reject) => {
  //     this.setState({ loading: true ,page:this.state.page-1});  resolve(2)})

  //  p.then(()=>{
  //   this.newsupdate(this.state.topic)
  // })}
  async componentDidMount() {
    this.props.setprogress(7);
    this.newsupdate();
  }

  fetchMoreData = async () => {
    let pr = new Promise((resolve, reject) => {
      this.setState({ page: this.state.page + 1 });
      resolve(4);
    });
    pr.then(async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.state.topic}&apiKey=3ad6c46c297c4a6d994a4fbd1ddff412&page=${this.state.page}&pagesize=20`;

      let p = await fetch(url);
      let data = await p.json();

      this.setState({
        array: this.state.array.concat(data.articles),
      });
    });
  };

  render() {
    let { topic } = this.props;

    return (
      <div className="my-5 mx-5">
        <div className="container ">
          <div className="row">
            <div className="col-sm">
              {
                <h2
                  className={` my-5 text-${!this.props
                    .mode} text-center bg-${!this.props.mode}`}
                >
                  {this.props.title === "Home"
                    ? "Top Headlines"
                    : `Top Headlines - on ${document.title}`}
                </h2>
              }
              <div className="container-fluid my-5">
                <form className="d-flex" role="search">
                  <input
                    id="topic"
                    className="form-control  me-2 ms-2"
                    type="search"
                    placeholder="Search here...."
                    aria-label="Search"
                  />
                  <button
                    type="button"
                    onClick={this.handelsearch}
                    className={`btn  btn-md me-2 btn-${
                      this.props.mode === "light" ? "dark" : "outline-light"
                    }`}
                  >
                    search
                  </button>
                
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="my-">
          <InfiniteScroll
            dataLength={this.state.array.length}
            next={this.fetchMoreData}
            hasMore={this.state.array.length % 20 != 0 ? false : true}
            loader={<Spinner />}
          >
            <div className="container my-3 ">
              <div className="row d-flex justify-content-around">
                {this.state.array.map((Element, i = 0) => {
                  return (
                    Element.title &&
                    Element.description &&
                    Element.urlToImage && (
                      <div className="col-md-4" key={i++}>
                        <Newsbox 
                        author={Element.author}
                          date={new Date(Element.publishedAt).getDate()}
                          day={new Date(Element.publishedAt).getDay()}
                          year={new Date(Element.publishedAt).getFullYear()}
                          mode={this.props.mode}
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
                          readmore={Element.url}
                        />
                      </div>
                    )
                  );
                })}
              </div>
            </div>
          </InfiniteScroll>
        </div>

        {/*             

          <Newscmp
            totaleRsuls={this.state.count}
            loading={this.state.loading}
            page={this.state.page}
            a={this.state.array}
            q={this.state.topic}
            fetchMoreData ={this.fetchMoreData}
          /> */}

        {/* <div>
          <div className=" d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              onClick={this.handleprev}
              type="button"
              className="btn btn-primary"
            >
              &#8592; Previous
            </button>
            <button
              disabled={this.state.page + 1 > Math.ceil(this.state.count / 20)}
              onClick={this.handlenext}
              type="button"
              className="btn btn-primary"
            >
              Next &#8594;
            </button>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Contentbar;

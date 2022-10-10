import React from "react";

class News extends React.Component {
    constructor(props) {
      super(props);
      console.log("i am constructor");
      this.state = { name1: "Latest News",count:0 };
      
    }
    async componentDidMount() {
      console.log("i am coponentdidmount");
      let res = await fetch(
        `https://newsapi.org/v2/everything?q=${this.props.newsName}&apiKey=84f15556d3e14f9d88f91e0218bdd06a`
      );
      let data = await res.json();
      console.log(data, typeof data.articles, data.articles, typeof ar);
      let w = { width: "400px" };
      let arr = data.articles.map((p) => {
        return (
          <div className="p-8">  
          {/* <!--Card 1--> */}
         
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={p.urlToImage}/>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{p.title}</div>
              <p className="text-gray-700 text-base">
                {p.description}
              </p>
              <button className="font-bold text-xl mb-2 .text-primary"><a href={p.url}>Read more</a></button>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#coding</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Akhilesh</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#AI</span>
            </div>
          </div>
        </div>
        );
      });
      console.log(arr);
      this.setState({ name1: arr });
    }
    render() {
      // this.setState({count:this.state.count+1})
      console.log(" i am render",this.state.count);
      return  <div className="p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-1">{this.state.name1} </div>;
  }}

export default News;
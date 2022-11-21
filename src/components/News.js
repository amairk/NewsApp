//Out of total:38 responses from newsapi, we are getting only 5 responses
//Remaining responses will be on page 2, so we will use a next page button to show the next remaining responses

import React, { Component } from 'react'
import Gif from './Gif';
import NewsItem from './NewsItem'
export class News extends Component {

  //we will be using it as a state variable and render it whenever its state is changing
  articles=[];
  page=1;
  constructor(){
    super();
    this.state={
      articles:this.articles,
      //page for changing it in the url
      //https://newsapi.org/v2/top-headlines/?category=${this.props.category}&language=en&apiKey=7d8b41dbcdd34aa2868cf8b22c70e008&page=2
      // If we see in the last, we have page=2, like this we will use page as a state variable and fetch when it is changed, originally page is 1
      page:1,
      //we use loading as a state variable to check if content is loading or not, if it is then we will be using a
      // spinner which is used to show like loading
      loading:0,
    }
  }
  
  next_page=async ()=>{
   
    if(this.page+1>Math.ceil(this.state.totalArticles/5)){
      alert("That's it for now!!")
    }
    else{
      
        await this.setState({
          page:this.page++,
          loading:1
        })
        this.props.progress(10);
        let url=`https://newsapi.org/v2/top-headlines/?category=${this.props.category}&language=en&apiKey=7d8b41dbcdd34aa2868cf8b22c70e008&page=${this.page}&pageSize=5`;
        //await till the news is fetched
        let data=await fetch(url);
        //await until data is parsed into JSON
        this.props.progress(50);
        let parse_data=await data.json();
        this.props.progress(100);
        //Since, we have made the articles as a state variable, we can change its state using setstate
        this.setState({articles:parse_data.articles,loading:0});
        
    }
  }

  prev_page=async ()=>{
    await this.setState({
      page:this.page--,
      loading:1
    })
    this.props.progress(10);
    let url=`https://newsapi.org/v2/top-headlines/?category=${this.props.category}&language=en&apiKey=7d8b41dbcdd34aa2868cf8b22c70e008&page=${this.page}&pageSize=5`;
    //await till the news is fetched 
    let data=await fetch(url);
    this.props.progress(50);
    //await until data is parsed into JSON
    let parse_data=await data.json();
    this.props.progress(100);
    //Since, we have made the articles as a state variable, we can change its state using setstate
    this.setState({articles:parse_data.articles,loading:0});
  }

  render() {
    
    return (
      
      <div className='container my-3'>
        <h3>Monkey App- Top headlines</h3>
        {/* //If content is loading i.e currently it is fetching then show the spinner */}
          {this.state.loading===1 && <Gif/>}
          {/* //If content is not loading then only display the articles */}
          {this.state.loading===0 && 
              <div className='row'>
                {/* We use map HOF for iterating an array */}
                {
                  this.state.articles.map((element)=>{
                    return (
                      // we use key here because map() function requires a unique key for each and every element
                      <div className='col-md-4' key={element.url}>
                        <NewsItem  title={element.title}  desc={element.description} url={element.url} img_src={element.urlToImage} author={element.author} />
                      </div>
                    )
                  })
                }
              </div>
           }
         <div className='container d-flex justify-content-between my-4'>
          <button disabled={this.page<=1} className='btn btn-secondary' onClick={this.prev_page}>&larr;Prev</button>
          <button className='btn btn-secondary' onClick={this.next_page}>&rarr;Next</button>
         </div>
      </div>
    )
  }

  //It is executed immediatly after render, it will be clear after watching lifecycle methods
  async componentDidMount(){
    await this.setState({
      loading:1
    })
    this.props.progress(10);
    //we will fetch the news from newsapi here
    //top-headlines from newsapi where country=in(india)
    let url=`https://newsapi.org/v2/top-headlines/?category=${this.props.category}&language=en&apiKey=7d8b41dbcdd34aa2868cf8b22c70e008&page=${this.page}&pageSize=5`;
    //await till the news is fetched 
    let data=await fetch(url);
    this.props.progress(50);
    //await until data is parsed into JSON
    let parse_data=await data.json();
    //Since, we have made the articles as a state variable, we can change its state using setstate
    // console.log(parse_data)
    this.props.progress(100);
    this.setState({articles:parse_data.articles,totalArticles:parse_data.totalResults,loading:0});
    // console.log(this.state.totalArticles);
  }

}

export default News

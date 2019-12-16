import React from 'react';
import Header from '../InnerHeader';
import Footer from '../Footer';
import ImageSlider from '../Elements/ImageSlider';
import axios from 'axios'
import $ from 'jquery'
import Constants  from '../config/Constants'
import DefaultImage  from '../config/default.png';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
var serialize = require('form-serialize');
var ip = require('ip');
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    zIndex               : '99999'
  }
};
const urlStr = Constants.SEARCH_RESULT;
const token     = localStorage.getItem('token');
class SearchResultDetails extends React.Component {
  constructor() {
    super();
    this.state={
      ipAdress : ip.address(),
      searchText  :   '',
      search_result:[{
          'title':"No Result Found",
          'desc':"",
          'url':''
      }],
    }
    this.stripHtml            = this.stripHtml.bind(this);
    this.getSearchResultList   = this.getSearchResultList.bind(this);
}

stripHtml(html){
  // Create a new div element
  var temporalDivElement = document.createElement("div");
  // Set the HTML content with the providen
  temporalDivElement.innerHTML = html;
  // Retrieve the text property of the element (cross-browser support)
  return temporalDivElement.textContent || temporalDivElement.innerText || "";
}


/******Get all the user list here********/   
getSearchResultList(){
  var text = this.props.match.params.searchtext;
  var tokenStr = token;
  const formData = {
      token         : tokenStr,
      search_text   : text
  }
  this.setState({'searchText':text});
  axios.post(urlStr, formData)
  .then((response) => {
      console.log(response.data);
    if(response.data.code==200) {
          this.setState({
            search_result : response.data.result,
          });
    }
    else
    {
      this.setState({isMsg:true});
      this.setState({className:'error'});
    }
  })
  .catch((err) => {
      this.setState({isMsg:true});
      this.setState({className:'error'});
  })
}


componentDidMount(){
this.getSearchResultList();

}


  render() {
      let daysStr =<article className="search-result row">
      <div className="col-xs-12 col-sm-12 col-md-12 excerpet">
        <center><h3>No Result Found</h3></center>
      </div>
      <span className="clearfix borda" />
    </article>;
    if(this.state.search_result.length){
       daysStr = this.state.search_result.map((val,i) => 
       <article className="search-result row">
          <div className="col-xs-12 col-sm-12 col-md-12 excerpet">
            <h3><a href={"/"+val.url} title>{val.title}</a></h3>
            <p>{this.stripHtml(val.desc)}</p>						
            <span className="plus"><a href={"/"+val.url} className="readMore btn btn-danger btn-sm"><i className="glyphicon glyphicon-plus" />Read More...</a></span>
          </div>
          <span className="clearfix borda" />
        </article>
     );
    }

    return (
        
        <div>
          <Header/>
          <div className="container-fluid bg-maroon p-tb50">
          <div className="container">
          <h1 className="text-center white-text mt-85">Search Result</h1>
            <div className="bg-whitegrid"><p className="sep-white" /></div>
            <h2 className="text-center  white-text">Search Results for: {this.state.searchText}</h2>
          </div>
        </div>
        <div className="container">
        <section className="col-xs-12 col-sm-6 col-md-12 p-b50">
        {daysStr}
        			
      </section>
        </div>
        <Footer/>
        </div>
        
       
    )
  }
}

export default SearchResultDetails;

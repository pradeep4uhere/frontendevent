import React from 'react';
import Header from '../InnerHeader';
import Footer from '../Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import DefaultImage  from '../config/default.png';
import Constants  from '../config/Constants'
var serialize = require('form-serialize');
var ip = require('ip');
const urlStr = Constants.DESTINATION_LIST;
const token     = localStorage.getItem('token');
class Itinerary extends React.Component {
  constructor(props) {
        super(props);
        this.state={
          ipAdress : ip.address(),
          user_id: sessionStorage.getItem('userid'),
          destinationDetails:[],
          type: 'short',
          setting:[],
          DayExperiencesTag:''
        }
        this.stripHtml            = this.stripHtml.bind(this);
        this.getDestinationList   = this.getDestinationList.bind(this);
        this.handleSort           = this.handleSort.bind(this);
        
        
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
     getDestinationList(){
      var tokenStr = token;
      const formData = {
          token    : tokenStr,
          id       : '',
          type     : this.state.type
      }
      axios.post(urlStr, formData)
      .then((response) => {
        if(response.data.code==200) {
          
              this.setState({
                destinationDetails    : response.data.data,
                DayExperiencesTag     : response.data.setting[20].options_value
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
  this.getDestinationList();
}

handleSort(e,val){
  e.preventDefault()
  this.setState({type:val});
  if(val=='short'){
    $("#short").css("background-color","#36ca2624");
    $("#long").css("background-color","#FFF");
  }
  if(val=='long'){
    $("#short").css("background-color","#FFF");
    $("#long").css("background-color","#36ca2624");
  }
  this.getDestinationList();
}


// getDefaultImage(destination_gallery){
//   let defaultImage = '';
//   if(destination_gallery.length>0){
//     destination_gallery.map((val,i) =>{
//       if(val.is_default==1){
//         return val.
//       }
//     });
//   }
// }

  

  render() {
    const { destinationDetails } =  this.state;
    const { defaultImage } = this.state;
    console.log(destinationDetails);
    let destinationStr ='';
    if(destinationDetails){
      destinationStr = destinationDetails.map((val,i) =>
        <div className="card">
        <div className="card-header" role="tab" id={"headingOne"+val.id}>
          <div className="row">
            <div className="circular-landscape" style={{marginLeft: '10px'}}><img src={(val.destination_gallery!='')?val.destination_gallery[0]:val.defaultImg} alt="Image" /></div>
            <div className="col-xl-10"><h3 className="mb-0"><a data-toggle="collapse" href={"#collapseOne"+val.id} role="button" aria-expanded="true" aria-controls={"collapseOne"+val.id}>
                  {val.title}</a> </h3><br /><p style={{marginTop: '-20px'}}>{this.stripHtml(val.descriptions).substring(0,100)}</p></div>
          </div>
        </div>
        <div id={"collapseOne"+val.id} className="collapse" role="tabpanel" aria-labelledby={"headingOne"+val.id} data-parent={"#accordion1"}>
          <div className="card-body">
            <div className="row">
              <div className="col-xl-4"><img src={val.destination_gallery[0]} alt="Image" onerror={"this.onerror=null;this.src='"+defaultImage+"'"}/></div>
              <div className="col-xl-8">{this.stripHtml(val.descriptions)}<br />	 <a href={"/destinationdetails/"+val.id} className="btn btn-red-small1">View More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
    }
    return (
        <div>
          <Header/>
          <div className="container-fluid bg-maroon p-tb50">
          <div className="container">
            <h1 className="text-center white-text mt-85">Destination
            </h1>
            <div className="bg-whitegrid"><p className="sep-white" /></div>
            <h2 className="text-center p-b50 white-text">{this.state.DayExperiencesTag}</h2>
          </div>
        </div>
        <div className="container">
          <div className="col-xl-12 m-ft66 text-center"><img src="../rudra/images/ticket-combo.png" alt="" className="img-fluid" /></div>
        </div>
        <div className="container">
          <div className="row p-tb20">
            <div className="col-xl-8 col-md-8 col-sm-12 col-12"><a className=" btn-grey-border">Sort By</a></div>
            <div className="col-xl-2 col-md-2 col-sm-12 col-12"><button type="button" className="btn btn-grey-border" id="short" style={{"backgroundColor":"#36ca2624"}}><Link to="/destination#short" style={{"textDecoration":"none","color":"#333"}} onClick={((e) => this.handleSort(e,'short'))}>Short Trips</Link></button></div>
            <div className="col-xl-2 col-md-2 col-sm-12 col-12"><button type="button" className="btn btn-grey-border" id="long"><Link href="/destination#long" style={{"textDecoration":"none","color":"#333"}} onClick={((e) => this.handleSort(e,'long'))}>Long Trips</Link></button></div>
          </div>
        </div>
        <div className="container">
          <div id="accordion1" role="tablist">
            {destinationStr}
            
          
           
          </div>
        </div>
      <br/><br/><br/>
      <Footer/>
        </div>
    )
  }
}

export default Itinerary;

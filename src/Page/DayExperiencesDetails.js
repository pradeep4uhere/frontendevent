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
import Moment from 'react-moment';  
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
const urlStr = Constants.DESTINATION_EXP_LIST;
const addToCartUrl  = Constants.ADD_TO_EXP_CART_URL;
const token     = localStorage.getItem('token');
class DayExperiencesDetails extends React.Component {
  constructor() {
    super();
    this.state={
            ipAdress : ip.address(),
            user_id: sessionStorage.getItem('userid'),
            destinationDetails:[],
            itinerary_day:[],
            departure_date:[],
            itinerary_addon:[],
            itinerary_terms:[],
            modalIsOpen: false,
            priceTitle:'INR'
    }
    this.stripHtml            = this.stripHtml.bind(this);
    this.getDestinationList   = this.getDestinationList.bind(this);
    this.checkDeparture       = this.checkDeparture.bind(this);
    this.openNav =  this.openNav.bind(this);
    this.closeNav =  this.closeNav.bind(this);
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    
}
openModal() {
  this.setState({modalIsOpen: true});
}

afterOpenModal() {
  // references are now sync'd and can be accessed.
  //this.subtitle.style.color = '#f00';
}

closeModal() {
  this.setState({modalIsOpen: false});
}

openNav() {
  $("#mySidenavDetails").css({"width":"100%"});
  //document.getElementById("mySidenav").style.width = "100%";
  }
  
  closeNav() {
  $("#mySidenavDetails").css({"width":"0"});
  // document.getElementById("mySidenav").style.width = "0";
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
  var id = this.props.match.params.id;
  var tokenStr = token;
  const formData = {
      token    : tokenStr,
      id       : id
  }
  axios.post(urlStr, formData)
  .then((response) => {
    if(response.data.code==200) {
          this.setState({
            destinationDetails    : response.data.data[0],
            defaultImage          : response.data.data.defaultImg,
            itinerary_day         : response.data.data[0].itinerary_day,
            itinerary_terms       : response.data.data[0].itinerary_terms_and_conditions,
            departure_date        : response.data.data[0].valid_itinerary_departure,
            itinerary_addon       : response.data.data[0].itinerary_addon,
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

checkDeparture(){
    let deptId = $('#dept_id').val();
    if(!deptId){
        alert("Please select departure dates");
        return false;
    }else{
        var id       = this.props.match.params.id;
        var ipAdd    = this.state.ipAdress;
        var uid      = ip.toLong(this.state.ipAdress);
        if(sessionStorage.getItem('userid')){
            var uid      = this.state.user_id;
        }
        const formData = {
            token           : token,
            uid             : uid,
            id              : id,
            deptid          : deptId,
        }
        axios.post(addToCartUrl, formData)
            .then((response) => {
                response = response.data;
                console.log(response);
                if(response.code==200) {
                    window.location.href = '/expcart'; 
                }else if(response.code==500) {
                    alert("Date Of Departure Required.");
                    return false;
                } else{
                    console.log("Failed");
                    return false;
                }
            })
            .catch((err) => {
            console.log("Failed Catch");
            })
        };
        
    }

selectDeparture(val,e){
    e.preventDefault();
    $(".departureClass").css("background-color", "#FFF");
    $('#depId'+val.id).css("background-color", "#78b36a");
    $('#dept_id').val(val.id);
}

  render() {
    const { itinerary_day } = this.state;
    let placeTitle = '';
    let daysStr ='';
    let addonStr = '';
    let basePrice  = '0.00';
    let departureDate = '';
    let termsStr  = '';
    const { defaultImage } = this.state;
    
    if(this.state.itinerary_day.length){
       placeTitle = this.state.itinerary_day[0].day;
       daysStr = this.state.itinerary_day.map((val,i) => 
       <div className="card">
            <div className="card-header" role="tab" id={"headingThree1"+i}>
                <div className="row">
                <div className="circular-landscape" style={{marginLeft: '10px'}}><img src={(val.itinerary_day_gallery.length)?val.itinerary_day_gallery[0].original:defaultImage} alt="image" /></div>
                <div className="col-xl-10"><h3 className="mb-0"><a className="dayTitle" data-toggle="collapse" href={"#collapseThree1"+i} role="button" aria-expanded="true" aria-controls="collapseThree1">
                        {val.place_name}: {val.day}</a> </h3><br /><p style={{marginTop: '-20px',"fontSize":"14px"}}>{this.stripHtml(val.details).substring(0,80)}</p></div>
                </div>
            </div>
            <div id={"collapseThree1"+i} className="collapse" role="tabpanel" aria-labelledby={"headingThree1"+i} data-parent={"#accordion2"}>
                <div className="card-body">
                <div className="row">
                    <div className="col-xl-12">
                    
                    {(val.itinerary_day_gallery.length)?(
                    <ImageSlider galleryJson={val.itinerary_day_gallery} name="hello" />):""}
                   
                    </div>
                    <div className="col-xl-12" style={{"fontSize":"14px"}}><br />
                    <div dangerouslySetInnerHTML={{ __html: val.details }}/>
                    </div>
                </div>  
                </div>
            </div>
        </div>
     );
    }

    if(this.state.itinerary_addon.length){
      addonStr = this.state.itinerary_addon.map((val,i) => 
        <div className="card">
            <div className="card-header" role="tab" id={"headingOne1"+i}>
              <h5 className="mb-0"><a  data-toggle="collapse" href={"#collapseOne1"+i} role="button" aria-expanded="false" aria-controls="collapseOne1" className="collapsed dayTitle">{val.title}</a> </h5>
            </div>
            <div id={"collapseOne1"+i} className="collapse" role="tabpanel" aria-labelledby={"headingOne1"+i} data-parent={"#accordion1"}>
              <div className="card-body">
                  <div dangerouslySetInnerHTML={{ __html: val.descriptions }}/>

                  <div className="col-md-4 pull-left">
                  <a href="#" className="" data-toggle="modal" data-target={"#exampleModalLong"+i}>
                      Description>>
                  </a>
                  <div className="modal fade" id={"exampleModalLong"+i} tabIndex={-1} role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Destination</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                      <div className="modal-body">
                      <div dangerouslySetInnerHTML={{ __html: val.addon_description }}></div>
                      </div>
                    </div>
                  </div>
                  </div>  
                </div>
                <div className="col-md-6 pull-left">
                  <a href="#" className="" data-toggle="modal" data-target={"#exampleModalLong1"+i}>
                      Includes>>
                  </a>
                  <div className="modal fade" id={"exampleModalLong1"+i} tabIndex={-1} role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Includes</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                      <div className="modal-body">
                      <div dangerouslySetInnerHTML={{ __html: val.addon_includes }}></div>
                      </div>
                    </div>
                  </div>
                  </div>  
                </div>



                  {/* {(val.addon_description!='')?(  
                  <div className="col-md-6 pull-left">
                        <a onClick={this.openModal(val.id)}><b>Description>></b></a>
                        <div dangerouslySetInnerHTML={{ __html: val.addon_description }}/></div>
                        ):('')}
                    {(val.addon_includes!='')?(  
                    <div className="col-md-6 pull-right">
                        <a onClick={this.openModal(val.id)}><b>Includes>></b></a>
                       <div dangerouslySetInnerHTML={{ __html: val.addon_includes }}/></div>
                        ):('')} */}
              </div>
            </div>
            
            
            
      </div>
    );
   }


   if(this.state.itinerary_terms.length){
    termsStr = this.state.itinerary_terms.map((val,i) => 
      <div className="card1">
          <div className="card-header" role="tab" id={"headingTwo1"+i}>
            <h5 className="mb-0" style={{"lineHeight":"0.2","borderBottom":"thin 1 px","textAlign":"left"}}><a  data-toggle="collapse" href={"#collapseTwo1"+i} role="button" aria-expanded="false" aria-controls="collapseTwo1" className="collapsed dayTitle">{val.title}</a> </h5>
          </div>
          <div id={"collapseTwo1"+i} className="collapse" role="tabpanel" aria-labelledby={"headingTwo1"+i} data-parent={"#accordion3"}>
            <div className="cardBody"><div dangerouslySetInnerHTML={{ __html: val.descriptions }}/></div>
          </div>
    </div>
  );
 }


   
    
    if(this.state.departure_date.length){
        basePrice = this.state.departure_date[0].price;
        console.log("this.state.destinationDetails================",this.state.departure_date[0].price);
    }


    departureDate = this.state.departure_date.map((val,i) =>
            <li class="list-group-item d-flex justify-content-between align-items-center departureClass" id={"depId"+val.id}>
                {val.start_date}
                <a href="#">
                <span class="badge badge-success badge-pill"   onClick={(e) => this.selectDeparture(val,e)}>Select</span>
                </a>
            </li>
    );
    let  departureDatePrice ='';
    departureDatePrice = this.state.departure_date.map((val,i) =>
      <li className="list-group-item d-flex justify-content-between align-items-center" onClick={(e) => this.selectDeparture(val,e)} style={{cursor:'pointer'}}>
        <Moment format="DD-MMM-YYYY">{val.start_date}</Moment>-<Moment format="DD-MMM-YYYY">{val.end_date}</Moment>
        <span className="badge badge-info badge-pill" style={{fontSize:'15px'}}>{this.state.priceTitle}{val.price}{(val.price_in_doller>0)?' / $'+val.price_in_doller:''}</span>
      </li>
    );
    return (
        
        <div>
          <Header/>
          <div id="mySidenavDetails" className="sidenavDetails" style={{"paddingTop":"0%"}}>
          <div id="rightSide" style={{"width":"20%","float":"right","backgroundColor":"#FFF","height":"100%","color":"#000"}}>
          <a href="javascript:void(0)" class="closebtn" onClick={this.closeNav.bind(this)}>&times;</a>
          <div className="wrap" style={{"fontSize":"24px","textAlign":"right","paddingRight":"0px"}}>
            <div style={{marginTop:"55px"}}>
            <div id="accordion3" role="tablist">
                {termsStr}
            </div>
            </div>
          </div>
          </div>
        </div>  

          <div className="container-fluid bg-maroon p-tb50">
          <div className="container">
          <h1 className="text-center white-text mt-85">{this.state.destinationDetails.title}</h1>
                <p className="text-white small text-center">{placeTitle}</p>
            <div className="bg-whitegrid"><p className="sep-white" /></div>
            <h2 className="text-center p-b50 white-text" >
           {this.stripHtml(this.state.destinationDetails.description).substring(0,100)}</h2>
          </div>
        </div>
        <div className="container">
             <ImageSlider galleryJson={this.state.destinationDetails.itinerary_gallery} name="hello" />
          <br />
          <br />
          <br />
          
          <div className="row">
            <div className="col-xl-8">
              <div className="col-xl-12"><h2>{this.state.destinationDetails.title}</h2> 
              <p style={{"fontSize":"14px"}}> <div dangerouslySetInnerHTML={{ __html: this.state.destinationDetails.description }}/></p></div>
              <div className="col-xl-12">
                {(addonStr!='')?(<h4 className="dayTitle">ADDONS</h4>):('')}
                <div id="accordion1" role="tablist">
                  {addonStr}
                </div>
                <br />
                <br />
                <div id="accordion2" role="tablist">
                 {daysStr}
                </div>
              </div>
            
            </div>
            <div className="col-xl-4">
              <div className="shadow-block text-center"><span className="price-red-large">INR{basePrice}</span><br /><br /><p>
                  <button type="button" className="btn btn-red btn-lg btn-block text-uppercase btn-red-small1" onClick={this.checkDeparture}>Book This Experience</button>
                  <button type="button" className="btn btn-info btn-lg btn-block  btn-info-small1 detailsBtnText" onClick={this.openNav.bind(this)} >Details</button>
                  <input type="hidden" id="dept_id"/>
                </p>
                <p className="text-center small bold">Share</p>
                {/* Add font awesome icons */}
                <a href="#" className="fab fa-facebook" style={{fontSize: '37px', width: '37px', padding: '5px'}} />
                <a href="#" className="fab fa-twitter" style={{fontSize: '37px', width: '37px', padding: '5px'}}/>
                <a href="#" className="fab fa-google" style={{fontSize: '37px', width: '37px', padding: '5px'}}/>
                <a href="#" className="fab fa-linkedin" style={{fontSize: '37px', width: '37px', padding: '5px'}}/>
                <a href="#" className="fab fa-pinterest" style={{fontSize: '37px', width: '37px', padding: '5px'}}/>
              </div>
              <hr/>
              <div class="list-group">
                <button type="button" class="list-group-item list-group-item-action bg bg-danger text-white" style={{"backgroundColor":"red !important"}}>
                    All Price Details
                </button>
                <ul className="list-group" style={{fontSize:'14px'}}>
                  {departureDatePrice}
                </ul>
                </div>
                <hr/>

              <div className="promo-text text-center"> 
              <p>For more details about this experience, please email us<a href> info@rudraxp.com</a></p>
              </div>
              <hr/>
              <div class="list-group">
                <button type="button" class="list-group-item list-group-item-action bg bg-danger text-white" style={{"backgroundColor":"red !important"}}>
                    All Departure Dates
                </button>
                <ul class="list-group" style={{"maxHeight":"492px","overflow":"auto"}}>
                        {departureDate}
                </ul>
                </div>
            </div>  
          </div>
          <br /><br /><br />
          {/* Modal */}
          <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h2 className="modal-title" id="exampleModalLongTitle">Details</h2>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div id="accordion2" role="tablist">
                    <div className="card">
                      <div className="card-header" role="tab" id="headingOne2">
                        <h5 className="mb-0"> <a data-toggle="collapse" href="#collapseOne5" role="button" aria-expanded="true" aria-controls="collapseOne5"> Terms &amp; Conditions </a> </h5>
                      </div>
                      <div id="collapseOne5" className="collapse show" role="tabpanel" aria-labelledby="headingOne2" data-parent="#accordion2">
                        <div className="card-body"><p>
                            All Prices are on twin sharing.
                            Single person Supplement : Rs 24,500/ USD 350 for main itinerary.
                            Rs 9,500/ USD 180 (min 2 pax) for addon for 2 nights Pangong and 1 night Leh
                            The prices mentioned are based on accommodations, handpicked to give the most fulfilling and enriching experience of a destination. These may change in relation with what gets added, upgraded or improved in a particular destination. We also choose the most valuable room in terms of experience in the chosen hotel, which is mostly a higher category, more private and truly represents the spirit of the place.
                            We use Toyota Innovas, by default for all travel. Please check with us for upgrade to a Luxury SUV, or also for the option of the costs without transport.
                            Foreign nationals are requested to bear in mind that there maybe some nominal cost additions owing to differences in entrances to monuments, wild life entry fees or other similar charges.<br />
                          </p><h3>Payment:</h3>
                          Booking Advance of INR 25,000.00 / USD 400 per person
                          Final Full Payment 60 days prior to arrival.
                          Package doesn’t include:<br /><br />
                          - All entrance / camera fees.<br />
                          - Tips &amp; Gratuities &amp; personal expenses<br />
                          - Visa Fees &amp; Airport tax or Airport improvement fees.<br />
                          - Travel Insurance.<br />
                          - All Expenses other than mentioned in What Price Includes.<br /><br />
                          <h3>Cancellation Policy</h3>
                          - Booking advance non – refundable from the time of booking.<br />
                          - 75% of Package Cost non – refundable within 45 days before departure .<br />
                          - 100% of Package Cost non – refundable within 30 days before departure. <br />
                          <p /></div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" role="tab" id="headingTwo2">
                        <h5 className="mb-0"> <a className="collapsed" data-toggle="collapse" href="#collapseTwo2" role="button" aria-expanded="false" aria-controls="collapseTwo2"> Itinerary Includes </a> </h5>
                      </div>
                      <div id="collapseTwo2" className="collapse" role="tabpanel" aria-labelledby="headingTwo2" data-parent="#accordion2">
                        <div className="card-body">- Tour starts from Manali and includes pick up from Kullu Airport / your hotel.<br />
                          - Accommodation in all the hotels on twin sharing.<br />
                          - Daily breakfast and dinner<br />
                          - All prevailing taxes like GST and Service tax wherever applicable.<br />
                          - All transport by Toyota Innova with 3 persons in a car and a Smart-chauffer.<br />
                          - Road tax, toll tax, driver’s allowance, parking etc.<br />
                          - A Tour Guide - Friend all through<br />
                          - Oxygen equipment back up<br />
                          - Memories of a lifetime</div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" role="tab" id="headingThree2">
                        <h5 className="mb-0"> <a className="collapsed" data-toggle="collapse" href="#collapseThree2" role="button" aria-expanded="false" aria-controls="collapseThree2"> Intinerary Cost </a> </h5>
                      </div>
                      <div id="collapseThree2" className="collapse" role="tabpanel" aria-labelledby="headingThree2" data-parent="#accordion2">
                        <div className="card-body">(INR): 74500.00<br />(USD): 1,146.00</div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" role="tab" id="headingThree4">
                        <h5 className="mb-0"> <a className="collapsed" data-toggle="collapse" href="#collapseThree4" role="button" aria-expanded="false" aria-controls="collapseThree4"> 2 nights Pangong Tso 1 night Leh Addon Includes </a> </h5>
                      </div>
                      <div id="collapseThree4" className="collapse" role="tabpanel" aria-labelledby="headingThree4" data-parent="#accordion2">
                        <div className="card-body">- Accommodation in all the hotels on twin sharing.<br />
                          - Daily breakfast and dinner<br />
                          - All prevailing taxes like GST wherever applicable.<br />
                          - All transport by Toyota Innova with 3 persons in a car and a Smart-chauffer.<br />
                          - Road tax, toll tax, driver’s allowance, parking etc.<br />
                          - Oxygen equipment back up<br />
                          - Memories of a lifetime</div>
                      </div>
                    </div>	
                    <div className="card">
                      <div className="card-header" role="tab" id="headingThree5">
                        <h5 className="mb-0"> <a className="collapsed" data-toggle="collapse" href="#collapseThree5" role="button" aria-expanded="false" aria-controls="collapseThree5"> Cost for 2 nights Pangong Tso 1 night Leh addon </a> </h5>
                     <ImageSlider/> </div>
                     <ImageSlider/> <div id="collapseThree5" className="collapse" role="tabpanel" aria-labelledby="headingThree5" data-parent="#accordion2">
                     <ImageSlider/>   <div className="card-body">(INR): 24500<br />(INR): 0<br />(USD): 377<br />(USD): 0</div>
                     <ImageSlider/> </div>
                    </div>
                  </div>
                </div>
                {/* <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>*/}
              </div>
            </div>
          </div>
        </div>
        <br/><br/><br/>
        
        <Footer/>
        </div>
        
       
    )
  }
}

export default DayExperiencesDetails;

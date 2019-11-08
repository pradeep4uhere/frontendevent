import React from 'react';
import Header from '../InnerHeader';
import Footer from '../Footer';
import ImageSlider from '../Elements/ImageSlider';
import Constants  from '../config/Constants'
import axios from 'axios'
var serialize = require('form-serialize');
var ip = require('ip');
const urlSettingStr = Constants.GENERAL_SETTING_URL;
const urlStr = Constants.EVENT_DETAILS_URL;
const addToCartUrl  = Constants.ADD_TO_CART_URL;
const getCityName   = Constants.GET_CITY_NAME_URL;
const token     = localStorage.getItem('token');
class EventDetails extends React.Component {
  constructor() {
        super();
        this.state={
          settingDetails:{},
          eventDetails:[],
          eventTiming:[],
          eventgallery:[],
          seatprice:'',
          ipAdress : ip.address(),
          user_id: sessionStorage.getItem('userid'),
          cityName:'-'
        }
        
        this.getSettingList       = this.getSettingList.bind(this);
        this.stripHtml            = this.stripHtml.bind(this);
        this.change               = this.change.bind(this);
        this.handleSubmit         = this.handleSubmit.bind(this);
        this.getSiteSettingList   = this.getSiteSettingList.bind(this);
        this.getCityName          = this.getCityName.bind(this);
      }


      /******Get all the user list here********/   
      getSiteSettingList(){
      var tokenStr = token;
      const formData = {
          token    : tokenStr,
          urlParams: this.state.urlParams
      }
      axios.post(urlSettingStr, formData)
      .then((response) => {
        if(response.data.code==200) {
              this.setState({
                settingDetails    : response.data.data.setting,
              });
              //console.log(response.data.data);
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


       /******Get all the user list here********/   
       getSettingList(){
        console.log(this.props.match.params.id);
        var eventId = this.props.match.params.id;
        var tokenStr = token;
        const formData = {
            token    : tokenStr,
            id       : eventId,
        }
        axios.post(urlStr, formData)
        .then((response) => {
          if(response.data.code==200) {
            
                this.setState({
                  eventDetails    : response.data.data.event,
                  eventTiming     : response.data.data.event_time,
                  eventgallery    : response.data.data.gallery,
                });
                this.getCityName(this.state.eventTiming.theatre.city_id);
                //alert(this.state.eventTiming.theatre.city_id);
                if(this.state.eventTiming.price){
                  this.setState({seatprice:this.state.eventTiming.price[0].price});
                }
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
    this.getSettingList();
    this.getSiteSettingList();

  }



  stripHtml(html){
    // Create a new div element
    var temporalDivElement = document.createElement("div");
    // Set the HTML content with the providen
    temporalDivElement.innerHTML = html;
    // Retrieve the text property of the element (cross-browser support)
    return temporalDivElement.textContent || temporalDivElement.innerText || "";
}

  change(event){
    var valueStr= event.target.value;
    let valueArr = valueStr.split("|");
    if(valueArr){
      this.setState({seatprice:valueArr[1]});
    }
  }


  handleSubmit(event){
    var tokenStr = token;
    event.preventDefault();
    var uid             = ip.toLong(this.state.ipAdress);
    if(sessionStorage.getItem('userid')){
      var uid      = this.state.user_id;
    }
    var id              = event.target.hiddenId.value;
    var seat_id         = event.target.seat_id.value;
    var bookingDate     = event.target.bookingDate.value;
    const form = event.currentTarget
    const body = serialize(form, {hash: true,empty:true})
    const formData = {
          token           : tokenStr,
          uid             : uid,
          id              : id,
          seat_id         : seat_id,
          bookingDate     : bookingDate,
    }
    axios.post(addToCartUrl, formData)
      .then((response) => {
        response = response.data;
        console.log(response);
        if(response.code==200) {
            window.location.href = '/cart'; 
        }else if(response.code==500) {
            alert("Date Of Booking Reuired.");
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


  getCityName(city_id){
    var tokenStr = token;
    const formData = {
      token           : tokenStr,
      id              : city_id,
    }
    axios.post(getCityName, formData)
    .then((response) => {
      response = response.data;
      console.log(response);
      if(response.code==200) {
          //window.location.href = '/cart'; 
          this.setState({
            cityName: response.data.city_name
          });
      }else{
          console.log("Failed");
          return false;
      }
    })
    .catch((err) => {
      console.log("Failed Catch");
    })
  }


  render() {
    const {eventDetails}  = this.state;
    const {galleryJson}   = this.state.eventgallery;
    const {eventTiming}   = this.state;
    const {seatprice}     = this.state;
    let data = this.state.settingDetails;
    let price = (data.length>0) ? data[14].options_value : '';

    console.log(eventTiming);
    const priceData = this.state.eventTiming.price;
    let priceListOption ='';
    if(priceData){
      priceListOption = priceData.map((val,i) =>
        <option value={val.sitting_type.id+"|"+val.price}>{val.sitting_type.sitting_type_name}</option>
      );
    }
    return (
        <div>
          <Header/>
          <div className="container-fluid bg-maroon p-tb50">
          <div className="container">
            <h1 className="text-center white-text mt-85">{this.state.eventDetails.title}
            </h1><p className="text-white small text-center">{this.state.cityName}</p>
            <div className="bg-whitegrid"><p className="sep-white" /></div>
            <h2 className="text-center p-b50 white-text">{this.stripHtml(this.state.eventDetails.description)}</h2>
          </div>
        </div>
        <div className="container">
        <ImageSlider galleryJson={this.state.eventgallery} name="hello" />
        
        <div className="row">
          <div className="col-xl-8">
           {/* Nav tabs */}
        <ul className="nav nav-tabs">
          <li className="nav-item tabs">
            <a className="nav-link active" data-toggle="tab" href="#home">Itinerary</a>
          </li>
          <li className="nav-item tabs">
            <a className="nav-link" data-toggle="tab" href="#menu1">Includes</a>
          </li>
          <li className="nav-item tabs">
            <a className="nav-link" data-toggle="tab" href="#menu2">Doesn’t Includes</a>
          </li>
          <li className="nav-item tabs">
            <a className="nav-link" data-toggle="tab" href="#menu21">Other Info</a>
          </li>
          
        </ul>
        {/* Tab panes */}
        <div className="tab-content">
          <div id="home" className="container tab-pane active"><br />
          {this.stripHtml(this.state.eventTiming.itinerary)}
          </div>
          <div id="menu1" className="container tab-pane fade"><br />
          {this.stripHtml(this.state.eventTiming.includes)}
          </div>
          <div id="menu2" className="container tab-pane fade"><br />
          {this.stripHtml(this.state.eventTiming.dincludes)}
          </div>
          <div id="menu21" className="container tab-pane fade"><br />
          {this.stripHtml(this.state.eventTiming.other)}
          </div>
        </div>


	
          </div>
          <form role="form" onSubmit={this.handleSubmit}  id="form-event">
          <div className="col-xl-12">
            
            <div className="shadow-block text-center">
            <p><span className="price-red-large" style={{"fontSize":"24px","fontWeight":"bold"}}>{this.state.eventDetails.title}</span><hr/></p>
            <span className="price-red-large">{price}{seatprice}</span><br />
            <span className="text-black-small">Price Per Adult </span>
            <p>              </p>
            <p><span className="text-black-medium">Sitting Type</span></p>
            <p><select name="seat_id" id="seat_id" className="form-control" style={{"width":"150px","margin":"auto"}} onChange={this.change}>
                {priceListOption}
              </select>
            </p>

            <p> <span className="text-black-medium">TIMINGS</span><br />
            <span className="time">{this.state.eventTiming.event_start_time} –{this.state.eventTiming.event_end_time}</span></p>
              <p /><p><span className="text-black-medium">Select Date:</span><br /><input type="date" id="bookingDate" /></p><p>
                <input type="hidden" id="hiddenId" value={this.state.eventTiming.id}/>
                <button type="submit" class="btn btn-red  btn-lg btn-block text-uppercase">Book Now</button>
              </p></div>
          </div>
          </form>
        </div>
      </div>
      <br/><br/><br/>
      <Footer/>
        </div>
    )
  }
}

export default EventDetails;

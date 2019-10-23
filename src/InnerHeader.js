import React from 'react';
import { Link } from 'react-router-dom';
import Constants  from './config/Constants';
import axios from 'axios'
import $ from 'jquery'
const urlStr = Constants.GET_BANNER_LIST;
const token     = localStorage.getItem('token');
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      user_id     : sessionStorage.getItem('userid'),
      first_name  : sessionStorage.getItem('first_name'),
      last_name  : sessionStorage.getItem('last_name'),
      email  : sessionStorage.getItem('email'),
      phone  : sessionStorage.getItem('phone'),
      isLoggedIn  : false,
      userDetails : sessionStorage.getItem('userDetails'),
      defaultImage: '../rudra/images/home-banner.jpg',
      settingDetails: [],
      destinationList: [],
      eventFinalArr : []
    }
    this.greeting = this.greeting.bind(this);
    this.openNav =  this.openNav.bind(this);
    this.closeNav =  this.closeNav.bind(this);
}



/******Get all the user list here********/   
getBannerList(){
var tokenStr = token;
const formData = {
    token    : tokenStr,
    urlParams: this.state.urlParams
}
axios.post(urlStr, formData)
.then((response) => {
  if(response.data.code==200) {
        this.setState({
          defaultImage    : response.data.data,
          settingDetails  : response.data.setting,
          destinationList : response.data.destinationList,
          eventFinalArr   : response.data.eventFinalArr
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


componentDidMount(){
this.getBannerList();
}

openNav() {
$("#mySidenav").css({"width":"100%"});
//document.getElementById("mySidenav").style.width = "100%";
}

closeNav() {
$("#mySidenav").css({"width":"0"});
// document.getElementById("mySidenav").style.width = "0";
}

greeting() {
const isLoggedIn = sessionStorage.getItem('userid');
if (isLoggedIn) {
  console.log(this.state.userDetails);
  return <div class="dropdown">
          <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown">
          {"Welcome, "+this.state.first_name} <i class="fa fa-sign-out-alt"></i>
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="logout">Sign Out</a>
          </div>
        </div>
}
return <Link className="nav-link" to="login"><img src="../rudra/images/ico_user.png" alt="" className="img-fluid" /></Link>;
}


  render() {
      let fb = '';
      let ins = '';
      let youtube = '';
      let linkedin = '';
      let cp='';
      if(this.state.settingDetails.length>0){
        fb = this.state.settingDetails[6].options_value;
        ins = this.state.settingDetails[5].options_value;
        youtube = this.state.settingDetails[4].options_value;
        linkedin = this.state.settingDetails[7].options_value;
        cp = this.state.settingDetails[10].options_value;
        
      }
      let destinationStr ='';
      if(this.state.destinationList.length>0){
        destinationStr = this.state.destinationList.map((val,i) =>
            <li><a href={"/destinationdetails/"+val.id}>{val.title}</a></li>
        );
      
      }


      let eventFinalStr = "";
       if(this.state.eventFinalArr.length>0){
      eventFinalStr = this.state.eventFinalArr.map((val,i) =>
          <li><li><a href={"/day-exp-detail/"+val.event_id+"-"+val.id}>{val.title}</a></li></li>
      );
    }

      let eventFinalStrwithPlace = "";
       if(this.state.eventFinalArr.length>0){
        eventFinalStrwithPlace = this.state.eventFinalArr.map((val,i) =>
          <li><li><a href={"/day-exp-detail/"+val.event_id+"-"+val.id}>{val.place}</a></li></li>
      );
    
    }

    return (
        <div>
         <div id="mySidenav" className="sidenav">
          <a href="javascript:void(0)" class="closebtn" onClick={this.closeNav.bind(this)}>&times;</a>
          <div className="wrap">
            <ul className="wrap-nav">
              <li><Link to="#">Day Experiences</Link>
                <ul>
                  {destinationStr}
                  <li><Link to={"/destination"}>and much more...</Link></li>
                </ul>
              </li>
              <li><Link to={"/destination"}>Travel Experiences</Link>
                <ul>
                  {eventFinalStr}
                  <li><Link to="#">and much more...</Link></li>
                </ul>
              </li>
              <li><Link to={"/destination"}>Places</Link>
                <ul>
                  {eventFinalStrwithPlace}
                  <li><Link to="#">and much more...</Link></li>
                </ul>
              </li>
              <li><Link to={"/destination"}>Destinations</Link>
                <ul>
                  <li><Link to={"/aboutus"}>About Us</Link></li>
                  <li><Link to={"/contactus"}>Contact Us</Link></li>
                  <li><Link to="#">Travel Experiences</Link></li>
                  <li><Link to={"/termsandconditions"}>Terms and Conditions</Link></li>
                </ul>
              </li>
            </ul>
            <div className="container">
            <div className="row">
            <center>
              <div>
                <ul className="social-network social-circle pull-left">
                  <li><a href={fb} className="icoFacebooks" title="Facebook"><i className="fa fa-facebook" /></a></li>
                  <li><a href={ins} className="icoTwitters" title="Instagram"><i className="fa fa-instagram" /></a></li>
                  <li><a href={linkedin} className="icoLinkedins" title="Linkedin"><i className="fa fa-linkedin" /></a></li>
                  <li><a href={youtube} className="icoTwitters" title="YouTube"><i class="fa fa-youtube" aria-hidden="true"></i></a></li>
                </ul>
              </div>
              
              </center>
            </div>
           
          </div>
          <div className="row mt-4 pull-right" style={{"text-align":"center"}}><br/>
              <center cl>{cp}</center>
            </div>
          </div>
        </div>  
        <header id="home" className="hero-area-2">    

        <nav className="navbar navbar-expand-md bg-inverse fixed-top scrolling-navbar  menu-bg1">
            <div className="container">
              <Link to="/" className="navbar-brand brand-pos text-left"><img className="logo-width " src="../rudra/images/rudra-logo.png" alt="" /></Link>  
              <div className id="navbarCollapse">
                <ul className="ml-auto">
                  <li className="nav-item">
                          {this.greeting()}
                     </li>
                  <li></li>   
                  <li className="nav-item"> <Link className="nav-link" to="cart"><img src="../rudra/images/ico_cart.png" alt="" className="img-fluid" /></Link> </li>
                  <li className="nav-item"> <Link className="nav-link" to="#"> <img src="../rudra/images/ico_search.png" alt="" className="img-fluid" /></Link></li>
                  <li className="nav-item">
                    <div className="button">	 
                      <span onClick={this.openNav.bind(this)}><img src="../rudra/images/icon_nav.png" alt="" width={33} height={21} className="img-fluid" /></span>
                    </div> 
                  </li>
                </ul> 
              </div>
            </div>
          </nav> 
        </header>  
       </div>
       
    )
  }
}

export default Header;

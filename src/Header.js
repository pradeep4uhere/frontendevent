import React from 'react';
import { Link } from 'react-router-dom';
import Constants  from './config/Constants';
import axios from 'axios'
import $ from 'jquery'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
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
              <button type="button" class="btn btn-danger">
              <a href="/profile" style={{"color":"#FFF","textDecoration":"none"}}>{"Welcome, "+this.state.first_name} <i class="fa fa-user"></i></a>
              </button>
              {/* <div class="dropdown-menu">
                <a class="dropdown-item" href="logout">Sign Out</a>
              </div> */}
            </div>
    }
    return <Link className="nav-link" to="login"><img src="../rudra/images/ico_user.png" alt="" className="img-fluid" /></Link>;
  }


  render() {
    let fb = '';
    let ins = '';
    let youtube = '';
    let linkedin = '';
    let phone = '';
    let email = '';
    let copyrights = '';
    if(this.state.settingDetails.length>0){
      fb = this.state.settingDetails[6].options_value;
      ins = this.state.settingDetails[5].options_value;
      youtube = this.state.settingDetails[4].options_value;
      linkedin = this.state.settingDetails[7].options_value;
      phone = this.state.settingDetails[3].options_value;
      email = this.state.settingDetails[1].options_value;
      copyrights = this.state.settingDetails[10].options_value;
      
    }
    let destinationStr ='';
    if(this.state.destinationList.length>0){
      destinationStr = this.state.destinationList.map((val,i) =>
          <li><Link to={"destinationdetails/"+val.id}><span style={{"color":"#000000","display":"block"}}>{val.title}</span></Link></li>
      );
    
    }

    let eventFinalStr = "";
    if(this.state.eventFinalArr.length>0){
      eventFinalStr = this.state.eventFinalArr.map((val,i) =>
          <li ><Link to={"/day-exp-detail/"+val.event_id+"-"+val.id} ><span style={{"color":"#000000","display":"block"}}>{val.title}</span></Link></li>
      );
    
    }
    

    let bannerStr = "";
    if(this.state.eventFinalArr.length>0){
      bannerStr = this.state.defaultImage.map((val,i) =>
            <div>
              <img src={val} />
          </div>
      );
    }
    
    
   
    return (
        <div>
        <div id="mySidenav" className="sidenav" style={{"paddingTop":"0%"}}>
          <div id="rightSide" style={{"width":"75%","float":"right","backgroundColor":"#FFF","height":"100%","color":"#000"}}>
          <a href="javascript:void(0)" class="closebtn" onClick={this.closeNav.bind(this)}>&times;</a>
          <div className="wrap" style={{"fontSize":"24px","textAlign":"right","paddingRight":"0px"}}>
            <ul className="wrap-nav" style={{"color":"#000000 !important"}}>
            <li >
                <div style={{"textAlign":"left","marginTop":"90%"}}>
                  <p><span style={{"color":"#EF4136","display":"tomato","fontSize":"16px"}}>Phone:</span><br/><span style={{"color":"#000000","display":"#ccc","fontSize":"13px"}}>{phone}</span><br/>
                  <span style={{"color":"#EF4136","display":"tomato","fontSize":"16px"}}>Write Us:</span><br/><span style={{"color":"#000000","display":"#ccc","fontSize":"13px"}}>{email}</span></p>

                </div>
              </li>
               <li ><Link to="#"><span style={{"color":"#000000","display":"block","fontSize":"24px","borderBottom":"solid 2px #EF4136"}}>Destination Experiences</span></Link>
                <ul>
                  {destinationStr}
                  <li><Link to={"/destination"} ><span style={{"color":"#000000","display":"block"}}>{'and much more...'}</span></Link></li>
                </ul>
              </li>
              <li style={{"marginLeft":"5px"}}><Link to={"/destination"}><span style={{"color":"#000000","display":"block","fontSize":"24px","borderBottom":"solid 2px #EF4136"}}>Event Experiences</span></Link>
                <ul>
                  {eventFinalStr}
                  <li><Link to="#">and much more...</Link></li>
                </ul>
              </li>
              <li style={{"marginLeft":"40px"}}>
              <Link to="#"><span style={{"color":"#000000","display":"block","fontSize":"24px","borderBottom":"solid 2px #EF4136"}}>Home</span></Link>
                <ul>
                    
                    <li><Link to="#"><span style={{"color":"#000000","display":"block","fontSize":"24px","borderBottom":"solid 1px #EF4136"}}>Day Experiences</span></Link></li>
                    <li><Link to="#"><span style={{"color":"#000000","display":"block","fontSize":"24px","borderBottom":"solid 1px #EF4136"}}>Destination</span></Link></li>
                    <li><Link to="#"><span style={{"color":"#000000","display":"block","fontSize":"24px","borderBottom":"solid 1px #EF4136"}}>Travel Experiences</span></Link></li>
                    <li><Link to={"/aboutus"}><span style={{"color":"#000000","display":"block","fontSize":"24px","borderBottom":"solid 1px #EF4136"}}>About Us</span></Link></li>
                    <li><Link to={"/termsandconditions"}><span style={{"color":"#000000","display":"block","fontSize":"24px","borderBottom":"solid 1px #EF4136"}}>Terms and Conditions</span></Link></li>
                    <li><Link to={"/contactus"}><span style={{"color":"#000000","display":"block","fontSize":"24px","borderBottom":"solid 1px #EF4136"}}>Contact Us</span></Link></li>
                </ul>
              </li>
            </ul>
            <div className="row" style={{"width":"100%","marginLeft":"-55px"}}>
              <div className="col-md-4" style={{"textAlign":"left"}}>
                <ul className="social-network social-circle">
                <li><a href={fb}  title="Facebook" style={{"color":"#3b5998"}}><i className="fab  fa-facebook-square" /></a></li>
                  <li><a href={ins}  title="Instagram" style={{"color":"#3f729b"}}><i className="fab fa-instagram" /></a></li>
                  <li><a href={linkedin}  title="Linkedin" style={{"color":"#0e76a8"}}><i className="fab fa-linkedin" /></a></li>
                  <li><a href={youtube}  title="YouTube" style={{"color":"#c4302b"}}><i class="fab fa-youtube-square" aria-hidden="true"></i></a></li>
                </ul>
                
              </div>
              <div className="col-md-8" style={{"textAlign":"right","fontSize":"14px","color":"#000000","paddingTop":"2%","marginRight":"0px"}}>
                {copyrights}
              </div>
          </div>
          </div>
          </div>
        </div>  
      
        <header id="home" className="hero-area-2">    
          {/* <div className="overlay" style={{ "background": 'url('+this.state.defaultImage+')'}}></div> */}
            <Carousel dynamicHeight={false} showArrows={false} infiniteLoop={true} width={'1900px'} autoPlay={true} interval={3000}>
                {bannerStr}
            </Carousel>
          <nav className="navbar navbar-expand-md bg-inverse fixed-top scrolling-navbar">
            <div className="container">
              <Link to="/" className="navbar-brand brand-pos text-left"><img className="logo-width " src="../rudra/images/rudra-logo.png" style={{}} alt="" /></Link>  
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
          <div className="container">
            <div className="row">
              <div className="col-xl-12 m-ft66"><img src="../rudra/images/ticket-combo.png" alt="" className="img-fluid" /></div>
            </div>
          </div>	
        </header>
        {/* Header Section End */} 	 
    </div>
    )
  }
}

export default Header;

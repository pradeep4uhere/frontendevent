import React from 'react';
import { Link } from 'react-router-dom';
import Constants  from './config/Constants';
import axios from 'axios'
import $ from 'jquery';
import HeaderMenu from './HeaderMenu';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { link } from 'fs';
const urlStr = Constants.GET_BANNER_LIST;
const token     = localStorage.getItem('token');
class Header extends React.Component {
  constructor(props) {
        super(props);
        this.state={
         
          user        : localStorage.getItem('user'),
          userid      : localStorage.getItem('userid'),
          first_name  : localStorage.getItem('first_name'),
          last_name   : localStorage.getItem('last_name'),
          email       : localStorage.getItem('email'),
          phone       : localStorage.getItem('phone'),
          isLoggedIn  : false,
          userDetails : localStorage.getItem('userDetails'),
          defaultImage: '../rudra/images/home-banner.jpg',
          settingDetails: [],
          destinationList: [],
          eventFinalArr : []
        }
        this.greeting = this.greeting.bind(this);
        this.openNav =  this.openNav.bind(this);
        this.closeNav =  this.closeNav.bind(this);
        this.openSearchBox =  this.openSearchBox.bind(this);
        this.searchNow  = this.searchNow.bind(this);
        this.openNavSearch =  this.openNavSearch.bind(this);
        this.closeNavSearch =  this.closeNavSearch.bind(this);
  }



  openNavSearch() {
    $("#sidenavSearchDetails").css({"width":"100%"});
    //document.getElementById("mySidenav").style.width = "100%";
  }

   
  closeNavSearch() {
    $("#sidenavSearchDetails").css({"width":"0"});
    // document.getElementById("mySidenav").style.width = "0";
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
            console.log(this.state.eventFinalArr);
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
    if(localStorage.getItem('userid')>0){
      this.setState({
        isLoggedIn  : true,
      });
    }
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


  openSearchBox(){

  }

  greeting() {
    const {isLoggedIn} = this.state;
    if (isLoggedIn) {
      console.log(this.state.userDetails);
      return <div class="dropdown">
              <button type="button" class="btn btn-danger ">
              <a href="/profile" style={{"color":"#FFF","textDecoration":"none"}}><span className="lgbtn">{"Welcome, "+this.state.first_name}</span> <i class="fa fa-user"></i></a>
              </button>
              
            </div>
    }
    return <Link className="nav-link" to="/login"><img src="../rudra/images/ico_user.png" alt="" className="img-fluid" /></Link>;
  }


  searchNow(e){
    e.preventDefault();
    var text = $("#searchtext").val();
    if(text==''){
      alert("Please enter search text!");
      return false;
    }else{
      window.location.href=Constants.AppUrl+'searchresult/'+text;
    }
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
              {/* <p className="bannerText">Rudra Experiences is a socially committed</p> */}
             
          </div>
      );
    }
    
    
   
    return (
        <div className="headerBox">
        <HeaderMenu/> 
          <header id="home" className="hero-area-2"  style={{minHeight:72}}>    
          {/* <div className="overlay" style={{ "background": 'url('+this.state.defaultImage+')'}}></div> */}
          
          <nav className="navbar navbar-expand-md bg-inverse fixed-top scrolling-navbar menu-bg" style={{display:'block'}}>
            <div className="container containerBox">
              <div className="leftLogo">
               <Link to="/" className="navbar-brand brand-pos text-left"><img className="logo-width " src="../../rudra/images/rudra-logo.png" style={{}} alt="" /></Link>  
              </div>
              <div className="rightFrame">
              <div className id="navbarCollapse">
                <ul className="ml-auto">
                  <li className="nav-item">
                          {this.greeting()}
                     </li>
                  <li></li>   
                  <li className="nav-item"> <Link className="nav-link" to="/cart"><img src="../../rudra/images/ico_cart.png" alt="" className="img-fluid" /></Link> </li>
                  <li className="nav-item"> <Link className="nav-link" to="#" onClick={this.openNavSearch.bind(this)}> <img src="../../rudra/images/ico_search.png" alt="" className="img-fluid" style={{cursor:'pointer'}} /></Link></li>
                  <li class="nav-item book-btn"><Link className="nav-link btn btn-red-small" to="/exp-list">BOOK NOW</Link></li>
                  <li className="nav-item">
                    <div className="button">
                      <span onClick={this.openNav.bind(this)}><img src="../rudra/images/icon_nav.png" alt="" width={33} height={21} className="img-fluid" style={{cursor:'pointer'}}/></span>
                    </div> 
                  </li>
                </ul> 
              </div>
              </div>
            </div>
          </nav>  
        </header>
        {/* Header Section End */} 	 
      </div>
    )
  }
}

export default Header;

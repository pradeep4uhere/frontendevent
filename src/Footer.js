import React from 'react';
import { Link } from 'react-router-dom';
import Constants  from './config/Constants'
import axios from 'axios'
const urlStr = Constants.GENERAL_SETTING_URL;
const token     = localStorage.getItem('token');
class Footer extends React.Component {
  constructor() {
        super();
        this.state={
          settingDetails:{},
          place:{}
        }
        this.getSettingList       = this.getSettingList.bind(this);
  }

   /******Get all the user list here********/   
   getSettingList(){
    var tokenStr = token;
    const formData = {
        token    : tokenStr,
        urlParams: this.state.urlParams
    }
    axios.post(urlStr, formData)
    .then((response) => {
      if(response.data.code==200) {
            this.setState({
              settingDetails    : response.data.data.setting,
              reviewViedo       : response.data.data.review,
              place             : response.data.data.place,
            });
            console.log(this.state.place);
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
}




  render() {
    const { postList }= this.props;
    let data = this.state.settingDetails;
    let title = (data.length>0) ? data[13].options_value : '';
    let ph1 = (data.length>0) ? data[2].options_value : '';
    let ph2 = (data.length>0) ? data[3].options_value : '';
    let fb = (data.length>0) ? data[6].options_value : '';
    let ins = (data.length>0) ? data[5].options_value : '';
    let lin = (data.length>0) ? data[7].options_value : '';
    let yt = (data.length>0) ? data[4].options_value : '';
    let cp = (data.length>0) ? data[10].options_value : '';

    let bannerStr = "";
    if(this.state.place.length>0){
      bannerStr = this.state.place.map((val,i) =>
       <li><a href="#" className="footer-link">{val.title}</a></li>
      );
    }

    return (
      <div className="container-fluid clear bg-footer ">
        <footer>
            <div className="footer-postion footer-bg">
              <div className="footer-content p-5">
                <div className="container containerBox footer-margin">
                  <div className="row">
                    <div className="col-md-4"><h5>Rudra Xp</h5>
                      <p className="footer-content">{title}</p>
                    </div>
                    <div className="col-md-3"><h5>About</h5>
                      <ul className="footer-list">
                        <li><a href="/exp-list" className="footer-link">Experiences List</a></li>
                        <li><a href="/destination" className="footer-link">Destinations</a> </li>
                        <li><Link to="/dayexperiences" className="footer-link">Travel Experiences</Link></li>
                        {/* <li><Link to="itinerary_detail" className="footer-link">Itinerary Detail</Link> </li> */}
                        <li><Link to="/aboutus" className="footer-link">About Us</Link> </li>
                        <li><Link to="/socialcommitment" className="footer-link">Social Commitment</Link> </li>
                        <li><Link to="/review" className="footer-link">Reviews</Link> </li>
                        <li><Link to="/membership" className="footer-link">Membership</Link> </li>
                        <li><Link to={"/contactus"} className="footer-link">Contact Us</Link> </li> 
                        <li><Link to="/termsandconditions" className="footer-link">Terms of Use</Link> </li>
                      </ul>
                    </div>
                    <div className="col-md-3"><h5>Place</h5>
                      <ul className="footer-list">
                        {bannerStr}
                       
                      </ul>
                    </div>
                    <div className="col-md-2">
                      <h5>Get In Touch</h5>
                      <ul className="footer-list">
                        <li> <Link to={"/contactus"} className="footer-link1">write to us</Link></li>
                        <br />
                        <li className="footer-contact"> {ph1} </li>
                        <li className="footer-contact"> {ph2} </li>
                      </ul>
                      <br />
                      <div className="row m-l-5">
                        <div className="m-r-10"><a href={yt} target="_blank"><img src="../rudra/images/ico_yt_footer.png" width={22} height={22} alt="" /></a></div>
                        <div className="m-r-10"><a href={fb} target="_blank"><img src="../rudra/images/ico_fb_footer.png" width={21} height={22} alt="" /></a></div>
                        <div className="m-r-10"><a href={lin} target="_blank"><img src="../rudra/images/icon_linkedin_footer.png" width={22} height={22} alt="" /></a></div>
                        <div className="m-r-10"><a href={ins} target="_blank"><img src="../rudra/images/ico_insta_footer.png" width={22} height={22} alt="" /></a></div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </footer>
          <div className="row">
              <div className="col-12 text-center small footer-copyright p-tb15 textWhite" style={{color:'#FFFFFF'}}>{cp}</div>
          </div>
          </div>
    )
  }
}

export default Footer;

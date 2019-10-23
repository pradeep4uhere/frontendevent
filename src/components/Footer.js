/*
 * @PageName    :: LeftsideBar.js
 * @Author      :: Pradeep Kumar
 * @Description :: Left Menu of the profile
 * @Created Date:: 20 Oct 2018
 */
import React from 'react';
class Footer extends React.Component{
    constructor() {
        super();
        this.state = {
            clicked: false,
        };
    }
    render(){
        return(
      <footer className="FooterRudra">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5">
            <p className="title">Rudra XP</p>
              <div className="pr-xl-3">
                <p>At Rudra Xp, our endeavour is to make the most of the time that you take out for your travel pursuits and embellish them with characteristic, exclusive and rich experiences. We care for the unique perspective, the appreciation of excellence and that which maybe simple but not ordinary.</p>
                {/* Rights*/}
                <p className="rights"><span>©&nbsp; </span><span className="copyright-year">2018</span><span>&nbsp;</span><span>Waves</span><span>.&nbsp;</span><span>All Rights Reserved.</span></p>
              </div>
            </div>
        
            <div className="col-md-2">
            <p className="title">About</p>
              <dl className="nav-list">
                <dd><a href="#">Day Experiences</a></dd>
                <dd><a href="#">Destinations</a></dd>
                <dd><a href="#">Travel Experiences</a></dd>
                <dd><a href="#">About Us</a></dd>
                <dd><a href="#">Social Commitment</a></dd>
                <dd><a href="#">Reviews</a></dd>
                <dd><a href="#">Blog</a></dd>
                <dd><a href="#">Contact Us</a></dd>
                <dd><a href="#">Terms of Use</a></dd>
                <dd><a href="#">Reviews</a></dd>
              </dl>
            </div>
            <div className="col-md-2">
            <p className="title">Places</p>
              <dl className="contact-list">
                <dd>Delhi</dd>
                <dd>Mumbai</dd>
                <dd>Agra</dd>
                <dd>Varanasi</dd>
                <dd>Jaipur</dd>
              </dl>
            </div>
            <div className="col-md-2">
            <p className="title">Get In Touch</p>
              <dl className="contact-list">
                <dd>Delhi</dd>
                <dd>Mumbai</dd>
                <dd>Agra</dd>
                <dd>Varanasi</dd>
                <dd>Jaipur</dd>
              </dl>
            </div>
          </div>
        </div>
      </footer>
        );
    };
}
export default Footer;

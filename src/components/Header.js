import React from 'react';

class Header extends React.Component {
  constructor() {
        super();
        this.state={
        }
  }


  render() {
    const { postList }= this.props;
    
    return (
        <div>
        <div className="overlay1">
          <div className="wrap">
            <ul className="wrap-nav">
              <li><a href="#">Day Experiences</a>
                <ul>
                  <li><a href="#">Mahak – Jaipur (Morning)</a></li>
                  <li><a href="#">Ghungroo</a></li>
                  <li><a href="#">Sham e Taj</a></li>
                  <li><a href="#">Sham e Mumbai</a></li>
                  <li><a href="#">Djinns and Mystics</a></li>
                  <li><a href="#">Pub Hopping</a></li>
                  <li><a href="#">and much more...</a></li>
                </ul>
              </li>
              <li><a href="#">Travel Experiences</a>
                <ul>
                  <li><a href="https://www.google.hr/">Golden Triangle + +</a></li>
                  <li><a href="#">Roar Of The Jungle</a></li>
                  <li><a href="#">Moonland on Earth</a></li>
                  <li><a href="#">Spicy Aromas</a></li>
                  <li><a href="#">Far from the Madding Crowd</a></li>
                  <li><a href="https://www.google.hr/">Mountain Dews of Kumaon</a></li>
                  <li><a href="#">and much more...</a></li>
                </ul>
              </li>
              <li><a href="#">Destinations</a>
                <ul>
                  <li><a href="#">Travel Experiences</a></li>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Social Commitment</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </li>
            </ul>
            <div className="social">
              <a href="http://mario-loncarek.from.hr/">
                <div className="social-icon">
                  <i className="fa fa-facebook" />
                </div>
              </a>
              <a href="#">
                <div className="social-icon">
                  <i className="fa fa-twitter" />
                </div>
              </a>
              <a href="#">
                <div className="social-icon">
                  <i className="fa fa-codepen" />
                </div>
              </a>
              <a href="#">
                <div className="social-icon">
                  <i className="fa fa-behance" />
                </div>
              </a>
              <a href="#">
                <div className="social-icon">
                  <i className="fa fa-dribbble" />
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* Header Section Start */}
        <header id="home" className="hero-area-2">    
          <div className="overlay" ></div>
          <nav className="navbar navbar-expand-md bg-inverse fixed-top scrolling-navbar">
            <div className="container">
              <a href="/" className="navbar-brand brand-pos text-left"><img className="logo-width " src="../rudra/images/rudra-logo.png" style={{}} alt="" /></a>  
              <div className id="navbarCollapse">
                <ul className="ml-auto">
                  <li className="nav-item">
                    {(userid)?(
                        {userid}
                    ):(
                      <a className="nav-link" href="login"><img src="../rudra/images/ico_user.png" alt="" className="img-fluid" /></a>
                    )}
                     
                   </li>
                  <li className="nav-item"> <a className="nav-link" href="#"><img src="../rudra/images/ico_cart.png" alt="" className="img-fluid" /></a> </li>
                  <li className="nav-item"> <a className="nav-link" href="#"> <img src="../rudra/images/ico_search.png" alt="" className="img-fluid" /></a></li>
                  <li className="nav-item book-btn"><button type="button" className="btn btn-red-small">BOOK NOW</button></li>       
                  <li className="nav-item">
                    <div className="button">	 
                      <a className="nav-link" href="#"><img src="../rudra/images/icon_nav.png" alt="" width={33} height={21} className="img-fluid" /></a>
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

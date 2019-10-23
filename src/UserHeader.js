import React from 'react';
import { Link } from 'react-router-dom';

class UserHeader extends React.Component {
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
              <li><Link to="#">Day Experiences</Link>
                <ul>
                  <li><Link to="#">Mahak – Jaipur (Morning)</Link></li>
                  <li><Link to="#">Ghungroo</Link></li>
                  <li><Link to="#">Sham e Taj</Link></li>
                  <li><Link to="#">Sham e Mumbai</Link></li>
                  <li><Link to="#">Djinns and Mystics</Link></li>
                  <li><Link to="#">Pub Hopping</Link></li>
                  <li><Link to="#">and much more...</Link></li>
                </ul>
              </li>
              <li><Link to="#">Travel Experiences</Link>
                <ul>
                  <li><Link to="https://www.google.hr/">Golden Triangle + +</Link></li>
                  <li><Link to="#">Roar Of The Jungle</Link></li>
                  <li><Link to="#">Moonland on Earth</Link></li>
                  <li><Link to="#">Spicy Aromas</Link></li>
                  <li><Link to="#">Far from the Madding Crowd</Link></li>
                  <li><Link to="https://www.google.hr/">Mountain Dews of Kumaon</Link></li>
                  <li><Link to="#">and much more...</Link></li>
                </ul>
              </li>
              <li><Link to="#">Destinations</Link>
                <ul>
                  <li><Link to="#">Travel Experiences</Link></li>
                  <li><Link to="#">About Us</Link></li>
                  <li><Link to="#">Social Commitment</Link></li>
                  <li><Link to="#">Blog</Link></li>
                  <li><Link to="#">Contact Us</Link></li>
                </ul>
              </li>
            </ul>
            <div className="social">
              <Link to="http://mario-loncarek.from.hr/">
                <div className="social-icon">
                  <i className="fa fa-facebook" />
                </div>
              </Link>
              <Link to="#">
                <div className="social-icon">
                  <i className="fa fa-twitter" />
                </div>
              </Link>
              <Link to="#">
                <div className="social-icon">
                  <i className="fa fa-codepen" />
                </div>
              </Link>
              <Link to="#">
                <div className="social-icon">
                  <i className="fa fa-behance" />
                </div>
              </Link>
              <Link to="#">
                <div className="social-icon">
                  <i className="fa fa-dribbble" />
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* Header Section Start */}
        <header id="home" className="hero-area-21">    
          <div className="overlay" ></div>
          <nav className="navbar navbar-expand-md bg-inverse fixed-top scrolling-navbar">
            <div className="container">
              <Link to="/" className="navbar-brand brand-pos text-left"><img className="logo-width " src="../rudra/images/rudra-logo.png" style={{}} alt="" /></Link>  
              <div className id="navbarCollapse">
                <ul className="ml-auto">
                  <li className="nav-item"> <Link className="nav-link" to="login"><img src="../rudra/images/ico_user.png" alt="" className="img-fluid" /></Link></li>
                  <li className="nav-item"> <Link className="nav-link" to="cart"><img src="../rudra/images/ico_cart.png" alt="" className="img-fluid" /></Link> </li>
                  <li className="nav-item"> <Link className="nav-link" to="#"> <img src="../rudra/images/ico_search.png" alt="" className="img-fluid" /></Link></li>
                  <li className="nav-item book-btn"><button type="button" className="btn btn-red-small">BOOK NOW</button></li>       
                  <li className="nav-item">
                    <div className="button">	 
                      <Link className="nav-link" to="#"><img src="../rudra/images/icon_nav.png" alt="" width={33} height={21} className="img-fluid" /></Link>
                    </div> 
                  </li>
                </ul> 
              </div>
            </div>
          </nav>  
        </header>
        {/* Header Section End */} 	 
    </div>
    )
  }
}

export default UserHeader;

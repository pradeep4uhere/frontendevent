import React from 'react';
import Header from '../InnerHeader';
import Footer from '../Footer';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Thankyou extends React.Component {
  constructor() {
        super();
        this.state={
          
        }
        
  }
  render() {
    return (
          <div>
            <Header/>
            <div className="container-fluid bg-maroon p-tb15">
            <div className="container">
              <div className="jumbotron text-xs-center white-text p-t100">
                <h1 className="display-3">Thank You!</h1>
                <p className="lead">Your Order Payment Status is <strong>Pendinng</strong>.</p>
                <p className="lead">Your Order is confirm with Order No: "<strong>4521457845</strong>" Please check your email for more details.</p>
                <hr className="hr-light" />
                <p>
                  Having trouble? <Link to="contactus">Contact us</Link>
                </p>
                <a href="/" className="btn btn-red btn-lg btn-red-border1">CONTINUE SHOPPING</a>
              </div>
            </div>
          </div>
          <Footer/>
          </div>
    )
  }
}

export default Thankyou;

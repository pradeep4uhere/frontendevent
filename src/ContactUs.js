import React from 'react';
import Header from '../InnerHeader';
import Footer from '../Footer';
import './Contactus.css';
class ContactUs extends React.Component {
  constructor() {
        super();
        this.state={
          
        }
        
  }

  

  render() {
    return (
        <div>
          <Header/>
          <div className="container-fluid bg-maroon p-tb50">
            <div className="container">
            <h1 className="text-center white-text mt-85">Contact Us
            </h1>
            <div className="bg-whitegrid"><p className="sep-white" /></div>
            <h2 className="text-center p-b50 white-text">
            At Rudra Xp, our endeavour is to make the most of the time that you take out for your travel pursuits and embellish them with characteristic, exclusive and rich experiences. We care for the unique perspective, the appreciation of excellence and that which maybe simple but not ordinary.</h2>
            </div>
        </div>
        <br/>
        <section className="Material-contact-section section-padding section-dark">
        <div className="container">
          <div className="row">
            {/* Section Titile */}
            <div className="col-md-12 wow animated fadeInLeft" data-wow-delay=".2s">
              <h1 className="section-title">Love to Hear From You</h1>
            </div>
          </div>
          <div className="row">
            {/* Section Titile */}
            <div className="col-md-6 mt-3 contact-widget-section2 wow animated fadeInLeft" data-wow-delay=".2s">
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content.</p>
              <div className="find-widget">
                Company:  <a href="https://hostriver.ro">HostRiver</a>
              </div>
              <div className="find-widget">
                Address: <a href="#">4435 Berkshire Circle Knoxville</a>
              </div>
              <div className="find-widget">
                Phone:  <a href="#">+ 879-890-9767</a>
              </div>
              <div className="find-widget">
                Website:  <a href="https://uny.ro">www.uny.ro</a>
              </div>
              <div className="find-widget">
                Program: <a href="#">Mon to Sat: 09:30 AM - 10.30 PM</a>
              </div>
            </div>
            {/* contact form */}
            <div className="col-md-6 wow animated fadeInRight" data-wow-delay=".2s">
              <form className="shake" role="form" method="post" id="contactForm" name="contact-form" data-toggle="validator">
                {/* Name */}
                <div className="form-group label-floating">
                  <label className="control-label" htmlFor="name">Name</label>
                  <input className="form-control" id="name" type="text" name="name" required data-error="Please enter your name" />
                  <div className="help-block with-errors" />
                </div>
                {/* email */}
                <div className="form-group label-floating">
                  <label className="control-label" htmlFor="email">Email</label>
                  <input className="form-control" id="email" type="email" name="email" required data-error="Please enter your Email" />
                  <div className="help-block with-errors" />
                </div>
                {/* Subject */}
                <div className="form-group label-floating">
                  <label className="control-label">Subject</label>
                  <input className="form-control" id="msg_subject" type="text" name="subject" required data-error="Please enter your message subject" />
                  <div className="help-block with-errors" />
                </div>
                {/* Message */}
                <div className="form-group label-floating">
                  <label htmlFor="message" className="control-label">Message</label>
                  <textarea className="form-control" rows={3} id="message" name="message" required data-error="Write your message" defaultValue={""} />
                  <div className="help-block with-errors" />
                </div>
                {/* Form Submit */}
                <div className="form-submit mt-5">
                  <button className="btn btn-common" type="submit" id="form-submit"><i className="material-icons mdi mdi-message-outline" /> Send Message</button>
                  <div id="msgSubmit" className="h3 text-center hidden" />
                  <div className="clearfix" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
       
        
      <Footer/>
        </div>
    )
  }
}

export default ContactUs;

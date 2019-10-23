import React from 'react';
import Header from '../InnerHeader';
import Footer from '../Footer';
// import '../Contactus.css';
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
            
            </div>
        </div>
        <br/>
        <section className="Material-contact-section section-padding section-dark">
        <div className="container">
          <div className="row">
            {/* Section Titile */}
            <div className="col-md-6 mt-3 contact-widget-section2 wow animated fadeInLeft" data-wow-delay=".2s">
            <div class="card">
            <div class="card-header">
            Company Details
            </div>
            <div class="card-body">
                        <div className="find-widget">
                        <strong>  Company:</strong>  Rudra Experiences Pvt Ltd
                        </div><br/>
                        <div className="find-widget">
                        <strong> Address:</strong> Rudra Experiences Pvt Ltd.<br/>
                                  G70, 3rd Floor, Masjid Moth, Greater Kailash II,<br/>
                                  New Delhi – 110048, India
                        </div><br/>
                        <div className="find-widget">
                        <strong>  Phone: </strong> <a href="#">+91 11 4679 2233,+91 98999 35900</a>
                        </div><br/>
                        <div className="find-widget">
                        <strong>  Email: </strong> info@rudraxp.com
                        </div><br/>
                        
              </div>
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
                  <button className="btn btn-danger" type="submit" id="form-submit"><i className="material-icons mdi mdi-message-outline" /> Send Message</button>
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

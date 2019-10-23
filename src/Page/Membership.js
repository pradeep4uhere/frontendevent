import React from 'react';
import Header from '../InnerHeader';
import Footer from '../Footer';
class Membership extends React.Component {
  constructor() {
        super();
        this.state={
          eventDetails:[
            {
              id:100,
              title:"Mahak-(Morning)",
              place:"Jaipur",
              price:"INR 1500.00",
              image:"../rudra/images/pic1.png"
            },
            {
              id:101,
              title:"Ghungroo–Country’s only Dinner Theatre",
              place:"Delhi",
              price:"INR 3500.00",
              image:"../rudra/images/pic1.png"
            },
            {
              id:102,
              title:"Sham e Taj",
              place:"Agra",
              price:"INR 1000.00",
              image:"../rudra/images/pic1.png"
            }, 
            {
              id:103,
              title:"Sham e Mumbai",
              place:"Mumbai",
              price:"INR 1950.00",
              image:"../rudra/images/pic1.png"
            }
            
            ]
        }
        
  }

  

  render() {
    const { postList }= this.props;
    const {eventDetails} = this.state;
    return (
        <div>
          <Header/>
          <div className="container-fluid bg-maroon p-tb50">
            <div className="container">
            <h1 className="text-center white-text mt-85">Membership Plan
            </h1>
            <div className="bg-whitegrid"><p className="sep-white" /></div>
            <h2 className="text-center p-b50 white-text">We have membership plans available for you though so you can avail our best services at RudraXp. Our membership plans will offer you the following benefits:</h2>
            </div>
        </div>

        <div className="container">
        <div className="col-lg-12 m-ft66 text-center">
          <div className="row m-b-50">
            <div className="col-xl-4">
              <div className="card text-center card-bg1">
                <div className="basic-header"><p className="service-type">BASIC</p> <h2 className="white-text">INR999/<span className="service-type white-text">MO</span></h2></div>
                <div className="basic-triangle" /> 
                <div className="card-body card-pad">
                  <div className="row first-row">
                    <div className="col-xl-10 col-md-10 col-sm-10 col-10">3 days holiday every year</div>
                    <div className="col-xl-2 col-md-2 col-sm-2 col-2"><img src="../rudra/images/ico_yes.png" alt="" /></div>
                  </div> 
                  <div className="row service-row2">
                    <div className="col-xl-10 col-md-10 col-sm-10 col-10">During Festival</div>
                    <div className="col-xl-2 col-md-2 col-sm-2 col-2"><img src="../rudra/images/ico_yes.png" alt="" /></div>
                  </div> 
                  <div className="row service-row1">
                    <div className="col-xl-10 col-md-10 col-sm-10 col-10">Access to wide network of destination</div>
                    <div className="col-xl-2 col-md-2 col-sm-2 col-2"><img src="../rudra/images/ico_no.png" alt="" /></div>
                  </div> 
                  <div className="row last-row">
                    <div className="col-xl-10 col-md-10 col-sm-10 col-10">Anytime of the year</div>
                    <div className="col-xl-2 col-md-2 col-sm-2 col-2"><img src="../rudra/images/ico_no.png" alt="" /></div>
                  </div> 
                </div>
                <div className="card-footer text-muted"><button type="button" className="btn btn-sm btn-red-border">SUBSCRIBE NOW</button>
                </div>
              </div>	
            </div>
            <div className="col-xl-4">
              <div className="card text-center card-bg1">
                <div className="premium-header"><p className="service-type">PREMIUM</p> <h2 className="white-text">INR1200/<span className="service-type white-text">MO</span></h2></div><div className="premium-triangle" /> 
                <div className="card-body card-pad">
                  <div className="row first-row">
                    <div className="col-xl-10 col-md-10 col-sm-10 col-10">3 days holiday every year</div>
                    <div className="col-xl-2 col-md-2 col-sm-2 col-2"><img src="../rudra/images/ico_yes.png" alt="" /></div>
                  </div> 
                  <div className="row service-row2">
                    <div className="col-xl-10 col-md-10 col-sm-10 col-10">During Festival</div>
                    <div className="col-xl-2 col-md-2 col-sm-2 col-2"><img src="../rudra/images/ico_yes.png" alt="" /></div>
                  </div> 
                  <div className="row service-row1">
                    <div className="col-xl-10 col-md-10 col-sm-10 col-10">Access to wide network of destination</div>
                    <div className="col-xl-2 col-md-2 col-sm-2 col-2"><img src="../rudra/images/ico_yes.png" alt="" /></div>
                  </div> 
                  <div className="row last-row">
                    <div className="col-xl-10 col-md-10 col-sm-10 col-10">Anytime of the year</div>
                    <div className="col-xl-2 col-md-2 col-sm-2 col-2"><img src="../rudra/images/ico_no.png" alt="" /></div>
                  </div> 
                </div>
                <div className="card-footer text-muted"><button type="button" className="btn btn-sm btn-red">SUBSCRIBE NOW</button>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="card text-center card-bg1">
                <div className="platinum-header"><p className="service-type">PLATINUM</p> <h2 className="white-text">INR2500/<span className="service-type white-text">MO</span></h2></div><div className="platinum-triangle" /> 
                <div className="card-body card-pad">
                  <div className="row first-row">
                    <div className="col-xl-10 col-md-10 col-sm-10 col-10">3 days holiday every year</div>
                    <div className="col-xl-2 col-md-2 col-sm-2 col-2"><img src="../rudra/images/ico_yes.png" alt="" /></div>
                  </div> 
                  <div className="row service-row2">
                    <div className="col-xl-10 col-md-10 col-sm-10 col-10">During Festival</div>
                    <div className="col-xl-2 col-md-2 col-sm-2 col-2"><img src="../rudra/images/ico_yes.png" alt="" /></div>
                  </div> 
                  <div className="row service-row1">
                    <div className="col-xl-10 col-md-10 col-sm-10 col-10">Access to wide network of destination</div>
                    <div className="col-xl-2 col-md-2 col-sm-2 col-2"><img src="../rudra/images/ico_yes.png" alt="" /></div>
                  </div> 
                  <div className="row last-row">
                    <div className="col-xl-10 col-md-10 col-sm-10 col-10">Anytime of the year</div>
                    <div className="col-xl-2 col-md-2 col-sm-2 col-2"><img src="../rudra/images/ico_yes.png" alt="" /></div>
                  </div> 
                </div>
                <div className="card-footer text-muted"><button type="button" className="btn btn-sm btn-red-border">SUBSCRIBE NOW</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        
      <Footer/>
        </div>
    )
  }
}

export default Membership;

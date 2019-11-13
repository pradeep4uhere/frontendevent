import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Profile from '../components/Profile/Admin';
import Login, {user} from '../Login/Login';
import Logout from '../Logout';
import NotFound from '../components/NotFound';
import Register from '../Login/Register';
import Index from '../components/Index';
import EventDetail from '../Page/EventDetails';
import Destination from '../Page/Destination';
import Itinerary from '../Page/Itinerary';
import ItineraryDetail from '../Page/ItineraryDetail';
import DayExperiences from '../Page/DayExperiences';
import DayExperiencesDetails from '../Page/DayExperiencesDetails';


import EventList from '../Page/EventList';
import Membership from '../Page/Membership';
import AboutUs from '../Page/AboutUs';
import SocialCommittment from '../Page/SocialCommittment';
import ContactUs from '../Page/ContactUs';
import Termsandconditions from '../Page/Termsandconditions';
import Review from '../Page/Review';
import Cart from '../Page/Cart';
import ExpCart from '../Page/ExpCart';
import Checkout from '../Page/Checkout';
import ExpCheckout  from '../Page/ExpCheckout';
import Proccessing from '../Page/Proccessing';
import Thankyou from '../Page/Thankyou';
import ThankExpyou from '../Page/ThankExpyou';



import $ from 'jquery';
class App extends Component {
  	constructor() {
  		super();
      this.state = {
        isLoggedIn:false,
        user: user
      }
      this.handler = this.handler.bind(this);
    }


  // This method will be sent to the child component
  handler() {
      this.setState({
          isLoggedIn: false
      });
  }


componentDidMount() {
    var userId= localStorage.getItem('user');
    if(localStorage.getItem('user')){
        this.setState({ isLoggedIn: true});    
    }else{
        this.setState({ isLoggedIn: false });    
    }
    $('#ipl-progress-indicator').hide();
    

}

render() {
     const { isLoggedIn } = this.state
     return (
      <div>
         <Router>
          <Switch>
              {/* <Route path="/" component={Dashboard} exact/> */}
              <Route path="/profile" component={Profile}  />                
              <Route path="/" component={Index} exact/>
              <Route path="/logout" component={Logout} exact/>
              <Route path="/login" component={Login} exact/>
              <Route path="/register" component={Register} exact/>
              <Route path="/day-exp-detail/:id" component={EventDetail}/>
              <Route path="/exp-list" component={EventList} exact/>
              <Route path="/membership" component={Membership} exact/>
              <Route path="/aboutus" component={AboutUs} exact/>
              <Route path="/socialcommitment" component={SocialCommittment} exact/>
              <Route path="/contactus" component={ContactUs} exact/>
              <Route path="/termsandconditions" component={Termsandconditions} exact/>
              <Route path="/review" component={Review} exact/>
              <Route path="/cart" component={Cart} exact/>
              <Route path="/expcart" component={ExpCart} exact/>
              <Route path="/checkout" component={Checkout} exact/>
              <Route path="/expcheckout" component={ExpCheckout} exact/>
              <Route path="/thankyou/:oid" component={ThankExpyou} exact/>
              <Route path="/thankyou" component={Thankyou} exact/>
              <Route path="/process/:oid" component={Proccessing} exact/>
              <Route path="/destinationdetails" component={Destination} exact/>
              <Route path="/destination" component={Itinerary} exact/>
              <Route path="/destinationdetails/:id" component={Destination} exact/>
              <Route path="/dayexperiences" component={DayExperiences} exact/>
              <Route path="/destinationexpdetails/:id" component={DayExperiencesDetails} exact/>
              
              <Route path="*" component={NotFound} exact/>
         </Switch>
        </Router>
      </div>
    );
  }
}
export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Link,useParams } from "react-router-dom"
import Header from '../../InnerHeader';
import Footer from '../../Footer';
import Constants  from '../../config/Constants'
import ProfileView from '../Profile/ProfileView';
import ProfileEdit from '../Profile/ProfileEdit';
import OrderHistory from '../Profile/OrderHistory';
import MembershipPlan from '../Profile/MembershipPlan';
import OrderDetails from '../Profile/OrderDetails';
import ChangePassword from '../Profile/ChangePassword';

import axios from 'axios'
import $ from 'jquery'
var serialize = require('form-serialize');
var ip = require('ip');
const getCartList = Constants.GET_CART_LIST;
const bookingPayment = Constants.BOOKING_PAYMENT;
const token     = localStorage.getItem('token');
class Cart extends React.Component {
  constructor(props) {
        super(props);
    
       
        this.state={
          ipAdress      : ip.address(),
          user_id       : sessionStorage.getItem('userid'),
          first_name    : sessionStorage.getItem('first_name'),
          last_name     : sessionStorage.getItem('last_name'),
          email         : sessionStorage.getItem('email'),
          phone         : sessionStorage.getItem('phone'),
          isLoggedIn    : false,
          userDetails   : sessionStorage.getItem('userDetails'),
          user_id       : sessionStorage.getItem('userid'),
          errorMessage  : '',
          isError       :  false,
          memberSince   : sessionStorage.getItem('created_at'),
          

        }
        this.capitalize =  this.capitalize.bind(this);
        this.handleClick = this.handleClick.bind(this);
        //this.getOrderId = this.getOrderId.bind(this);
        
  }


  

  handleClick(e,str) {
    e.preventDefault();
    $("#changepassword").removeClass('active');
    $("#profileedit").removeClass('active');
    $("#eventbooking").removeClass('active');
    $("#myorder").removeClass('active');
    $("#profileview").removeClass('active');
    $("#travelbooking").removeClass('active');
    if(str!=''){
      $("#"+str).addClass('active');
    }
  }


  capitalize(str) {
    var strVal = '';
    str = str.split(' ');
    for (var chr = 0; chr < str.length; chr++) {
      strVal += str[chr].substring(0, 1).toUpperCase() + str[chr].substring(1, str[chr].length) + ' '
    }
    return strVal
}



  render() {
    const { first_name }  = this.state;
    const { orderid } = this.state;
    const { email }  = this.state;
    const { msg } = this.state;
    const { classStr } = this.state;
    const style = this.state.isShow ? {display:'block'}:{display:'none'};
    const { errorMessage } =  this.state;
    const { isError } = this.state;
    const {memberSince} = this.state;
    
    return (
     
        <div>
          <Header/>
          <div className="container-fluid bg-maroon p-tb15">
          <div className="container">
            <h1 className="text-center white-text mt-85">Profile{orderid}
            </h1>
            <div className="bg-whitegrid"><p className="sep-white" /></div>
            <h2 className="text-center  white-text">You can update and see all order history here.</h2>
          </div>
        </div>
        <Router>
        <div className="container-fluids" style={{"width":"99.2%"}}>
            <div className="row py-5 p-4 bg-white rounded shadow-sm">
            <div className="col-lg-2" >
                    <div className="card  text-white bg-danger" style={{width: '18rem'}}>
                    <div className="card-body  text-white bg-danger mb-3">
                    <h5 className="card-title"><h2>Welcome, {this.capitalize(first_name)}</h2></h5>
                    <p className="card-text"><small>Member Since, {memberSince}</small><br/><small><b>Email:</b>&nbsp;{email}</small></p>
                    </div>
                    <ul className="list-group list-group-flush">
                    <li className="list-group-item" onClick={(e) => this.handleClick(e,'profileview')} id="profileview">
                    <Link to='/profileview'><i className="fas fa-id-badge" style={{"color":"cadetblue"}}></i> <span className="hidden-sm-down">Profile</span></Link>
                    </li>
                    <li className="list-group-item " onClick={(e) => this.handleClick(e,'myorder')} id="myorder">
                    <Link to='/myorder'><i style={{"color":"cadetblue"}} className="fas fa-shipping-fast"></i> <span className="hidden-sm-down">My Order</span></Link>
                    </li>
                    <li className="list-group-item" onClick={(e) => this.handleClick(e,'eventbooking')} id="eventbooking">
                        <Link to="/eventbooking/1"><i style={{"color":"cadetblue"}} className="fas fa-calendar-check"></i>&nbsp;<span className="hidden-sm-down">Event Booking Order</span></Link>
                    </li>
                    <li className="list-group-item" onClick={(e) => this.handleClick(e,'travelbooking')} id="travelbooking">
                    <Link to="/travelbooking/2"><i style={{"color":"cadetblue"}} className="fas fa-plane-departure"></i>&nbsp;<span className="hidden-sm-down">Travel Booking Order</span></Link>
                    </li>
                    <li className="list-group-item" onClick={(e) => this.handleClick(e,'membership')} id="membership">
                    <Link to="/mymembership"><i style={{"color":"cadetblue"}} className="fas fa-bookmark"></i>&nbsp;<span className="hidden-sm-down">Membership</span></Link>
                    </li>
                    <li className="list-group-item" onClick={(e) => this.handleClick(e,'profileedit')} id="profileedit"><Link to='/profileedit'><i style={{"color":"cadetblue"}} className="fas fa-user-cog"></i>&nbsp;<span className="hidden-sm-down">Update Profile</span></Link></li>
                    <li className="list-group-item" onClick={(e) => this.handleClick(e,'changepassword')} id="changepassword"><Link to='/changepassword'><i style={{"color":"cadetblue"}} className="fas fa-key"></i>&nbsp;<span className="hidden-sm-down">Change Password</span></Link></li>
                    <li className="list-group-item"><a href="/logout"><i style={{"color":"cadetblue"}} className="fas fa-sign-out-alt"></i>&nbsp;<span className="hidden-sm-down">Logout</span></a></li>
                    </ul>
                    <div className="card-body">        
                    </div>
                </div>
        </div>
        <div className="col-lg-10">
        
          <Route path='/profile' exact component={ProfileView} />
          <Route path='/profileview' component={ProfileView} />
          <Route path='/profileedit' component={ProfileEdit} />
          <Route path='/mymembership' component={MembershipPlan} />
          <Route path='/myorder' component={OrderHistory} />
          <Route path='/eventbooking/:order_type' component={OrderHistory} />
          <Route path='/travelbooking/:order_type' component={OrderHistory} />
          <Route path='/changepassword' component={ChangePassword} />
          <Route path='/orderdetails/:orderid/:ordertype' component={OrderDetails} />
          
         
        </div>

        </div>
        </div>
        </Router>
        <Footer/>
        </div>
        
    )
  }
}

export default Cart;

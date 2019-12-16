import React from 'react';
import Header from '../../InnerHeader';
import Footer from '../../Footer';
import Constants  from '../../config/Constants'
import axios from 'axios'
import $ from 'jquery'
var serialize = require('form-serialize');
var ip = require('ip');
const urlUserDetails  = Constants.USER_DETAILS_URL;
const token           = localStorage.getItem('token');
class ProfileView extends React.Component {
  constructor(props) {
        super(props);
        this.state={
          userList      : {},  
          city_name     : "",
          state_name    : "",
          county_name   : "India",
          ipAdress      : ip.address(),
          user_id       : localStorage.getItem('userid'),
          first_name    : localStorage.getItem('first_name'),
          isLoggedIn    : false,
          userDetails   : localStorage.getItem('userDetails'),
          user_id       : localStorage.getItem('userid'),
          errorMessage  : '',
          isError       :  false

        }
        this.getUserDetails =  this.getUserDetails.bind(this);
  }


    /******Get all the user list here********/   
    getUserDetails(){
      var tokenStr = token;
      const formData = {
          token    : tokenStr,
          id       : this.state.user_id,
          order_id : ''
      }
      axios.post(urlUserDetails, formData)
      .then((response) => {
        if(response.data.code==200) {
          console.log("dahsboardListBrfor+++++++++++++++++++++",response.data.userData);
              this.setState({
                    userList:response.data.userData,
                    
              });
              console.log("dahsboardListAfter+++++++++++++++++++++",response.data.userData);
        }
        else
        {
          
        }
      })
      .catch((err) => {
          
      })
  }
  

  componentDidMount(){
     this.getUserDetails();
  }



  render() {
    const { first_name }  = this.state;
    const {last_name}= this.state;
    const { userList }    = this.state;
    const { city_name }   = this.state;
    const { state_name }  = this.state;
    const { county_name }  = this.state;
    const { msg } = this.state;
    const { classStr } = this.state;
    const style = this.state.isShow ? {display:'block'}:{display:'none'};
    const { errorMessage } =  this.state;
    const { isError } = this.state;
    console.log("dahsboardList++++",userList);
    return (
        <div>
         
        <form>
        <div className="row">
        <div className="col-md-6">
        <div className="row">
        <div className="col-md-12">
            <div class="bg bg-danger text-white  px-4 py-3 text-uppercase font-weight-bold">Profile Details</div>
        </div>
          <div className="form-group col-md-6">
            <label htmlFor="exampleInputEmail1">First Name</label>
            <input type="name" className="form-control" id="lname" placeholder="Last Name" value={userList.first_name} disabled="disabled" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="exampleInputEmail1">Last Name</label>
            <input type="name" className="form-control" id="lname" placeholder="Last Name" value={userList.last_name} disabled="disabled"  />
          </div>
          <div className="form-group col-lg-6">
            <label htmlFor="exampleInputEmail1">Address line 1</label>
            <input type="name" className="form-control" id="ad1" placeholder="Enter Address Line-1 Name" value={userList.street_address} disabled="disabled" />
          </div> 
          <div className="form-group col-lg-6">
            <label htmlFor="exampleInputEmail1">Address Line 2</label>
            <input type="name" className="form-control" id="ad2" placeholder="Enter Address Line-1 Name" value={userList.address_2} disabled="disabled" />
          </div>
          <div className="form-group col-lg-6">
            <label htmlFor="exampleInputEmail1">State</label>
            <input type="country" className="form-control" id="country" placeholder="Enter State Name" value={userList.state_name} disabled="disabled"/>
          </div>
          <div className="form-group col-lg-6">
            <label htmlFor="exampleInputEmail1">City</label>
            <input type="contact" className="form-control" id="contact"  value={userList.city_name} disabled="disabled" placeholder="Enter City Name"/>
          </div>  
         
          <div className="form-group col-lg-6">
            <label htmlFor="exampleInputEmail1">Country</label>
            <input type="country" className="form-control" id="country" placeholder="Last Name" value={county_name} disabled="disabled"/>
          </div> 
          <div className="form-group col-lg-6">
            <label htmlFor="exampleInputEmail1">Postcode / ZIP</label>
            <input type="contact" className="form-control" id="contact" placeholder="Last Name" value={userList.postcode} disabled="disabled"/>
          </div>  
          <div className="form-group col-lg-6">
            <label htmlFor="exampleInputEmail1">Phone</label>
            <input type="country" className="form-control" id="country" value={userList.phone} disabled="phone"/>
                         <small id="Help1" class="form-text text-muted">We'll never share your contact with anyone else.</small>
          </div>
          <div className="form-group col-lg-6">
            <label htmlFor="exampleInputEmail1">Email Address</label>
            <input type="email" className="form-control" id="email" value={userList.email} disabled="disabled" />
            <small id="Help2" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div></div>
          <hr/>
         
          {/*<div class="form-group col-lg-12 p-tb15"> <button type="submit" class="btn btn-dark rounded-pill">Confirm Address</button></div>*/}
        </div>
        </div>
      </form>
        </div>
    )
  }
}

export default ProfileView;

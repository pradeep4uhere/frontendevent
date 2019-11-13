import React from 'react';
import Header from '../../InnerHeader';
import Footer from '../../Footer';
import Constants  from '../../config/Constants'
import axios from 'axios'
import $ from 'jquery'
var serialize = require('form-serialize');
var ip = require('ip');
const urlUserDetails  = Constants.USER_DETAILS_URL;
const urlStrUpdate    = Constants.USER_UPDATE_URL;
const token           = localStorage.getItem('token');
class ProfileView extends React.Component {
  constructor(props) {
        super(props);
        this.state={
          userList      : {},  
          first_name    : '',
          last_name     : '',
          username      : '',
          email         : '',
          phone         : '',
          street_address: '',
          address_2     : '',
          postcode      : '',
          city_name     : "",
          state_name    : "",
          county_name   : "India",
          ipAdress      : ip.address(),
          user_id       : sessionStorage.getItem('userid'),
          first_name    : sessionStorage.getItem('first_name'),
          isLoggedIn    : false,
          userDetails   : sessionStorage.getItem('userDetails'),
          user_id       : sessionStorage.getItem('userid'),
          errorMessage  : '',
          isError       :  false,
          isMsg   :false,
          className:'',
        }
        this.getUserDetails =  this.getUserDetails.bind(this);
        this.handleSubmit   =  this.handleSubmit.bind(this); 
        this.handleChange   =  this.handleChange.bind(this); 
        
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
                    orderList:response.data.userData.order,
                    city_name:response.data.userData.city.city_name,
                    state_name:response.data.userData.city.state_name,
                    county_name:response.data.userData.country.name,
                    priceType:response.data.settings[14]['options_value'],
                    first_name      : response.data.userData.first_name,
                    last_name       : response.data.userData.last_name,
                    username        : response.data.userData.username,
                    email           : response.data.userData.email,
                    street_address  : response.data.userData.street_address,
                    address_2       : response.data.userData.address_2,
                    postcode        : response.data.userData.postcode,
                    phone           : response.data.userData.phone,
                

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




  handleChange(e) {
    var strid = e.target.id;
    if(strid=='first_name'){
        this.setState({first_name : e.target.value});
    }
    if(strid=='last_name'){
        this.setState({last_name : e.target.value});
    }
    if(strid=='street_address'){
        this.setState({street_address : e.target.value});
    }
    if(strid=='address_2'){
        this.setState({address_2 : e.target.value});
    }
    if(strid=='state_name'){
        this.setState({state_name : e.target.value});
    }
    if(strid=='city_name'){
      this.setState({city_name : e.target.value});
    }
    if(strid=='postcode'){
      this.setState({postcode : e.target.value});
    }
    if(strid=='county_name'){
      this.setState({county_name : e.target.value});
    }
    if(strid=='phone'){
      this.setState({phone : e.target.value});
  }
}


   /**********Login Form Handle********************/
    handleSubmit(event) {
      event.preventDefault();
      const form = event.currentTarget;
      // const body = serialize(form, {hash: true,empty:true});
      const first_name = this.state.first_name;
      const last_name = this.state.last_name;
      const street_address = this.state.street_address;
      const address_2 = this.state.address_2;
      const postcode = this.state.postcode;
      const phone = this.state.phone;
      const state_name = this.state.state_name;
      const city_name = this.state.city_name;
      const county_name = this.state.county_name;
      const formData = {
          token           : token,
          body            : {
                              first_name      : first_name,
                              last_name       : last_name,
                              street_address  : street_address,
                              address_2       : address_2,
                              city_id       : city_name,
                              state_id      : state_name,
                              postcode        : postcode,
                              phone           : phone,
                              country_id     : county_name,
                              id              : sessionStorage.getItem('userid'),
                            }
      }
      axios.post(urlStrUpdate, formData)
        .then((response) => {
          if(response.data.data.code==200) {
            this.setState({
                  message     : response.data.data.message,
                  classstr    : 'alert alert-success',
                  className   : 'success',
                  isMsg       : true,
                  successShow : true,
                  errorShow   : false,
            });
          }
          else
          {
                this.setState({isMsg:true});
                this.setState({className:'error'});
                this.setState({
                  message     :  response.data.data.message,
                  classstr    : 'alert alert-danger',
                  className   : 'danger',
                  isMsg       : true,
                });
            
          }
        })
        .catch((err) => {
            
            this.setState({message:err});
            this.setState({className:'error'});
            this.setState({ isMsg: true });
            this.setState({classstr: 'alert alert-danger'});
        })

      
  }
  

  componentDidMount(){
     this.getUserDetails();
  }



  render() {
    const { first_name }  = this.state;
    const { last_name }   = this.state;
    const { street_address } = this.state;
    const { address_2 } = this.state;
    const { postcode } = this.state;
    const { phone } = this.state;


    const { userList }    = this.state;
    const { city_name }   = this.state;
    const { state_name }  = this.state;
    const { county_name }  = this.state;
    const style = this.state.isShow ? {display:'block'}:{display:'none'};
    
    const { isMsg }         = this.state;
    const { classstr }      = this.state;
    const { message }       = this.state;
    const { isOverlay }     = this.state;
    console.log("dahsboardList++++",userList);
    return (
        <div>
         
        <form className="form-horizontal" onSubmit={this.handleSubmit} id="login-form" >
        <div className="row">
        <div className="col-md-6">
        {(isMsg)?(<div className={classstr}>{message}</div>):(<div></div>)}
        <div className="row">
        <div className="col-md-12">
            <div class="bg bg-danger text-white  px-4 py-3 text-uppercase font-weight-bold">Update Profile Details</div>
        </div>
          <div className="form-group col-md-6">
            <label htmlFor="exampleInputEmail1">First Name</label>
            <input type="name" className="form-control" id="first_name" placeholder="Last Name" value={first_name}  onChange = { this.handleChange.bind(this)} />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="exampleInputEmail1">Last Name</label>
            <input type="name" className="form-control" id="last_name" placeholder="Last Name" value={last_name}   onChange = { this.handleChange.bind(this)} />
          </div>
          <div className="form-group col-lg-6">
            <label htmlFor="exampleInputEmail1">Address line 1</label>
            <input type="name" className="form-control" id="street_address" placeholder="Enter Address Line-1 Name" value={street_address}  onChange = { this.handleChange.bind(this)}/>
          </div> 
          <div className="form-group col-lg-6">
            <label htmlFor="exampleInputEmail1">Address Line 2</label>
            <input type="name" className="form-control" id="address_2" placeholder="Enter Address Line-1 Name" value={address_2}  onChange = { this.handleChange.bind(this)}/>
          </div>
          <div className="form-group col-lg-6">
            <label htmlFor="exampleInputEmail1">City</label>
            <input type="contact" className="form-control" id="city_name"  value={city_name} onChange = { this.handleChange.bind(this)} />
          </div>  
          <div className="form-group col-lg-6">
            <label htmlFor="exampleInputEmail1">State</label>
            <input type="country" className="form-control" id="state_name" placeholder="Last Name" value={state_name} onChange = { this.handleChange.bind(this)}/>
          </div>
          <div className="form-group col-lg-6">
            <label htmlFor="exampleInputEmail1">Country</label>
            <input type="country" className="form-control" id="county_name" placeholder="Last Name" value={county_name} onChange = { this.handleChange.bind(this)}/>
          </div> 
          <div className="form-group col-lg-6">
            <label htmlFor="exampleInputEmail1">Postcode / ZIP</label>
            <input type="contact" className="form-control" id="postcode" placeholder="Last Name" value={postcode} onChange = { this.handleChange.bind(this)} />
          </div>  
          <div className="form-group col-lg-6">
            <label htmlFor="exampleInputEmail1">Phone</label>
            <input type="country" className="form-control" id="phone" value={phone} onChange = { this.handleChange.bind(this)}/>
                         <small id="Help1" class="form-text text-muted">We'll never share your contact with anyone else.</small>
          </div>
          <div className="form-group col-lg-6">
            <label htmlFor="exampleInputEmail1">Email Address</label>
            <input type="email" className="form-control" id="email" value={userList.email} disabled="disabled"  />
            <small id="Help2" className="form-text text-muted">you can not update your email address, For Change <a href="/contactus">Contact Us</a></small>
          </div></div>
          <hr/>
          <div className="input-group form-group">
         
            <div className="input-group-prepend pull-right">
                <input type="button" className="btn btn-danger" value="Cancel"/>&nbsp;
                <input type="submit" className="btn btn-success" aria-label="placeholder text" id="subtn" />
            </div>
          </div>
          {/*<div class="form-group col-lg-12 p-tb15"> <button type="submit" class="btn btn-dark rounded-pill">Confirm Address</button></div>*/}
        </div>
        </div>
      </form>
        </div>
    )
  }
}

export default ProfileView;

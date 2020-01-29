import React from 'react';
import $ from 'jquery';
import axios from 'axios'
import { Redirect,withRouter } from 'react-router-dom'
import FadeIn from 'react-fade-in';
import Constants  from '../config/Constants'
var sha1 = require('sha1');
var globals = require('node-global-storage');
var cors = require('cors');
const appName = Constants.APP_NAME
const appTag = Constants.APP_TAG
const urlStr = Constants.REGISTER_URL;
class ForgotPassowrdForm extends React.Component{
    constructor() {
        super();
        this.state = {
                redirectToReferrer  : false,
                className           : false,
                classNameError      : false,
                isLoggedIn          : false,
                message             : '',
                classstr            : '',
                errors              : {},
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**********Registration Form Handle Start Here********************/
    handleSubmit(event) {
      event.preventDefault();
      //Generate the token here
      var firstName     = event.target.fname.value;
      var lastName      = event.target.lname.value;
      var username      = event.target.username.value;
      var emailAddress  = event.target.email_address.value;
      var password      = event.target.password.value;
      var cpassword     = event.target.cpassword.value;
      var tokenStr      = firstName+'|'+lastName+'|'+username+'|'+emailAddress+'|'+password+'|'+cpassword+'|'+Constants.APP_SALT; 
      const formData = {
            firstName     : firstName,
            lastName      : lastName,
            username      : username,
            emailAddress  : emailAddress,
            password      : password,
            cpassword     : cpassword,
            token         : sha1(tokenStr),
            errorFlag     : false
      }
      console.log(formData);
      axios.post(urlStr, formData)
        .then((response) => {
          console.log(response.data);
          if(response.data.code==200) {
            //Set All global Values For User After Login
            globals.set('user',response.user);
            globals.set('token',response.token);
            //localStorage.setItem('user',response.data.user.id);
            if(response.data.status=='success'){
              this.setState({
                    classstr          :'alert alert-success',
                    className         :true,
                    errorFlag         : false,
                    message           : response.data.message
              });  

              setTimeout(() => {
                    this.setState({
                      redirectToReferrer: true,
                    })
                }, 2000)
                
            }else{
              this.setState({
                message   : response.data.message,
                classstr  : 'alert alert-danger',
                className : true,
                errorFlag : true
              });
            }
          }
          else
          {
              this.setState({ 
                  redirectToReferrer  : false, 
                  message             : response.data.message,
                  classstr            : 'alert alert-danger',
                  errors              : response.data.error,
                  errorFlag           : true
              });
            
          }
        })
        .catch((err) => {
            //this.setState({redirectToReferrer: false });
            //this.setState({message:err});
            //this.setState({classstr:'alert alert-danger'});
        })
  }
  /**********Registration Form Handle Ends Here********************/

    errorPrint() {
        let error = this.state.errors;
        let errorMsg = [];
        if(this.state.errorFlag){
          if(error!=null){
            errorMsg.push(<span className='errorMessage' style={{"padding":"5px","font-size":"13"}}>Error: {this.state.message}</span>)
            Object.keys(error).map(function(key) {
              errorMsg.push(<span className='errorMessage' style={{"padding":"5px","font-size":"13"}}>{error[key][0]}</span>)
            });
            return errorMsg;
          } 
      }else{
        errorMsg.push(<span>Success:{this.state.message}</span>)
        return errorMsg;
      }
    }
    render(){
        const { redirectToReferrer } = this.state;
        const { classstr } = this.state;
        const { message } = this.state;
        console.log(classstr);
        if (redirectToReferrer === true) {
          return <Redirect to='/login'/>;
        }
        return(
          
            <div className="form-bg text-white text-center">
            <div className="container py-5 mt-5 LoginBox">
            <div className="row">
                <div className="col-md-12">
                <h1 className="text-center text-white mb-4">Forgot Passowrd</h1>
                <div className="row">
                    <div className="col-md-9 mx-auto">
                    <h4>Please enter your below</h4>
                    <div className="card">
                        <div className="cardheader" /></div>
                        <div className="col-md-12 mx-auto">
                        <center>
                        {message ? (<div className={this.state.classstr}>{this.errorPrint()}</div>) : (<div></div>)}

                        </center>
                        </div>
                        <form className="form" role="form" autoComplete="off" onSubmit={this.handleSubmit} id="login-form">
                        <div className="row">
                        <div className="col-md-6 mx-auto">
                            <div className="form-group">
                            {/* <p className="text-left titleText">Email Address</p> */}
                            <input type="text" className="form-control form-control-lg rounded-0"  placeholder="Enter Email Address"  id="email_address" required autoComplete="Enter Email Address" tabIndex="4"/>
                            </div>
                      </div>
                        <div className="col-md-12 mx-auto">
                            <div className="form-group loginBtn">
                                <button type="submit" className="btn btn-danger btn-lg col-md-12" tabIndex="7" >Register</button>
                            </div>
                            <p className="text-left">Aready registred user ? <a href="login" tabIndex="8" >Login Now</a></p>
                        </div>
                        </div>
                        </form>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
      );
    };
}
export default ForgotPassowrdForm;

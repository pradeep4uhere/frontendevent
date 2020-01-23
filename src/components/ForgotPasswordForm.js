import React from 'react';
import $ from 'jquery';
import axios from 'axios'
import { Redirect,withRouter } from 'react-router-dom'
import Constants  from '../config/Constants'
var sha1 = require('sha1');
var globals = require('node-global-storage');
const urlStr = Constants.RESETPASSWORD_URL;
class ForgotPasswordForm extends React.Component{
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
      var emailAddress  = event.target.email_address.value;
      var tokenStr      = emailAddress+'|'+Constants.APP_SALT; 
      const formData = {
            email         : emailAddress,
            token         : sha1(tokenStr),
            errorFlag     : false
      }
      axios.post(urlStr, formData)
        .then((response) => {
            console.log(response.data);
            if(response.data.status=='success'){
              this.setState({
                    classstr          : 'alert alert-success',
                    className         : true,
                    errorFlag         : false,
                    message           : response.data.message
              });  
            }else{
              this.setState({
                message   : response.data.message,
                classstr  : 'alert alert-danger',
                className : true,
                errorFlag : true
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
        if (redirectToReferrer === true) {
          return <Redirect to='/login'/>;
        }
        return(
          
            <div className="form-bg text-white text-center" style={{marginTop:'-50px'}}>
            <div className="container py-5 mt-5 LoginBox">
            <div className="row">
                <div className="col-md-12">
                <h1 className="text-center text-white mb-4">Reset Your Password</h1>
                <div className="row">
                  
                    <div className="col-md-6 mx-auto">
                    <center>
                     {message ? (<div className={this.state.classstr}>{message}</div>) : (<div></div>)}
                    </center>
                    <div className="card">
                        <div className="cardheader" /></div>
                      
                        <form className="form" role="form" autoComplete="off" onSubmit={this.handleSubmit} id="login-form">
                        <div className="row">
                        <div className="col-md-12 mx-auto">
                            <div className="form-group">
                            <p className="text-left titleText">Email Address</p>
                            <input type="text" className="form-control form-control-lg rounded-0"  placeholder="Enter your registered email address"  id="email_address" required autoComplete="Enter Email Address" tabIndex="4"/>
                            </div>
                      </div>
                        <div className="col-md-12 mx-auto">
                            <div className="form-group loginBtn">
                                <button type="submit" className="btn btn-danger btn-lg col-md-12" tabIndex="7" >Submit</button>
                            </div>
                            <p className="text-left">Aready registred user ? <a href="login" tabIndex="8" style={{color:'#FFF'}}>Login Now</a></p>
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
export default ForgotPasswordForm;

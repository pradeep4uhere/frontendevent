import React from 'react';
import $ from 'jquery';
import axios from 'axios'
import { Redirect,withRouter } from 'react-router-dom'
import Constants  from '../config/Constants'
var sha1 = require('sha1');
var globals = require('node-global-storage');
var cors = require('cors');
const appName = Constants.APP_NAME
const appTag = Constants.APP_TAG
const urlStr = Constants.LOGIN_URL;
class LoginForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false,
            className: false,
            classNameError: false,
            isLoggedIn: false,
            message:'',
            classstr:'',
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
        console.log(Constants);
    }

    /**********Login Form Handle********************/
    handleSubmit(event) {
        event.preventDefault();
        var tokenStr = event.target.email_address.value+'|'+event.target.password.value+'|'+Constants.APP_SALT;
        const formData = {
            username : event.target.email_address.value,
            password : event.target.password.value,
            token    : sha1(tokenStr)
        }
        console.log(urlStr);
        axios.post(urlStr, formData)
          .then((response) => {
          console.log(response.data);
            if(response.data.code==200) {
              //Set All global Values For User After Login
              globals.set('user',response.data.user);
              globals.set('token',response.data.token);
              localStorage.setItem('token',response.data.token);
              localStorage.setItem('userDetails',response.data.user);
              localStorage.setItem('first_name',response.data.user.first_name);
              localStorage.setItem('last_name',response.data.user.last_name);
              localStorage.setItem('email',response.data.user.email);
              localStorage.setItem('phone',response.data.user.phone);
              localStorage.setItem('userid',response.data.user.id);
              localStorage.setItem('created_at',response.data.user.created_at);
              localStorage.setItem('token',response.data.token);

              this.setState({
                    redirectToReferrer : true,
                    message:response.data.message,
                    classstr:'alert alert-success',
                    className:true
              });
              console.log(this.state);
            }
            else
            {

                this.setState({ 
                    redirectToReferrer: false, 
                    message:response.data.message,
                    classstr:'alert alert-danger'
                });
              
            }
          })
          .catch((err) => {
              console.log("Error: ", err);
              this.setState({ redirectToReferrer: false });
              this.setState({message:err});
              this.setState({classstr:'alert alert-danger'});
          })
    }



    componentDidMount() {
        if(localStorage.getItem('userid')){
          this.setState({ redirectToReferrer: true});    
        }else{
          this.setState({ redirectToReferrer: false });    
        }
        $('#ipl-progress-indicator').hide();
    }

    render(){
        const { redirectToReferrer } = this.state;
        const { message } = this.state;
        const { classstr } = this.state;
        if (redirectToReferrer === true) {
            if(this.props.urlString!='' && this.props.urlString!=undefined){
                return <Redirect to={'/'+this.props.urlString}/>;

            }else{
                return <Redirect to='/'/>;
            }
        }
        return(
            <div className="">
            <div className="container-fluid bg-maroon-banner p-tb50">
            <div className="container">
            <div className="row">
                <div className="col-sm-12 col-12 col-md-2 col-xl-3" />
                <div className="col-sm-12 col-12 col-md-8 col-xl-6">
                <h1 className="text-center white-text mt-85">Signin here</h1>
                <p className="text-white small text-center">Please enter your email address and password below:</p>
                <div className={classstr} style={{marginBottom:0}}>{message}</div>
                <div className="text-white p-t50">
                    <form className="form white-text" role="form" autoComplete="off" noValidate onSubmit={this.handleSubmit} id="login-form">
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="text" className="form-control" placeholder="Enter your username / email" id="email_address" name="email_address" required />
                        <small id="emailHelp1" className="form-text text-mute">We'll never share your email with anyone else.</small> </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control"  placeholder="Enter your password" name="password" id="password" required autoComplete="new-password" />
                    </div>
                    {/*<div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">Save password</label>
                    </div>*/}
                    <button type="submit" className="btn btn-red btn-lg btn-block text-uppercase btn-red">LOGIN NOW</button>
                    <div className="form-group p-tb20">
                        <label htmlFor="exampleInputPassword1">NEW TO RUDRAXP?</label>
                        <label htmlFor="exampleInputPassword1" className="pull-right">
                        <a href="/forgotpassword" style={{textDecoration:'none'}} style={{color:'#FFF'}}>Forgot Password</a></label>
                        <a href="register" style={{textDecoration:'none'}}>
                            <button type="button" className="btn btn-red btn-lg btn-block btn-red-border1">Join Now</button>
                        </a>
                    </div>
                    </form>
                </div>
                </div>
                <div className="col-md-4 col-sm-12 col-12 col-xl-3" />
            </div>
            </div>
            </div>

           
            {/*/row*/}
        </div>
      );
    };
}
export default LoginForm;

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
            <div className="form-bg text-white text-center">
            <div className="container py-5 mt-5 LoginBox">
            <div className="row">
                <div className="col-md-12">
                <h1 className="text-center text-white mb-4">Login</h1>
                <div className="row">
                    <div className="col-md-6 mx-auto">
                    <h4>Please enter your email address and password below</h4>
                    {/* form card login */}
                    <div className=" rounded-0 login-box">
                        <div className="card-body">
                        <form className="form" role="form" autoComplete="off" noValidate onSubmit={this.handleSubmit} id="login-form">
                            <div className="form-group">
                            <p className="text-left titleText">EMAIL</p>
                            <input type="text" className="form-control form-control-lg rounded-0" placeholder="Enter your username / email" id="email_address" name="email_address" required />
                            </div>
                            <div className="form-group">
                            <p className="text-left titleText">PASSWORD</p>
                            
                            <input type="password" className="form-control form-control-lg rounded-0"  placeholder="Enter your password" name="password" id="password" required autoComplete="new-password" />
                            <br/>
                            <small><a href="#" className="pull-right forgotLink">Forgot your password ?</a></small>
                            </div>
                            <div className="form-group loginBtn">
                            <button type="submit" className="btn btn-danger btn-lg col-md-12">LOGIN NOW</button>
                            </div>
                            <p className="text-left titleText">NEW TO RUDRAXP?</p>
                            <a href="register">
                            <button type="button" className="btn btn-danger  btn-lg col-md-12 joinNow">Join Now</button>
                            </a>
                        </form></div>
                    </div>
                    {/*/card-block*/}
                    </div>
                    {/* /form card login */}
                </div>
                </div>
                {/*/row*/}
            </div>
            {/*/col*/}
            </div>
            {/*/row*/}
        </div>
      );
    };
}
export default LoginForm;

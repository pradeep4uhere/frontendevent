import React from 'react';
import axios from 'axios'
import { Redirect,withRouter } from 'react-router-dom'
import FadeIn from 'react-fade-in';
import Constants  from '../config/Constants'
import RegisterForm from '../components/RegisterForm';
import UserHeader from '../InnerHeader';
import Footer from '../Footer';

import $ from 'jquery';
var sha1 = require('sha1');
var globals = require('node-global-storage');
var cors = require('cors');
const appName = Constants.APP_NAME
const appTag = Constants.APP_TAG
const urlStr = Constants.REGISTER_URL;

class Register extends React.Component{
    render(){
      return(
        <div>
        <UserHeader/>
        <RegisterForm/>
        <Footer/>
        </div>
      )
    }
}
export default Register;

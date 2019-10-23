import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Link, browserHistory } from 'react-router';
import Navigation from '../../components/Navigation';
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar';
import Footer from '../../components/Footer';
import BlankPage from '../../components/BlankPage';
class AuthRouter extends Component {
  	constructor(props) {
  		super(props);
    }
render() {
    return (<div>
                <Navigation/>
                <LeftSideBar/>
                <BlankPage/>
                <Footer/>
           </div>
      );
    }
  }
export default AuthRouter;

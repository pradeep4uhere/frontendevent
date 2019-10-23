import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Link, browserHistory } from 'react-router';
import BlankPage from '../../components/BlankPage';
import Navigation from '../../components/Navigation';
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar';
import Footer from '../../components/Footer';
import Dashboard from '../../components/Dashboard';
import SettingPage from '../../components/Page/SettingPage';

class Admin extends Component {
  	constructor() {
  		super();
        this.state = {
            isLoggedIn:false
        }
        if(localStorage.getItem('user').length > 0){
            this.setState({isLoggedIn: true});  
        }else{
            this.setState({ isLoggedIn: false });    
        } 

        console.log(this.state);
    }
render() {
    
    const { isLoggedIn } = this.state;
    if (isLoggedIn == false) {
        console.log("first==="+this.state.isLoggedIn);    
        //return <Redirect to='/login' />;
    }
    return (<div>
              <Navigation/>
              <LeftSideBar/>
              <Route path="/" exact component={DashboardPage} />
              <Route path="/#dashboard" exact component={DashboardPage} />
              <Route path="/setting" component={GeneralSetting} />
              <Route path="/blog" component={Blog} />
               <Footer/>
            </div>
      );
    }
  }
export default Admin;

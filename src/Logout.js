import React, { Component } from 'react';
import { Redirect,withRouter } from 'react-router-dom'
class Logout extends React.Component {
    constructor() {
        super();
        this.state = {
            redirectToReferrer: false,
        };
        localStorage.clear();
        console.log("First"+this.state.redirectToReferrer);
        
    }
    componentDidMount() {
        sessionStorage.clear();
        sessionStorage.setItem('user','');
        sessionStorage.setItem('userDetails','');
        sessionStorage.setItem('first_name','');
        sessionStorage.setItem('last_name','');
        sessionStorage.setItem('email','');
        sessionStorage.setItem('phone','');
        sessionStorage.setItem('userid','');
        sessionStorage.setItem('created_at','');
        sessionStorage.setItem('token','');
        this.setState({redirectToReferrer:true});
        console.log("sec"+this.state.redirectToReferrer);
    }

  render() {
    const { redirectToReferrer } = this.state;
    if (redirectToReferrer) {
       return <Redirect to='/login' />;
    }
    return ("Hello")
  }
}
export default Logout;


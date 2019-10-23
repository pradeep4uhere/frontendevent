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


import React from 'react';
import {Redirect } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout'
class Dashboard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
        };
    }


    componentDidMount() {
      var userId= localStorage.getItem('user');
        if(localStorage.getItem('user')){
          this.setState({ isLoggedIn: true});    
        }else{
          this.setState({ isLoggedIn: false });    
        }
    }


    render(){
    const { isLoggedIn } = this.state
    console.log(this.state);
    if (isLoggedIn == false) {
          return <Redirect to='/login'/>;
    }
    return(
          <div className="hold-transition skin-blue sidebar-mini">  
            <DashboardLayout component='DashboardPage'/>
          </div>
        );
    };
}
export default Dashboard;

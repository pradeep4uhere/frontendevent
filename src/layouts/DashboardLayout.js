import React, { Component } from 'react';  
import { Route, Switch }    from 'react-router-dom';  
import Footer from '../components/Footer';
import DashboardPage        from '../components/Page/DashboardPage';

class DashboardLayout extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            loadComponent: this.props.component,
            theatre_id: this.props.theatre_id,
        };
    }
  
   render(){
    const { loadComponent } = this.state
    const { theatre_id } = this.state;
    console.log(this.props.component)
    return(
          <div className="hold-transition skin-blue sidebar-mini">
          {
            {
              'DashboardPage'   : <DashboardPage  /> ,
            }[this.props.component]
          }
          <Footer/>
          </div>
        );
    };
}
export default DashboardLayout;

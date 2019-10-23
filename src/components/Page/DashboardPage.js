import React from 'react';
import {Redirect } from 'react-router-dom';
import $ from 'jquery';
import Breadcrum from '../BreadcrumPage';
import OrderList from '../Partials/OrderList';
import LatestMemberList from '../Partials/LatestMemberList';
import EventAddedList from '../Partials/EventAddedList';
import LatestCounterList from '../Partials/LatestCounterList';


class DashboardPage extends React.Component{
    constructor() {
        super();
    }


    componentDidMount() {
    }

    render(){
    return(
      <div className="content-wrapper">
      {/* Import Breadcrup component boxes here */}
      <Breadcrum title="Dashboard" />

        <section className="content">
          {/* Info boxes */}
          <LatestCounterList />

          {/* Import All Latest Event Booking Order List*/}
          <OrderList/>

          <div className="row">
            
            {/* Import All Latest Member List*/}
            <LatestMemberList/>

            {/* Import All Latest Event Added*/}
            <EventAddedList/>

          </div>
        </section>
        {/* /.content */}
      </div>
        );
    };
}
export default DashboardPage;

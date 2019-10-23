/*
 * @PageName    :: LeftsideBar.js
 * @Author      :: Pradeep Kumar
 * @Description :: Left Menu of the profile
 * @Created Date:: 20 Oct 2018
 */
import React from 'react';
import Constants  from '../../config/Constants'
const userProfileImg = Constants.IMG.USER_PROFILE
class LeftSideBar extends React.Component{
    constructor() {
        super();
        this.state = {
            clicked: false,
        };
    }
    render(){
        return(
      <aside className="main-sidebar">
        {/* sidebar: style can be found in sidebar.less */}
        <section className="sidebar">
          {/* Sidebar user panel */}
          <div className="user-panel">
            <div className="pull-left image">
              <img src={userProfileImg} className="img-circle" alt="User Image" />
            </div>
            <div className="pull-left info">
              <p>Welcome, Admin</p>
              <a href="#"><i className="fa fa-circle text-success" /> Online</a>
            </div>
          </div>
          <ul className="sidebar-menu" data-widget="tree">
            <li className="header">MAIN NAVIGATION</li>
            <li><a href="/dashboard"><i className="fa fa-dashboard" /> Dashboard</a></li>
            <li><a href="/setting"><i className="fa fa-cogs" />General Setting</a></li>
            <li className="treeview menu-open">
              <a href="#">
                <i className="fa fa-gear" /> <span>Global Managment</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right" />
                </span>
              </a>
              <ul className="treeview-menu">
                <li><a href="#"><i className="fa fa-wheelchair" />Sitting Type</a></li>
                <li><a href="#"><i className="fa fa-scissors" />Offers Type</a></li>
                <li><a href="#"><i className="fa fa-globe" />Tax Type</a></li>
                <li><a href="#"><i className="fa fa-calendar-check-o" />Booking Status</a></li>
                <li><a href="#"><i className="fa fa-language" />Language Type</a></li>
              </ul>
            </li>
             <li className="treeview menu-open">
              <a href="#">
                <i className="fa fa-map" /> <span>Location</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right" />
                </span>
              </a>
              <ul className="treeview-menu">
                <li><a href="#"><i className="fa fa-globe" />Country</a></li>
                <li><a href="#"><i className="fa fa-globe" />State</a></li>
                <li><a href="#"><i className="fa fa-globe" />City</a></li>
              </ul>
            </li>
             <li className="treeview menu-open">
              <a href="#">
                <i className="fa fa-language" /> <span>Site Pages</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right" />
                </span>
              </a>
              <ul className="treeview-menu">
                <li><a href="#"><i className="fa fa-list" />All Pages</a></li>
              </ul>
            </li>
            <li>
              <a href="/memberlist">
                <i className="fa fa-users" />
                <span>User Manage</span>
                <span className="pull-right-container">
                  <span className="label label-primary pull-right">4</span>
                </span>
              </a>
            </li>
             <li className="treeview">
              <a href="#">
                <i className="fa fa-file-movie-o" />
                <span>Event Manage</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right" />
                </span>
              </a>
              <ul className="treeview-menu">
                <li><a href="/addevent"><i className="fa fa-plus" />Add Event</a></li>
                <li><a href="/eventlist"><i className="fa fa-list" />All Event</a></li>
              </ul>
            </li>
            
            <li className="treeview">
              <a href="#">
                <i className="glyphicon glyphicon-facetime-video" />
                <span>Theatres</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right" />
                </span>
              </a>
              <ul className="treeview-menu">
                <li><a href="addtheatre"><i className="fa fa-plus" />Add Theatre</a></li>
                <li><a href="alltheatre"><i className="fa fa-list" />All Theatre</a></li>
              </ul>
            </li>
            <li>
              <a href="#">
                <i className="glyphicon glyphicon-calendar" /> <span>Event Booking</span>
                <span className="pull-right-container">
                  <small className="label pull-right bg-green">101</small>
                </span>
              </a>
            </li>
            <li className="treeview">
              <a href="#">
                <i className="fa fa-laptop" />
                <span>Report</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right" />
                </span>
              </a>
              <ul className="treeview-menu">
                <li><a href="pages/UI/general.html"><i className="fa fa-users" />Customer Report</a></li>
                <li><a href="pages/UI/icons.html"><i className="fa fa-calendar-check-o" />Booking Report</a></li>
                <li><a href="pages/UI/buttons.html"><i className="fa fa-rupee" />Payment Report</a></li>
              </ul>
            </li>
            <li>
              <a href="pages/mailbox/mailbox.html">
                <i className="fa fa-envelope" /> <span>Mailbox</span>
                <span className="pull-right-container">
                  <small className="label pull-right bg-red">16</small>
                </span>
              </a>
            </li>
          </ul>
        </section>
        {/* /.sidebar */}
      </aside>
        );
    };
}
export default LeftSideBar;

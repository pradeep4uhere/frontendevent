import React from 'react';
import { Redirect,withRouter } from 'react-router-dom'
import Constants  from '../config/Constants'
const userProfileImg = Constants.IMG.USER_PROFILE
const appName = Constants.APP_NAME
const appTag = Constants.APP_TAG

class Navigation extends React.Component {
  render() {
    return (
    <header className="main-header">
        {/* Logo */}
        <a href="index2.html" className="logo">
          {/* mini logo for sidebar mini 50x50 pixels */}
          <span className="logo-mini"><b>R</b>{appTag}</span>
          {/* logo for regular state and mobile devices */}
          <span className="logo-lg"><b>{appName}</b>{appTag}</span>
        </a>
        {/* Header Navbar: style can be found in header.less */}
        <nav className="navbar navbar-static-top">
          {/* Sidebar toggle button*/}
          <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
            <span className="sr-only">Toggle navigation</span>
          </a>
          {/* Navbar Right Menu */}
          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
              {/* User Account: style can be found in dropdown.less */}
              <li className="dropdown user user-menu">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <img src={userProfileImg} className="user-image" alt="User Image" />
                  <span className="hidden-xs">Welcome, Admin</span>
                </a>
                <ul className="dropdown-menu">
                  {/* User image */}
                  <li className="user-header">
                    <img src={userProfileImg} className="img-circle" alt="User Image" />
                    <p>
                      Aimbeyond, Administrator
                      <small>Member since Apr. 2019</small>
                    </p>
                  </li>
                  {/* Menu Body */}
                  {/* Menu Footer*/}
                  <li className="user-footer">
                    <div className="pull-left">
                      <a href="#" className="btn btn-default btn-flat">Profile</a>
                    </div>
                    <div className="pull-right">
                      <a href="logout" className="btn btn-default btn-flat">Sign out</a>
                    </div>
                  </li>
                </ul>
              </li>
              {/* Control Sidebar Toggle Button */}
              
            </ul>
          </div>
        </nav>
        </header>
    )
  }
}

export default Navigation;
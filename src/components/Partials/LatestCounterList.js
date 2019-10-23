import React from 'react';
import Constants  from '../../config/Constants'
const appName = Constants.APP_NAME
const appTag = Constants.APP_TAG
class LatestCounterList extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="info-box">
                <span className="info-box-icon bg-aqua"><i className="ion ion-ios-gear-outline" /></span>
                <div className="info-box-content">
                  <span className="info-box-text">Latest Member</span>
                  <span className="info-box-number">90</span>
                </div>
                {/* /.info-box-content */}
              </div>
              {/* /.info-box */}
            </div>
            {/* /.col */}
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="info-box">
                <span className="info-box-icon bg-red"><i className="fa fa-file-movie-o" /></span>
                <div className="info-box-content">
                  <span className="info-box-text">Total Event</span>
                  <span className="info-box-number">410</span>
                </div>
                {/* /.info-box-content */}
              </div>
              {/* /.info-box */}
            </div>
            {/* /.col */}
            {/* fix for small devices only */}
            <div className="clearfix visible-sm-block" />
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="info-box">
                <span className="info-box-icon bg-green"><i className="ion ion-ios-cart-outline" /></span>
                <div className="info-box-content">
                  <span className="info-box-text">Total Order</span>
                  <span className="info-box-number">INR 7,60,000</span>
                </div>
                {/* /.info-box-content */}
              </div>
              {/* /.info-box */}
            </div>
            {/* /.col */}
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="info-box">
                <span className="info-box-icon bg-yellow"><i className="ion ion-ios-people-outline" /></span>
                <div className="info-box-content">
                  <span className="info-box-text">New Members</span>
                  <span className="info-box-number">2,000</span>
                </div>
                {/* /.info-box-content */}
              </div>
              {/* /.info-box */}
            </div>
            {/* /.col */}
          </div>
            );
    };
}
export default LatestCounterList;

import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from '../InnerHeader';
import Footer from '../Footer';
import Constants  from '../config/Constants'
import axios from 'axios'
import $ from 'jquery'
const token     = localStorage.getItem('token');
const getLastOrderList = Constants.GET_LAST_ORDER_LIST;
var serialize = require('form-serialize');
var ip = require('ip');
class Success extends React.Component {
  constructor() {
        super();
        this.state={
          oid:'',
          ipAdress : ip.address(),
          orderDetails: [],
          orderName: '',
          amount: '0.00',
          settingPriceType: 'INR'
        }
        
  }

  componentDidMount() {
    var oid = this.props.match.params.oid;
    var uid      = ip.toLong(this.state.ipAdress);
    if(sessionStorage.getItem('userid')){
      var uid      = this.state.user_id;
    }
    //alert(uid);
    var tokenStr = token;
    const formData = {
        token    : tokenStr,
        uid      : uid,
        oid      : oid
    }
    axios.post(getLastOrderList, formData)
    .then((response) => {
      if(response.data.code==200) {
        console.log(response.data.order)
          this.setState({
            orderDetails    :response.data.order,
            orderNo         : response.data.order.orderID,
            amount          : response.data.order.total_amount,
            settingPriceType: response.data.setting[14].options_value,
          });

      }else{
        console.log("Response Error");
      }
    })
    .catch((err) => {
      console.log("Catch Error");
    })
  }


  render() {
    const { orderDetails } = this.state;
    const { orderNo }      = this.state;
    const { amount }       = this.state;
    const { settingPriceType } = this.state;
    console.log(settingPriceType);
    return (
          <div>
            <Header/>
            <div className="container-fluid bg-maroon p-tb15 ">
            <div className="container ">
              <div className="jumbotron text-xs-center white-text p-t100 ">
                <h1 className="display-3">Thank You!</h1>
                <div className="bg-whitegrid"><p className="sep-white" /></div>
                <p className="lead">Your Membership Order Payment Status is <strong>Pending</strong>.</p>
                <p className="lead">Total Payment : <b>{settingPriceType}{amount}</b>.</p>
                <p className="lead">Your membership order is confirm with order No: "<strong>{orderNo}</strong>" <br/>Please check your email for more details.</p>
                <hr className="hr-light" />
                <p>
                  Having trouble? <Link to="contactus">Contact us</Link>
                </p>
                <a href="/" className="btn btn-red btn-lg btn-red-border1">CONTINUE SHOPPING</a>
              </div>
            </div>
          </div>
          <Footer/>
          </div>
    )
  }
}

export default Success;

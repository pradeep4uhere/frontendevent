/*
 * @PageName    :: OrderHistory.js
 * @Author      :: Pradeep Kumar
 * @Description :: All List of the user
 * @Created Date:: 13 Nov 2019
 */
import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import axios from 'axios'
import Constants  from '../../config/Constants'
import Moment from 'react-moment';  
var serialize = require('form-serialize');
var ip = require('ip');
const urlUserOrderList      = Constants.USER_EVENT_ORDER_LSIT_URL;
const token     = localStorage.getItem('token');
class OrderHistory extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            dahsboardList  : [],
            priceType:'INR',
            ipAdress      : ip.address(),
            user_id       : localStorage.getItem('userid'),
            first_name    : localStorage.getItem('first_name'),
            last_name     : localStorage.getItem('last_name'),
            email         : localStorage.getItem('email'),
            phone         : localStorage.getItem('phone'),
            isLoggedIn    : false,
            userDetails   : localStorage.getItem('userDetails'),
            user_id       : localStorage.getItem('userid'),
            errorMessage  : '',
            isError       : false,
            order_type    : this.props.match.params.order_type
            
        }
        this.getEventOrderList       = this.getEventOrderList.bind(this);
        //alert(this.props.match.params.order_type);
 
    }


    /******Get all the user list here********/   
    getEventOrderList(){
        var tokenStr = token;
        const formData = {
            token    : tokenStr,
            id       : this.state.user_id,
            order_id : '',
            order_type:this.props.match.params.order_type
        }
        axios.post(urlUserOrderList, formData)
        .then((response) => {
          if(response.data.data.code==200) {
                this.setState({
                    dahsboardList:response.data.data.orderList,
                    userList:response.data.user,
                    priceType:response.data.settings[14]['options_value']
                });
                //console.log("dahsboardList",this.state.dahsboardList);
          }
          else
          {
            
          }
        })
        .catch((err) => {
            
        })
    }
    

    componentDidMount(){
       this.getEventOrderList();
    }

    capitalize(str) {
        var strVal = '';
        str = str.split(' ');
        for (var chr = 0; chr < str.length; chr++) {
          strVal += str[chr].substring(0, 1).toUpperCase() + str[chr].substring(1, str[chr].length) + ' '
        }
        return strVal
    }


    stripHtml(html){
        // Create a new div element
        var temporalDivElement = document.createElement("div");
        // Set the HTML content with the providen
        temporalDivElement.innerHTML = html;
        // Retrieve the text property of the element (cross-browser support)
        return temporalDivElement.textContent || temporalDivElement.innerText || "";
    }


    render(){
        const {dahsboardList } =  this.state;
        const { priceType } =  this.state;
        const {order_type} = this.state;
        let orderList = "";
        let title = 'All';
        if(order_type==1){
            title = 'Event';
        }else if(order_type==2){
            title = 'Travel';
        }else{
            title = 'All';
        }
        if(this.state.dahsboardList.data){
          var urlStr ='orderdetails';  
          console.log("this is new ",this.state.dahsboardList.data);  
           orderList = this.state.dahsboardList.data.map((val,i) =>
                <tr>
                    <td>{val.orderID}</td>
                    <td><Moment format="LLL">{val.order_date}</Moment></td>
                    <td>{val.shipping_fname}&nbsp;{val.shipping_lname}</td>
                    <td>{val.email_address}</td>
                    <td>{val.shipping_mobile}</td>
                    <td><span class="label label-success">{val.order_status.status_type}</span></td>
                    <td><div className="sparkbar" data-color="#00a65a" data-height={20}>{priceType}{val.total_amount}</div></td>
                    <td><Moment format="DD-MMM-YYYY">{val.created_at}</Moment></td>
                    <td><Link to={"/orderdetails/"+val.orderID+'/'+val.order_type}><button className="btn btn-secondary btn-sm info">View Invoice</button></Link></td>
                </tr>
           );    
        }



        
        return(
            <div className="row">
                <div className="col-md-12">
                <div class="text-white bg bg-danger  px-4 py-3 text-uppercase font-weight-bold"><i className="fas fa-list"></i>&nbsp;Latest {title} Booking Orders</div>
                <div className="box box-info">
                <div className="box-body">
                <div className="table-responsive">
                <table id="example1" class="table table-bordered table-striped" style={{"fontSize":"14px"}}>
                    <thead>
                    <tr className="bg bg-default" style={{"backgroundColor":"#cccccc"}}>
                        <th>Order ID</th>
                        <th>Order Date</th>
                        <th>Name</th>
                        <th>Email Address</th>
                        <th>Contact Number</th>
                        <th>Status</th>
                        <th>Total Amount</th>
                        <th>Created Date</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {orderList}
                    
                    </tbody>
                </table>
                </div>
                </div>
                </div>
                </div>
                </div>
          );
    };
}
export default OrderHistory;

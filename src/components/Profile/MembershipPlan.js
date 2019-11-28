/*
 * @PageName    :: OrderHistory.js
 * @Author      :: Pradeep Kumar
 * @Description :: All List of the user
 * @Created Date:: 13 Nov 2019
 */
import React from 'react';
import Countdown from 'react-count-down'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import axios from 'axios'
import Constants  from '../../config/Constants'
import Moment from 'react-moment';  
var serialize = require('form-serialize');
var ip = require('ip');
const urlUserOrderList      = Constants.USER_EVENT_ORDER_LSIT_URL;
const token     = localStorage.getItem('token');
class MembershipPlan extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            dahsboardList  : [],
            membershipPlan : [],
            membershipPlanOrder:[],
            priceType:'INR',
            ipAdress      : ip.address(),
            user_id       : sessionStorage.getItem('userid'),
            first_name    : sessionStorage.getItem('first_name'),
            last_name     : sessionStorage.getItem('last_name'),
            email         : sessionStorage.getItem('email'),
            phone         : sessionStorage.getItem('phone'),
            isLoggedIn    : false,
            userDetails   : sessionStorage.getItem('userDetails'),
            user_id       : sessionStorage.getItem('userid'),
            errorMessage  : '',
            isError       : false,
            order_type    : 3,
            isMembershipPlan:false,

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
            order_type:3
        }
        axios.post(urlUserOrderList, formData)
        .then((response) => {
            
          if(response.data.data.code==200) {
            console.log("dahsboardList",response.data.data.userDetails.membership_plan_order.membership_plan);
                this.setState({
                    dahsboardList:response.data.data.orderList,
                    membershipPlan:response.data.data.userDetails.membership_plan_order.membership_plan,
                    membershipPlanOrder : response.data.data.userDetails.membership_plan_order,
                    userList:response.data.data.userDetails,
                    priceType:response.data.settings[14]['options_value']
                });
                if(this.state.userList.membership_plan_order_id>0){
                    this.setState({isMembershipPlan:true});
                }
                console.log("dahsboardList",response.data.data.userDetails);
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
        const {membershipPlan}= this.state;
        const {membershipPlanOrder} = this.state;
        const {isMembershipPlan}= this.state;
        const OPTIONS = {
            endDate: membershipPlanOrder.end_date,
            prefix: '',
          }
        // console.log("membershipPlan",membershipPlan)
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
        let feature = '';
        if(membershipPlan.membership_feature){
            feature = membershipPlan.membership_feature.map((val,i) =>
                    <div className="row first-row">
                        <div className="col-xl-10 col-md-10 col-sm-10 col-10">{val.feature_title}</div>
                        {(val.status==1)?(
                        <div className="col-xl-2 col-md-2 col-sm-2 col-2"><img src="../rudra/images/ico_yes.png" alt="" /></div>
                         ):(
                        <div className="col-xl-2 col-md-2 col-sm-2 col-2"><img src="../rudra/images/ico_no.png" alt="" /></div>
                        )}
                     </div>
            );
        }



        
        return(
            <div>
            {(isMembershipPlan)?(
            <div className="row">
            
                <div className="col-md-3">
                    <div className="card text-center card-bg1">
                    <div className="basic-header"><p className="service-type" style={{fontSize:'27px',paddingTop:'0px',letterSpacing:'0px'}}>{membershipPlan.name}</p> <h2 className="white-text">{membershipPlanOrder.paid_amount}/<span className="service-type white-text" style={{letterSpacing:'0px'}}>{membershipPlanOrder.plan_type}</span></h2></div>
                    <div className="basic-triangle" /> 
                    <div className="card-body card-pad">
                        {feature}
                        
                    </div>
                    <div className="card-footer text-muted"><button type="button" className="btn btn-sm btn-red">Expire On:<Moment format="DD-MMM-YYYY">{membershipPlanOrder.end_date}</Moment></button>
                    <div className="countDownTimer" ><Countdown options={OPTIONS} className="countDownTimer" /></div>
                    </div></div>
                </div>
                <div className="col-md-9">
                <div class="text-white bg bg-danger  px-4 py-3 text-uppercase font-weight-bold"><i className="fas fa-list"></i>&nbsp;Latest Membership Orders</div>
                <div className="box box-info">
                <div className="box-body">
                <div className="table-responsive">
                <table id="example1" class="table table-bordered table-striped" style={{"fontSize":"12px"}}>
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
                ):(
                    <div className="alert alert-danger">No Membership Subscribe, <a href="/membership" className="btn btn-sm">Click Here To Subscribe</a></div>
                )}
                </div>
          );
    };
}
export default MembershipPlan;

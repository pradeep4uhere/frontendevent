/*
 * @PageName    :: OrderDetails.js
 * @Author      :: Pradeep Kumar
 * @Description :: All List of the user
 * @Created Date:: 13 Nov 2019
 */
import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import axios from 'axios'
import Constants  from '../../config/Constants'
import Moment from 'react-moment';  
import NumberFormat from 'react-number-format';
var serialize = require('form-serialize');
var ip = require('ip');
const urlUserOrderList      = Constants.USER_EVENT_ORDER_LSIT_URL;
const urlStr    = Constants.GET_USER_ORDER_DETAILS_URL;
const token     = localStorage.getItem('token');
class OrderDetails extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            eventList   : [],
            userList    : {},
            isMsg       : false,
            className   : '',
            show        : false,
            orderDetails: [],
            titleRudra  : "",
            settings    : {},
            phoneNumber : "",
            phoneNumber2 : "",
            email       : "",
            address     : "",
            company     : "",
            userList    : {},
            priceType   : 'INR'  
            
        }
        this.getEventOrderList       = this.getEventOrderList.bind(this);

        //console.log(this.props.match.params.orderid);
    }



    /******Get all the user list here********/   
    getEventOrderList(){
        var tokenStr = token;
        const formData = {
            token    : tokenStr,
            id       : this.props.id,
            order_id : this.props.match.params.orderid,
            order_type:this.props.match.params.order_type
        }
        axios.post(urlStr, formData)
        .then((response) => {
           
          if(response.data.data.code==200) {
                this.setState({
                    orderDetails    :   response.data.data.orderDetails,
                    settings        :   response.data.data.settings,
                    priceType       :   response.data.data.settings[14]['options_value'],
                    titleRudra      :   response.data.data.settings[8]['options_value'],
                    phoneNumber     :   response.data.data.settings[2]['options_value'],
                    phoneNumber2    :   response.data.data.settings[3]['options_value'],
                    email           :   response.data.data.settings[1]['options_value'],
                    address         :   response.data.data.settings[16]['options_value'],
                    company         :   response.data.data.settings[17]['options_value'],
                    priceType       :   response.data.data.settings[14]['options_value'],
                    userList        :   response.data.data.User,
                    eventList       :   response.data.data.orderDetails.temp_seat_booking,
                    order_type      :   response.data.data.orderDetails.order_type,
                }); 
                console.log("dahsboardList",this.state.orderDetails);
          }
          else
          {
            
          }
        })
        .catch((err) => {
            
        })
    }

    componentDidMount() {
        this.getEventOrderList();
    }


    render(){
        const {titleRudra}  =  this.state;
        const {phoneNumber} =  this.state;
        const {phoneNumber2}=  this.state;
        const {email}       =  this.state;
        const {address}     =  this.state;
        const {company}     =  this.state;
        const {userList}    =  this.state;
        const {orderDetails}=  this.state;
        const {priceType}   =  this.state;
        const {eventList}   =  this.state;
        const {order_type}  =  this.state;
        let orderList ='';
        if(this.state.eventList){
            console.log("this is new ",this.state.eventList);  
            orderList = this.state.eventList.map((val,i) =>
                <tr>
                    <td><img src={(("EventImage" in val))?val.EventImage.src:''} width={"50"} alt="Image"/></td>
                    <td>{(("Event" in val))?val.Event.title:''}</td>
                    <td>{(("Event" in val))?val.Seat.length:''}</td>
                    <td>{priceType}{val.event_seat.Price}</td>
                    <td>{val.event_seat.SeatType}</td>
                    <td>{
                        val.Seat.length ? val.Seat.map((itemTestArray) =>
                        (<span className="badge bg-green" style={{"margin":"1px"}}> {itemTestArray}</span>)) : '-'
                        }
                    </td>
                    <td>{priceType}{val.Seat.length * val.event_seat.Price}</td>
              </tr>
            );    
          }


          let eorderList = "";
          let shipping_address1 = '';
          let shipping_address2 = '';
          let shipping_state    = '';
          let shipping_city     = '';
          let shipping_pincode  = '';
          let shipping_mobile   = '';
          let shipping_email    = '';
          let orderID           = '';
          let created_at        = '';
          let total_amount      = '0.00';
          let subtotal          = '0.00';
          let tax_amount        = '0.00';
          let offer_value       = '0.00';
          let user_id           = '';
          
          if(this.state.orderDetails.length){
            shipping_address1 = this.state.orderDetails[0].shipping_address1;
            shipping_address2 = this.state.orderDetails[0].shipping_address2;
            shipping_state    = this.state.orderDetails[0].shipping_state;
            shipping_city     = this.state.orderDetails[0].shipping_city;
            shipping_pincode  = this.state.orderDetails[0].shipping_pincode;
            shipping_mobile   = this.state.orderDetails[0].shipping_mobile;
            shipping_email    = this.state.orderDetails[0].shipping_email;
            orderID           = this.state.orderDetails[0].orderID;
            created_at        = this.state.orderDetails[0].created_at;
            total_amount      = this.state.orderDetails[0].total_amount;
            subtotal          = this.state.orderDetails[0].subtotal;
            tax_amount        = this.state.orderDetails[0].tax_amount;
            offer_value       = this.state.orderDetails[0].offer_value;
            user_id           = this.state.orderDetails[0].user_id;
  
            
  
  
  
            console.log("this is new ",this.state.orderDetails);  
            eorderList = this.state.orderDetails.map((val,i) =>
              <tr>
                  <td><img src={val.itinerary_booking[0].itinerary.image} width={50} alt={"image"}/></td>
                  <td>{val.itinerary_booking[0].itinerary.title}</td>
                  <td>{val.itinerary_booking[0].itinerary_departure.start_date}</td>
                  <td>{priceType}{val.itinerary_booking[0].itinerary_departure.price}</td>
                  <td>{priceType}{val.itinerary_booking[0].itinerary_departure.price}</td>
              </tr>
           );    
          }

        return(
          <div className="row">
                {(order_type==1)?(
                    <div className="col-md-12">
                    <div class="text-white bg bg-danger  px-4 py-3 text-uppercase font-weight-bold"><i className="fas fa-list"></i>&nbsp;Orders Details</div>
                    <div className="box box-info">
                    {/* /.box-header */}
                    <div className="box-body">
                <section className="invoice">
            {/* title row */}
            <div className="row">
              <div className="col-md-12">
                <h2 className="page-header">
                <table style={{"width":"100%"}}>
                    <tr>
                        <td style={{"width":"80%","float":"left","textAlign":"left"}}><i className="fa fa-globe" /> {company}</td>
                        <td style={{"width":"20%","float":"left","textAlign":"right"}}> <small className="pull-right" style={{"float":"right"}}>Date: <Moment format="LL">{orderDetails.created_at}</Moment></small></td>
                    </tr>
                </table>
                <br/>  
                    
                </h2>
              </div>
              {/* /.col */}
            </div>
            {/* info row */}
            <div className="row invoice-info">
              <div className="col-sm-4 invoice-col">
                From
                <address>
                  <strong>{company}</strong><br />
                  {address}<br />
                  Phone: {phoneNumber},{phoneNumber2}<br />
                  Email: {email}
                </address>
              </div>
              {/* /.col */}
              <div className="col-sm-4 invoice-col">
                To
                <address>
                  <strong>{userList.first_name}&nbsp;{userList.last_name}</strong><br />
                  {orderDetails.shipping_address1},&nbsp;{orderDetails.shipping_address2}<br />
                  {orderDetails.shipping_state},&nbsp;{orderDetails.shipping_city},&nbsp;{orderDetails.shipping_pincode}<br />
                  Phone: {orderDetails.shipping_mobile}<br />
                  Email: {orderDetails.shipping_email}
                </address>
              </div>
              {/* /.col */}
              <div className="col-sm-4 invoice-col">
                <b>Invoice #{orderDetails.orderID}</b><br />
                <br />
                <b>Order ID:</b> {orderDetails.orderID}<br />
                <b>Payment Date:</b><Moment format="LLL">{orderDetails.created_at}</Moment><br />
                <b>Account:</b> <NumberFormat value={orderDetails.total_amount} displayType={'text'} thousandSeparator={true} prefix={priceType} />
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
            {/* Table row */}

            <div className="row">
              <div className="col-xs-12 table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Event</th>
                      <th>Qty</th>
                      <th>Price</th>
                      <th>Seat Type</th>
                      <th>Seat No</th>
                      <th>Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                  {orderList}
                  </tbody>
                </table>
              </div>
              {/* /.col */}
            </div>


            {/* /.row */}
            <div className="row">
              {/* accepted payments column */}
              <div className="col-md-8">
                <p className="lead">Payment Methods:</p>
                <img src="/theme/dist/img/credit/visa.png" alt="Visa" />
                <img src="/theme/dist/img/credit/mastercard.png" alt="Mastercard" />
                <img src="/theme/dist/img/credit/american-express.png" alt="American Express" />
                <img src="/theme/dist/img/credit/paypal2.png" alt="Paypal" />
                <p className="text-muted well well-sm no-shadow" style={{marginTop: '10px'}}>
                  Your Payment Details goes here !!
                </p>
              </div>
              {/* /.col */}
              <div className="col-md-4">
                <p className="lead"><b>Payment Date:</b>&nbsp;&nbsp;<Moment format="LL">{orderDetails.created_at}</Moment></p>
                <div className="table-responsive">
                  <table className="table">
                    <tbody><tr>
                        <th style={{width: '50%'}}>Subtotal:</th>
                        <td><NumberFormat value={orderDetails.subtotal} displayType={'text'} thousandSeparator={true} prefix={priceType} /></td>
                      </tr>
                      <tr>
                        <th>Tax (9.3%)</th>
                        <td><NumberFormat value={orderDetails.tax_amount} displayType={'text'} thousandSeparator={true} prefix={priceType} /></td>
                      </tr>
                      <tr>
                        <th>Offer:</th>
                        <td><NumberFormat value={orderDetails.offer_value} displayType={'text'} thousandSeparator={true} prefix={priceType} /></td>
                      </tr>
                      <tr>
                        <th>Total:</th>
                        <td><NumberFormat value={orderDetails.total_amount} displayType={'text'} thousandSeparator={true}  prefix={priceType} /></td>
                      </tr>
                    </tbody></table>
                </div>
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
            {/* this row will not appear when printing */}
            <div className="row no-print">
              <div className="col-md-12">
                <a href="invoice-print.html" target="_blank" className="btn btn-danger"><i className="fa fa-print" /> Print</a>
                <button type="button" className="btn btn-success pull-right" style={{"fontSize":"14px"}}><i className="fa fa-credit-card" /> Submit Payment
                </button>
                <button type="button" className="btn btn-primary pull-right" style={{marginRight: '5px',"fontSize":"14px"}}>
                  <i className="fa fa-download" /> Generate PDF
                </button>
              </div>
            </div>
          </section>
              
            
          
            </div>
            </div>
            </div>
          
            ):(

              <div className="col-md-12">
              <div class="text-white bg bg-danger  px-4 py-3 text-uppercase font-weight-bold"><i className="fas fa-list"></i>&nbsp;Orders Details</div>
              <div className="box box-info">
              {/* /.box-header */}
              <div className="box-body">
          <section className="invoice">
      {/* title row */}
      <div className="row">
        <div className="col-md-12">
          <h2 className="page-header">
          <table style={{"width":"100%"}}>
              <tr>
                  <td style={{"width":"80%","float":"left","textAlign":"left"}}><i className="fa fa-globe" /> {company}</td>
                  <td style={{"width":"20%","float":"left","textAlign":"right"}}> <small className="pull-right" style={{"float":"right"}}>Date: <Moment format="LL">{orderDetails.created_at}</Moment></small></td>
              </tr>
          </table>
          <br/>  
              
          </h2>
        </div>
        {/* /.col */}
      </div>
      {/* info row */}
      <div className="row invoice-info">
        <div className="col-sm-4 invoice-col">
          From
          <address>
            <strong>{company}</strong><br />
            {address}<br />
            Phone: {phoneNumber},{phoneNumber2}<br />
            Email: {email}
          </address>
        </div>
        {/* /.col */}
        <div className="col-sm-4 invoice-col">
            To
            <address>
              <strong>{userList.first_name}&nbsp;{userList.last_name}</strong><br />
              {shipping_address1},&nbsp;{shipping_address2}<br />
              {shipping_state},&nbsp;{shipping_city},&nbsp;{shipping_pincode}<br />
              Phone: {shipping_mobile}<br />
              Email: {shipping_email}
            </address>
          </div>
        {/* /.col */}
        <div className="col-sm-4 invoice-col">
            <b>Invoice #{orderID}</b><br />
            <br />
            <b>Order ID:</b> {orderID}<br />
            <b>Payment Date:</b><Moment format="LLL">{created_at}</Moment><br />
            <b>Account:</b> <NumberFormat value={total_amount} displayType={'text'} thousandSeparator={true} prefix={priceType} />
          </div>
        {/* /.col */}
      </div>
      {/* /.row */}
      {/* Table row */}

      <div className="row">
          <div className="col-xs-12 table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Itinerary Name</th>
                  <th>Departure Date</th>
                  <th>Price</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
               {eorderList}
              </tbody>
            </table>
          </div>
          {/* /.col */}
        </div>


      {/* /.row */}
      <div className="row">
        {/* accepted payments column */}
        <div className="col-md-8">
          <p className="lead">Payment Methods:</p>
          <img src="/theme/dist/img/credit/visa.png" alt="Visa" />
          <img src="/theme/dist/img/credit/mastercard.png" alt="Mastercard" />
          <img src="/theme/dist/img/credit/american-express.png" alt="American Express" />
          <img src="/theme/dist/img/credit/paypal2.png" alt="Paypal" />
          <p className="text-muted well well-sm no-shadow" style={{marginTop: '10px'}}>
            Your Payment Details goes here !!
          </p>
        </div>
        {/* /.col */}
        <div className="col-md-4">
        <p className="lead"><b>Payment Date:</b>&nbsp;&nbsp;<Moment format="LL">{orderDetails.created_at}</Moment></p>
            <div className="table-responsive">
              <table className="table">
                <tbody><tr>
                    <th style={{width: '50%'}}>Subtotal:</th>
                    <td><NumberFormat value={subtotal} displayType={'text'} thousandSeparator={true} prefix={priceType} /></td>
                  </tr>
                  <tr>
                    <th>Tax (9.3%)</th>
                    <td><NumberFormat value={tax_amount} displayType={'text'} thousandSeparator={true} prefix={priceType} /></td>
                  </tr>
                  <tr>
                    <th>Offer:</th>
                    <td><NumberFormat value={offer_value} displayType={'text'} thousandSeparator={true} prefix={priceType} /></td>
                  </tr>
                  <tr>
                    <th>Total:</th>
                    <td><NumberFormat value={total_amount} displayType={'text'} thousandSeparator={true}  prefix={priceType} /></td>
                  </tr>
                </tbody></table>
            </div>
        </div>
        {/* /.col */}
      </div>
      {/* /.row */}
      {/* this row will not appear when printing */}
      <div className="row no-print">
        <div className="col-md-12">
          <a href="invoice-print.html" target="_blank" className="btn btn-danger"><i className="fa fa-print" /> Print</a>
          <button type="button" className="btn btn-success pull-right" style={{"fontSize":"14px"}}><i className="fa fa-credit-card" /> Submit Payment
          </button>
          <button type="button" className="btn btn-primary pull-right" style={{marginRight: '5px',"fontSize":"14px"}}>
            <i className="fa fa-download" /> Generate PDF
          </button>
        </div>
      </div>
    </section>
        
      
    
      </div>
      </div>
      </div>

            )}
            </div>
          );
    };
}
export default OrderDetails;

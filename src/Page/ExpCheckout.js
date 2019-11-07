import React from 'react';
import Header from '../InnerHeader';
import Footer from '../Footer';
import Constants  from '../config/Constants'
import axios from 'axios'
import $ from 'jquery'
var serialize = require('form-serialize');
var ip = require('ip');
const getCartList = Constants.GET_EXP_CART_LIST;
const bookingPayment = Constants.BOOKING_EXP_PAYMENT;
const token     = localStorage.getItem('token');

class ExpCheckout extends React.Component {
  constructor(props) {
        super(props);
        this.state={
          ipAdress : ip.address(),
          cartList : {"subTotal":"0.00","gstAmount":"0.00","offerValue":"0.00","total":"0.00"},
          msg      : "",
          classStr : "",
          gstAmount: "0.00",
          offervalue: "0.00",
          offerId : this.props.location.search,
          isShow: false,

          user_id     : sessionStorage.getItem('userid'),
          first_name  : sessionStorage.getItem('first_name'),
          last_name   : sessionStorage.getItem('last_name'),
          email       : sessionStorage.getItem('email'),
          phone       : sessionStorage.getItem('phone'),
          isLoggedIn  : false,
          userDetails : sessionStorage.getItem('userDetails'),
          user_id: sessionStorage.getItem('userid'),
          errorMessage : '',
          isError :  false

        }
        this.getCartList         =  this.getCartList.bind(this);
        this.handleChange        =  this.handleChange.bind(this);
        this.handleChangeForm    =  this.handleChangeForm.bind(this);
        this.handleSubmit        =  this.handleSubmit.bind(this);
        this.greeting            =  this.greeting.bind(this);
        //console.log(this.props.location.search);
  }



  handleSubmit(event){
    event.preventDefault();
    $("#paybtn").attr('disabled','disabled');
    var uid      = ip.toLong(this.state.ipAdress);
    var offerId  = this.state.cartList.oid;
    var tokenStr = token;
    var bfname              = event.target.bfname.value;
    var blname              = event.target.blname.value;
    var baddress1           = event.target.baddress1.value;
    var baddress2           = event.target.baddress2.value;
    var bcity               = event.target.bcity.value;
    var bstate              = event.target.bstate.value;
    var bpincode            = event.target.bpincode.value;
    var bmobile             = event.target.bmobile.value;
    var bemail              = event.target.bemail.value;
    var checkbox            = event.target.checkbox.value;

    var fname               = event.target.fname.value;
    var lname               = event.target.lname.value;
    var address1            = event.target.address1.value;
    var address2            = event.target.address2.value;
    var city                = event.target.city.value;
    var state               = event.target.state.value;
    var pincode             = event.target.pincode.value;
    var mobile              = event.target.mobile.value;
    var email               = event.target.bemail.value;
    var other               = this.state.cartList;
    if(fname=='')   {    
      $("#fname").css({"border":"1px solid #dc3545"});      
      $("#paybtn").removeAttr('disabled'); 
      this.setState({errorMessage:"Please enter first name",isError:true}); 
      return false;
    }
    if(lname=='')   {    
      $("#lname").css({"border":"1px solid #dc3545"});       
      $("#paybtn").removeAttr('disabled'); 
      this.setState({errorMessage:"Please enter last name",isError:true}); 
      return false;
    }
    if(address1==''){    
      $("#address1").css({"border":"1px solid #dc3545"});    
      $("#paybtn").removeAttr('disabled'); 
      this.setState({errorMessage:"Please enter address-1 field",isError:true}); 
      return false;
    }
    if(address2==''){    
      $("#address2").css({"border":"1px solid #dc3545"});    
      $("#paybtn").removeAttr('disabled'); 
      this.setState({errorMessage:"Please enter address-2 field",isError:true}); 
      return false;
    }
    if(city=='')    {    
      $("#city").css({"border":"1px solid #dc3545"});        
      $("#paybtn").removeAttr('disabled'); 
      this.setState({errorMessage:"Please enter city field",isError:true});
      return false;
    }
    if(state=='')   {    
      $("#state").css({"border":"1px solid #dc3545"});       
      $("#paybtn").removeAttr('disabled'); 
      this.setState({errorMessage:"Please enter state field",isError:true});
      return false;
    }
    if(pincode=='') {    
      $("#pincode").css({"border":"1px solid #dc3545"});     
      $("#paybtn").removeAttr('disabled'); 
      this.setState({errorMessage:"Please enter pincode field",isError:true});
      return false;
    }
    if(mobile=='')  {    
      $("#mobile").css({"border":"1px solid #dc3545"});      
      $("#paybtn").removeAttr('disabled'); 
      this.setState({errorMessage:"Please enter mobile field",isError:true});
      return false;
    }
    if(email=='')   {    
      $("#email").css({"border":"1px solid #dc3545"});       
      $("#paybtn").removeAttr('disabled'); 
      this.setState({errorMessage:"Please enter email field",isError:true});
      return false;
    }
   
    if(email!='' && mobile!=''){
    const formData = {
        token    : tokenStr,
        uid      : uid,
        code     : {code:offerId,other:other},
       
        bfname   : bfname,
        blname   : blname,
        baddress1: baddress1,
        baddress2: baddress2,
        bcity    : bcity,
        bstate   : bstate,
        bpincode : bpincode,
        bmobile  : bmobile,
        bemail   : bemail,
        checkbox : checkbox,

        fname   : fname,
        lname   : lname,
        address1: address1,
        address2: address2,
        city    : city,
        state   : state,
        pincode : pincode,
        mobile  : mobile,
        email   : email
    }
    axios.post(bookingPayment, formData)
    .then((response) => {
      if(response.data.code==200) {
        var orderId = response.data.oid;
        console.log("Response Success");
         window.location.href="process/oid="+orderId;

      }else{
        console.log("Response Error");
      }
    })
    .catch((err) => {
      console.log("Catch Error");
    })
  }else{
    $("#paybtn").removeAttr('disabled');
    return false;

  }



  };


  handleChange(e){
    let valueAction = '';
    $('#checkbox').change(function () {
      if ($(this).prop("checked")) {
          $('#billing').fadeIn(200);
          $("#bfname").val($("#fname").val());
          $("#blname").val($("#lname").val());
          $("#baddress1").val($("#address1").val());
          $("#baddress2").val($("#address2").val());
          $("#bcity").val($("#city").val());
          $("#bstate").val($("#state").val());
          $("#bpincode").val($("#pincode").val());
          $("#bmobile").val($("#mobile").val());
          $("#bemail").val($("#email").val());
      }else{
          $('#billing').fadeOut();
          $("#bfname").val('');
          $("#blname").val('');
          $("#baddress1").val('');
          $("#baddress2").val('');
          $("#bcity").val('');
          $("#bstate").val('');
          $("#bpincode").val('');
          $("#bmobile").val('');
          $("#bemail").val('');
          
      }
    });
  };



  handleChangeForm(e){
    let idStr = e.target.id;
    $("#"+idStr).css({"border":"1px solid #ccc"});     
    let valueAction = '';
    $('#checkbox').change(function () {
      if ($(this).prop("checked")) {
          $('#billing').fadeIn(200);
      }else{
        $('#billing').fadeOut();
      }
    });
  };

  setBilling(e){
    this.setState({isShow:e});
  }


   /******Get all the user list here********/   
   getCartList(){
    
    var uid      = ip.toLong(this.state.ipAdress);
    if(sessionStorage.getItem('userid')){
      var uid      = this.state.user_id;
    }
    var offerId  = this.state.offerId;
    var tokenStr = token;
    const formData = {
        token    : tokenStr,
        uid      : uid,
        offerId  : offerId
    }
    axios.post(getCartList, formData)
    .then((response) => {
      if(response.data.code==200) {
            this.setState({
              cartList    : response.data
              });
              let selectedOption = [];
              this.state.cartList.cart.forEach((val,i) => {
                selectedOption[i] = { value: val.quantity, label: val.quantity };
              });
              
              this.setState({optionValue:selectedOption});


      }else{
        console.log("Response Error");
      }
    })
    .catch((err) => {
      console.log("Catch Error");
    })
}
  componentDidMount(){
    this.getCartList();
  }

  greeting() {
    const isLoggedIn = sessionStorage.getItem('userid');
    if (!isLoggedIn) {
      return <h2 className="text-center  white-text">Returning customers? then Login below or go for <a className="link-check" href>Guest Checkout</a> <p className="p-tb20"> <a href={"/login"} className="btn btn-red btn-lg btn-red-border1 text-uppercase">Login here</a></p>           </h2>;
    }
  }


  render() {
    const { cartList }  = this.state;
    const { msg } = this.state;
    const { classStr } = this.state;
    const style = this.state.isShow ? {display:'block'}:{display:'none'};
    const { errorMessage } =  this.state;
    const { isError } = this.state;
    return (
        <div>
          <Header/>
          <div className="container-fluid bg-maroon p-tb15">
          <div className="container">
            <h1 className="text-center white-text mt-85">Checkout
            </h1>
            <div className="bg-whitegrid"><p className="sep-white" /></div>
            {this.greeting()}
          </div>
        </div>
        <div className="container">
        
        <form role="form" onSubmit={this.handleSubmit}  id="form-offer">
          <div className="row py-5 p-4 bg-white rounded shadow-sm">
          
            <div className="col-lg-6">
            {(isError)?(
            <div className="alert alert-danger" style={{"font-size":"12px"}}>{errorMessage}</div>):""
            }
              <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Shipping Address</div>
              <div className="p-4">
                {/*<p class="font-italic mb-4">If you have some information for the seller you can leave them in the box below</p>*/}
                  <div className="row">
                    <div className="form-group col-lg-6">
                      <label htmlFor="exampleInputEmail1">First Name</label>
                      <input type="text" className="form-control" id="fname" name='fname' placeholder="First Name" onChange={((e) => this.handleChangeForm(e))}/>
                    </div>
                    <div className="form-group col-lg-6">
                      <label htmlFor="exampleInputEmail1">Last Name</label>
                      <input type="text" className="form-control" id="lname" name="lname" placeholder="Last Name" onChange={((e) => this.handleChangeForm(e))}/>
                    </div>
                    <div className="form-group col-lg-12">
                      <label htmlFor="exampleInputEmail1">Address line 1</label>
                      <input type="text" className="form-control" id="address1" name="address1" placeholder="Enter address line-1" onChange={((e) => this.handleChangeForm(e))}/>
                    </div> 
                    <div className="form-group col-lg-12">
                      <label htmlFor="exampleInputEmail1">Address Line 2</label>
                      <input type="text" className="form-control" id="address2" name="address2" placeholder="Enter address line-2" onChange={((e) => this.handleChangeForm(e))}/>
                    </div>
                    <div className="form-group col-lg-6">
                      <label htmlFor="exampleInputEmail1">City</label>
                      <input type="text" className="form-control" id="city" placeholder="Enter City Name " name="city" onChange={((e) => this.handleChangeForm(e))}/>
                    </div>  
                    <div className="form-group col-lg-6">
                      <label htmlFor="exampleInputEmail1">State</label>
                      <input type="text" className="form-control" id="state" placeholder="Enter State Name" name="state" onChange={((e) => this.handleChangeForm(e))}/>
                    </div> 
                    <div className="form-group col-lg-6">
                      <label htmlFor="exampleInputEmail1">Postcode / ZIP</label>
                      <input type="text" className="form-control" id="pincode" placeholder="Enter your zipcode" name="pincode" onChange={((e) => this.handleChangeForm(e))}/>
                    </div>  
                    <div className="form-group col-lg-6">
                      <label htmlFor="exampleInputEmail1">Phone</label>
                      <input type="text" className="form-control" id="mobile" placeholder="Enter Mobile Number" maxlength="10" require="required" name="mobile" onChange={((e) => this.handleChangeForm(e))}/>
                    </div>
                    <div className="form-group col-lg-12">
                      <label htmlFor="exampleInputEmail1">Email Address</label>
                      <input type="email" className="form-control" id="email" placeholder="Enter Your Email Address"  onChange={((e) => this.handleChangeForm(e))}/>
                      <small id="Help2" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="input-group form-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <input type="checkbox" id="checkbox" aria-label="placeholder text" onChange={((e) => this.handleChange(e))}/>
                        </div>
                      </div>
                      <input type="text" className="form-group form-control" placeholder="Shipping & Billing addresses are different" readonly="readonly"/>
                    </div>
                    {/*<div class="form-group col-lg-12 p-tb15"> <button type="submit" class="btn btn-dark rounded-pill">Confirm Address</button></div>*/}
                  </div>
                  <div className="row" style={style} id="billing">
                    <div className="form-group col-lg-6">
                      <label htmlFor="exampleInputEmail1">First Name</label>
                      <input type="text" className="form-control" id="bfname" name='bfname' placeholder="First Name" value={this.state.first_name}/>
                    </div>
                    <div className="form-group col-lg-6">
                      <label htmlFor="exampleInputEmail1">Last Name</label>
                      <input type="text" className="form-control" id="blname" name="blname" placeholder="Last Name" />
                    </div>
                    <div className="form-group col-lg-12">
                      <label htmlFor="exampleInputEmail1">Address line 1</label>
                      <input type="text" className="form-control" id="baddress1" name="baddress1" placeholder="Enter address line-1" />
                    </div> 
                    <div className="form-group col-lg-12">
                      <label htmlFor="exampleInputEmail1">Address Line 2</label>
                      <input type="text" className="form-control" id="baddress2" name="baddress2" placeholder="Enter address line-2" />
                    </div>
                    <div className="form-group col-lg-6">
                      <label htmlFor="exampleInputEmail1">City</label>
                      <input type="text" className="form-control" id="bcity" placeholder="Enter City Name " name="bcity"/>
                    </div>  
                    <div className="form-group col-lg-6">
                      <label htmlFor="exampleInputEmail1">State</label>
                      <input type="text" className="form-control" id="bstate" placeholder="Enter State Name" name="bstate"/>
                    </div> 
                    <div className="form-group col-lg-6">
                      <label htmlFor="exampleInputEmail1">Postcode / ZIP</label>
                      <input type="text" className="form-control" id="bpincode" placeholder="Enter your zipcode" name="bpincode"/>
                    </div>  
                    <div className="form-group col-lg-6">
                      <label htmlFor="exampleInputEmail1">Phone</label>
                      <input type="text" className="form-control" id="bmobile" placeholder="Enter Mobile Number" maxlength="10" require="required" name="bmobile"/>
                    </div>
                    <div className="form-group col-lg-12">
                      <label htmlFor="exampleInputEmail1">Email Address</label>
                      <input type="email" className="form-control" id="bemail" placeholder="Enter Your Email Address" name="bemail" />
                      <small id="Help2" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    {/*<div class="form-group col-lg-12 p-tb15"> <button type="submit" class="btn btn-dark rounded-pill">Confirm Address</button></div>*/}
                  </div>
               
              </div>
            </div>
            <div className="col-lg-6">
              <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Order summary </div>
              <div className="p-4">
                <p className="font-italic mb-4">Shipping and additional costs are calculated based on values you have entered.</p>
                <ul className="list-unstyled mb-4">
                  <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Order Subtotal </strong><strong>INR {this.state.cartList.subTotal}</strong></li>
                  <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">GST({this.state.cartList.gst}%)</strong><strong>INR {this.state.cartList.gstAmount}</strong></li>
                  <li className="d-flex justify-content-between py-3 border-bottom" style={{"color":"green"}}><strong className="text-muted">Offer(-)</strong><strong>INR {this.state.cartList.offerValue}</strong></li>
                  <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Total</strong>
                    <h5 className="font-weight-bold red-text">INR {this.state.cartList.total}</h5>
                  </li>
                </ul>
                {/*			  <a href="#" class="btn btn-dark rounded-pill py-2 btn-block">Procceed to checkout</a>*/}
              </div>
              <div>
                <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Make Your Payment </div>
                <div className="p-4">
                  <p className="font-italic mb-4">You can choose direct debit, credit card or net banking as your payment method.</p>
                  <div id="accordion1" role="tablist">
                    <div className="card">
                      <div className="card-header" role="tab" id="headingOne1">
                        <h5 className="mb-0"> <a data-toggle="collapse" href="#collapseOne1" role="button" aria-expanded="false" aria-controls="collapseOne1"><img src="../rudra/images/card.png" alt="card" height="30"/>  Credit / Debit / ATM Card</a> </h5>
                      </div>
                      <div id="collapseOne1" className="collapse show" role="tabpanel" aria-labelledby="headingOne1" data-parent="#accordion1">
                        <div className="card-body">
                        <form action="/echo" method="post" noValidate="novalidate" className="needs-validation">
                        <div className="form-group text-center">
                        <img src="../rudra/images/Accepted_Credit_Cards_Logos.png" alt="card" height="50"/>
                        </div>
                        <div className="form-group has-success">
                          <label htmlFor="cc-name" className="control-label mb-1">Name on card</label>
                          <input id="cc-name" name="cc-name" type="text" className="form-control cc-name" required autoComplete="cc-name" aria-required="true" aria-invalid="false" aria-describedby="cc-name-error" />
                          <span className="invalid-feedback">Enter the name as shown on credit card</span>
                        </div>
                        <div className="form-group">
                          <label htmlFor="cc-number" className="control-label mb-1">Card number</label>
                          <input id="cc-number" name="cc-number" type="tel" className="form-control cc-number identified visa" required pattern="[0-9]{16}" />
                          <span className="invalid-feedback">Enter a valid 16 digit card number</span>
                        </div>
                        <div className="row">
                          <div className="col-6">
                            <div className="form-group">
                              <label htmlFor="cc-exp" className="control-label mb-1">Expiration</label>
                              <input id="cc-exp" name="cc-exp" type="tel" className="form-control cc-exp" required placeholder="MM / YY" autoComplete="cc-exp" />
                              <span className="invalid-feedback">Enter the expiration date</span>
                            </div>
                          </div>
                          <div className="col-6">
                            <label htmlFor="x_card_code" className="control-label mb-1">Security code</label>
                            <div className="input-group">
                              <input id="x_card_code" name="x_card_code" type="tel" className="form-control cc-cvc" required autoComplete="off" />
                              <span className="invalid-feedback order-last">Enter the 3-digit code on back</span>
                              <div className="input-group-append">
                                <div className="input-group-text">
                                  <span className="fa fa-question-circle fa-lg" data-toggle="popover" data-container="body" data-html="true" data-title="Security Code" data-content="<div class='text-center one-card'>The 3 digit code on back of the card..<div class='visa-mc-cvc-preview'></div></div>" data-trigger="hover" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                        </div>
                        </form>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" role="tab" id="headingTwo1">
                        <h5 className="mb-0"> <a className="collapsed" data-toggle="collapse" href="#collapseTwo1" role="button" aria-expanded="false" aria-controls="collapseTwo1"><img src="../rudra/images/netbanking.png" alt="Netbanking" height="30"/> Net Banking Payments </a> </h5>
                      </div>
                      <div id="collapseTwo1" className="collapse" role="tabpanel" aria-labelledby="headingTwo1" data-parent="#accordion1">
                        <div className="card-body"><input type="radio" name="netbanking" id="netbanking" value="2"/>&nbsp;NetBanking Payment</div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" role="tab" id="headingThree1">
                        <h5 className="mb-0"> <a className="collapsed" data-toggle="collapse" href="#collapseThree1" role="button" aria-expanded="false" aria-controls="collapseThree1"><img src="../rudra/images/wallet.png" alt="wallet" height="30"/> Wallets Payemnts</a> </h5>
                      </div>
                      <div id="collapseThree1" className="collapse" role="tabpanel" aria-labelledby="headingThree1" data-parent="#accordion1">
                        <div className="card-body">
                        <label><input type="radio" name="netbanking"  value="31"/>&nbsp;&nbsp;<img src="../rudra/images/images.jpeg" alt="paytm" height="30"/>&nbsp;Paytm&nbsp;&nbsp;</label>
                        <label><input type="radio" name="netbanking"  value="32"/>&nbsp;&nbsp;<img src="../rudra/images/phonepe.png" alt="phonepe" height="30"/> &nbsp;PhonePe&nbsp;&nbsp;</label>
                        <label><input type="radio" name="netbanking"  value="33"/>&nbsp;&nbsp;<img src="../rudra/images/gapy.png" alt="gpay" height="30"/>&nbsp;Google Pay&nbsp;&nbsp;</label>
                        <label><input type="radio" name="netbanking"  value="33"/>&nbsp;&nbsp;<img src="../rudra/images/icon_plugin_sm.png" alt="gpay" height="30"/>&nbsp;Amazone Pay&nbsp;&nbsp;</label>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" role="tab" id="headingThree11">
                        <h5 className="mb-0"> <a className="collapsed" data-toggle="collapse" href="#collapseThree11" role="button" aria-expanded="false" aria-controls="collapseThree11"><img src="../rudra/images/bank.png" alt="wallet" height="30"/> Bank Transfer</a> </h5>
                      </div>
                      <div id="collapseThree11" className="collapse" role="tabpanel" aria-labelledby="headingThree11" data-parent="#accordion1">
                        <div className="card-body">Content for Accordion Panel 3</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-tb20"><button type="submit" className="btn btn-dark" id="paybtn">Pay Now</button></div>
                </div>
              </div>
            </div>
          
          </div>
          </form>
        </div>
        <br/>
        <br/><br/>
       
        
      <Footer/>
        </div>
    )
  }
}

export default ExpCheckout;

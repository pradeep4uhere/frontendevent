import React from 'react';
import Select from 'react-select';
import Header from '../InnerHeader';
import Footer from '../Footer';
import Constants  from '../config/Constants'
import axios from 'axios'
import $ from 'jquery'
import Moment from 'react-moment';  
var serialize = require('form-serialize');
var ip = require('ip');
const getCartList = Constants.GET_CART_LIST;
const addToCartUrl  = Constants.ADD_TO_CART_URL;
const removeFromCartUrl  = Constants.REMOVE_ITEM_FROM_CART;
const updateFromCartUrl  = Constants.UPDATE_ITEM_FROM_CART;
const checkOfferUrl      = Constants.CHECK_OFFER;
const urlStr = Constants.GENERAL_SETTING_URL;


const token     = localStorage.getItem('token');
const options = [{ value: '1', label: '1' },{ value: '2', label: '2' },{ value: '3', label: '3' },{ value: '4', label: '4' },{ value: '5', label: '5' },{ value: '6', label: '6' },  { value: '7', label: '7' },  { value: '8', label: '8' },  { value: '9', label: '9' },  { value: '10', label: '10' },  { value: '11', label: '11' },  { value: '12', label: '12' },  { value: '13', label: '13' },  { value: '14', label: '14' },  { value: '15', label: '15' },  { value: '16', label: '16' },  { value: '17', label: '17' },  { value: '18', label: '18' },  { value: '19', label: '19' },  { value: '20', label: '20' },  { value: '21', label: '21' },  { value: '22', label: '22' },  { value: '23', label: '23' },  { value: '24', label: '24' },  { value: '25', label: '25' },  { value: '26', label: '26' },  { value: '27', label: '27' },  { value: '28', label: '28' },  { value: '29', label: '29' },  { value: '30', label: '30' },  { value: '31', label: '31' },  { value: '32', label: '32' },  { value: '33', label: '33' },  { value: '34', label: '34' },  { value: '35', label: '35' },  { value: '36', label: '36' },  { value: '37', label: '37' },  { value: '38', label: '38' },  { value: '39', label: '39' },  { value: '40', label: '40' },  { value: '41', label: '41' },  { value: '42', label: '42' },  { value: '43', label: '43' },  { value: '44', label: '44' },  { value: '45', label: '45' },  { value: '46', label: '46' },  { value: '47', label: '47' },  { value: '48', label: '48' },  { value: '49', label: '49' },  { value: '50', label: '50' }]; 
class Cart extends React.Component {
  constructor() {
        super();
        this.state={
          optionValue: [],
          ipAdress : ip.address(),
          cartList : [],
          msg      : "",
          classStr : "",
          classOfferStr:"",
          msgOffer : "",
          offervalue: "0.00",
          gstAmount: "0.00",
          offerId : "",
          subTotalAfterGst:"0.00",
          user_id: sessionStorage.getItem('userid'),
          settingDetails:{},
          style:"none",
          styleDefault:"block"

        }
        
        this.getCartList               = this.getCartList.bind(this);
        this.handleChange              = this.handleChange.bind(this);
        this.handleRemove              = this.handleRemove.bind(this); 
        this.updateCart                = this.updateCart.bind(this);
        this.handleOfferSubmit         = this.handleOfferSubmit.bind(this);
  }



  handleRemove(e,id){
    e.preventDefault()
    var uid      = ip.toLong(this.state.ipAdress);
    if(sessionStorage.getItem('userid')){
      var uid      = this.state.user_id;
    }
    var tokenStr = token;
    const formData = {
        token    : tokenStr,
        uid      : uid,
        itemId   : id
    }
    axios.post(removeFromCartUrl, formData)
    .then((response) => {
      if(response.data.code==200) {
            this.setState({msg:"Item removed, cart is updated."});
            this.setState({classStr : "alert alert-success"});
            this.getCartList();
      }else{
        window.location.reload();
        console.log("Response Error");
      }
    })
    .catch((err) => {
      console.log("Catch Error");
    })
  }


  handleOfferSubmit(e){
    e.preventDefault()
    var code = $("#offer").val();
    var uid      = ip.toLong(this.state.ipAdress);
    if(sessionStorage.getItem('userid')){
      var uid      = this.state.user_id;
    }
    var tokenStr = token;
    const formData = {
        token    : tokenStr,
        uid      : uid,
        code     : code
    }
    //alert(code);
    if(code==''){
      this.setState({msgOffer:"Please enter coupon code"});
      this.setState({classOfferStr : "alert alert-danger"});
    }else{
      axios.post(checkOfferUrl, formData)
      .then((response) => {
        if(response.data.code==200) {
          console.log(response.data.data.offerValue);
            this.setState({offervalue:response.data.data.offerValue});
            this.setState({msgOffer:response.data.message});
            this.setState({classOfferStr : "alert alert-success"});
            this.setState({offerId:response.data.data.id});
            this.getCartList();
        }else{
          console.log("Response Error");
          this.setState({offervalue:"0.00"});
          this.setState({msgOffer:response.data.message});
          this.setState({classOfferStr : "alert alert-danger"});
        }
      })
      .catch((err) => {
        console.log("Catch Error");
      })
    }

  }




  // handleChange(e,id,i){
  //   console.log(e.value)
  //   let selectedOption = [];
  //   this.state.cartList.cart.forEach((val,k) => {
  //     if(k==i){
  //       selectedOption[k] = { value: e.value, label: e.value };
  //     }else{
  //       selectedOption[k] = { value: val.quantity, label: val.quantity  };
  //     }
  //   });
  //   this.setState({optionValue:selectedOption});
  //   this.updateCart(id,e.value);
  // };



  handleChange(e,id,i){
    let selectedOption = [];
    let value = $("#"+id).val();
    this.state.cartList.cart.forEach((val,k) => {
      if(k==i){
        selectedOption[k] = value;
      }else{
        selectedOption[k] = val.quantity;
      }
    });
    this.setState({optionValue:selectedOption});
    this.updateCart(id,value);
  };

  updateCart(id,quantity){
    var uid      = ip.toLong(this.state.ipAdress);
    if(sessionStorage.getItem('userid')){
      var uid      = this.state.user_id;
    }
    var tokenStr = token;
    const formData = {
        token    : tokenStr,
        uid      : uid,
        itemId   : id,
        quantity : quantity
    }
    axios.post(updateFromCartUrl, formData)
    .then((response) => {
      console.log(response);
        if(response.data.code==200) {
            this.setState({msg:"Item quantity is updated."});
            this.setState({classStr : "alert alert-success"});
            this.getCartList();

            // this.setState({
            //       cartList    : response.data
            //   });
            //   let selectedOption = [];
            //   this.state.cartList.cart.forEach((val,i) => {
            //     selectedOption[i] = { value: val.quantity, label: val.quantity };
            //   });
              
              //this.setState({optionValue:selectedOption});
            


      }else{
        console.log("Response Error");
      }
    })
    .catch((err) => {
      console.log("Catch Error");
    })
  }


   /******Get all the user list here********/   
   getCartList(){
    var uid      = ip.toLong(this.state.ipAdress);
    if(sessionStorage.getItem('userid')){
      var uid      = this.state.user_id;
    }
    //alert(uid);
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
                cartList    : response.data,
                style       : "block",
                styleDefault: "none"
              });
              let selectedOption = [];
              this.state.cartList.cart.forEach((val,i) => {
                //selectedOption[i] = { value: val.quantity, label: val.quantity };
                selectedOption[i] = val.quantity;
              });
              
              this.setState({optionValue:selectedOption});
              this.setState({style:"block"});


      }else{
        this.setState({cartList:[]});
        console.log("Response Error");
      }
    })
    .catch((err) => {
      console.log("Catch Error");
    })
}


 /******Get all the user list here********/   
 getSettingList(){
  var tokenStr = token;
  const formData = {
      token    : tokenStr,
      urlParams: this.state.urlParams
  }
  axios.post(urlStr, formData)
  .then((response) => {
    if(response.data.code==200) {
          this.setState({
            settingDetails    : response.data.data.setting,
            reviewViedo       : response.data.data.review,
          });
          //console.log(response.data.data);
    }
    else
    {
      this.setState({isMsg:true});
      this.setState({className:'error'});
    }
  })
  .catch((err) => {
      this.setState({isMsg:true});
      this.setState({className:'error'});
  })
}



  componentDidMount(){
    this.getSettingList();
    this.getCartList();
    
  }

  render() {
    const { optionValue } = this.state;
    const { cartList }  = this.state;
    const { msg } = this.state;
    const { classStr } = this.state;
    const { classOfferStr } = this.state;
    const { msgOffer } = this.state;
    const { offervalue } = this.state;
    const { gstAmount } = this.state;
    let settingDetails =  this.state;
    let data = this.state.settingDetails;
    let price = (data.length>0) ? data[14].options_value : '0.00';

    //let cartListItem = this.state.cartList;
    let cartItemArray = [];
    console.log("selectedOption",this.state.cartList.cart);
    
    if(this.state.cartList.cart){
       cartItemArray = this.state.cartList.cart.map((val,i) =>   
            <tr>
            <th scope="row">
              <div className="p-2">
                <img src={val.attributes.event_image} alt="" width={70} className="img-fluid rounded shadow-sm" />
                <div className="ml-3 d-inline-block align-middle">
                  <h5 className="mb-0"> <a href={"/day-exp-detail/"+val.attributes.event_id+"-"+val.attributes.event_timing_id} className="text-dark d-inline-block">{val.name}</a></h5>
                  <span className="text-muted font-weight-normal font-italic">Sitting Type: {val.attributes.seating_type_name}</span>
                </div>
              </div>
            </th>
            <td className="align-middle"><Moment format="DD-MMM-YYYY">{val.attributes.event_booking_date}</Moment></td>
            <td className="align-middle">{price}{val.price}</td>
            <td className="align-middle">
            {/* <Select
                value={this.state.optionValue[i]}
                onChange={((e) => this.handleChange(e,val.attributes.event_timing_id+'-'+val.attributes.seat_type_id,i))}
                options={options}
                id={"quantity"+val.attributes.event_timing_id+'-'+val.attributes.seat_type_id}
              /> */}
               <div className="quantity buttons_added">
               <input type="button" defaultValue="-" className="minus" onClick={((e) => this.handleChange(e,val.attributes.event_timing_id+'-'+val.attributes.seat_type_id,i))} />
               <input type="number" step={1} min={1} max value={optionValue[i]} id={val.attributes.event_timing_id+'-'+val.attributes.seat_type_id} title="Qty" className="input-text qty text" size={4} pattern inputMode  onClick={((e) => this.handleChange(e,val.attributes.event_timing_id+'-'+val.attributes.seat_type_id,i))}/>
               <input type="button" defaultValue="+" className="plus" onClick={((e) => this.handleChange(e,val.attributes.event_timing_id+'-'+val.attributes.seat_type_id,i))}/>
               </div>
              </td>
            <td className="align-middle"><a href="#" className="text-dark" onClick={((e) => this.handleRemove(e,val.attributes.event_timing_id+'-'+val.attributes.seat_type_id))}><i className="fa fa-trash" /></a>
            </td>
          </tr>
      );
    }
    return (
        <div>
          <Header/>
          <div className="container-fluid bg-maroon p-tb15" >
            <div className="container">
            <h1 className="text-center white-text mt-85">Cart 
            </h1>
            <div className="bg-whitegrid"><p className="sep-white" /></div>
            <h2 className="text-center  white-text"  style={{"display":this.state.style}}>{this.state.cartList.TotalItem} items are added to your cart. You can edit your cart below or <p className="p-tb20">
               <a href="/" className="btn btn-red btn-lg btn-red-border1">CONTINUE SHOPPING</a></p>
            </h2>
            <h2 className="text-center  white-text"  style={{"display":this.state.styleDefault}}>No items are added to your cart.  <p className="p-tb20">
               <a href="/" className="btn btn-red btn-lg btn-red-border1">CONTINUE SHOPPING</a></p>
            </h2>
            
            </div>
        </div>
        
        <div className="container p-tb15" style={{"display":this.state.style}}>
        <div className="row" >
          <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
            <div className="col-lg-12">	  
            <h3 className="text-center p-tb15">Complete your order, You can use<span className="red-text"> Coupon For Discount </span> on this booking.</h3></div>
            {/* Shopping cart table */}
            <div className="table-responsive">
              <div className={classStr}>{msg}</div>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col" className="border-0 bg-light">
                      <div className="p-2 px-3 text-uppercase">Packages</div>
                    </th>
                    <th scope="col" className="border-0 bg-light">
                      <div className="py-2 text-uppercase">Booking Date</div>
                    </th>
                    <th scope="col" className="border-0 bg-light">
                      <div className="py-2 text-uppercase">Price</div>
                    </th>
                    <th scope="col" className="border-0 bg-light">
                      <div className="py-2 text-uppercase">Quantity</div>
                    </th>
                    <th scope="col" className="border-0 bg-light">
                      <div className="py-2 text-uppercase">Remove</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  
                  {cartItemArray}
                
                </tbody>
              </table>
            </div>
            {/* End */}
          </div>
        </div>
        <div className="row py-5 p-4 bg-white rounded shadow-sm" >
          <div className="col-lg-6">
            <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Coupon code</div>
            <div className="p-4">
              <p className="font-italic mb-4">If you have a coupon code, please enter it in the box below</p>
              <form role="form" onSubmit={this.handleOfferSubmit}  id="form-offer">
              <div className="input-group  border p-2">
                <input type="text" placeholder="Apply coupon" aria-describedby="button-addon3" className="form-control border-0" id="offer"/>
                <div className="input-group-append border-0">
                  <button id="button-addon3" type="submit" className="btn btn-dark  px-4"><i className="fa fa-gift mr-2" />Apply Coupon</button>
                </div>
                
              </div>
              <div className={classOfferStr} style={{"padding":"5px","font-size":"12px","margin-top":"2px"}}>{msgOffer}</div>
              </form>
            </div>
            <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Instructions for seller</div>
            <div className="p-4">
              <p className="font-italic mb-4">If you have some information for the seller you can leave them in the box below</p>
              <textarea name cols={30} rows={2} className="form-control" defaultValue={""} />
            </div>
          </div>
          <div className="col-lg-6">
            
            <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Order summary </div>
            <div className="p-4">
              <p className="font-italic mb-4">Shipping and additional costs are calculated based on values you have entered.</p>
              <ul className="list-unstyled mb-4">
                <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Order Subtotal </strong><strong>{price}{this.state.cartList.subTotal}</strong></li>
                
                <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">GST({this.state.cartList.gst}%)</strong><strong>{price}{this.state.cartList.gstAmount}</strong></li>
                <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Subtotal </strong><strong>{price}{this.state.cartList.subTotalAfterGst}</strong></li>
                <li className="d-flex justify-content-between py-3 border-bottom" style={{'color':'green'}}><strong className="text-muted">Offer(-)</strong><strong>{price}{this.state.offervalue}</strong></li>
                <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Total</strong>
                  <h5 className="font-weight-bold red-text">{price}{this.state.cartList.total}</h5>
                </li>
              </ul><a href={"checkout?chk="+this.state.cartList.oid} className="btn btn-dark py-2 btn-block">Proceed to checkout</a>
            </div>
          </div>
        </div>
         </div>
        <br/>
        <br/><br/>
       
        
      <Footer/>
        </div>
    )
  }
}

export default Cart;

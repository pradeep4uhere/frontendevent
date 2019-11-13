import React from 'react';
import Header from '../../InnerHeader';
import Footer from '../../Footer';
import Constants  from '../../config/Constants'
import axios from 'axios'
import $ from 'jquery'
var serialize = require('form-serialize');
var ip = require('ip');
const token     = localStorage.getItem('token');
const urlStrUpdate    = Constants.USER_UPDATE_URL;
class ChangePassword extends React.Component {
  constructor(props) {
        super(props);
        this.state={
          ipAdress      : ip.address(),
          user_id       : sessionStorage.getItem('userid'),
          first_name    : sessionStorage.getItem('first_name'),
          isLoggedIn    : false,
          user_id       : sessionStorage.getItem('userid'),
          errorMessage  : '',
          isError       :  false,
          errorMessage  : '',
          isError       :  false,
          isMsg         :false,
          className     :'',
          oldpwd        :'',
          pwd           :'',
          cpwd          :'',

        }
        this.handleSubmit =  this.handleSubmit.bind(this);
        this.handleChange =  this.handleChange.bind(this);
  }



  handleChange(e) {
    var strid = e.target.id;
    if(strid=='oldpwd'){
        this.setState({oldpwd : e.target.value});
    }
    if(strid=='pwd'){
        this.setState({pwd : e.target.value});
    }
    if(strid=='cpwd'){
        this.setState({cpwd : e.target.value});
    }
}




   /**********Login Form Handle********************/
   handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    // const body = serialize(form, {hash: true,empty:true});
    const oldpwd = this.state.oldpwd;
    const pwd    = this.state.pwd;
    const cpwd   = this.state.cpwd;
    if(oldpwd==''){
      this.setState({isMsg:true});
      this.setState({className:'error'});
      this.setState({
        message     :  "!! Please Enter Old Password First !!",
        classstr    : 'alert alert-danger',
        className   : 'danger',
        isMsg       : true,
      });
      return false;
    }
    if(pwd==''){
      this.setState({isMsg:true});
      this.setState({className:'error'});
      this.setState({
        message     :  "!! Please Enter New Password First !!",
        classstr    : 'alert alert-danger',
        className   : 'danger',
        isMsg       : true,
      });
      return false;
    }
    if(cpwd==''){
      this.setState({isMsg:true});
      this.setState({className:'error'});
      this.setState({
        message     :  "!! Please Enter Confirm New Password First !!",
        classstr    : 'alert alert-danger',
        className   : 'danger',
        isMsg       : true,
      });
      return false;
    }
    if(pwd!=cpwd){
      this.setState({isMsg:true});
      this.setState({className:'error'});
      this.setState({
        message     :  "!! Password didn't matched !!",
        classstr    : 'alert alert-danger',
        className   : 'danger',
        isMsg       : true,
      });
    }else{
    const formData = {
        token           : token,
        body            : {
                            oldpwd        : oldpwd,
                            pwd           : pwd,
                            cpwd          : cpwd,
                            id              : sessionStorage.getItem('userid'),
                          }
      }
    axios.post(urlStrUpdate, formData)
      .then((response) => {
        if(response.data.data.code==200) {
          this.setState({
                message     : response.data.data.message,
                classstr    : 'alert alert-success',
                className   : 'success',
                isMsg       : true,
                successShow : true,
                errorShow   : false,
          });
          $("#oldpwd").val('');
          $("#pwd").val('');
          $("#cpwd").val('');
          }
        else
        {
              this.setState({isMsg:true});
              this.setState({className:'error'});
              this.setState({
                message     :  response.data.data.message,
                classstr    : 'alert alert-danger',
                className   : 'danger',
                isMsg       : true,
              });
          
        }
      })
      .catch((err) => {
          
          this.setState({message:err});
          this.setState({className:'error'});
          this.setState({ isMsg: true });
          this.setState({classstr: 'alert alert-danger'});
      })
    }
    
}



  render() {
    const { first_name }  = this.state;
    const style = this.state.isShow ? {display:'block'}:{display:'none'};
    const { isMsg }         = this.state;
    const { classstr }      = this.state;
    const { message }       = this.state;
    const { isOverlay }     = this.state;
    return (
        <div>
         
        <form className="form-horizontal" onSubmit={this.handleSubmit} id="login-form" >
        <div className="row">
        <div className="col-md-6">
        {(isMsg)?(<div className={classstr}>{message}</div>):(<div></div>)}
        <div className="row">
        <div className="col-md-12 ">
            <div class="bg bg-danger text-white  px-4 py-3 text-uppercase font-weight-bold">Change Password</div>
        </div>
          <div className="form-group col-md-12">
            <label htmlFor="exampleInputEmail1">Old Password</label>
            <input type="password" className="form-control" id="oldpwd" placeholder="Enter Old Password" onChange = { this.handleChange.bind(this)}/>
          </div>
          <div className="form-group col-md-12">
            <label htmlFor="exampleInputEmail1">New Password</label>
            <input type="password" className="form-control" id="pwd" placeholder="Enter New Password" onChange = { this.handleChange.bind(this)}/>
          </div>
          <div className="form-group col-lg-12">
            <label htmlFor="exampleInputEmail1">Confirm New Password</label>
            <input type="password" className="form-control" id="cpwd" placeholder="Enter Confirm New Password" onChange = { this.handleChange.bind(this)}/>
          </div> 
         </div>
          <hr/>
          <div className="input-group form-group">
         
            <div className="input-group-prepend pull-right">
                <input type="button" className="btn btn-danger" value="Cancel"/>&nbsp;
                <input type="submit" className="btn btn-success" aria-label="placeholder text" />
            </div>
          </div>
          {/*<div class="form-group col-lg-12 p-tb15"> <button type="submit" class="btn btn-dark rounded-pill">Confirm Address</button></div>*/}
        </div>
        </div>
      </form>
        </div>
    )
  }
}

export default ChangePassword;

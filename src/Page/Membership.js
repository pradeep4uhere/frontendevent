import React from 'react';
import Header from '../InnerHeader';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import Constants  from '../config/Constants';
import axios from 'axios'
import $ from 'jquery'
const urlStr = Constants.GET_MEMBERSHIP_LIST;
const token     = localStorage.getItem('token');
class Membership extends React.Component {
  constructor() {
        super();
        this.state={
          url         :'login',
          user_id     : localStorage.getItem('userid'),
          first_name  : localStorage.getItem('first_name'),
          last_name   : localStorage.getItem('last_name'),
          email       : localStorage.getItem('email'),
          phone       : localStorage.getItem('phone'),
          isLoggedIn  : false,
          userDetails : localStorage.getItem('userDetails'),
          membership:[],
          header:['bg-info','bg-danger','bg-success'],
          headerT:['basic-info','basic-danger','basic-success'],
          setting:[],
          settingPrice:'INR',
          membershipTag:'We have membership plans available for you though so you can avail our best services at RudraXp. Our membership plans will offer you the following benefits:'
         
        }
        
  }


  /******Get all the user list here********/   
  getMembershipList(){
    var tokenStr = token;
    const formData = {
        token    : tokenStr,
        urlParams: this.state.urlParams
    }
    axios.post(urlStr, formData)
    .then((response) => {
      if(response.data.code==200) {
            this.setState({
              membership    : response.data.membership,
              settingPrice  : response.data.setting[14]['options_value'],
              membershipTag: response.data.setting[12]['options_value'],
            });
            console.log(this.state.membership);
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
    window.scrollTo(0, 0);
    this.getMembershipList();
  }

  render() {
    const {membership} = this.state;
    const {header}= this.state;
    const {headerT}= this.state;
    const {settingPrice}= this.state;
    const {membershipTag}= this.state;
    const {user_id}= this.state;
    let url = this.state.url;
    if(user_id=='null' || user_id==''){
      url ='login/membership';
    }
    if(user_id>0){
      url ='membershipcheckout';
    }

    let membershipStr = "";
    if(this.state.membership.length>0){
      membershipStr = this.state.membership.map((val,i) =>
                      
                      <div className="col-xl-4">
                      <div className="card text-center card-bg1">
                        <div className={"basic-header "+ header[i]}><p className="service-type">{val.name}</p> <h2 className="white-text">{settingPrice}{val.monthly_price}/<span className="service-type white-text">MO</span></h2></div>
                        <div className={"basic-triangle "+headerT[i]} /> 
                        <div className="card-body card-pad">
                         { val.membership_feature.map((vall,i) =>
                          <div className="row first-row">
                            <div className="col-xl-10 col-md-10 col-sm-10 col-10">{vall.feature_title}</div>
                            {(vall.status==1)?(
                              <div className="col-xl-2 col-md-2 col-sm-2 col-2"><img src="../rudra/images/ico_yes.png" alt="" /></div>
                            ):(
                              <div className="col-xl-2 col-md-2 col-sm-2 col-2"><img src="../rudra/images/ico_no.png" alt="" /></div>
                            )}
                            
                         </div>
                          )}
                        </div>
                          {(user_id>0)?(
                            <div className="card-footer text-muted"><a href={url+'/'+val.id} className="btn btn-sm btn-red">SUBSCRIBE NOW</a></div>
                          ):(
                            <div className="card-footer text-muted"><a href={url} className="btn btn-sm btn-red">SUBSCRIBE NOW</a></div>
                          )}
                        
                      </div>	
                    </div>
                  );
      }
    
    return (
        <div>
          <Header/>
              <div className="container-fluid bg-maroon p-tb50">
                <div className="container">
                  <h1 className="text-center white-text mt-85">Membership Plan</h1>
                  <div className="bg-whitegrid"><p className="sep-white" /></div>
                  <h2 className="text-center p-b50 white-text">{membershipTag}</h2>
                </div>
            </div>
            <div className="container containerBox">
            <div className="col-lg-12 m-ft66 text-center">
              <div className="row m-b-50">
                {membershipStr}
              </div>
              </div>
            </div>
          <Footer/>
        </div>
    )
  }
}

export default Membership;

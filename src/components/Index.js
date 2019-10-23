import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import ViedoReview from '../ViedoReview';
import PopularEvent from '../PopularEvent';
import Constants  from '../config/Constants'
import axios from 'axios'

const urlStr = Constants.GENERAL_SETTING_URL;
const token     = localStorage.getItem('token');

class Index extends React.Component{
    constructor() {
        super();
        this.state = {
            settingDetails:{},
            reviewViedo:{}
        };
        this.getSettingList       = this.getSettingList.bind(this);
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
  }

    render(){
        let settingDetails =  this.state;
        let data = this.state.settingDetails;
        let rdata = this.state.reviewViedo;
        let title = (data.length>0) ? data[9].options_value : '';
        //console.log(rdata);
        return(
        <div>
        <Header settingDetails={settingDetails}/>
        <div className="container p-tb50">
          <h1 className="text-center">{title}</h1>
          <p className="sep" />
          <p className="text-center"><Link to="aboutus" className="link1">Know More</Link></p>
        </div>
        <PopularEvent/>
        <ViedoReview reviewList={rdata}/>
        <Footer/>
        </div>
      );
    };
}
export default Index;

import React from 'react';
import Header from '../InnerHeader';
import Footer from '../Footer';
import ViedoReview from '../AllViedoReview';
import Constants  from '../config/Constants'
import axios from 'axios'
const urlStr = Constants.GENERAL_SETTING_URL;
const token     = localStorage.getItem('token');
class Review extends React.Component {
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
                reviewViedo       : response.data.data.allreview,
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
    window.scrollTo(0, 0);
    this.getSettingList();
  }
  render() {
    let settingDetails =  this.state;
        let data = this.state.settingDetails;
        let rdata = this.state.reviewViedo;
        let title = (data.length>0) ? data[18].options_value : '';
    return (
        <div>
          <Header/>
          <div className="container-fluid bg-maroon p-tb50">
          <div className="container">
            <h1 className="text-center white-text mt-85">Reviews
            </h1>
            <div className="bg-whitegrid"><p className="sep-white" /></div>
            <h2 className="text-center  white-text">{title}</h2>
          </div>
        </div>
        <div className="container">
          <div className="row p-t50 p-b50">
            <ViedoReview reviewList={rdata}/>
          </div>
        </div>
      <br/><br/><br/>
       
        
      <Footer/>
        </div>
    )
  }
}

export default Review;

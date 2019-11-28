import React from 'react';
import Header from '../InnerHeader';
import Footer from '../Footer';
import Constants  from '../config/Constants'
import axios from 'axios'
import $ from 'jquery'
const urlStr = Constants.GENERAL_PAGE_SETTING_URL;
const token     = localStorage.getItem('token');
class AboutUs extends React.Component {
  constructor() {
        super();
        this.state={
          pageDetails:{},
          AboutUsTag:''
        }

        this.getSettingList               = this.getSettingList.bind(this);
  }



 /******Get all the user list here********/   
 getSettingList(){
  var tokenStr = token;
  const formData = {
      token    : tokenStr,
      option   : {'page':'about_us'}
  }
  axios.post(urlStr, formData)
  .then((response) => {
    console.log(response.data);
    if(response.data.code==200) {
          this.setState({
            AboutUsTag        : response.data.setting[22].options_value,
            pageDetails       : response.data.page,
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


  componentDidMount() {
    window.scrollTo(0, 0);
    this.getSettingList();
  }

  render() {
    const {pageDetails}= this.state;
    const {AboutUsTag}=this.state;

    return (
        <div>
          <Header/>
          <div className="container-fluid bg-maroon p-tb50">
            <div className="container">
            <h1 className="text-center white-text mt-85">{pageDetails.title}
            </h1>
            <div className="bg-whitegrid"><p className="sep-white" /></div>
            <h2 className="text-center p-b50 white-text">
            {AboutUsTag}
            </h2>
            </div>
        </div>
        <br/><br/><br/><br/>
        <div className="container">
        <div className="col-lg-12 m-ft66">
          <div className="row m-t-50">
            <div className="col-xl-12">
              <div dangerouslySetInnerHTML={{ __html: pageDetails.description }}/>
            </div>
            
          
          </div>
        </div>
      </div>
        
      <Footer/>
        </div>
    )
  }
}

export default AboutUs;

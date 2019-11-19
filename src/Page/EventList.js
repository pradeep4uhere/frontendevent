import React from 'react';
import Constants  from '../config/Constants';
import axios from 'axios'
import $ from 'jquery'
import Header from '../InnerHeader';
import Footer from '../Footer';
const urlStr = Constants.GET_ALL_EVENT_LIST;
const token     = localStorage.getItem('token');
class EventList extends React.Component {
  constructor() {
        super();
        this.state={
                    eventFinalArr : [],
                    nextUrl : '',
                    eventDetails:[],
                    total:0,
                    setting:[],
                    next_page:0

                  }
          this.handleClick  = this.handleClick.bind(this);
  }




/******Get all the user list here********/   
getBannerList(){
  var tokenStr = token;
  const formData = {
      token    : tokenStr,
      urlParams: this.state.urlParams,
      next_page: this.state.next_page
  }
  axios.post(urlStr, formData)
  .then((response) => {
    if(response.data.code==200) {
          this.setState({
            eventFinalArr     : response.data.eventFinalArr,
            next_page           : response.data.next_page,
            total             : response.data.total,
            experiencesTag    : response.data.setting[21].options_value
          });
          console.log(response.data.eventPaginationData);

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
    $('#noloadMore').hide();
    this.getBannerList();
  }


  handleClick(e) {
    e.preventDefault();
    let next_page = this.state.next_page;
    var tokenStr = token;
    const formData = {
      token    : tokenStr,
      urlParams: this.state.urlParams,
      next_page: next_page
    }
    axios.post(urlStr, formData)
    .then((response) => {
      if(response.data.code==200) {
            this.setState({
              next_page         : response.data.next_page,
              eventDetails      : response.data.eventFinalArr
            });
            //this.state.eventDetails.push(response.data.eventFinalArr);

           console.log("New REsposmnse==",this.state.eventDetails);
           this.getMoreLoad();
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

  getMoreLoad(){
       let eventFinalStr= '';
       let data =this.state.eventDetails;
       if ('0' in data){
            let eventid1 = data[0]['event_id'];
            let details1 = data[0]['id']
            let title1   = data[0]['title']
            let place1   = data[0]['place']
            let image1   = data[0]['image']
            $("#rowStr").append('<div class="col-xl-6 padding-0 col-lg-6"><div class="list-small-placeholder"><h1 class="text-center"><a href="day-exp-detail/31-156" class="link-exp">'+title1+'</a></h1><p class="sep"></p><p class="text-center small text-uppercase">'+place1+'</p></div><div class="parent element-list wd-100"><div class="child bg-five col-lg-12" style="backgroundSize: cover;background: url(&quot;'+image1+'&quot;);"><a href="day-exp-detail/31-156"></a></div></div></div>');
       }
       if ('1' in data){
          let eventid2 = data[1]['event_id']
          let details2 = data[1]['id']
          let title2   = data[1]['title']
          let place2   = data[1]['place']
          let image2   = data[1]['image']
          $("#rowStr").append('<div class="col-xl-6 padding-0 parent1 col-lg-6 col-md-12"><div class="z-1 list-large-placeholder col-xl-12  col-lg-12 col-md-10"><h1 class=" white-text text-center"><a href="day-exp-detail/28-160" style="color: rgb(255, 255, 255); text-decoration: none;">'+title2+'</a></h1><p class="sep-white1"></p><p class="small white-text text-center text-uppercase">'+place2+'</p></div><div class="child bg-two col-lg-12 col-md-10" style="backgroundSize: cover; background: url(&quot;'+image2+'&quot;);">&nbsp;</div></div>');
        }
        if ('2' in data){
          let eventid3 = data[2]['event_id']
          let details3 = data[2]['id']
          let title3   = data[2]['title']
          let place3   = data[2]['place']
          let image3   = data[2]['image']
          $("#rowStr").append('<div class="col-xl-6 padding-0 parent1 col-lg-6 col-md-12"><div class="z-1 list-large-placeholder col-xl-12  col-lg-12 col-md-10"><h1 class=" white-text text-center"><a href="day-exp-detail/28-160" style="color: rgb(255, 255, 255); text-decoration: none;">'+title3+'</a></h1><p class="sep-white1"></p><p class="small white-text text-center text-uppercase">'+place3+'</p></div><div class="child bg-two col-lg-12 col-md-10" style="backgroundSize: cover; background: url(&quot;'+image3+'&quot;);">&nbsp;</div></div>');
        }
       if('3' in data){
            let eventid4 = data[3]['event_id']
            let details4 = data[3]['id']
            let title4   = data[3]['title']
            let place4   = data[3]['place']
            let image4   = data[3]['image']
            $("#rowStr").append('<div class="col-xl-6 padding-0 col-lg-6"><div class="list-small-placeholder"><h1 class="text-center"><a href="day-exp-detail/31-156" class="link-exp">'+title4+'</a></h1><p class="sep"></p><p class="text-center small text-uppercase">'+place4+'</p></div><div class="parent element-list wd-100"><div class="child bg-five col-lg-12" style="backgroundSize: cover;background: url(&quot;'+image4+'&quot;);"><a href="day-exp-detail/31-156"></a></div></div></div>');
      }
      if(this.state.next_page=='-1'){
        $('#loadMore').hide();
        $('#noloadMore').show();
      }else{
        $('#noloadMore').hide();
      }
    }


  render() {
    let eventFinalStr = "";
    let eventid4 = '';
    let details4 = '';
    let title4= '';
    let place4= '';
    let image4= '';
    if(this.state.eventFinalArr.length>0){
      let eventid1 = this.state.eventFinalArr[0]['event_id'];
      let details1 = this.state.eventFinalArr[0]['id'];
      let title1= this.state.eventFinalArr[0]['title'];
      let place1= this.state.eventFinalArr[0]['place'];
      let image1= this.state.eventFinalArr[0]['image'];

      let eventid2 = this.state.eventFinalArr[1]['event_id'];  
      let details2 = this.state.eventFinalArr[1]['id'];
      let title2= this.state.eventFinalArr[1]['title'];
      let place2= this.state.eventFinalArr[1]['place'];
      let image2= this.state.eventFinalArr[1]['image'];

      let eventid3 = this.state.eventFinalArr[2]['event_id'];  
      let details3 = this.state.eventFinalArr[2]['id'];
      let title3= this.state.eventFinalArr[2]['title'];
      let place3= this.state.eventFinalArr[2]['place'];
      let image3= this.state.eventFinalArr[2]['image'];

      let eventid4 = this.state.eventFinalArr[3]['event_id'];
      let details4 = this.state.eventFinalArr[3]['id'];
      let title4= this.state.eventFinalArr[3]['title'];
      let place4= this.state.eventFinalArr[3]['place'];
      let image4= this.state.eventFinalArr[3]['image'];

      eventFinalStr = 
          <div className="row" id="rowStr">
          <div className="col-xl-6 padding-0 col-lg-6">
                <div className="list-small-placeholder"> 
                  <h1 className="text-center"><a href={"day-exp-detail/"+eventid1+'-'+details1} className="link-exp">{title1}</a></h1>
                  <p className="sep" />
                  <p className="text-center small text-uppercase">{place1}</p>
                </div>
                <div className="parent element-list wd-100" onclick>
                  <div className="child bg-five col-lg-12" style={{backgroundSize: "cover !important",background: 'url('+image1+')'}}>
                    <a href={"day-exp-detail/"+eventid1+'-'+details1}></a>
                  </div>
                </div>
          </div>
           <div className="col-xl-6 padding-0 parent1 col-lg-6 col-md-12">
           <div className="z-1 list-large-placeholder col-xl-12  col-lg-12 col-md-10"> 
             <h1 className=" white-text text-center"><a href={"day-exp-detail/"+eventid2+'-'+details2} style={{"color":"#FFFF","text-decoration":"none"}}>{title2}</a></h1>
             <p className="sep-white1" />
             <p className="small white-text text-center text-uppercase">{place2}</p>
           </div>
           <div className="child bg-two col-lg-12 col-md-10" style={{ backgroundSize:"cover",background: 'url('+image2+')'}}>
           &nbsp;</div>
         </div>
         <div className="col-xl-6 padding-0 parent1 col-lg-6">
            <div className="z-1 list-large-placeholder col-lg-9 col-xl-12 col-md-10"> 
              <h1 className=" white-text text-center"><a href={"day-exp-detail/"+eventid3+'-'+details3} style={{"color":"#FFFF","text-decoration":"none"}}>{title3}</a>
              </h1>
              <p className="sep-white1" />
              <p className="small white-text text-center text-uppercase">{place3}</p>
            </div>
            <div className="child bg-three col-lg-12 col-md-10" style={{ backgroundSize:"cover",background: 'url('+image3+')'}}><a href={"day-exp-detail/"+eventid3+'-'+details3} /></div>
          </div>
          <div className="col-xl-6 padding-0 col-lg-6">
            <div className="parent element-list1 wd-100" onclick>
              <div className="child bg-four col-lg-12" style={{backgroundSize:"cover", "background": 'url('+image4+')'}}>
                <a href={"day-exp-detail/"+eventid4+'-'+details4} />
              </div>
            </div>	  
            <div className="list-small-placeholder1  col-md-10 col-xl-12"> 
              <h1 className="text-center"><a href={"day-exp-detail/"+eventid4+'-'+details4} style={{"color":"#000","text-decoration":"none"}}>{title4}</a></h1>
              <p className="sep" />
              <p className="text-center small text-uppercase">{place4}</p>
            </div>
          </div>
          
          
         </div> 
         
     
    }
    return (
        <div>
          <Header/>
          <div className="container-fluid bg-maroon p-tb50">
            <div className="container">
            <h1 className="text-center white-text mt-85">Event Experiences
            </h1>
            <div className="bg-whitegrid"><p className="sep-white" /></div>
            <h2 className="text-center p-b50 white-text">{this.state.experiencesTag}</h2>
            </div>
        </div>

        <div className="container">
         <div className="col-xl-12 m-ft66 text-center"><img src="../rudra/images/ticket-combo.png" alt="" className="img-fluid" /></div>
        </div>
        <div className="container-fluid bg-dmaroon p-t100 p-b50 white-text text-center m-ft80">Total {this.state.total} RudraXp experiences are listed below: </div>
        <div className="container bg-grey">
        {eventFinalStr}
        </div>
        <div className="container bg-grey">
        <div className="row">
          <div className="col-xl-12 padding-0 col-lg-12 col-md-10" id="loadMore">
            <button type="button" className="btn btn-red btn-lg btn-block text-uppercase" onClick={this.handleClick} ><span className="small">View More</span></button>
          </div>
          <div className="col-xl-12 padding-0 col-lg-12 col-md-10 alert alert-danger text-center" id="noloadMore">
            <span className="small">No More Event</span>
          </div>
        </div>
        </div>
      
        
      <Footer/>
        </div>
    )
  }
}

export default EventList;



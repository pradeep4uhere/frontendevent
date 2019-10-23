import React from 'react';
import EventItem from './Elements/EventItem';
import Constants  from './config/Constants'
import axios from 'axios'
import $ from 'jquery';

const urlStr = Constants.POPULAR_EVENT_LIST_URL;
const token     = localStorage.getItem('token');
class PopularEvent extends React.Component {
  constructor() {
        super();
        this.state={
          eventDetails:[
            {
              id:100,
              title:"Mahak-(Morning)sss",
              place:"Jaipur",
              price:"INR 1500.00",
              image:"../rudra/images/pic1.png"
            },
            {
              id:101,
              title:"Ghungroo–Country’s only Dinner Theatre",
              place:"Delhi",
              price:"INR 3500.00",
              image:"../rudra/images/pic1.png"
            },
            {
              id:102,
              title:"Sham e Taj",
              place:"Agra",
              price:"INR 1000.00",
              image:"../rudra/images/pic1.png"
            }, 
            {
              id:103,
              title:"Sham e Mumbai",
              place:"Mumbai",
              price:"INR 1950.00",
              image:"../rudra/images/pic1.png"
            }
            
            ]
        }
        this.getEventList       = this.getEventList.bind(this);
  }


    /******Get all the user list here********/   
    getEventList(){
      var tokenStr = token;
      const formData = {
          token    : tokenStr,
          urlParams: this.state.urlParams
      }
      axios.post(urlStr, formData)
      .then((response) => {
        if(response.data.code==200) {
              this.setState({
                eventDetails    : response.data.event,
              });
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
    this.getEventList();
  }

  render() {
    const { postList }= this.props;
    const {eventDetails} = this.state;
    console.log(eventDetails);
    return (
        <div>
        <div className="container p-b50">
          <h1 className="text-center">Popular Experiences
          </h1>
          <p className="sep" />
          <p className="text-center"><a href="exp-list" className="link1">View All</a></p>
        </div>
        <div className="container tkt-grp-margin">
        <div className="container">
              <div className="row blog">
                <div className="col-md-12">
                  <div id="blogCarousel" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                      <li data-target="#blogCarousel" data-slide-to={0} className="active" />
                      <li data-target="#blogCarousel" data-slide-to={1} />
                    </ol>
                    {/* Carousel items */}
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="row">
                        <EventItem eventDetails={this.state.eventDetails[0]}/>
                        <EventItem eventDetails={this.state.eventDetails[1]} />
                        <EventItem eventDetails={this.state.eventDetails[2]}/>
                        <EventItem eventDetails={this.state.eventDetails[3]}/>
                        </div>
                        {/*.row*/}
                      </div>
                      {/*.item*/}
                      <div className="carousel-item">
                        <div className="row">
                        <EventItem eventDetails={this.state.eventDetails[0]}/>
                        <EventItem eventDetails={this.state.eventDetails[1]}/>
                        <EventItem eventDetails={this.state.eventDetails[2]}/>
                        <EventItem eventDetails={this.state.eventDetails[3]}/>
                  </div>
                  {/*.row*/}
                </div>
                {/*.item*/}
              </div>
              {/*.carousel-inner*/}
            </div>
            {/*.Carousel*/}
          </div>
        </div>
      </div>
        </div>
        </div>
    )
  }
}

export default PopularEvent;

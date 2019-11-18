import React from 'react';
import EventItem from './Elements/EventItem';
import Constants  from './config/Constants'
import axios from 'axios'
import $ from 'jquery';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 const urlStr = Constants.POPULAR_EVENT_LIST_URL;
const token     = localStorage.getItem('token');
class PopularEvent extends React.Component {
  constructor() {
        super();
        this.state={
          Item: [],
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
        this.getItem            = this.getItem.bind(this);
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
  getItem(Item){
    let listItems ='';
    if(Item.length>0){
      listItems = Item.map((val,i) =>
          <EventItem eventDetails={val}/>
      );
      return listItems;
    }
    
      // <EventItem eventDetails={Item[0]}/>
    //return listItems;
   }
  render() {
    const { postList }= this.props;
    const {eventDetails} = this.state;
    // console.log(eventDetails);
    let listItems ='';
    listItems = this.state.eventDetails.map((Item,i) =>
       <div>
            {this.getItem(Item)}
       </div>
    );
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
                <Carousel>
                  {listItems}
                  <div style={{"display":"none"}}>
                      <img src="assets/3.jpeg" />
                  </div>
              </Carousel>
          </div>
        </div>
      </div>
        </div>
        </div>
    )
  }
}

export default PopularEvent;

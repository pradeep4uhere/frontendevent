import React from 'react';

class EventItem extends React.Component {
  constructor(props) {
        super(props);
        this.state={
            eventDetails: this.props
            
        }
        //this.handleClick = this.handleClick.bind(this);
  }

 

  render() {
    const { eventDetails }= this.props;
    return (
        // onClick={(e) => this.handleClick(this,this.props.eventDetails.id)}
        <a href={"day-exp-detail/"+this.props.eventDetails.event_id+'-'+this.props.eventDetails.id}>
        <div className="element tkt-margin">
            <img className="float-right icon-position" src={this.props.eventDetails.image} alt="image" height="150" width="270" />
            <div className="row p-15l30">
            <div className="col-xl-9 col-lg-9">
                <span className="tkt-title">{this.props.eventDetails.title}</span><br /><span className="tkt-text">{this.props.eventDetails.place}</span><br />
                <span className="tkt-price">{this.props.eventDetails.price}</span>
            </div>
            <div className="col-xl-3 col-lg-3">
                <img className="float-right icon-position" src="../rudra/images/ico_next.png" alt="" />
            </div>
            </div>
        </div> 
        </a>
    )
  }
}

export default EventItem;

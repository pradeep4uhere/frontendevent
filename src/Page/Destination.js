import React from 'react';
import Header from '../InnerHeader';
import Footer from '../Footer';
import ImageSlider from '../Elements/ImageSlider';
import axios from 'axios'
import $ from 'jquery'
import Constants  from '../config/Constants'
var serialize = require('form-serialize');
var ip = require('ip');
const urlStr = Constants.DESTINATION_LIST;
const token     = localStorage.getItem('token');
class Destination extends React.Component {
  constructor() {
    super();
    this.state={
      ipAdress : ip.address(),
      user_id: sessionStorage.getItem('userid'),
      destinationDetails:[]
    }
    this.stripHtml            = this.stripHtml.bind(this);
    this.getDestinationList   = this.getDestinationList.bind(this);
    
}

stripHtml(html){
  // Create a new div element
  var temporalDivElement = document.createElement("div");
  // Set the HTML content with the providen
  temporalDivElement.innerHTML = html;
  // Retrieve the text property of the element (cross-browser support)
  return temporalDivElement.textContent || temporalDivElement.innerText || "";
}


/******Get all the user list here********/   
getDestinationList(){
  console.log(this.props.match.params.id);
  var id = this.props.match.params.id;
  var tokenStr = token;
  const formData = {
      token    : tokenStr,
      id       : id
  }
  axios.post(urlStr, formData)
  .then((response) => {
    if(response.data.code==200) {
          this.setState({
            destinationDetails    : response.data.data[0],
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
this.getDestinationList();

}


  render() {
    console.log(this.state.destinationDetails.destination_gallery);
    return (
        <div>
          <Header/>
          <div className="container-fluid bg-maroon p-tb50">
          <div className="container">
            <h1 className="text-center white-text mt-85">{this.state.destinationDetails.title}
            </h1>
            <div className="bg-whitegrid"><p className="sep-white" /></div>
            <h2 className="text-center p-b50 white-text">{this.stripHtml(this.state.destinationDetails.descriptions).substring(0,100)}</h2>
          </div>
        </div>
        <div className="container containerBox" >
          <ImageSlider galleryJson={this.state.destinationDetails.destination_gallery} name="hello" />
          <br />
          <br />
          <br />
          <div className="container">
          <div className><h2>{this.state.destinationDetails.title}</h2>
          <p className="pText">
          <div dangerouslySetInnerHTML={{ __html: this.state.destinationDetails.descriptions }}/>
          </p>
          </div>	
          <br />
          <div className="row">
            <div className="col-xl-2 col-md-2 col-sm-4 col-4 pText"><img src="../rudra/images/ico_altitude.png" alt="" className="img-fluid" /><p /><h5>Altitude</h5><p /><p>{this.state.destinationDetails.altitude}</p></div>
            <div className="col-xl-2 col-md-2 col-sm-4 col-4 pText"><img src="../rudra/images/ico_climate.png" alt="" className="img-fluid" /><p /><h5>Climate</h5><p /><p>{this.state.destinationDetails.climate}</p></div>
            <div className="col-xl-2 col-md-2 col-sm-4 col-4 pText"><img src="../rudra/images/ico_population.png" alt="" className="img-fluid" /><p /><h5>Population</h5><p /><p>{this.state.destinationDetails.population}</p></div>
            <div className="col-xl-3 col-md-2 col-sm-4 col-4 pText"><img src="../rudra/images/ico_shopping.png" alt="" className="img-fluid" /><p /><h5>Shopping</h5><p /><p><div dangerouslySetInnerHTML={{ __html: this.state.destinationDetails.shopping }}/></p></div>
            <div className="col-xl-3 col-md-2 col-sm-4 col-4 pText"><img src="../rudra/images/ico_cuisine.png" alt="" className="img-fluid" /><p /><h5>Cuisine</h5><p /><p id="cuisin"><div dangerouslySetInnerHTML={{ __html: this.state.destinationDetails.cuisine }}/><br />               </p></div>
          </div>
          </div>
        </div>
      <br/><br/><br/>
      <Footer/>
        </div>
    )
  }
}

export default Destination;

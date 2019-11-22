import React from 'react';
import { Link } from 'react-router-dom';

class AllViedoReview extends React.Component {
  constructor(props) {
        super(props);
        this.state={
          reviewList:this.props.reviewList
        }
        
  }


  render() {
    const { reviewList }= this.props;
    console.log(reviewList);
    let data = this.props.reviewList;
    let optionItems = "";
    console.log(data);
    
    if(data.length>0){ 
      optionItems = data.map((val,i) =>
       <div className="col-xl-4 col-lg-4 col-md-4 text-center">
            <iframe width="350" height="250" src={val.url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h3 className="text-center"><p className="link-review">{val.title}</p></h3>
            <p />
        </div>
      );
    }
    return (
        <div>
        <div className="container p-tb50">
          <h1 className="text-center">Videos &amp; Reviews </h1>
        </div>	
        <div className="container">
          <div className="row p-b50">
            {optionItems}
          </div>
        </div>
        </div>
    )
  }
}

export default AllViedoReview;

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
            <iframe data-toggle="modal" data-target={"#exampleModalLong"+i} width="350" height="250" src={val.url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
            <h3 className="text-center"><a href="#" className="link-review" data-toggle="modal" data-target={"#exampleModalLong"+i}>{val.title}</a></h3>
            <p />
            <div className="modal fade" id={"exampleModalLong"+i} tabIndex={-1} role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content" style={{"width":"890px",'padding':'1px',"left":"-20%"}}>
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">{val.title}</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <iframe width="850" height="660" src={val.url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>
            </div>
            </div> 
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

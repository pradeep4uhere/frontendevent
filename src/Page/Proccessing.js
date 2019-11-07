import React from 'react';
import { Route, Redirect ,LINK} from 'react-router'
class Proccessing extends React.Component {
  constructor() {
        super();
        this.state={
          redirect: false,
          oid:''
          
        }
        
  }
  componentDidMount() {
    var oid = this.props.match.params.oid;
    setTimeout(() => {
        this.setState({
            redirect: true,
            oid: oid
        })
    }, 2000)
  }
  render() {
    const { oid }  = this.state;
    if (this.state.redirect) {
      return (
          <Redirect to={'/thankyou/'+oid} />
      )
    }
    return (
      <div class="row d-flex justify-content-center">
         <center className="textCenterProcessing"><strong>Please wait...</strong><br/>Please do not refress and close this browser</center>
      </div>
    )
  }
}

export default Proccessing;

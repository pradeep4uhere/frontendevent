import React from 'react';
import { Route, Redirect ,LINK} from 'react-router'
class Proccessing extends React.Component {
  constructor() {
        super();
        this.state={
          redirect: false,
          
        }
        
  }
  componentDidMount() {
    setTimeout(() => {
        this.setState({
            redirect: true,
        })
    }, 2000)
  }
  render() {
    if (this.state.redirect) {
      return (
          <Redirect to={'/thankyou'} />
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

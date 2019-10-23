import React from 'react';
import { Link } from 'react-router-dom';
class Greeting extends React.Component {
  constructor() {
        super();
        this.state={
            user_id: sessionStorage.getItem('userid'),
            userDetails: sessionStorage.getItem('userDetails'),
            isLoggedIn: false
        }
  }
  render() {
    const isLoggedIn = sessionStorage.getItem('userid');
    if (isLoggedIn) {
      return "Welcome,"+this.state.userDetails.first_name;
    }
    return <Link className="nav-link" to="login"><img src="../rudra/images/ico_user.png" alt="" className="img-fluid" /></Link>;
    
  }
}

export default Greeting;

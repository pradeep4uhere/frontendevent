import React from 'react';
import UserHeader from '../InnerHeader';
import LoginForm from '../components/LoginForm';
import Footer from '../Footer';

var globals = require('node-global-storage');
class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state={
          ref : this.props.match.params.ref,
        }
    }
   render(){
     const {ref} =  this.state;
     
      return(
      <div>
        <UserHeader/>
        <LoginForm urlString={ref}/>
        <Footer/>
      </div>
      );
    };
}
let userId = globals.get('Id');
export const user = userId;
export default Login;

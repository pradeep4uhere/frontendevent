import React from 'react';
import UserHeader from '../InnerHeader';
import LoginForm from '../components/LoginForm';
import Footer from '../Footer';

var globals = require('node-global-storage');
class Login extends React.Component{
    constructor(props) {
        super(props);
    }
   render(){
      return(
      <div>
        <UserHeader/>
        <LoginForm/>
        <Footer/>
      </div>
      );
    };
}
let userId = globals.get('Id');
export const user = userId;
export default Login;

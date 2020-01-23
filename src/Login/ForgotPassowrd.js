import React from 'react';
import ForgotPasswordForm from '../components/ForgotPasswordForm';
import UserHeader from '../InnerHeader';
import Footer from '../Footer';
class ForgotPassowrd extends React.Component{
    render(){
      return(
        <div>
        <UserHeader/>
        <ForgotPasswordForm/>
        <Footer/>
        </div>
      )
    }
}
export default ForgotPassowrd;

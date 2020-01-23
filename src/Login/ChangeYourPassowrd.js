import React from 'react';
import ChangeYourPassowrdForm from '../components/ChangeYourPassowrdForm';
import UserHeader from '../InnerHeader';
import Footer from '../Footer';
class ChangeYourPassowrd extends React.Component{
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
        <ChangeYourPassowrdForm urlString={ref}/>
        <Footer/>
        </div>
      )
    }
}
export default ChangeYourPassowrd;

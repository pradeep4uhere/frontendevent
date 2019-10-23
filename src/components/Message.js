/*
 * @PageName    :: SettingPage.js
 * @Author      :: Pradeep Kumar
 * @Description :: General Setting Page 
 * @Created Date:: 23 Apr 2019
 */
import React from 'react';
class Message extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isShow: this.props.show,
            className:'',
            msg:this.props.Msg,
            title:this.props.title,
            iconClass:''
        };

       
    }


    componentDidMount(){
       if(this.state.title=='success'){
          this.setState({
            className:'alert alert-success',
            iconClass:'fa fa-check',
            title: 'Success'
          });
       }

        if(this.state.title=='error'){
          this.setState({
            className:'alert alert-danger',
            iconClass:'fa fa-ban',
            title: 'Error'
          });
        }


        if(this.state.title=='info'){
          this.setState({
            className:'alert alert-info',
            iconClass:'fa fa-info',
            title: 'Info'
          });
        }

        if(this.state.isShow=="true"){
          this.setState({
            isShow:true,
          });
        }
    }

    render(){
     let Message = this.state.msg
     let className = this.state.className
     let title = this.state.title
     let iconClass =  this.state.iconClass
     let isShow =  this.state.isShow
     return(
      <div>
        {(isShow==true)?(<div><div className={className}><h4><i className={iconClass}></i> {title}:</h4>{Message}</div></div>):('')}
    </div>
            
          );
    };
}
export default Message;

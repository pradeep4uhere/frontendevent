/*
 * @PageName    :: LatestUserList.js
 * @Author      :: Pradeep Kumar
 * @Description :: All List of the user
 * @Created Date:: 07 May 2019
 */
import React from 'react';
import axios from 'axios'
import Constants  from '../../config/Constants'
import Message from '../../components/Message';
import $ from 'jquery';
import Modal from 'react-modal';
import UserViewPage from '../Page/User/UserViewPage';
import UserEditPage from '../Page/User/UserEditPage';

const appName   = Constants.APP_NAME
const appTag    = Constants.APP_TAG
const urlStr    = Constants.USER_LIST_URL;
const token     = localStorage.getItem('token');
const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
 
class LatestMemberList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            userList    : [],
            isMsg       : false,
            className   : '',
            user        : '',
            urlParams   : '',
            show        : false,
            modalIsOpen : false,
            userDetails : {},
            actiontype  : 'view',
        }
        this.getUserList    = this.getUserList.bind(this);
        this.handleClick    = this.handleClick.bind(this);
        this.capitalize     = this.capitalize.bind(this);
    
        this.openModal      = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal     = this.closeModal.bind(this);
        
 
    }

    handleClick = (e) => {
        e.preventDefault();
        this.setState({
            urlParams  : e.target.href
        });
        this.getUserList()
        
    };


    /******Get all the user list here********/   
    getUserList(){
        var tokenStr = token;
        const formData = {
            token    : tokenStr,
            urlParams: this.state.urlParams
        }
        axios.post(urlStr, formData)
        .then((response) => {
          if(response.data.data.code==200) {
                this.setState({
                    userList    : response.data.data.user.data,
                    user        : response.data.data.user,
                });
                $('#ipl-progress-indicator').hide();
          }
          else
          {
            this.setState({isMsg:true});
            this.setState({className:'error'});
          }
        })
        .catch((err) => {
            this.setState({isMsg:true});
            this.setState({className:'error'});
        })
    }
    

    componentDidMount(){
       this.getUserList();
    }

    capitalize(str) {
        var strVal = '';
        str = str.split(' ');
        for (var chr = 0; chr < str.length; chr++) {
          strVal += str[chr].substring(0, 1).toUpperCase() + str[chr].substring(1, str[chr].length) + ' '
        }
        return strVal
    }


    //Open Modle box for user Either we can view or edit the user details here
    openModal(e) {
        var strId = e.target.id;
        var array   = strId.split("|");
        var userId  = array[0];
        var type    = array[1];
        this.setState({
              actiontype  : type
        });

        let optionItems = this.state.userList.map((val,i) =>{
                if(val.id==userId){
                    this.setState({
                        userDetails: val
                    });        
                }
        });
        this.setState({modalIsOpen: true});
    }
    
    
    afterOpenModal() {
        // references are now sync'd and can be accessed.
        //this.subtitle.style.color = '#f00';
    }
    
    closeModal() {
        this.setState({modalIsOpen: false});
    }


    render(){
       const { userList }       =  this.state; 
       const { user }           =  this.state; 
       const { userDetails }    =  this.state;
       const { actiontype  }    =  this.state;
       let optionItems = userList.map((val,i) =>
        <tr>
            <td><a href="#">{val.id}</a></td>
            <td>{this.capitalize(val.first_name)}&nbsp;{this.capitalize(val.last_name)}</td>
            <td>{this.capitalize(val.username)}</td>
            <td>{val.email}</td>
            <td>{(val.status==1)?(<span className='label label-success'>Active</span>):(<span className='label label-danger'>In Active</span>)}</td>
            <td>{val.created_at}</td>
            <td><a href="#" onClick={this.openModal} id={val.id+'|view'}>View</a> | <a href="#" onClick={this.openModal} id={val.id+'|'+'edit'}>Edit</a> | <a href="#">Delete</a></td>
        </tr>
        );
        return(
            <div className="row">
              <div className="col-md-12">
                {/*Model Box Start For View User Details*/}
                <Modal isOpen={this.state.modalIsOpen} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} contentLabel="User Details">
                
                {/*Load UserViewPage Component for Display the details of User, params user Object*/}
                {(actiontype=='edit')?(
                    <UserEditPage user={userDetails}/>
                ):(<div>
                    <UserViewPage user={userDetails}/>
                    <button type="button" class="btn btn-primary pull-right" onClick={this.closeModal}>Close</button>
                    </div>
                )}
                </Modal>
                {/*Model Box Start For View User Edit*/}    

                <Message title={this.state.className}    Msg='Your message goes here' show={this.isMsg}/>
                <div className="box box-info">
                <div className="box-header with-border">
                <h3 className="box-title">Latest User List</h3>
                <div className="box-tools pull-right">
                <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" />
                </button>
                <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times" /></button>
                </div>
                </div>
                {/* /.box-header */}
                <div className="box-body">
                <div className="table-responsive">
                <table className="table no-margin">
                    <thead>
                    <tr>
                        <th>SN</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Created On</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {optionItems}
                    </tbody>
                </table>
                </div>
                {/* /.table-responsive */}
                </div>
                <div className="box-footer clearfix">
                <div class="box-tools">
                    <ul class="pagination pagination-sm no-margin pull-right">
                        <li><a href={user.first_page_url} onClick={this.handleClick}>First</a></li>
                        <li><a href={user.prev_page_url} onClick={this.handleClick}>«</a></li>
                        <li><a href={user.next_page_url} onClick={this.handleClick}>»</a></li>
                        <li><a href={user.last_page_url} onClick={this.handleClick}>Last</a></li>
                    </ul>
                </div>
                </div>
                </div>
                </div>
                </div>
      );
    };
}
export default LatestMemberList;

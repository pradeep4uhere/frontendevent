/*
 * @PageName    :: StateDropdownList.js
 * @Author      :: Pradeep Kumar
 * @Description :: All List of the user
 * @Created Date:: 14 Nov 2019
 */
import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import axios from 'axios'
import Constants  from '../../config/Constants'
import Moment from 'react-moment';  
import $ from 'jquery';
var serialize = require('form-serialize');
var ip = require('ip');
const urlStateList      = Constants.STATE_LIST;
const token     = localStorage.getItem('token');
class StateDropdownList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            dahsboardList  : [],
            ipAdress      : ip.address(),
            selectedStateId : this.props.id,
            city_id         : this.props.city_id,
            city_name       : this.props.city_name,
        }
        this.getStateList       = this.getStateList.bind(this);
        this.handleChange       = this.handleChange.bind(this);
    }


    /******Get all the user list here********/   
    getStateList(){
        var tokenStr = token;
        const formData = {
            token    : tokenStr,
            id       : '',
        }
        axios.post(urlStateList, formData)
        .then((response) => {
          if(response.data.code==200) {
                this.setState({
                    dahsboardList:response.data.stateList,
                    selectedStateId: this.props.id
                });
          }
          else
          {
            
          }
        })
        .catch((err) => {
            
        })
    }
    

    componentDidMount(){
       this.getStateList();
       
    }

    handleChange(e) {
        var strid = e.target.id;
        alert(strid);
        if(strid=='state_name'){
            this.setState({selectedStateId : e.target.value});
        }
    }


    capitalize(str) {
        var strVal = '';
        str = str.split(' ');
        for (var chr = 0; chr < str.length; chr++) {
          strVal += str[chr].substring(0, 1).toUpperCase() + str[chr].substring(1, str[chr].length) + ' '
        }
        return strVal
    }

    render(){
        const {dahsboardList } =  this.state;
        const { selectedStateId } = this.state;
        const { city_name } = this.state;
        let optionList = "";
        if(this.state.dahsboardList.length>0){
            optionList = this.state.dahsboardList.map((val,i) =>
               <option value={val.id}>{val.state_name}</option>
            );    
        }
        return(
              <section>
              <div className="form-group col-lg-6">
                <label htmlFor="exampleInputEmail1">State</label>
                <select id="state_name" className="form-control" value={selectedStateId} onChange = { this.handleChange.bind(this)}>
                {optionList}
                </select> 
                </div>
                <div className="form-group col-lg-6">
                <label htmlFor="exampleInputEmail1">City</label>
                <input type="contact" className="form-control" id="city_name"  value={city_name} onChange = { this.handleChange.bind(this)} />
                </div>
                </section>  
          
          );
    };
}
export default StateDropdownList;

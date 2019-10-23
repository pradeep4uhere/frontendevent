const express = require('express');
const UserPortRouter = express.Router();
var md5 = require('md5');
var sha1 = require('sha1');
var stringify = require('json-stringify');
var formidable = require('formidable');
var fs = require('fs');
var appRoot = require('app-root-path');
const request = require('request-promise');
var urlConstant = require('../module/urlConstant');
const USER_LIST_API_REQUEST 		= urlConstant.USER_LIST_API_REQUEST;
const USER_UPDATE_API_REQUEST       = urlConstant.USER_UPDATE_API_REQUEST;
/**************User List API Start Here**********************************/
UserPortRouter.route('/getuserlist').post(function (req, res,next) {
    var token        	= req.body.token;
    var urlParams       = req.body.urlParams;
    var postData ={
        token	    : token,
        urlParams   : urlParams
    }
    //console.log(postData);
    //console.log('-----------------------'+urlParams+'------------------------------');
    if(postData.urlParams!=''){
        if(postData.urlParams!=null){
            urlConstant.USER_LIST_API_REQUEST = urlParams;
        }
    }
    const options = {
        method: 'POST',
        uri: urlConstant.USER_LIST_API_REQUEST,
        body: postData,
        json: true,
        headers: {
            'Authorization': 'Bearer ' + token,
        },
    }
    
    console.log(options);
    request(options)
	    .then(function (response) {
	        console.log(response)
	        res.end(JSON.stringify(response));
	    })
	    .catch(function (err) {
	        console.log(err)
	})
});




UserPortRouter.route('/updateuser').post(function(req, res,next){
    var token        	= req.body.token;
    var user            = req.body.user;
    var postData ={
            token	    : token,
            user        : user
    }
    const options = {
        method: 'POST',
        uri: urlConstant.USER_UPDATE_API_REQUEST,
        body: postData,
        json: true,
        headers: {
            'Authorization': 'Bearer ' + token,
        },
    }
    console.log(options);
    request(options)
	    .then(function (response) {
	        console.log(response)
	        res.end(JSON.stringify(response));
	    })
	    .catch(function (err) {
	        console.log(err)
	})
});

/**************Login API Ends Here**********************************/


module.exports = UserPortRouter;

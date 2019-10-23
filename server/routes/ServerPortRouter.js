const express = require('express');
const ServerPortRouter = express.Router();
var md5 = require('md5');
var sha1 = require('sha1');
var stringify = require('json-stringify');
var formidable = require('formidable');
var fs = require('fs');
var appRoot = require('app-root-path');
const request = require('request-promise');
var urlConstant = require('../module/urlConstant');

const LOGIN_API_REQUEST 		= urlConstant.LOGIN_API_REQUEST;
const REGISTER_API_REQUEST 		= urlConstant.REGISTER_API_REQUEST;

/**************Login API Start Here**********************************/
ServerPortRouter.route('/login').post(function (req, res,next) {
    var sess = {token: '',user: {}};
    var email_address   = req.body.username;
    var password        = req.body.password;
    var token        	= req.body.token;
    var postData 		={
    	username: email_address,
    	password	 : password,
    	token		 : token
    }
    console.log(postData);
    const options = {
					    method: 'POST',
					    uri: LOGIN_API_REQUEST,
					    body: postData,
					    json: true
				    }
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



/**************Register API Start Here**********************************/
ServerPortRouter.route('/register').post(function (req, res,next) {
	//get All the request varialbes
	var firstName   	= req.body.firstName;
	var lastName   		= req.body.lastName;
	var username   		= req.body.username;
	var emailAddress  = req.body.emailAddress;
	var password      = req.body.password;
	var cpassword     = req.body.cpassword;
	var token        	= req.body.token;


	//get All the request varialbes
	var postData 			={
							firstName				:	firstName,
							lastName				:	lastName,
							username				: 	username,
							email					: 	emailAddress,
							password	 			: 	password,
							password_confirmation	: 	cpassword,
							token					: 	token
	}
	console.log(postData);
	const options = {
							method	: 'POST',
							uri			: REGISTER_API_REQUEST,
							body		: postData,
							json		: true
					}
	request(options)
		.then(function (response) {
				console.log(response)
				res.end(JSON.stringify(response));
		})
		.catch(function (err) {
				console.log(err)
})
});

/**************Register API Ends Here**********************************/


module.exports = ServerPortRouter;

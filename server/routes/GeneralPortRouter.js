const express = require('express');
const GeneralPortRouter = express.Router();
var md5 = require('md5');
var sha1 = require('sha1');
var stringify = require('json-stringify');
var formidable = require('formidable');
var fs = require('fs');
var appRoot = require('app-root-path');
const request = require('request-promise');
var urlConstant = require('../module/urlConstant');
var ip = require('ip');

const POPULAR_EVENTLIST_REQUEST	= urlConstant.POPULAR_EVENTLIST_REQUEST;
const GENERAL_SETTING_URL		= urlConstant.GENERAL_SETTING_URL;
const EVENT_DETAILS_URL			= urlConstant.EVENT_DETAILS_URL;
const ADD_TO_CART_URL			= urlConstant.ADD_TO_CART_URL;	
const ADD_TO_EXP_CART_URL		= urlConstant.ADD_TO_EXP_CART_URL;
const GET_CART_LIST_URL			= urlConstant.GET_CART_LIST_URL;
const GET_EXP_CART_LIST_URL		= urlConstant.GET_EXP_CART_LIST_URL;	
const REMOVE_ITEM_FROM_CART		= urlConstant.REMOVE_ITEM_FROM_CART;
const UPDATE_ITEM_FROM_CART		= urlConstant.UPDATE_ITEM_FROM_CART;
const UPDATE_EXP_ITEM_FROM_CART	= urlConstant.UPDATE_EXP_ITEM_FROM_CART;
const CHECK_OFFER				= urlConstant.CHECK_OFFER;
const PRE_BOOKING				= urlConstant.PRE_BOOKING;
const PRE_EXP_BOOKING			= urlConstant.PRE_EXP_BOOKING;
const GET_DESTINATION_LIST_URL  = urlConstant.GET_DESTINATION_LIST_URL;
const GET_BANNER_LIST_URL		= urlConstant.GET_BANNER_LIST_URL;
const GET_ALL_EVENT_LIST_URL	= urlConstant.GET_ALL_EVENT_LIST_URL;
const GET_DESTINATION_EXP_LIST_URL	= urlConstant.GET_DESTINATION_EXP_LIST_URL;
const GET_LAST_ORDER_LIST		= urlConstant.GET_LAST_ORADER_LIST;
const GET_CITY_NAME_URL			= urlConstant.GET_CITY_NAME_URL;
const USER_ORDER_LIST_REQUEST	= urlConstant.USER_ORDER_LIST_REQUEST;
const USER_DETAIL_REQUEST		= urlConstant.USER_DETAIL_REQUEST;
const USER_UPDATE_API_REQUEST   = urlConstant.USER_UPDATE_API_REQUEST;
const USER_ORDER_DETAILS_REQUEST= urlConstant.USER_ORDER_DETAILS_REQUEST;	
const STATE_LIST_REQUEST		= urlConstant.STATE_LIST_REQUEST;
const CITY_LIST_REQUEST			= urlConstant.CITY_LIST_REQUEST;	
const SEARCH_RESULT_REQUEST		= urlConstant.SEARCH_RESULT_REQUEST;	
const GET_MEMBERSHIP_LIST		= urlConstant.GET_MEMBERSHIP_LIST;	
const PRE_MEMBERSHIP_BOOKING	= urlConstant.PRE_MEMBERSHIP_BOOKING;	
const GET_GENERAL_PAGES_REQUEST	= urlConstant.GET_GENERAL_PAGES_REQUEST; 





GeneralPortRouter.route('/membershipbooking').post(function (req, res) {
	var token        		= req.body.token;
	var uid        			= req.body.uid;
	var id     				= req.body.id;
	var type  				= req.body.type;
	var bfname              = req.body.bfname;
    var blname              = req.body.blname;
    var baddress1           = req.body.baddress1;
    var baddress2           = req.body.baddress2;
    var bcity               = req.body.bcity;
    var bstate              = req.body.bstate;
    var bpincode            = req.body.bpincode;
    var bmobile             = req.body.bmobile;
    var bemail              = req.body.bemail;
    var checkbox            = req.body.checkbox;

    var fname              = req.body.fname;
    var lname              = req.body.lname;
    var address1           = req.body.address1;
    var address2           = req.body.address2;
    var city               = req.body.city;
    var state              = req.body.state;
    var pincode            = req.body.pincode;
    var mobile             = req.body.mobile;
    var email              = req.body.bemail;
    var postData 		={
		token		 	: token,
		user_id		 	: uid,
		ip_address		: ip.fromLong(uid),
		id				: id,
		type		 	: type,
		bfname   		: bfname,
		blname   		: blname,
        baddress1		: baddress1,
        baddress2		: baddress2,
        bcity    		: bcity,
        bstate   		: bstate,
        bpincode 		: bpincode,
        bmobile  		: bmobile,
        bemail   		: bemail,
        checkbox 		: checkbox,

		fname   		: fname,
		lname   		: lname,
        address1		: address1,
        address2		: address2,
        city    		: city,
        state   		: state,
        pincode 		: pincode,
        mobile  		: mobile,
        email   		: email
	}
	console.log(postData);
    const options = {
					    method	: 'POST',
					    uri		: PRE_MEMBERSHIP_BOOKING,
					    body	: postData,
						json	: true,
				        headers	: {
			            	'Authorization': 'Bearer ' + token,
				        },
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

GeneralPortRouter.route('/membershiplist').post(function(req, res,next){
    var token        	= req.body.token;
    var postData ={
            token	    : token,
    }
    const options = {
        method: 'POST',
        uri: GET_MEMBERSHIP_LIST,
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




GeneralPortRouter.route('/getstaticpages').post(function(req, res,next){
    var token        	= req.body.token;
    var option     = req.body.option;
    var postData ={
            token	    : token,
            optionsArr 	: option,
    }
    const options = {
        method: 'POST',
        uri: GET_GENERAL_PAGES_REQUEST,
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


GeneralPortRouter.route('/searchresult').post(function(req, res,next){
    var token        	= req.body.token;
    var search_text     = req.body.search_text;
    var postData ={
            token	    : token,
            search_text : search_text,
    }
    const options = {
        method: 'POST',
        uri: SEARCH_RESULT_REQUEST,
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


GeneralPortRouter.route('/citylist').post(function(req, res,next){
    var token        	= req.body.token;
    var id              = req.body.id;
    var postData ={
            token	    : token,
            id          : id,
    }
    const options = {
        method: 'POST',
        uri: CITY_LIST_REQUEST,
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



GeneralPortRouter.route('/statelist').post(function(req, res,next){
    var token        	= req.body.token;
    var id              = req.body.id;
    var postData ={
            token	    : token,
            id          : id,
    }
    const options = {
        method: 'POST',
        uri: STATE_LIST_REQUEST,
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


GeneralPortRouter.route('/userorderdetails').post(function(req, res,next){
    var token        	= req.body.token;
    var id              = req.body.id;
    var order_id        = req.body.order_id;
    var postData ={
            token	    : token,
            id          : id,
            order_id    : order_id
    }
    const options = {
        method: 'POST',
        uri: USER_ORDER_DETAILS_REQUEST,
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




GeneralPortRouter.route('/userdetails').post(function(req, res,next){
    var token        	= req.body.token;
    var id              = req.body.id;
    var order_id        = req.body.order_id;
    var postData ={
            token	    : token,
            id          : id,
            order_id    : order_id
    }
    const options = {
        method: 'POST',
        uri: USER_DETAIL_REQUEST,
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

GeneralPortRouter.route('/userupdate').post(function(req, res,next){
    var token        	= req.body.token;
    var user            = req.body.body;
    var postData ={
            token	    : token,
            user        : user
    }
    const options = {
        method: 'POST',
        uri: USER_UPDATE_API_REQUEST,
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


GeneralPortRouter.route('/usereventorderlist').post(function(req, res,next){
    var token        	= req.body.token;
    var id              = req.body.id;
	var order_id        = req.body.order_id;
	var order_type        = req.body.order_type;
    var postData ={
            token	    : token,
            id          : id,
			order_id    : order_id,
			order_type	: order_type
    }
    const options = {
        method: 'POST',
        uri: USER_ORDER_LIST_REQUEST,
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



GeneralPortRouter.route('/lastorderlist').post(function (req, res) {
    var sess = {token: '',user: {}};
	var token        	= req.body.token;
	var oid        	= req.body.oid;
    var postData 		={
		token		 : token,
		oid			 : oid
    }
    console.log(postData);
    const options = {
					    method: 'POST',
					    uri: GET_LAST_ORDER_LIST,
					    body: postData,
						json: true,
				        headers: {
			            'Authorization': 'Bearer ' + token,
				        },
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





GeneralPortRouter.route('/popularlist').post(function (req, res) {
    var sess = {token: '',user: {}};
	var token        	= req.body.token;
	var itemCount     	= req.body.itemCount;
    var postData 		={
		token		 : token,
		itemCount	 : itemCount
    }
    console.log(postData);
    const options = {
					    method	: 'POST',
					    uri		: POPULAR_EVENTLIST_REQUEST,
					    body	: postData,
						json	: true,
				        headers	: {
			            'Authorization': 'Bearer ' + token,
				        },
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



GeneralPortRouter.route('/generalsetting').post(function (req, res) {
    var sess = {token: '',user: {}};
    var token        	= req.body.token;
    var postData 		={
    	token		 : token
	}
	console.log(postData);
    const options = {
					    method: 'POST',
					    uri: GENERAL_SETTING_URL,
					    body: postData,
						json: true,
				        headers: {
			            'Authorization': 'Bearer ' + token,
				        },
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



GeneralPortRouter.route('/getcityname').post(function (req, res) {
    var sess = {token: '',user: {}};
	var token        	= req.body.token;
	var id        		= req.body.id;
    var postData 		={
		token		 : token,
		id 			 : id
	}
	console.log(postData);
    const options = {
					    method: 'POST',
					    uri: GET_CITY_NAME_URL,
					    body: postData,
						json: true,
				        headers: {
			            'Authorization': 'Bearer ' + token,
				        },
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




GeneralPortRouter.route('/eventdetails').post(function (req, res) {
    var sess = {token: '',user: {}};
	var token        	= req.body.token;
	var id        		= req.body.id;
    var postData 		={
		token		 : token,
		id 			 : id
	}
	console.log(postData);
    const options = {
					    method: 'POST',
					    uri: EVENT_DETAILS_URL,
					    body: postData,
						json: true,
				        headers: {
			            'Authorization': 'Bearer ' + token,
				        },
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


GeneralPortRouter.route('/addtoexpcart').post(function (req, res) {
    var sess = {token: '',user: {}};
	var token        	= req.body.token;
	var id        		= req.body.id;
	var uid        		= req.body.uid;
	var deptid        	= req.body.deptid;
    var postData 		={
		token		 : token,
		id 			 : id,
		user_id		 : uid,
		dept_id		 : deptid,
	}
	console.log(postData);
    const options = {
					    method: 'POST',
					    uri: ADD_TO_EXP_CART_URL,
					    body: postData,
						json: true,
				        headers: {
			            'Authorization': 'Bearer ' + token,
				        },
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


GeneralPortRouter.route('/addtocart').post(function (req, res) {
    var sess = {token: '',user: {}};
	var token        	= req.body.token;
	var id        		= req.body.id;
	var uid        		= req.body.uid;
	var seat_id        	= req.body.seat_id;
	var bookingDate		= req.body.bookingDate;
    var postData 		={
		token		 : token,
		id 			 : id,
		user_id		 : uid,
		seat_id		 : seat_id,
		bookingDate	 : bookingDate,
	}
	console.log(postData);
    const options = {
					    method: 'POST',
					    uri: ADD_TO_CART_URL,
					    body: postData,
						json: true,
				        headers: {
			            'Authorization': 'Bearer ' + token,
				        },
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




GeneralPortRouter.route('/getexpcartlist').post(function (req, res) {
    var sess = {token: '',user: {}};
	var token        	= req.body.token;
	var uid        		= req.body.uid;
	var offerId    		= req.body.offerId;
    var postData 		={
		token		 : token,
		user_id		 : uid,
		offerId		 : offerId
	}
	console.log(postData);
    const options = {
					    method: 'POST',
					    uri: GET_EXP_CART_LIST_URL,
					    body: postData,
						json: true,
				        headers: {
			            'Authorization': 'Bearer ' + token,
				        },
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



GeneralPortRouter.route('/getcartlist').post(function (req, res) {
    var sess = {token: '',user: {}};
	var token        	= req.body.token;
	var uid        		= req.body.uid;
	var offerId    		= req.body.offerId;
    var postData 		={
		token		 : token,
		user_id		 : uid,
		offerId		 : offerId
	}
	console.log(postData);
    const options = {
					    method: 'POST',
					    uri: GET_CART_LIST_URL,
					    body: postData,
						json: true,
				        headers: {
			            'Authorization': 'Bearer ' + token,
				        },
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


GeneralPortRouter.route('/deleteitemfrom').post(function (req, res) {
    var sess = {token: '',user: {}};
	var token        	= req.body.token;
	var uid        		= req.body.uid;
	var itemId     		= req.body.itemId;
    var postData 		={
		token		 : token,
		user_id		 : uid,
		itemId		 : itemId
	}
	console.log(postData);
    const options = {
					    method: 'POST',
					    uri: REMOVE_ITEM_FROM_CART,
					    body: postData,
						json: true,
				        headers: {
			            'Authorization': 'Bearer ' + token,
				        },
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





GeneralPortRouter.route('/updateexpitemcart').post(function (req, res) {
    var sess = {token: '',user: {}};
	var token        	= req.body.token;
	var uid        		= req.body.uid;
	var itemId     		= req.body.itemId;
	var quantity     	= req.body.quantity;
    var postData 		={
		token		 : token,
		user_id		 : uid,
		itemId		 : itemId,
		quantity	 : quantity
	}
	console.log(postData);
    const options = {
					    method: 'POST',
					    uri: UPDATE_EXP_ITEM_FROM_CART,
					    body: postData,
						json: true,
				        headers: {
			            'Authorization': 'Bearer ' + token,
				        },
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


GeneralPortRouter.route('/updateitemcart').post(function (req, res) {
    var sess = {token: '',user: {}};
	var token        	= req.body.token;
	var uid        		= req.body.uid;
	var itemId     		= req.body.itemId;
	var quantity     	= req.body.quantity;
    var postData 		={
		token		 : token,
		user_id		 : uid,
		itemId		 : itemId,
		quantity	 : quantity
	}
	console.log(postData);
    const options = {
					    method: 'POST',
					    uri: UPDATE_ITEM_FROM_CART,
					    body: postData,
						json: true,
				        headers: {
			            'Authorization': 'Bearer ' + token,
				        },
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




GeneralPortRouter.route('/checkoffer').post(function (req, res) {
    var sess = {token: '',user: {}};
	var token        	= req.body.token;
	var uid        		= req.body.uid;
	var code     		= req.body.code;
    var postData 		={
		token		 : token,
		user_id		 : uid,
		code		 : code,
	}
	console.log(postData);
    const options = {
					    method: 'POST',
					    uri: CHECK_OFFER,
					    body: postData,
						json: true,
				        headers: {
			            'Authorization': 'Bearer ' + token,
				        },
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




GeneralPortRouter.route('/expressbooking').post(function (req, res) {
	var token        		= req.body.token;
	var uid        			= req.body.uid;
	var code     			= req.body.code;
	var bfname              = req.body.bfname;
    var blname              = req.body.blname;
    var baddress1           = req.body.baddress1;
    var baddress2           = req.body.baddress2;
    var bcity               = req.body.bcity;
    var bstate              = req.body.bstate;
    var bpincode            = req.body.bpincode;
    var bmobile             = req.body.bmobile;
    var bemail              = req.body.bemail;
    var checkbox            = req.body.checkbox;

    var fname              = req.body.fname;
    var lname              = req.body.lname;
    var address1           = req.body.address1;
    var address2           = req.body.address2;
    var city               = req.body.city;
    var state              = req.body.state;
    var pincode            = req.body.pincode;
    var mobile             = req.body.mobile;
    var email              = req.body.bemail;
    var postData 		={
		token		 	: token,
		user_id		 	: uid,
		ip_address		: ip.fromLong(uid),
		code		 	: code,
		bfname   		: bfname,
		blname   		: blname,
        baddress1		: baddress1,
        baddress2		: baddress2,
        bcity    		: bcity,
        bstate   		: bstate,
        bpincode 		: bpincode,
        bmobile  		: bmobile,
        bemail   		: bemail,
        checkbox 		: checkbox,

		fname   		: fname,
		lname   		: lname,
        address1		: address1,
        address2		: address2,
        city    		: city,
        state   		: state,
        pincode 		: pincode,
        mobile  		: mobile,
        email   		: email
	}
	console.log(postData);
    const options = {
					    method	: 'POST',
					    uri		: PRE_EXP_BOOKING,
					    body	: postData,
						json	: true,
				        headers	: {
			            	'Authorization': 'Bearer ' + token,
				        },
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



GeneralPortRouter.route('/prepaymentbooking').post(function (req, res) {
	var token        		= req.body.token;
	var uid        			= req.body.uid;
	var code     			= req.body.code;
	var bfname              = req.body.bfname;
    var blname              = req.body.blname;
    var baddress1           = req.body.baddress1;
    var baddress2           = req.body.baddress2;
    var bcity               = req.body.bcity;
    var bstate              = req.body.bstate;
    var bpincode            = req.body.bpincode;
    var bmobile             = req.body.bmobile;
    var bemail              = req.body.bemail;
    var checkbox            = req.body.checkbox;

    var fname              = req.body.fname;
    var lname              = req.body.lname;
    var address1           = req.body.address1;
    var address2           = req.body.address2;
    var city               = req.body.city;
    var state              = req.body.state;
    var pincode            = req.body.pincode;
    var mobile             = req.body.mobile;
    var email              = req.body.bemail;
    var postData 		={
		token		 	: token,
		user_id		 	: uid,
		ip_address		: ip.fromLong(uid),
		code		 	: code,
		bfname   		: bfname,
		blname   		: blname,
        baddress1		: baddress1,
        baddress2		: baddress2,
        bcity    		: bcity,
        bstate   		: bstate,
        bpincode 		: bpincode,
        bmobile  		: bmobile,
        bemail   		: bemail,
        checkbox 		: checkbox,

		fname   		: fname,
		lname   		: lname,
        address1		: address1,
        address2		: address2,
        city    		: city,
        state   		: state,
        pincode 		: pincode,
        mobile  		: mobile,
        email   		: email
	}
	console.log(postData);
    const options = {
					    method	: 'POST',
					    uri		: PRE_BOOKING,
					    body	: postData,
						json	: true,
				        headers	: {
			            	'Authorization': 'Bearer ' + token,
				        },
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






GeneralPortRouter.route('/destinationexplist').post(function (req, res) {
    var sess = {token: '',user: {}};
	var token        	= req.body.token;
	var uid        		= req.body.uid;
	var id				= req.body.id;
	var type			= req.body.type;
    var postData 		={
		token		 : token,
		user_id		 : uid,
		id			 : id,
		type		 : type
	}
	console.log(postData);
    const options = {
					    method: 'POST',
					    uri: GET_DESTINATION_EXP_LIST_URL,
					    body: postData,
						json: true,
				        headers: {
			            'Authorization': 'Bearer ' + token,
				        },
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




GeneralPortRouter.route('/destinationlist').post(function (req, res) {
    var sess = {token: '',user: {}};
	var token        	= req.body.token;
	var uid        		= req.body.uid;
	var id				= req.body.id;
	var type			= req.body.type;
    var postData 		={
		token		 : token,
		user_id		 : uid,
		id			 : id,
		type		 : type
	}
	console.log(postData);
    const options = {
					    method: 'POST',
					    uri: GET_DESTINATION_LIST_URL,
					    body: postData,
						json: true,
				        headers: {
			            'Authorization': 'Bearer ' + token,
				        },
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




GeneralPortRouter.route('/getbannerlist').post(function (req, res) {
    var sess = {token: '',user: {}};
	var token        	= req.body.token;
    var postData 		={
		token		 : token,
	}
	console.log(postData);
    const options = {
					    method: 'POST',
					    uri: GET_BANNER_LIST_URL,
					    body: postData,
						json: true,
				        headers: {
			            'Authorization': 'Bearer ' + token,
				        },
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



GeneralPortRouter.route('/getalleventlist').post(function (req, res) {
    var sess = {token: '',user: {}};
	var token        	= req.body.token;
	var page_no        	= req.body.next_page;
    var postData 		={
		token		 : token,
		page_no		 : page_no
	}
	console.log(req.body);
    const options = {
					    method: 'POST',
					    uri: GET_ALL_EVENT_LIST_URL,
					    body: postData,
						json: true,
				        headers: {
			            'Authorization': 'Bearer ' + token,
				        },
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
module.exports = GeneralPortRouter;

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
    var postData 		={
    	token		 : token
    }
    console.log(postData);
    const options = {
					    method: 'POST',
					    uri: POPULAR_EVENTLIST_REQUEST,
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
    var postData 		={
		token		 : token,
	}
	console.log(postData);
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

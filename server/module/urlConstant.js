var config = require('./config');
var urlConstant;
urlConstant = {
	POPULAR_EVENTLIST_REQUEST	        : 	config.API_HOST_URL+'/populareventlist',
	GENERAL_SETTING_URL					:	config.API_HOST_URL+'/getsetting',
	EVENT_DETAILS_URL					:  	config.API_HOST_URL+'/eventdetails',
	ADD_TO_CART_URL						: 	config.API_HOST_URL+'/addtocart',
	GET_CART_LIST_URL					:	config.API_HOST_URL+'/getcartlist',
	REMOVE_ITEM_FROM_CART				:  	config.API_HOST_URL+'/deleteitemfrom',
	UPDATE_ITEM_FROM_CART				:	config.API_HOST_URL+'/updateitemcart',
	CHECK_OFFER							:	config.API_HOST_URL+'/checkoffer',
	PRE_BOOKING							:	config.API_HOST_URL+'/prepaymentbooking',
	REGISTER_API_REQUEST	        	: 	config.API_HOST_URL+'/register',
	LOGIN_API_REQUEST		        	: 	config.API_HOST_URL+'/login',
	GET_DESTINATION_LIST_URL			:   config.API_HOST_URL+'/getdestinationlist',
	GET_BANNER_LIST_URL					:   config.API_HOST_URL+'/getbannerlist',
	GET_ALL_EVENT_LIST_URL				:	config.API_HOST_URL+'/getalleventlist'
}
module.exports = urlConstant;

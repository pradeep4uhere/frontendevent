var config = require('./config');
var urlConstant;
urlConstant = {
	POPULAR_EVENTLIST_REQUEST	        : 	config.API_HOST_URL+'/populareventlist',
	GENERAL_SETTING_URL					:	config.API_HOST_URL+'/getsetting',
	EVENT_DETAILS_URL					:  	config.API_HOST_URL+'/eventdetails',
	ADD_TO_CART_URL						: 	config.API_HOST_URL+'/addtocart',
	ADD_TO_EXP_CART_URL					:	config.API_HOST_URL+'/addtoexpcart',
	GET_CART_LIST_URL					:	config.API_HOST_URL+'/getcartlist',
	GET_EXP_CART_LIST_URL				: 	config.API_HOST_URL+'/getexpcartlist',
	REMOVE_ITEM_FROM_CART				:  	config.API_HOST_URL+'/deleteitemfrom',
	UPDATE_ITEM_FROM_CART				:	config.API_HOST_URL+'/updateitemcart',
	UPDATE_EXP_ITEM_FROM_CART			:	config.API_HOST_URL+'/updateexpitemcart',
	CHECK_OFFER							:	config.API_HOST_URL+'/checkoffer',
	PRE_BOOKING							:	config.API_HOST_URL+'/prepaymentbooking',
	PRE_EXP_BOOKING						:	config.API_HOST_URL+'/expressbooking',
	REGISTER_API_REQUEST	        	: 	config.API_HOST_URL+'/register',
	LOGIN_API_REQUEST		        	: 	config.API_HOST_URL+'/login',
	GET_DESTINATION_LIST_URL			:   config.API_HOST_URL+'/getdestinationlist',
	GET_BANNER_LIST_URL					:   config.API_HOST_URL+'/getbannerlist',
	GET_ALL_EVENT_LIST_URL				:	config.API_HOST_URL+'/getalleventlist',
	GET_DESTINATION_EXP_LIST_URL		:   config.API_HOST_URL+'/getdestinationexplist',
	GET_LAST_ORADER_LIST				:   config.API_HOST_URL+'/lastorderlist',
}
module.exports = urlConstant;

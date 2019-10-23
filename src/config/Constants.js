export const AppUrl = 'http://192.168.0.127:4088'
export const Constants = {
	APP_NAME					: 'Rudra',
    APP_TAG	    				: 'XP',
	APP_SALT					: 'MdtKyGbnrGT3wzxgkCPRO+wwfBGrlhMwGuOHX6xyFE0=',
	
	//All API URL GOES HERE
	LOGIN_URL					: AppUrl+'/serverport/login',
	REGISTER_URL				: AppUrl+'/serverport/register',	
	GENERAL_SETTING_URL			: AppUrl+'/generalport/generalsetting',	
	POPULAR_EVENT_LIST_URL		: AppUrl+'/generalport/popularlist',	
	EVENT_DETAILS_URL			: AppUrl+'/generalport/eventdetails',
	ADD_TO_CART_URL				: AppUrl+'/generalport/addtocart',
	GET_CART_LIST				: AppUrl+'/generalport/getcartlist',
	REMOVE_ITEM_FROM_CART		: AppUrl+'/generalport/deleteitemfrom',
	UPDATE_ITEM_FROM_CART		: AppUrl+'/generalport/updateitemcart',
	CHECK_OFFER					: AppUrl+'/generalport/checkoffer',
	BOOKING_PAYMENT				: AppUrl+'/generalport/prepaymentbooking',
	DESTINATION_LIST			: AppUrl+'/generalport/destinationlist',
	GET_BANNER_LIST				: AppUrl+'/generalport/getbannerlist',
	GET_ALL_EVENT_LIST			: AppUrl+'/generalport/getalleventlist',
    IMG							: {
    								USER_PROFILE: '../theme/dist/img/user2-160x160.jpg',	
    			  				}
};
export default Constants

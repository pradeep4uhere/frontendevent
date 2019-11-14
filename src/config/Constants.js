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
	ADD_TO_EXP_CART_URL			: AppUrl+'/generalport/addtoexpcart',
	GET_CART_LIST				: AppUrl+'/generalport/getcartlist',
	GET_EXP_CART_LIST			: AppUrl+'/generalport/getexpcartlist',
	REMOVE_ITEM_FROM_CART		: AppUrl+'/generalport/deleteitemfrom',
	UPDATE_ITEM_FROM_CART		: AppUrl+'/generalport/updateitemcart',
	UPDATE_EXP_ITEM_FROM_CART	: AppUrl+'/generalport/updateexpitemcart',
	CHECK_OFFER					: AppUrl+'/generalport/checkoffer',
	BOOKING_PAYMENT				: AppUrl+'/generalport/prepaymentbooking',
	BOOKING_EXP_PAYMENT			: AppUrl+'/generalport/expressbooking',
	DESTINATION_LIST			: AppUrl+'/generalport/destinationlist',
	GET_BANNER_LIST				: AppUrl+'/generalport/getbannerlist',
	GET_ALL_EVENT_LIST			: AppUrl+'/generalport/getalleventlist',
	DESTINATION_EXP_LIST		: AppUrl+'/generalport/destinationexplist',
	GET_LAST_ORDER_LIST			: AppUrl+'/generalport/lastorderlist',
	GET_CITY_NAME_URL			: AppUrl+'/generalport/getcityname',
	USER_EVENT_ORDER_LSIT_URL	: AppUrl+'/generalport/usereventorderlist',
	USER_DETAILS_URL			: AppUrl+'/generalport/userdetails',
	USER_UPDATE_URL				: AppUrl+'/generalport/userupdate',
	GET_USER_ORDER_DETAILS_URL	: AppUrl+'/generalport/userorderdetails',
	STATE_LIST					: AppUrl+'/generalport/statelist',
	CITY_LIST					: AppUrl+'/generalport/citylist',
    IMG							: {
    								USER_PROFILE: '../theme/dist/img/user2-160x160.jpg',	
    			  				}
};
export default Constants

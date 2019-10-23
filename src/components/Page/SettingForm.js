/*
 * @PageName    :: SettingPage.js
 * @Author      :: Pradeep Kumar
 * @Description :: General Setting Page 
 * @Created Date:: 23 Apr 2019
 */
import React from 'react';
class SettingForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            setting:[{"id":"1","title":"Site URL","options":"site_url","options_value":"www.rudraxp.com","status":"1"}, {"id":"2","title":"Email Address","options":"email","options_value":"ifo@rudraxp.com","status":"1"}, {"id":"3","title":"Contact No","options":"contact_1","options_value":"+91 11 4679 223","status":"1"}, {"id":"4","title":"Mobile No","options":"contact_2","options_value":"+91 99992 11610","status":"1"}, {"id":"5","title":"YouTube Link","options":"you_tube","options_value":"https:\/\/www.youtube.com\/channel\/UChntea6QhimrxXnn3drz4hQ","status":"1"}, {"id":"6","title":"Instagram Link","options":"instagram","options_value":"https:\/\/www.instagram.com\/rudraxp\/","status":"1"}, {"id":"7","title":"Facebook Link","options":"facebook","options_value":"https:\/\/www.facebook.com\/rudraxp","status":"1"}, {"id":"8","title":"Linkedin Link","options":"linkedin","options_value":"https:\/\/www.linkedin.com\/company\/rudra-xp\/about\/","status":"1"}, {"id":"9","title":"Title","options":"title","options_value":"Rudra XP","status":"1"}, {"id":"10","title":"Description","options":"decriotion","options_value":"At Rudra Xp, our endeavour is to make the most of the time that you take out for your travel pursuits and embellish them with characteristic, exclusive and rich experiences. We care for the unique perspective, the appreciation of excellence and that which maybe simple but not ordinary.","status":"1"}, {"id":"11","title":"Footer Text","options":"footer_text","options_value":"\u00a9 Copyright 2019 Rudra Experiences All rights reserved, Powered by Spiritnoise","status":"1"}]
        };
    }
    render(){
     let optionItems = this.state.setting.map((val,i) =>
        <div className="form-group">
              <label htmlFor="inputEmail3" className="col-sm-2 control-label">{val.title}</label>
              <div className="col-sm-10">      
                <input type="text" name={val.options} className="form-control" id="inputEmail3" placeholder={val.title} value={val.options_value} />
              </div>
        </div>
        
        );
     return(
            <div classname="box-body">
              <form class="form-horizontal">
              <div className="box-body">
                {optionItems}
              </div>
              <div class="box-footer">
                <button type="submit" class="btn btn-default">Cancel</button>
                <button type="submit" class="btn btn-info pull-right">Update</button>
              </div>
              </form>
            </div>
            );
    };
}
export default SettingForm;

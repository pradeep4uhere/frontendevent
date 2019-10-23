/*
 * @PageName    :: SettingPage.js
 * @Author      :: Pradeep Kumar
 * @Description :: General Setting Page 
 * @Created Date:: 23 Apr 2019
 */
import React from 'react';
import SettingForm from '../Page/SettingForm';
import Message from '../../components/Message';
class SettingPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            title: 'General Setting',
            subtitle: 'You can update all general setting of the website',
            setting:'[{"id":"1","title":"Site URL","options":"site_url","options_value":"www.rudraxp.com","status":"1"}, {"id":"2","title":"Email Address","options":"email","options_value":"ifo@rudraxp.com","status":"1"}, {"id":"3","title":"Contact No","options":"contact_1","options_value":"+91 11 4679 223","status":"1"}, {"id":"4","title":"Mobile No","options":"contact_2","options_value":"+91 99992 11610","status":"1"}, {"id":"5","title":"YouTube Link","options":"you_tube","options_value":"https:\/\/www.youtube.com\/channel\/UChntea6QhimrxXnn3drz4hQ","status":"1"}, {"id":"6","title":"Instagram Link","options":"instagram","options_value":"https:\/\/www.instagram.com\/rudraxp\/","status":"1"}, {"id":"7","title":"Facebook Link","options":"facebook","options_value":"https:\/\/www.facebook.com\/rudraxp","status":"1"}, {"id":"8","title":"Linkedin Link","options":"linkedin","options_value":"https:\/\/www.linkedin.com\/company\/rudra-xp\/about\/","status":"1"}, {"id":"9","title":"Title","options":"title","options_value":"Rudra XP","status":"1"}, {"id":"10","title":"Description","options":"decriotion","options_value":"At Rudra Xp, our endeavour is to make the most of the time that you take out for your travel pursuits and embellish them with characteristic, exclusive and rich experiences. We care for the unique perspective, the appreciation of excellence and that which maybe simple but not ordinary.","status":"1"}, {"id":"11","title":"Footer Text","options":"footer_text","options_value":"\u00a9 Copyright 2019 Rudra Experiences All rights reserved, Powered by Spiritnoise","status":"1"}]'
        };
    }
    render(){
      let errorMessage ="<div className='alert alert-danger'><h4><i className='fa fa-info'></i> Note:</h4>This page has been enhanced for printing. Click the print button at the bottom of the invoice to test.</div>";
     return(
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>{this.state.title}
            <small>{this.state.subtitle}</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
            <li className="active">{this.state.title}</li>
          </ol>
        </section>
        {/* Main content */}
        <section className="content">
          {/* Default box */}
          <div className="box box-warning">
            <div className="box-header with-border">
              <h3 className="box-title">{this.state.title}</h3>
              <div className="box-tools pull-right">
                <button type="button" className="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
                  <i className="fa fa-minus" /></button>
                <button type="button" className="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
                  <i className="fa fa-times" /></button>
              </div>
            </div>

            <div className="box-body">

            <Message title='success'  Msg='Your message goes here' show="true"/>
            <Message title='error'    Msg='Your message goes here' show="false"/>

            <div class="col-md-6">
              <SettingForm/>
              </div>
            </div>
            {/* /.box-body */}
          </div>
          {/* /.box */}
        </section>
        {/* /.content */}
      </div>
      );
    };
}
export default SettingPage;

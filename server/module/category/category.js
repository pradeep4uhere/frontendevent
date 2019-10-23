const express = require('express');
var db = require('../../database/db');
var config = {
               salt_1:'pradeep3300!@#$'
            };
var sess = {
      token: '',
      user: {}
}
var CategoryModule;
function getcategory(req,res){
  var user_id      = req.body.user_id;
  var token       = req.body.token;
  if(sha1(config.salt_1 + user_id)==token){
    db.connection.getConnection(function(err,connection){
        //Database Not Connected If there is any error  
        if (err) {
          console.log("Database is not connected");
          res.json({"code" : 100, "status" : "Error in connection database"});
          return;
        }   
        //Database Connected Now
        console.log('You are now connected... id ' + connection.threadId);
        var sql = "SELECT c.* from category c order by c.id DESC";
          connection.query(sql,function(error, rows,fields) {
              if (error) throw res.json(error)
                numRows = rows.length;
                if(numRows==0){
                  return res.json({status:'error',message:'!! No Records Found !!',code:'500',token:token});
                }else{
                  return res.json({status:'success',message:'',code:'200',result:rows,token:token});
              }
            })
          //Any Server Side Issues
          connection.on('error', function(err) {      
              res.json({"code" : 100, "status" : "Error in connection database"});
              return;     
            });
      });



  }else{
    res.json({"status":"error","code" : 500, "message" : "Invalid Token Request"});
  }
}
module.exports = CategoryModule;

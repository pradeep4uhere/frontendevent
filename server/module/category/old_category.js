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
ServerPortRouter.route('/delcategory').post(function (req, res) {
  var id = req.body.id;
  var token = req.body.token;
  // Connect to MySQL on start
  db.connection.getConnection(function(err,connection){
    if (err) {
      res.json({"code" : 100, "status" : "Error in connection database"});
      return;
    }   
    console.log('You are now connected... id ' + connection.threadId);
    if(id>0){
      var sql = 'DELETE FROM `category` WHERE id = '+id;
      connection.query(sql, function(error, results) {
        if (error) throw res.json(error);
          res.json({status:'success',message:msg,code:'200'});
      })
      var msg ='Category updated Successfully';

    }
    connection.on('error', function(err) {   
          console.log("[mysql error]",err);   
          res.json({"code" : 100, "status" : err});
          return;     
    });
  });
});


ServerPortRouter.route('/addcategory').post(function (req, res) {
  var title = req.body.title;
  var status = req.body.status;
  var user_id = req.body.user_id;
  var token = req.body.token;
  var id = req.body.id;
  // Connect to MySQL on start
  db.connection.getConnection(function(err,connection){
    if (err) {
      res.json({"code" : 100, "status" : "Error in connection database"});
      return;
    }   
    console.log('You are now connected... id ' + connection.threadId);
    if(id>0){

      var sql = "UPDATE category SET title = ?,status = ? where id = ?";
      var values  = [title, status,id];
      connection.query(sql, values, function(error, results) {
        if (error) throw res.json(error);
          res.json({status:'success',message:msg,code:'200'});
      })
      var msg ='Category updated Successfully';

    }else{

      var sql = "INSERT INTO category (title,status) VALUES ?";
      var values = [[title,status]];
      connection.query(sql, [values], function(error, results) {
        if (error) throw res.json(error);
          res.json({status:'success',message:msg,code:'200'});
        })
      var msg ='Category added Successfully';
    }

    connection.on('error', function(err) {   
          console.log("[mysql error]",err);   
          res.json({"code" : 100, "status" : err});
          return;     
    });
  });
});


ServerPortRouter.route('/getcategory').post(function (req, res) {
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

    
});
module.exports = CategoryModule;

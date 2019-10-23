    var express = require('express'); 
    var app = express(); 
    var bodyParser = require('body-parser');
    var multer = require('multer');
    app.use(function(req, res, next) { //allow cross origin requests
        res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
        res.header("Access-Control-Allow-Origin", "http://103.254.139.6:3001");
        res.header("Access-Control-Allow-Headers", "imagetype");
        res.header("Access-Control-Allow-Credentials", true);
        next();
    });

    /** Serving from the same express Server
    No cors required */
    app.use(express.static('../client'));
    app.use(bodyParser.json());  
    var storage = multer.diskStorage({ //multers disk storage settings
        destination: function (req, file, cb) {
 
    console.log(req); // will get custom headers
    if(req.headers && req.headers.imagetype==='dashboardImg') {
    cb(null, '../../assets/uploads/dashboard');
    }else if(req.headers && req.headers.imagetype==='profileimage') {
    cb(null, '../../assets/uploads/profile');
    }else if(req.headers && req.headers.imagetype==='banner') {
    cb(null, '../../assets/uploads/banner');
    }else{
    cb(null, '../../assets/uploads/');
    }
        },
        filename: function (req, file, cb) {
            var datetimestamp = Date.now();
            cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
        }
    });

    var upload = multer({ //multer settings
                    storage: storage
                }).single('file');

    /** API path that will upload the files */
    app.post('/upload', function(req, res) {
        upload(req,res,function(err){
console.log(req.file);
            if(err){
                 res.json({error_code:1,err_desc:err});
                 return;
            }
    var imgpath='';
        if(req.headers && req.headers.imagetype==='dashboardImg') {
            imgpath='assets/uploads/dashboard';
        }else if(req.headers && req.headers.imagetype==='profileimage') {
            imgpath='assets/uploads/profile';
        }else if(req.headers && req.headers.imagetype==='banner') {
            imgpath='assets/uploads/banner';
        }else{
            imgpath='assets/uploads';
        }
    res.send(imgpath+'/'+req.file.filename);
    // res.send(req.file.filename);
                 //res.json({error_code:0,err_desc:null});
            });
        });
    //app.listen('3001', function(){
    //     console.log('running on 3001...');
    //});
module.exports = ImageUpload;
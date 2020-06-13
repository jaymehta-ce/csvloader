const express = require("express");
var router = express.Router();
const employee = require("../controller/employee");
var exphbs = require('express-handlebars');
const multer = require("multer");
const csv = require("./generatecsv")
const path = require('path')

var storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
  
        // Uploads is the Upload_folder_name 
        cb(null, "uploads") 
    }, 
    filename: function (req, file, cb) {
    	console.log(file); 
    	var randomnumber = Math.floor(100000 + Math.random() * 900000)
      cb(null, Date.now()+".csv") 
    } 
 }) 

    
var upload = multer({  
    storage: storage, 
}).single("imagename");        
  
router.get('/', function(req, res) {
    res.render('home', { Layout : "main"});
});

router.post("/fileupload",function (req, res, next) { 
    console.log(req.file);    
    upload(req,res,function(err) { 
  
        if(err) { 
            res.send(err) 
        } 
        else { 
        	console.log(req.file.filename);
        	console.log(req.body.size);

            // SUCCESS, image successfully uploaded 
            var filepath = "../uploads/"+req.file.filename;
            var size = parseInt(req.body.size);
            var sizeText = req.body.sizeText + "_";
            
            if(size == 0){ res.send("please select size");}
            else{
            csv.generatecsv(path.join(__dirname, filepath),size, req.file.filename, sizeText).then(function(resp)
            	{

            					var resp = {
            						csv : "newuploads/" + sizeText + req.file.filename
            					}
            		            res.send(resp)

            	})
            .catch(function(err)
            	{
            		            res.send("Fail")
            	});
 
        	} 
    	}
    }) 
})        
// Allow the function to be called like a function when required
module.exports = router;

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
var multer  = require('multer');
var upload = multer();


app.use(express.static('public'));

//this will return the file size of uploaded file
app.post('/get-file-size', upload.any(), (request, response) =>{
    console.log('post request recieved.');    
    let file = request.files ? request.files[0] : null;
    let fileSize = file ? file.size : 'no file';    
    response.end(JSON.stringify({size: fileSize}));            
});

//start server
app.listen(PORT, ()=>{
    console.log("Running server on port: " + PORT);
});
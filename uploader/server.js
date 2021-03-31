var express = require('express')
var multer  = require('multer')
var upload = multer({ dest: './uploads' })

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

app.get('/',function(req,res){  
  res.sendFile(__dirname + "/public/index.html");  
});

app.post('/photos', upload.array('photos', 12), function (req, res, next) {
  const files = req.files.photos
  res.status(201);
  res.end('Upload successful');
});

app.listen(PORT, HOST, () => {
  console.log('Server is running at 8080');
});
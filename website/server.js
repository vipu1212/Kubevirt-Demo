const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

app.use(express.static(__dirname + '/public'));

app.listen(PORT, HOST, () => {
  console.log('Server is running at 8080');
});